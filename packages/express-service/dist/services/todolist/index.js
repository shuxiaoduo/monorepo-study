"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const mysql_1 = require("../../mysql");
class TodoService {
    constructor() { }
    add(params) {
        return new Promise((resolve, reject) => {
            // simple query
            mysql_1.connection.query(`insert into  todo_list(content) values (${params.content})`, function (err, results) {
                if (err) {
                    reject(err);
                }
                resolve(results);
            });
        });
    }
}
exports.TodoService = TodoService;
exports.default = new TodoService();
