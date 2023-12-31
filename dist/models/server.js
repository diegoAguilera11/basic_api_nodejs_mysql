"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_1 = __importDefault(require("../routes/user"));
const auth_1 = __importDefault(require("../routes/auth"));
const connection_1 = __importDefault(require("../db/connection"));
const user_2 = __importDefault(require("./user"));
class Server {
    constructor() {
        this.apiPaths = {
            users: '/api/users',
            auth: '/api/auth',
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        // Initial Methods
        this.dbConnection();
        this.middlewares();
        this.routes();
    }
    // Connect to Database
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                yield user_2.default.sync({ force: false });
                console.log('DATABASE CONNECTED');
            }
            catch (error) {
                // throw new Error();
                console.log(error);
            }
        });
    }
    middlewares() {
        // CORS
        this.app.use((0, cors_1.default)());
        // Read Body
        this.app.use(express_1.default.json());
        // Public Folder
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPaths.users, user_1.default);
        this.app.use(this.apiPaths.auth, auth_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server is running: ', this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map