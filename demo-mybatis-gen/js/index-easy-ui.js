"use strict";
const mysql = require("mysql");
const conn = mysql.createConnection('mysql://root:root@127.0.0.1:3306/test?charset=UTF8');
const MySQLDatabaseMetaData_1 = require("./jdbc/mysql/MySQLDatabaseMetaData");
let mysqlDBMetaData = new MySQLDatabaseMetaData_1.default(conn);
// conn.query(`
// SELECT table_name, 
// 	column_name, 
// 	ordinal_position, 
// 	is_nullable,
// 	data_type, 
// 	character_maximum_length,
// 	numeric_precision,
// 	numeric_scale,
// 	column_key,
// 	extra
// 	FROM information_schema.COLUMNS WHERE table_schema = 'test' AND table_name IN ('author', 'comment', 'post') ORDER BY table_name, ordinal_position;
// `, (err, rows, fileds) => {
//         if (err) throw err;
//         rows.forEach((row) => {
//             console.log(row.column_name);
//         });
//     });
// 两级数据源
// 第一级：取有那些数据源
let dsArr = [
    {
        text: 'ds-local',
        state: 'closed',
        host: '127.0.0.1',
        user: 'root',
        pwd: 'root',
        port: '3306',
        db: 'test'
    }
];
// 第二级：点击数据源 加载 数据源下的 数据表
let dataSourceTree = $('#dataSourceTree').tree({
    data: dsArr,
    onClick: (node) => {
        let isLeaf = dataSourceTree.tree('isLeaf', node.target);
        let childrens = dataSourceTree.tree('getChildren', node.target);
        if (!isLeaf && childrens.length <= 0) {
            // 通过node 获取连接信息
            mysqlDBMetaData.getTables().then(tables => {
                let data = tables.map(tableName => {
                    return { text: tableName };
                });
                dataSourceTree.tree('append', {
                    parent: node.target,
                    data: data
                });
                dataSourceTree.tree('expand', node.target);
            });
        }
    }
});
//# sourceMappingURL=index-easy-ui.js.map