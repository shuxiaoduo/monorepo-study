"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartMysql = exports.connection = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
exports.connection = null;
const StartMysql = () => {
    // create the connection to database
    exports.connection = mysql2_1.default.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'todoList',
    });
    return exports.connection;
};
exports.StartMysql = StartMysql;
