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
}

export default  MySQLDatabaseMetaData;