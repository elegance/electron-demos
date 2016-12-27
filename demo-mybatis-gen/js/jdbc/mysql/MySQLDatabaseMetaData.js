"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
class MySQLDatabaseMetaData {
    constructor(conn) {
        this.conn = conn;
    }
    getTables() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield new Promise((resolve, reject) => {
                this.conn.query(`SELECT table_name FROM information_schema.TABLES WHERE table_schema = 'test' AND table_type = 'BASE TABLE'`, (err, rows, fields) => {
                    resolve(rows.map(row => row['table_name']));
                });
            });
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MySQLDatabaseMetaData;
//# sourceMappingURL=MySQLDatabaseMetaData.js.map