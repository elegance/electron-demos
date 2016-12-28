"use strict";
class MySQLDatabaseMetaData {
    constructor(conn) {
        this.conn = conn;
    }
    /**
     * 列出Table
     */
    getTables(tableSchema) {
        return new Promise((resolve, reject) => {
            let sql = `SELECT table_name FROM information_schema.TABLES WHERE table_schema = '${tableSchema}' AND table_type = 'BASE TABLE'`;
            this.conn.query(sql, (err, rows, fields) => {
                resolve(rows.map(row => row['table_name']));
            });
        });
    }
    /**
     * 列出Table列信息
     */
    getTableColumns(tableSchema, tableName) {
        return new Promise((resolve, reject) => {
            let sql = `
                SELECT table_name, 
                    column_name, 
                    ordinal_position, 
                    is_nullable,
                    data_type, 
                    character_maximum_length,
                    numeric_precision,
                    numeric_scale,
                    column_key,
                    extra
                    FROM information_schema.COLUMNS 
                WHERE table_schema = '${tableSchema}' AND table_name = '${tableName}' ORDER BY ordinal_position`;
            this.conn.query(sql, (err, rows, filed) => {
                resolve(rows);
            });
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MySQLDatabaseMetaData;
//# sourceMappingURL=MySQLDatabaseMetaData.js.map