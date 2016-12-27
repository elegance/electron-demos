import { Types } from '../Types';
import { StringBuffer } from '../../common/StringBuffer';

export class MysqlDefs {
    constructor() {
        if (!MysqlDefs.static_initialized) {
            MysqlDefs.static_initialized = true;
            MysqlDefs._static_initializer();
        }
    }

    static COM_BINLOG_DUMP: number = 18;

    static COM_CHANGE_USER: number = 17;

    static COM_CLOSE_STATEMENT: number = 25;

    static COM_CONNECT_OUT: number = 20;

    static COM_END: number = 29;

    static COM_EXECUTE: number = 23;

    static COM_FETCH: number = 28;

    static COM_LONG_DATA: number = 24;

    static COM_PREPARE: number = 22;

    static COM_REGISTER_SLAVE: number = 21;

    static COM_RESET_STMT: number = 26;

    static COM_SET_OPTION: number = 27;

    static COM_TABLE_DUMP: number = 19;

    static CONNECT: number = 11;

    static CREATE_DB: number = 5;

    static DEBUG: number = 13;

    static DELAYED_INSERT: number = 16;

    static DROP_DB: number = 6;

    static FIELD_LIST: number = 4;

    static FIELD_TYPE_BIT: number = 16;

    public static FIELD_TYPE_BLOB: number = 252;

    static FIELD_TYPE_DATE: number = 10;

    static FIELD_TYPE_DATETIME: number = 12;

    static FIELD_TYPE_DECIMAL: number = 0;

    static FIELD_TYPE_DOUBLE: number = 5;

    static FIELD_TYPE_ENUM: number = 247;

    static FIELD_TYPE_FLOAT: number = 4;

    static FIELD_TYPE_GEOMETRY: number = 255;

    static FIELD_TYPE_INT24: number = 9;

    static FIELD_TYPE_LONG: number = 3;

    static FIELD_TYPE_LONG_BLOB: number = 251;

    static FIELD_TYPE_LONGLONG: number = 8;

    static FIELD_TYPE_MEDIUM_BLOB: number = 250;

    static FIELD_TYPE_NEW_DECIMAL: number = 246;

    static FIELD_TYPE_NEWDATE: number = 14;

    static FIELD_TYPE_NULL: number = 6;

    static FIELD_TYPE_SET: number = 248;

    static FIELD_TYPE_SHORT: number = 2;

    static FIELD_TYPE_STRING: number = 254;

    static FIELD_TYPE_TIME: number = 11;

    static FIELD_TYPE_TIMESTAMP: number = 7;

    static FIELD_TYPE_TINY: number = 1;

    static FIELD_TYPE_TINY_BLOB: number = 249;

    static FIELD_TYPE_VAR_STRING: number = 253;

    static FIELD_TYPE_VARCHAR: number = 15;

    static FIELD_TYPE_YEAR: number = 13;

    static FIELD_TYPE_JSON: number = 245;

    static INIT_DB: number = 2;

    static LENGTH_BLOB: number = 65535;

    static LENGTH_LONGBLOB: number = 4294967295;

    static LENGTH_MEDIUMBLOB: number = 16777215;

    static LENGTH_TINYBLOB: number = 255;

    static MAX_ROWS: number = 50000000;

    /**
     * Used to indicate that the server sent no field-level character set information, so the driver should use the connection-level character encoding instead.
     */
    public static NO_CHARSET_INFO: number = -1;

    static OPEN_CURSOR_FLAG: number = 1;

    static PING: number = 14;

    static PROCESS_INFO: number = 10;

    static PROCESS_KILL: number = 12;

    static QUERY: number = 3;

    static QUIT: number = 1;

    static RELOAD: number = 7;

    static SHUTDOWN: number = 8;

    static SLEEP: number = 0;

    static STATISTICS: number = 9;

    static TIME: number = 15;

    static mysqlToJavaType(mysqlType: any): number {
        if (typeof mysqlType === 'number') {
            return this.mysqlToJavaType$number(mysqlType);
        } else if (typeof mysqlType === 'string') {
            return this.mysqlToJavaType$string(mysqlType);
        }
    }

    static mysqlToJavaType$number(mysqlType: number): number {
        var jdbcType: number = 0;
        switch ((mysqlType)) {
            case MysqlDefs.FIELD_TYPE_NEW_DECIMAL:
            case MysqlDefs.FIELD_TYPE_DECIMAL:
                jdbcType = Types.DECIMAL;
                break;

            case MysqlDefs.FIELD_TYPE_TINY:
                jdbcType = Types.TINYINT;
                break;

            case MysqlDefs.FIELD_TYPE_SHORT:
                jdbcType = Types.SMALLINT;
                break;

            case MysqlDefs.FIELD_TYPE_LONG:
                jdbcType = Types.INTEGER;
                break;

            case MysqlDefs.FIELD_TYPE_FLOAT:
                jdbcType = Types.REAL;
                break;

            case MysqlDefs.FIELD_TYPE_DOUBLE:
                jdbcType = Types.DOUBLE;
                break;

            case MysqlDefs.FIELD_TYPE_NULL:
                jdbcType = Types.NULL;
                break;

            case MysqlDefs.FIELD_TYPE_TIMESTAMP:
                jdbcType = Types.TIMESTAMP;
                break;

            case MysqlDefs.FIELD_TYPE_LONGLONG:
                jdbcType = Types.BIGINT;
                break;

            case MysqlDefs.FIELD_TYPE_INT24:
                jdbcType = Types.INTEGER;
                break;

            case MysqlDefs.FIELD_TYPE_DATE:
                jdbcType = Types.DATE;
                break;

            case MysqlDefs.FIELD_TYPE_TIME:
                jdbcType = Types.TIME;
                break;

            case MysqlDefs.FIELD_TYPE_DATETIME:
                jdbcType = Types.TIMESTAMP;
                break;

            case MysqlDefs.FIELD_TYPE_YEAR:
                jdbcType = Types.DATE;
                break;

            case MysqlDefs.FIELD_TYPE_NEWDATE:
                jdbcType = Types.DATE;
                break;

            case MysqlDefs.FIELD_TYPE_ENUM:
                jdbcType = Types.CHAR;
                break;

            case MysqlDefs.FIELD_TYPE_SET:
                jdbcType = Types.CHAR;
                break;

            case MysqlDefs.FIELD_TYPE_TINY_BLOB:
                jdbcType = Types.VARBINARY;
                break;

            case MysqlDefs.FIELD_TYPE_MEDIUM_BLOB:
                jdbcType = Types.LONGVARBINARY;
                break;

            case MysqlDefs.FIELD_TYPE_LONG_BLOB:
                jdbcType = Types.LONGVARBINARY;
                break;

            case MysqlDefs.FIELD_TYPE_BLOB:
                jdbcType = Types.LONGVARBINARY;
                break;

            case MysqlDefs.FIELD_TYPE_VAR_STRING:
            case MysqlDefs.FIELD_TYPE_VARCHAR:
                jdbcType = Types.VARCHAR;
                break;

            case MysqlDefs.FIELD_TYPE_STRING:
                jdbcType = Types.CHAR;
                break;
            case MysqlDefs.FIELD_TYPE_GEOMETRY:
                jdbcType = Types.BINARY;
                break;
            case MysqlDefs.FIELD_TYPE_BIT:
                jdbcType = Types.BIT;
                break;
            default:
                jdbcType = Types.VARCHAR;
        }
        return jdbcType;
    }

    static mysqlToJavaType$string(mysqlType: string) {
        let uppMysqlType: string = mysqlType.toUpperCase();

        if (uppMysqlType === 'BIT') {
            return this.mysqlToJavaType(this.FIELD_TYPE_BIT);
        } else if (uppMysqlType === 'TINYINT') {
            return this.mysqlToJavaType(this.FIELD_TYPE_TINY);
        } else if (uppMysqlType === 'SMALLINT') {
            return this.mysqlToJavaType(this.FIELD_TYPE_SHORT);
        } else if (uppMysqlType === 'MEDIUMINT') {
            return this.mysqlToJavaType(this.FIELD_TYPE_INT24);
        } else if (uppMysqlType === 'INT' || uppMysqlType === 'INTEGER') {
            return this.mysqlToJavaType(this.FIELD_TYPE_LONG);
        } else if (uppMysqlType === 'BIGINT') {
            return this.mysqlToJavaType(this.FIELD_TYPE_LONGLONG);
        } else if (uppMysqlType === ("INT24")) {
            return this.mysqlToJavaType(this.FIELD_TYPE_INT24);
        } else if (uppMysqlType === 'REAL') {
            return this.mysqlToJavaType(this.FIELD_TYPE_DOUBLE);
        } else if (uppMysqlType === 'FLOAT') {
            return this.mysqlToJavaType(this.FIELD_TYPE_FLOAT);
        } else if (uppMysqlType === 'DECIMAL') {
            return this.mysqlToJavaType(this.FIELD_TYPE_DECIMAL);
        } else if (uppMysqlType === 'NUMERIC') {
            return this.mysqlToJavaType(this.FIELD_TYPE_DECIMAL);
        } else if (uppMysqlType === 'DOUBLE') {
            return this.mysqlToJavaType(this.FIELD_TYPE_DOUBLE);
        } else if (uppMysqlType === 'CHAR') {
            return this.mysqlToJavaType(this.FIELD_TYPE_STRING);
        } else if (uppMysqlType === 'VARCHAR') {
            return this.mysqlToJavaType(this.FIELD_TYPE_VAR_STRING);
        } else if (uppMysqlType === 'DATE') {
            return this.mysqlToJavaType(this.FIELD_TYPE_DATE);
        } else if (uppMysqlType === 'TIME') {
            return this.mysqlToJavaType(this.FIELD_TYPE_TIME);
        } else if (uppMysqlType === 'YEAR') {
            return this.mysqlToJavaType(this.FIELD_TYPE_YEAR);
        } else if (uppMysqlType === 'TIMESTAMP') {
            return this.mysqlToJavaType(this.FIELD_TYPE_TIMESTAMP);
        } else if (uppMysqlType === 'DATETIME') {
            return this.mysqlToJavaType(this.FIELD_TYPE_DATETIME);
        } else if (uppMysqlType === 'TINYBLOB') {
            return Types.BINARY;
        } else if (uppMysqlType === 'BLOB') {
            return Types.LONGVARBINARY;
        } else if (uppMysqlType === 'MEDIUMBLOB') {
            return Types.LONGVARBINARY;
        } else if (uppMysqlType === 'LONGBLOB') {
            return Types.LONGVARBINARY;
        } else if (uppMysqlType === 'TINYTEXT') {
            return Types.VARCHAR;
        } else if (uppMysqlType === 'TEXT') {
            return Types.LONGVARCHAR;
        } else if (uppMysqlType === 'MEDIUMTEXT') {
            return Types.LONGVARCHAR;
        } else if (uppMysqlType === 'LONGTEXT') {
            return Types.LONGVARCHAR;
        } else if (uppMysqlType === 'ENUM') {
            return this.mysqlToJavaType(this.FIELD_TYPE_ENUM);
        } else if (uppMysqlType === 'SET') {
            return this.mysqlToJavaType(this.FIELD_TYPE_SET);
        } else if (uppMysqlType === 'GEOMETRY') {
            return this.mysqlToJavaType(this.FIELD_TYPE_GEOMETRY);
        } else if (uppMysqlType === 'BINARY') {
            return Types.BINARY; // no concrete type on the wire
        } else if (uppMysqlType === 'VARBINARY') {
            return Types.VARBINARY; // no concrete type on the wire
        } else if (uppMysqlType === 'BIT') {
            return this.mysqlToJavaType(this.FIELD_TYPE_BIT);
        } else if (uppMysqlType === 'JSON') {
            return this.mysqlToJavaType(this.FIELD_TYPE_JSON);
        }

        return Types.OTHER;
    }

    static typeToName(mysqlType: number) {
        switch (mysqlType) {
            case MysqlDefs.FIELD_TYPE_DECIMAL:
                return "FIELD_TYPE_DECIMAL";

            case MysqlDefs.FIELD_TYPE_TINY:
                return "FIELD_TYPE_TINY";

            case MysqlDefs.FIELD_TYPE_SHORT:
                return "FIELD_TYPE_SHORT";

            case MysqlDefs.FIELD_TYPE_LONG:
                return "FIELD_TYPE_LONG";

            case MysqlDefs.FIELD_TYPE_FLOAT:
                return "FIELD_TYPE_FLOAT";

            case MysqlDefs.FIELD_TYPE_DOUBLE:
                return "FIELD_TYPE_DOUBLE";

            case MysqlDefs.FIELD_TYPE_NULL:
                return "FIELD_TYPE_NULL";

            case MysqlDefs.FIELD_TYPE_TIMESTAMP:
                return "FIELD_TYPE_TIMESTAMP";

            case MysqlDefs.FIELD_TYPE_LONGLONG:
                return "FIELD_TYPE_LONGLONG";

            case MysqlDefs.FIELD_TYPE_INT24:
                return "FIELD_TYPE_INT24";

            case MysqlDefs.FIELD_TYPE_DATE:
                return "FIELD_TYPE_DATE";

            case MysqlDefs.FIELD_TYPE_TIME:
                return "FIELD_TYPE_TIME";

            case MysqlDefs.FIELD_TYPE_DATETIME:
                return "FIELD_TYPE_DATETIME";

            case MysqlDefs.FIELD_TYPE_YEAR:
                return "FIELD_TYPE_YEAR";

            case MysqlDefs.FIELD_TYPE_NEWDATE:
                return "FIELD_TYPE_NEWDATE";

            case MysqlDefs.FIELD_TYPE_ENUM:
                return "FIELD_TYPE_ENUM";

            case MysqlDefs.FIELD_TYPE_SET:
                return "FIELD_TYPE_SET";

            case MysqlDefs.FIELD_TYPE_TINY_BLOB:
                return "FIELD_TYPE_TINY_BLOB";

            case MysqlDefs.FIELD_TYPE_MEDIUM_BLOB:
                return "FIELD_TYPE_MEDIUM_BLOB";

            case MysqlDefs.FIELD_TYPE_LONG_BLOB:
                return "FIELD_TYPE_LONG_BLOB";

            case MysqlDefs.FIELD_TYPE_BLOB:
                return "FIELD_TYPE_BLOB";

            case MysqlDefs.FIELD_TYPE_VAR_STRING:
                return "FIELD_TYPE_VAR_STRING";

            case MysqlDefs.FIELD_TYPE_STRING:
                return "FIELD_TYPE_STRING";

            case MysqlDefs.FIELD_TYPE_VARCHAR:
                return "FIELD_TYPE_VARCHAR";

            case MysqlDefs.FIELD_TYPE_GEOMETRY:
                return "FIELD_TYPE_GEOMETRY";

            case MysqlDefs.FIELD_TYPE_JSON:
                return "FIELD_TYPE_JSON";

            default:
                return " Unknown MySQL Type # " + mysqlType;
        }
    }

    static mysqlToJdbcTypesMap = new Map<string, number>();

    static static_initialized: boolean = false;

    static _static_initializer() {
        MysqlDefs.mysqlToJdbcTypesMap.set('BIT', MysqlDefs.mysqlToJavaType(MysqlDefs.FIELD_TYPE_BIT));
        MysqlDefs.mysqlToJdbcTypesMap.set('TINYINT', MysqlDefs.mysqlToJavaType(MysqlDefs.FIELD_TYPE_TINY));
        MysqlDefs.mysqlToJdbcTypesMap.set('SMALLINT', MysqlDefs.mysqlToJavaType(MysqlDefs.FIELD_TYPE_SHORT));
        MysqlDefs.mysqlToJdbcTypesMap.set('MEDIUMINT', MysqlDefs.mysqlToJavaType(MysqlDefs.FIELD_TYPE_INT24));
        MysqlDefs.mysqlToJdbcTypesMap.set('INT', MysqlDefs.mysqlToJavaType(MysqlDefs.FIELD_TYPE_LONG));
        MysqlDefs.mysqlToJdbcTypesMap.set('INTEGER', MysqlDefs.mysqlToJavaType(MysqlDefs.FIELD_TYPE_LONG));
        MysqlDefs.mysqlToJdbcTypesMap.set('BIGINT', MysqlDefs.mysqlToJavaType(MysqlDefs.FIELD_TYPE_LONGLONG));
        MysqlDefs.mysqlToJdbcTypesMap.set('INT24', MysqlDefs.mysqlToJavaType(MysqlDefs.FIELD_TYPE_INT24));
        MysqlDefs.mysqlToJdbcTypesMap.set('REAL', MysqlDefs.mysqlToJavaType(MysqlDefs.FIELD_TYPE_DOUBLE));
        MysqlDefs.mysqlToJdbcTypesMap.set('FLOAT', MysqlDefs.mysqlToJavaType(MysqlDefs.FIELD_TYPE_FLOAT));
        MysqlDefs.mysqlToJdbcTypesMap.set('DECIMAL', MysqlDefs.mysqlToJavaType(MysqlDefs.FIELD_TYPE_DECIMAL));
        MysqlDefs.mysqlToJdbcTypesMap.set('NUMERIC', MysqlDefs.mysqlToJavaType(MysqlDefs.FIELD_TYPE_DECIMAL));
        MysqlDefs.mysqlToJdbcTypesMap.set('DOUBLE', MysqlDefs.mysqlToJavaType(MysqlDefs.FIELD_TYPE_DOUBLE));
        MysqlDefs.mysqlToJdbcTypesMap.set('CHAR', MysqlDefs.mysqlToJavaType(MysqlDefs.FIELD_TYPE_STRING));
        MysqlDefs.mysqlToJdbcTypesMap.set('VARCHAR', MysqlDefs.mysqlToJavaType(MysqlDefs.FIELD_TYPE_VAR_STRING));
        MysqlDefs.mysqlToJdbcTypesMap.set('DATE', MysqlDefs.mysqlToJavaType(MysqlDefs.FIELD_TYPE_DATE));
        MysqlDefs.mysqlToJdbcTypesMap.set('TIME', MysqlDefs.mysqlToJavaType(MysqlDefs.FIELD_TYPE_TIME));
        MysqlDefs.mysqlToJdbcTypesMap.set('YEAR', MysqlDefs.mysqlToJavaType(MysqlDefs.FIELD_TYPE_YEAR));
        MysqlDefs.mysqlToJdbcTypesMap.set('TIMESTAMP', MysqlDefs.mysqlToJavaType(MysqlDefs.FIELD_TYPE_TIMESTAMP));
        MysqlDefs.mysqlToJdbcTypesMap.set('DATETIME', MysqlDefs.mysqlToJavaType(MysqlDefs.FIELD_TYPE_DATETIME));
        MysqlDefs.mysqlToJdbcTypesMap.set('TINYBLOB', Types.BINARY);
        MysqlDefs.mysqlToJdbcTypesMap.set('BLOB', Types.LONGVARBINARY);
        MysqlDefs.mysqlToJdbcTypesMap.set('MEDIUMBLOB', Types.LONGVARBINARY);
        MysqlDefs.mysqlToJdbcTypesMap.set('LONGBLOB', Types.LONGVARBINARY);
        MysqlDefs.mysqlToJdbcTypesMap.set('TINYTEXT', Types.VARCHAR);
        MysqlDefs.mysqlToJdbcTypesMap.set('TEXT', Types.LONGVARCHAR);
        MysqlDefs.mysqlToJdbcTypesMap.set('MEDIUMTEXT', Types.LONGVARCHAR);
        MysqlDefs.mysqlToJdbcTypesMap.set('LONGTEXT', Types.LONGVARCHAR);
        MysqlDefs.mysqlToJdbcTypesMap.set('ENUM', MysqlDefs.mysqlToJavaType(MysqlDefs.FIELD_TYPE_ENUM));
        MysqlDefs.mysqlToJdbcTypesMap.set('SET', MysqlDefs.mysqlToJavaType(MysqlDefs.FIELD_TYPE_SET));
        MysqlDefs.mysqlToJdbcTypesMap.set('GEOMETRY', MysqlDefs.mysqlToJavaType(MysqlDefs.FIELD_TYPE_GEOMETRY));
        MysqlDefs.mysqlToJdbcTypesMap.set('JSON', MysqlDefs.mysqlToJavaType(MysqlDefs.FIELD_TYPE_JSON));

        MysqlDefs.mysqlToJdbcTypesMap.set('BINARY', Types.BINARY);
        MysqlDefs.mysqlToJdbcTypesMap.set('VARBINARY', Types.VARBINARY);
    }


    
    static otherNumTypeNames: string[] = ['DOUBLE', 'FLOAT', 'DECIMAL', 'NUMERIC'];

    static appendJdbcTypeMappingQuery(buf: StringBuffer, mysqlTypeColumnName: string) {
        buf.append('CASE ');

        this.mysqlToJdbcTypesMap.forEach((jdbcTypeIdx, mysqlTypeName) => {
            buf.append(" WHEN ");
            buf.append(mysqlTypeColumnName);
            buf.append("='");
            buf.append(mysqlTypeName);
            buf.append("' THEN ");
            buf.append(jdbcTypeIdx);

            if (this.otherNumTypeNames.indexOf(mysqlTypeName.toUpperCase()) >= 0) {
                buf.append(" WHEN ");
                buf.append(mysqlTypeColumnName);
                buf.append("='");
                buf.append(mysqlTypeName);
                buf.append(" unsigned' THEN ");
                buf.append(jdbcTypeIdx);
            }

            buf.append(" ELSE ");
            buf.append(Types.OTHER);
            buf.append(" END ");
        });
    }

}