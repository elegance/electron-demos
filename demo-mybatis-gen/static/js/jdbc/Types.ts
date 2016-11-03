export class Types {
    /**
     * <P>The constant in the Java programming language, sometimes referred
     * to as a type code, that identifies the generic SQL type
     * <code>BIT</code>.
     */
    public static BIT : number = -7;

    /**
     * <P>The constant in the Java programming language, sometimes referred
     * to as a type code, that identifies the generic SQL type
     * <code>TINYINT</code>.
     */
    public static TINYINT : number = -6;

    /**
     * <P>The constant in the Java programming language, sometimes referred
     * to as a type code, that identifies the generic SQL type
     * <code>SMALLINT</code>.
     */
    public static SMALLINT : number = 5;

    /**
     * <P>The constant in the Java programming language, sometimes referred
     * to as a type code, that identifies the generic SQL type
     * <code>INTEGER</code>.
     */
    public static INTEGER : number = 4;

    /**
     * <P>The constant in the Java programming language, sometimes referred
     * to as a type code, that identifies the generic SQL type
     * <code>BIGINT</code>.
     */
    public static BIGINT : number = -5;

    /**
     * <P>The constant in the Java programming language, sometimes referred
     * to as a type code, that identifies the generic SQL type
     * <code>FLOAT</code>.
     */
    public static FLOAT : number = 6;

    /**
     * <P>The constant in the Java programming language, sometimes referred
     * to as a type code, that identifies the generic SQL type
     * <code>REAL</code>.
     */
    public static REAL : number = 7;

    /**
     * <P>The constant in the Java programming language, sometimes referred
     * to as a type code, that identifies the generic SQL type
     * <code>DOUBLE</code>.
     */
    public static DOUBLE : number = 8;

    /**
     * <P>The constant in the Java programming language, sometimes referred
     * to as a type code, that identifies the generic SQL type
     * <code>NUMERIC</code>.
     */
    public static NUMERIC : number = 2;

    /**
     * <P>The constant in the Java programming language, sometimes referred
     * to as a type code, that identifies the generic SQL type
     * <code>DECIMAL</code>.
     */
    public static DECIMAL : number = 3;

    /**
     * <P>The constant in the Java programming language, sometimes referred
     * to as a type code, that identifies the generic SQL type
     * <code>CHAR</code>.
     */
    public static CHAR : number = 1;

    /**
     * <P>The constant in the Java programming language, sometimes referred
     * to as a type code, that identifies the generic SQL type
     * <code>VARCHAR</code>.
     */
    public static VARCHAR : number = 12;

    /**
     * <P>The constant in the Java programming language, sometimes referred
     * to as a type code, that identifies the generic SQL type
     * <code>LONGVARCHAR</code>.
     */
    public static LONGVARCHAR : number = -1;

    /**
     * <P>The constant in the Java programming language, sometimes referred
     * to as a type code, that identifies the generic SQL type
     * <code>DATE</code>.
     */
    public static DATE : number = 91;

    /**
     * <P>The constant in the Java programming language, sometimes referred
     * to as a type code, that identifies the generic SQL type
     * <code>TIME</code>.
     */
    public static TIME : number = 92;

    /**
     * <P>The constant in the Java programming language, sometimes referred
     * to as a type code, that identifies the generic SQL type
     * <code>TIMESTAMP</code>.
     */
    public static TIMESTAMP : number = 93;

    /**
     * <P>The constant in the Java programming language, sometimes referred
     * to as a type code, that identifies the generic SQL type
     * <code>BINARY</code>.
     */
    public static BINARY : number = -2;

    /**
     * <P>The constant in the Java programming language, sometimes referred
     * to as a type code, that identifies the generic SQL type
     * <code>VARBINARY</code>.
     */
    public static VARBINARY : number = -3;

    /**
     * <P>The constant in the Java programming language, sometimes referred
     * to as a type code, that identifies the generic SQL type
     * <code>LONGVARBINARY</code>.
     */
    public static LONGVARBINARY : number = -4;

    /**
     * <P>The constant in the Java programming language
     * that identifies the generic SQL value
     * <code>NULL</code>.
     */
    public static NULL : number = 0;

    /**
     * The constant in the Java programming language that indicates
     * that the SQL type is database-specific and
     * gets mapped to a Java object that can be accessed via
     * the methods <code>getObject</code> and <code>setObject</code>.
     */
    public static OTHER : number = 1111;

    /**
     * The constant in the Java programming language, sometimes referred to
     * as a type code, that identifies the generic SQL type
     * <code>JAVA_OBJECT</code>.
     * @since 1.2
     */
    public static JAVA_OBJECT : number = 2000;

    /**
     * The constant in the Java programming language, sometimes referred to
     * as a type code, that identifies the generic SQL type
     * <code>DISTINCT</code>.
     * @since 1.2
     */
    public static DISTINCT : number = 2001;

    /**
     * The constant in the Java programming language, sometimes referred to
     * as a type code, that identifies the generic SQL type
     * <code>STRUCT</code>.
     * @since 1.2
     */
    public static STRUCT : number = 2002;

    /**
     * The constant in the Java programming language, sometimes referred to
     * as a type code, that identifies the generic SQL type
     * <code>ARRAY</code>.
     * @since 1.2
     */
    public static ARRAY : number = 2003;

    /**
     * The constant in the Java programming language, sometimes referred to
     * as a type code, that identifies the generic SQL type
     * <code>BLOB</code>.
     * @since 1.2
     */
    public static BLOB : number = 2004;

    /**
     * The constant in the Java programming language, sometimes referred to
     * as a type code, that identifies the generic SQL type
     * <code>CLOB</code>.
     * @since 1.2
     */
    public static CLOB : number = 2005;

    /**
     * The constant in the Java programming language, sometimes referred to
     * as a type code, that identifies the generic SQL type
     * <code>REF</code>.
     * @since 1.2
     */
    public static REF : number = 2006;

    /**
     * The constant in the Java programming language, somtimes referred to
     * as a type code, that identifies the generic SQL type <code>DATALINK</code>.
     * 
     * @since 1.4
     */
    public static DATALINK : number = 70;

    /**
     * The constant in the Java programming language, somtimes referred to
     * as a type code, that identifies the generic SQL type <code>BOOLEAN</code>.
     * 
     * @since 1.4
     */
    public static BOOLEAN : number = 16;

    /**
     * The constant in the Java programming language, sometimes referred to
     * as a type code, that identifies the generic SQL type <code>ROWID</code>
     * 
     * @since 1.6
     */
    public static ROWID : number = -8;

    /**
     * The constant in the Java programming language, sometimes referred to
     * as a type code, that identifies the generic SQL type <code>NCHAR</code>
     * 
     * @since 1.6
     */
    public static NCHAR : number = -15;

    /**
     * The constant in the Java programming language, sometimes referred to
     * as a type code, that identifies the generic SQL type <code>NVARCHAR</code>.
     * 
     * @since 1.6
     */
    public static NVARCHAR : number = -9;

    /**
     * The constant in the Java programming language, sometimes referred to
     * as a type code, that identifies the generic SQL type <code>LONGNVARCHAR</code>.
     * 
     * @since 1.6
     */
    public static LONGNVARCHAR : number = -16;

    /**
     * The constant in the Java programming language, sometimes referred to
     * as a type code, that identifies the generic SQL type <code>NCLOB</code>.
     * 
     * @since 1.6
     */
    public static NCLOB : number = 2011;

    /**
     * The constant in the Java programming language, sometimes referred to
     * as a type code, that identifies the generic SQL type <code>XML</code>.
     * 
     * @since 1.6
     */
    public static SQLXML : number = 2009;

    /**
     * The constant in the Java programming language, sometimes referred to
     * as a type code, that identifies the generic SQL type {@code REF CURSOR}.
     * 
     * @since 1.8
     */
    public static REF_CURSOR : number = 2012;

    /**
     * The constant in the Java programming language, sometimes referred to
     * as a type code, that identifies the generic SQL type
     * {@code TIME WITH TIMEZONE}.
     * 
     * @since 1.8
     */
    public static TIME_WITH_TIMEZONE : number = 2013;

    /**
     * The constant in the Java programming language, sometimes referred to
     * as a type code, that identifies the generic SQL type
     * {@code TIMESTAMP WITH TIMEZONE}.
     * 
     * @since 1.8
     */
    public static TIMESTAMP_WITH_TIMEZONE : number = 2014;

    constructor() {
    }
}