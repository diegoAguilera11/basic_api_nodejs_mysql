"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: 'localhost',
        port: process.env.DB_PORT,
        dialect: 'mysql',
        dialectOptions: {
            bigNumberStrings: true
        }
    },
    test: {
    // Configuración para test
    },
    production: {
    // Configuración para producción
    }
};
exports.default = config;
//# sourceMappingURL=config.js.map