import * as path from 'path';

export default {
    genTableData: {
        desc: '生成表数据',
        src: path.join('file://', __dirname, '../html/genTableData.html')
    },

    addDBConnInfo: {
        desc: '新增数据连接',
        src: path.join('file://', __dirname, '../html/addDBConnInfo.html')
    }
}