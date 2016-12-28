"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const path = require("path");
const MySQLDatabaseMetaData_1 = require("./jdbc/mysql/MySQLDatabaseMetaData");
const IDBConnectInfo_1 = require("./bean/IDBConnectInfo");
const MainTabs_1 = require("./MainTabs");
let mainTabs = new MainTabs_1.MainTabs('#mainTabs');
IDBConnectInfo_1.ConnectUtil
    .addConnectInfo('ds-local', {
    host: '127.0.0.1',
    user: 'root',
    pwd: 'root',
    port: 3306,
    db: 'test'
})
    .addConnectInfo('ds-test-tzb', {
    host: '120.55.88.227',
    user: 'tzb_user',
    pwd: 'tzb_pwd',
    port: 33066,
    db: 'tzbms'
});
// 遍历连接信息Map得到 tree 需要的数据结构
let dbConnArr = [];
for (let [key, value] of IDBConnectInfo_1.ConnectUtil.getConnectionInfoMap()) {
    dbConnArr.push({
        text: key,
        state: 'closed',
        iconCls: 'ext-icon-database',
        connInfo: value
    });
}
let menuCtxEventMap = new Map();
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
        let childrens = dataSourceTree.tree('getChildren', node.target);
        if (childrens.length > 0) {
            dataSourceTree.tree('toggle', node.target);
        }
        else if (!isLeaf) {
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
function loadTableNodes(node) {
    return __awaiter(this, void 0, void 0, function* () {
        let conn = yield IDBConnectInfo_1.ConnectUtil.getConnection(node.text);
        let meta = new MySQLDatabaseMetaData_1.default(conn);
        let tables = yield meta.getTables(node.connInfo.db);
        let data = tables.map(tableName => {
            return { text: tableName, iconCls: 'ext-icon-table' };
        });
        dataSourceTree.tree('append', {
            parent: node.target,
            data: data
        });
        conn.release();
        return node;
    });
}
//# sourceMappingURL=index-easy-ui.js.map