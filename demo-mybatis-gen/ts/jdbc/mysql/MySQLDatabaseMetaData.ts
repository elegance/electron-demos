import DatabaseMetaData from '../DatabaseMetaData';
import * as mysql from 'mysql';

class MySQLDatabaseMetaData implements DatabaseMetaData {
    conn: mysql.IConnection;

    constructor(conn: mysql.IConnection) {
        this.conn = conn;
    }

    async getTables(): Promise<Array<string>> {
        return await new Promise<Array<string>>((resolve, reject) => {
            this.conn.query(`SELECT table_name FROM information_schema.TABLES WHERE table_schema = 'test' AND table_type = 'BASE TABLE'`, (err, rows: Array<{}>, fields) => {
                resolve(rows.map(row => row['table_name']));
            });
        });
    }

    getTableColumns(tableSchema: string, tableName: string): Promise<Array<any>> {
        return new Promise<Array<any>>((resolve, reject) => {
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

export default  MySQLDatabaseMetaData;