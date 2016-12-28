import * as mysql from 'mysql';

export interface IDBConnectInfo {
    host: string;
    user: string;
    pwd: string;
    port: number;
    db: string;

}

export class ConnectUtil {
    private static INITIAL_SIZE = 10;
    private static MAX_ACTIVE = 50;

    // 连接信息map
    private static connInfoMap: Map<string, IDBConnectInfo> = new Map();

    // 连接池map
    private static dataSourceMap: Map<string, mysql.IPool> = new Map();

    private constructor() {
    }

    static addConnectInfo(name: string, connInfo: IDBConnectInfo) {
        if (this.connInfoMap.get(name)) {
            throw `名称为[${name}]的连接信息已经存在，请注意是否重复添加或者修改名称再添加！`;
        }
        this.connInfoMap.set(name, connInfo);
        return ConnectUtil;
    }

    static getConnectionInfoMap() {
        return this.connInfoMap;
    }

    static toConnectString(conn: IDBConnectInfo): string {
        return `mysql://${conn.user}:${conn.pwd}@${conn.host}:${conn.port}/${conn.db}`;
    }

    /**
     * 从数据源中获取连接，注意使用完毕连接使用`connection.release()`释放连返回至连接池.
     * @param dsName: 数据源名称
     */
    static getConnection(dsName: string): Promise<mysql.IConnection> {
        if (!this.dataSourceMap.get(dsName)) {
            let connInfo = this.connInfoMap.get(dsName);
            if (!connInfo) {
                throw `未能获得[${dsName}]的连接信息，请检查是否已经设置！`;
            }
            this.dataSourceMap.set(dsName, mysql.createPool({
                host: connInfo.host,
                port: connInfo.port,
                user: connInfo.user,
                password: connInfo.pwd,
                database: connInfo.db,
                connectionLimit: this.INITIAL_SIZE,
                queueLimit: this.MAX_ACTIVE
            }));
        }
        return new Promise<mysql.IConnection>((resolve, reject) => {
            this.dataSourceMap.get(dsName).getConnection((err, conn) => {
                resolve(conn);
            })
        });
    }
}