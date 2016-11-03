"use strict";
var Types_1 = require('../Types');
var MysqlDefs = (function () {
    function MysqlDefs() {
        if (!MysqlDefs.static_initialized) {
            MysqlDefs.static_initialized = true;
            MysqlDefs._static_initializer();
        }
    }
    MysqlDefs.mysqlToJavaType = function (mysqlType) {
        var jdbcType = 0;
        switch ((mysqlType)) {
            case MysqlDefs.FIELD_TYPE_NEW_DECIMAL:
            case MysqlDefs.FIELD_TYPE_DECIMAL:
                jdbcType = Types_1.Types.DECIMAL;
                break;
            case MysqlDefs.FIELD_TYPE_TINY:
                jdbcType = Types_1.Types.TINYINT;
                break;
            case MysqlDefs.FIELD_TYPE_SHORT:
                jdbcType = Types_1.Types.SMALLINT;
                break;
            case MysqlDefs.FIELD_TYPE_LONG:
                jdbcType = Types_1.Types.INTEGER;
                break;
            case MysqlDefs.FIELD_TYPE_FLOAT:
                jdbcType = Types_1.Types.REAL;
                break;
            case MysqlDefs.FIELD_TYPE_DOUBLE:
                jdbcType = Types_1.Types.DOUBLE;
                break;
            case MysqlDefs.FIELD_TYPE_NULL:
                jdbcType = Types_1.Types.NULL;
                break;
            case MysqlDefs.FIELD_TYPE_TIMESTAMP:
                jdbcType = Types_1.Types.TIMESTAMP;
                break;
            case MysqlDefs.FIELD_TYPE_LONGLONG:
                jdbcType = Types_1.Types.BIGINT;
                break;
            case MysqlDefs.FIELD_TYPE_INT24:
                jdbcType = Types_1.Types.INTEGER;
                break;
            case MysqlDefs.FIELD_TYPE_DATE:
                jdbcType = Types_1.Types.DATE;
                break;
            case MysqlDefs.FIELD_TYPE_TIME:
                jdbcType = Types_1.Types.TIME;
                break;
            case MysqlDefs.FIELD_TYPE_DATETIME:
                jdbcType = Types_1.Types.TIMESTAMP;
                break;
            case MysqlDefs.FIELD_TYPE_YEAR:
                jdbcType = Types_1.Types.DATE;
                break;
            case MysqlDefs.FIELD_TYPE_NEWDATE:
                jdbcType = Types_1.Types.DATE;
                break;
            case MysqlDefs.FIELD_TYPE_ENUM:
                jdbcType = Types_1.Types.CHAR;
                break;
            case MysqlDefs.FIELD_TYPE_SET:
                jdbcType = Types_1.Types.CHAR;
                break;
            case MysqlDefs.FIELD_TYPE_TINY_BLOB:
                jdbcType = Types_1.Types.VARBINARY;
                break;
            case MysqlDefs.FIELD_TYPE_MEDIUM_BLOB:
                jdbcType = Types_1.Types.LONGVARBINARY;
                break;
            case MysqlDefs.FIELD_TYPE_LONG_BLOB:
                jdbcType = Types_1.Types.LONGVARBINARY;
                break;
            case MysqlDefs.FIELD_TYPE_BLOB:
                jdbcType = Types_1.Types.LONGVARBINARY;
                break;
            case MysqlDefs.FIELD_TYPE_VAR_STRING:
            case MysqlDefs.FIELD_TYPE_VARCHAR:
                jdbcType = Types_1.Types.VARCHAR;
                break;
            case MysqlDefs.FIELD_TYPE_STRING:
                jdbcType = Types_1.Types.CHAR;
                break;
            case MysqlDefs.FIELD_TYPE_GEOMETRY:
                jdbcType = Types_1.Types.BINARY;
                break;
            case MysqlDefs.FIELD_TYPE_BIT:
                jdbcType = Types_1.Types.BIT;
                break;
            default:
                jdbcType = Types_1.Types.VARCHAR;
        }
        return jdbcType;
    };
    MysqlDefs._static_initializer = function () {
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
        MysqlDefs.mysqlToJdbcTypesMap.set('TINYBLOB', Types_1.Types.BINARY);
        MysqlDefs.mysqlToJdbcTypesMap.set('BLOB', Types_1.Types.LONGVARBINARY);
        MysqlDefs.mysqlToJdbcTypesMap.set('MEDIUMBLOB', Types_1.Types.LONGVARBINARY);
        MysqlDefs.mysqlToJdbcTypesMap.set('LONGBLOB', Types_1.Types.LONGVARBINARY);
        MysqlDefs.mysqlToJdbcTypesMap.set('TINYTEXT', Types_1.Types.VARCHAR);
        MysqlDefs.mysqlToJdbcTypesMap.set('TEXT', Types_1.Types.LONGVARCHAR);
        MysqlDefs.mysqlToJdbcTypesMap.set('MEDIUMTEXT', Types_1.Types.LONGVARCHAR);
        MysqlDefs.mysqlToJdbcTypesMap.set('LONGTEXT', Types_1.Types.LONGVARCHAR);
        MysqlDefs.mysqlToJdbcTypesMap.set('ENUM', MysqlDefs.mysqlToJavaType(MysqlDefs.FIELD_TYPE_ENUM));
        MysqlDefs.mysqlToJdbcTypesMap.set('SET', MysqlDefs.mysqlToJavaType(MysqlDefs.FIELD_TYPE_SET));
        MysqlDefs.mysqlToJdbcTypesMap.set('GEOMETRY', MysqlDefs.mysqlToJavaType(MysqlDefs.FIELD_TYPE_GEOMETRY));
        MysqlDefs.mysqlToJdbcTypesMap.set('JSON', MysqlDefs.mysqlToJavaType(MysqlDefs.FIELD_TYPE_JSON));
        MysqlDefs.mysqlToJdbcTypesMap.set('BINARY', Types_1.Types.BINARY);
        MysqlDefs.mysqlToJdbcTypesMap.set('VARBINARY', Types_1.Types.VARBINARY);
    };
    MysqlDefs.appendJdbcTypeMappingQuery = function (buf, mysqlTypeColumnName) {
        var _this = this;
        buf.append('CASE ');
        this.mysqlToJdbcTypesMap.forEach(function (jdbcTypeIdx, mysqlTypeName) {
            buf.append(" WHEN ");
            buf.append(mysqlTypeColumnName);
            buf.append("='");
            buf.append(mysqlTypeName);
            buf.append("' THEN ");
            buf.append(jdbcTypeIdx);
            if (_this.otherNumTypeNames.indexOf(mysqlTypeName.toUpperCase()) >= 0) {
                buf.append(" WHEN ");
                buf.append(mysqlTypeColumnName);
                buf.append("='");
                buf.append(mysqlTypeName);
                buf.append(" unsigned' THEN ");
                buf.append(jdbcTypeIdx);
            }
            buf.append(" ELSE ");
            buf.append(Types_1.Types.OTHER);
            buf.append(" END ");
        });
    };
    MysqlDefs.COM_BINLOG_DUMP = 18;
    MysqlDefs.COM_CHANGE_USER = 17;
    MysqlDefs.COM_CLOSE_STATEMENT = 25;
    MysqlDefs.COM_CONNECT_OUT = 20;
    MysqlDefs.COM_END = 29;
    MysqlDefs.COM_EXECUTE = 23;
    MysqlDefs.COM_FETCH = 28;
    MysqlDefs.COM_LONG_DATA = 24;
    MysqlDefs.COM_PREPARE = 22;
    MysqlDefs.COM_REGISTER_SLAVE = 21;
    MysqlDefs.COM_RESET_STMT = 26;
    MysqlDefs.COM_SET_OPTION = 27;
    MysqlDefs.COM_TABLE_DUMP = 19;
    MysqlDefs.CONNECT = 11;
    MysqlDefs.CREATE_DB = 5;
    MysqlDefs.DEBUG = 13;
    MysqlDefs.DELAYED_INSERT = 16;
    MysqlDefs.DROP_DB = 6;
    MysqlDefs.FIELD_LIST = 4;
    MysqlDefs.FIELD_TYPE_BIT = 16;
    MysqlDefs.FIELD_TYPE_BLOB = 252;
    MysqlDefs.FIELD_TYPE_DATE = 10;
    MysqlDefs.FIELD_TYPE_DATETIME = 12;
    MysqlDefs.FIELD_TYPE_DECIMAL = 0;
    MysqlDefs.FIELD_TYPE_DOUBLE = 5;
    MysqlDefs.FIELD_TYPE_ENUM = 247;
    MysqlDefs.FIELD_TYPE_FLOAT = 4;
    MysqlDefs.FIELD_TYPE_GEOMETRY = 255;
    MysqlDefs.FIELD_TYPE_INT24 = 9;
    MysqlDefs.FIELD_TYPE_LONG = 3;
    MysqlDefs.FIELD_TYPE_LONG_BLOB = 251;
    MysqlDefs.FIELD_TYPE_LONGLONG = 8;
    MysqlDefs.FIELD_TYPE_MEDIUM_BLOB = 250;
    MysqlDefs.FIELD_TYPE_NEW_DECIMAL = 246;
    MysqlDefs.FIELD_TYPE_NEWDATE = 14;
    MysqlDefs.FIELD_TYPE_NULL = 6;
    MysqlDefs.FIELD_TYPE_SET = 248;
    MysqlDefs.FIELD_TYPE_SHORT = 2;
    MysqlDefs.FIELD_TYPE_STRING = 254;
    MysqlDefs.FIELD_TYPE_TIME = 11;
    MysqlDefs.FIELD_TYPE_TIMESTAMP = 7;
    MysqlDefs.FIELD_TYPE_TINY = 1;
    MysqlDefs.FIELD_TYPE_TINY_BLOB = 249;
    MysqlDefs.FIELD_TYPE_VAR_STRING = 253;
    MysqlDefs.FIELD_TYPE_VARCHAR = 15;
    MysqlDefs.FIELD_TYPE_YEAR = 13;
    MysqlDefs.FIELD_TYPE_JSON = 245;
    MysqlDefs.INIT_DB = 2;
    MysqlDefs.LENGTH_BLOB = 65535;
    MysqlDefs.LENGTH_LONGBLOB = 4294967295;
    MysqlDefs.LENGTH_MEDIUMBLOB = 16777215;
    MysqlDefs.LENGTH_TINYBLOB = 255;
    MysqlDefs.MAX_ROWS = 50000000;
    /**
     * Used to indicate that the server sent no field-level character set information, so the driver should use the connection-level character encoding instead.
     */
    MysqlDefs.NO_CHARSET_INFO = -1;
    MysqlDefs.OPEN_CURSOR_FLAG = 1;
    MysqlDefs.PING = 14;
    MysqlDefs.PROCESS_INFO = 10;
    MysqlDefs.PROCESS_KILL = 12;
    MysqlDefs.QUERY = 3;
    MysqlDefs.QUIT = 1;
    MysqlDefs.RELOAD = 7;
    MysqlDefs.SHUTDOWN = 8;
    MysqlDefs.SLEEP = 0;
    MysqlDefs.STATISTICS = 9;
    MysqlDefs.TIME = 15;
    MysqlDefs.mysqlToJdbcTypesMap = new Map();
    MysqlDefs.static_initialized = false;
    MysqlDefs.otherNumTypeNames = ['DOUBLE', 'FLOAT', 'DECIMAL', 'NUMERIC'];
    return MysqlDefs;
}());
exports.MysqlDefs = MysqlDefs;
