"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config/config"));
const env = process.env.NODE_ENV || 'development';
const { database, username, password, port } = config_1.default[env];
const db = new sequelize_1.Sequelize(database, username, password, {
    host: 'localhost',
    port: port,
    dialect: 'mysql',
    logging: false,
});
exports.default = db;
//# sourceMappingURL=connection.js.map