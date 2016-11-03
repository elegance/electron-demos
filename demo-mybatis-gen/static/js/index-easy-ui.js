$(function() {
    // 两级数据源

    // 第一级：取有那些数据源
    var dsArr = [
        {
            text: 'ds-local',
            state: 'closed',
            host: '127.0.0.1',
            user: 'root',
            pwd: 'root',
            port: '3306',
            db: 'tzbms'
        }
    ];

    // 第二级：点击数据源 加载 数据源下的 数据表


    var dataSourceTree = $('#dataSourceTree').tree({
        data: dsArr,
        onClick: (node)=> {
            // 通过node 获取连接信息

            var tablesSql = `SELECT table_name, table_comment, table_schema, table_type, ENGINE FROM information_schema.TABLES WHERE table_schema = 'trade';`;
        }
    });
});