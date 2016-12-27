"use strict";
class Types {
    constructor() {
    }
}
/**
 * <P>The constant in the Java programming language, sometimes referred
 * to as a type code, that identifies the generic SQL type
 * <code>BIT</code>.
 */
Types.BIT = -7;
/**
 * <P>The constant in the Java programming language, sometimes referred
 * to as a type code, that identifies the generic SQL type
 * <code>TINYINT</code>.
 */
Types.TINYINT = -6;
/**
 * <P>The constant in the Java programming language, sometimes referred
 * to as a type code, that identifies the generic SQL type
 * <code>SMALLINT</code>.
 */
Types.SMALLINT = 5;
/**
 * <P>The constant in the Java programming language, sometimes referred
 * to as a type code, that identifies the generic SQL type
 * <code>INTEGER</code>.
 */
Types.INTEGER = 4;
/**
 * <P>The constant in the Java programming language, sometimes referred
 * to as a type code, that identifies the generic SQL type
 * <code>BIGINT</code>.
 */
Types.BIGINT = -5;
/**
 * <P>The constant in the Java programming language, sometimes referred
 * to as a type code, that identifies the generic SQL type
 * <code>FLOAT</code>.
 */
Types.FLOAT = 6;
/**
 * <P>The constant in the Java programming language, sometimes referred
 * to as a type code, that identifies the generic SQL type
 * <code>REAL</code>.
 */
Types.REAL = 7;
/**
 * <P>The constant in the Java programming language, sometimes referred
 * to as a type code, that identifies the generic SQL type
 * <code>DOUBLE</code>.
 */
Types.DOUBLE = 8;
/**
 * <P>The constant in the Java programming language, sometimes referred
 * to as a type code, that identifies the generic SQL type
 * <code>NUMERIC</code>.
 */
Types.NUMERIC = 2;
/**
 * <P>The constant in the Java programming language, sometimes referred
 * to as a type code, that identifies the generic SQL type
 * <code>DECIMAL</code>.
 */
Types.DECIMAL = 3;
/**
 * <P>The constant in the Java programming language, sometimes referred
 * to as a type code, that identifies the generic SQL type
 * <code>CHAR</code>.
 */
Types.CHAR = 1;
/**
 * <P>The constant in the Java programming language, sometimes referred
 * to as a type code, that identifies the generic SQL type
 * <code>VARCHAR</code>.
 */
Types.VARCHAR = 12;
/**
 * <P>The constant in the Java programming language, sometimes referred
 * to as a type code, that identifies the generic SQL type
 * <code>LONGVARCHAR</code>.
 */
Types.LONGVARCHAR = -1;
/**
 * <P>The constant in the Java programming language, sometimes referred
 * to as a type code, that identifies the generic SQL type
 * <code>DATE</code>.
 */
Types.DATE = 91;
/**
 * <P>The constant in the Java programming language, sometimes referred
 * to as a type code, that identifies the generic SQL type
 * <code>TIME</code>.
 */
Types.TIME = 92;
/**
 * <P>The constant in the Java programming language, sometimes referred
 * to as a type code, that identifies the generic SQL type
 * <code>TIMESTAMP</code>.
 */
Types.TIMESTAMP = 93;
/**
 * <P>The constant in the Java programming language, sometimes referred
 * to as a type code, that identifies the generic SQL type
 * <code>BINARY</code>.
 */
Types.BINARY = -2;
/**
 * <P>The constant in the Java programming language, sometimes referred
 * to as a type code, that identifies the generic SQL type
 * <code>VARBINARY</code>.
 */
Types.VARBINARY = -3;
/**
 * <P>The constant in the Java programming language, sometimes referred
 * to as a type code, that identifies the generic SQL type
 * <code>LONGVARBINARY</code>.
 */
Types.LONGVARBINARY = -4;
/**
 * <P>The constant in the Java programming language
 * that identifies the generic SQL value
 * <code>NULL</code>.
 */
Types.NULL = 0;
/**
 * The constant in the Java programming language that indicates
 * that the SQL type is database-specific and
 * gets mapped to a Java object that can be accessed via
 * the methods <code>getObject</code> and <code>setObject</code>.
 */
Types.OTHER = 1111;
/**
 * The constant in the Java programming language, sometimes referred to
 * as a type code, that identifies the generic SQL type
 * <code>JAVA_OBJECT</code>.
 * @since 1.2
 */
Types.JAVA_OBJECT = 2000;
/**
 * The constant in the Java programming language, sometimes referred to
 * as a type code, that identifies the generic SQL type
 * <code>DISTINCT</code>.
 * @since 1.2
 */
Types.DISTINCT = 2001;
/**
 * The constant in the Java programming language, sometimes referred to
 * as a type code, that identifies the generic SQL type
 * <code>STRUCT</code>.
 * @since 1.2
 */
Types.STRUCT = 2002;
/**
 * The constant in the Java programming language, sometimes referred to
 * as a type code, that identifies the generic SQL type
 * <code>ARRAY</code>.
 * @since 1.2
 */
Types.ARRAY = 2003;
/**
 * The constant in the Java programming language, sometimes referred to
 * as a type code, that identifies the generic SQL type
 * <code>BLOB</code>.
 * @since 1.2
 */
Types.BLOB = 2004;
/**
 * The constant in the Java programming language, sometimes referred to
 * as a type code, that identifies the generic SQL type
 * <code>CLOB</code>.
 * @since 1.2
 */
Types.CLOB = 2005;
/**
 * The constant in the Java programming language, sometimes referred to
 * as a type code, that identifies the generic SQL type
 * <code>REF</code>.
 * @since 1.2
 */
Types.REF = 2006;
/**
 * The constant in the Java programming language, somtimes referred to
 * as a type code, that identifies the generic SQL type <code>DATALINK</code>.
 *
 * @since 1.4
 */
Types.DATALINK = 70;
/**
 * The constant in the Java programming language, somtimes referred to
 * as a type code, that identifies the generic SQL type <code>BOOLEAN</code>.
 *
 * @since 1.4
 */
Types.BOOLEAN = 16;
/**
 * The constant in the Java programming language, sometimes referred to
 * as a type code, that identifies the generic SQL type <code>ROWID</code>
 *
 * @since 1.6
 */
Types.ROWID = -8;
/**
 * The constant in the Java programming language, sometimes referred to
 * as a type code, that identifies the generic SQL type <code>NCHAR</code>
 *
 * @since 1.6
 */
Types.NCHAR = -15;
/**
 * The constant in the Java programming language, sometimes referred to
 * as a type code, that identifies the generic SQL type <code>NVARCHAR</code>.
 *
 * @since 1.6
 */
Types.NVARCHAR = -9;
/**
 * The constant in the Java programming language, sometimes referred to
 * as a type code, that identifies the generic SQL type <code>LONGNVARCHAR</code>.
 *
 * @since 1.6
 */
Types.LONGNVARCHAR = -16;
/**
 * The constant in the Java programming language, sometimes referred to
 * as a type code, that identifies the generic SQL type <code>NCLOB</code>.
 *
 * @since 1.6
 */
Types.NCLOB = 2011;
/**
 * The constant in the Java programming language, sometimes referred to
 * as a type code, that identifies the generic SQL type <code>XML</code>.
 *
 * @since 1.6
 */
Types.SQLXML = 2009;
/**
 * The constant in the Java programming language, sometimes referred to
 * as a type code, that identifies the generic SQL type {@code REF CURSOR}.
 *
 * @since 1.8
 */
Types.REF_CURSOR = 2012;
/**
 * The constant in the Java programming language, sometimes referred to
 * as a type code, that identifies the generic SQL type
 * {@code TIME WITH TIMEZONE}.
 *
 * @since 1.8
 */
Types.TIME_WITH_TIMEZONE = 2013;
/**
 * The constant in the Java programming language, sometimes referred to
 * as a type code, that identifies the generic SQL type
 * {@code TIMESTAMP WITH TIMEZONE}.
 *
 * @since 1.8
 */
Types.TIMESTAMP_WITH_TIMEZONE = 2014;
exports.Types = Types;
//# sourceMappingURL=Types.js.map