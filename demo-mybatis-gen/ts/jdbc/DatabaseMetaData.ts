interface DatabaseMetaData {
    getTables(): Promise<Array<string>>;
}

export default DatabaseMetaData;