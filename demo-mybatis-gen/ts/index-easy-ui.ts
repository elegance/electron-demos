import * as mysql from 'mysql';
import * as path from 'path'

import MySQLDatabaseMetaData from './jdbc/mysql/MySQLDatabaseMetaData';
import { IDBConnectInfo, ConnectUtil } from './bean/IDBConnectInfo';
import { MainTabs } from './MainTabs';

let mainTabs = new MainTabs('#mainTabs');

ConnectUtil
    .addConnectInfo('ds-local', {
        host: '127.0.0.1',
        user: 'root',
        pwd: 'root',
        port: 3306,
        db: 'test'
    })
    .addConnectInfo('ds-test-tzb', {
        host: '127.0.0.1',
        user: 'root',
        pwd: 'root',
        port: 3306,
        db: 'tzbms'
    });

// 遍历连接信息Map得到 tree 需要的数据结构
let dbConnArr = [];
for (let [key, value] of ConnectUtil.getConnectionInfoMap()) {
    dbConnArr.push({
        text: key,
        state: 'closed',
        iconCls: 'ext-icon-database',
        connInfo: value
    })
}

let menuCtxEventMap: Map<string, Function> = new Map();
menuCtxEventMap.set('genTableData', (node) => {
    mainTabs.addTab({
        title: '生成表数据',
        src: path.join('file://', __dirname, '../html/genTableData.html')
    });
});


let menuCtx = $('#div_node_ctx').menu({
    onClick: (item) => {
        menuCtxEventMap.get(item.id)(menuCtx.data('node'));
    }
});


// 第二级：点击数据源 加载 数据源下的 数据表
let dataSourceTree = $('#dataSourceTree').tree({
    data: dbConnArr,
    onClick: (node) => {
        let isLeaf = dataSourceTree.tree('isLeaf', node.target);
        let childrens: Array<any> = dataSourceTree.tree('getChildren', node.target);

        if (childrens.length > 0) {
            dataSourceTree.tree('toggle', node.target);
        } else if (!isLeaf) {
            loadTableNodes(node).then((node) => {
                dataSourceTree.tree('toggle', node.target);
            });
        }
    },
    onContextMenu: (e, node) => {
        e.preventDefault();
        dataSourceTree.tree('select', node.target);
        menuCtx.menu('show', {
            left: e.pageX,
            top: e.pageY
        }).data('node', node);
    }
});

/**
 * 加载Table
 */
async function loadTableNodes(node) {
    let conn = await ConnectUtil.getConnection(node.text);
    let meta = new MySQLDatabaseMetaData(conn);
    let tables = await meta.getTables(node.connInfo.db);
    let data = tables.map(tableName => {
        return { text: tableName, iconCls: 'ext-icon-table' };
    });
    dataSourceTree.tree('append', {
        parent: node.target,
        data: data
    });
    conn.release();
    return node;
}