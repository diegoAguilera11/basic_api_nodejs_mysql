"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateJWT = (id) => {
    return new Promise((resolve, reject) => {
        const payload = { id };
        const secret = process.env.JWT_SECRETORPRIVATEKEY || 'b2281595217199259b2b0c2d106095a92e55a00f1c8ce5297b138472c5e3b1442c5404691acf842d4ac7adbd4958679ba238d98a4b506bdb57acde490e33f6c9';
        jsonwebtoken_1.default.sign(payload, secret, {
            expiresIn: '2h'
        }, (error, token) => {
            if (error) {
                console.log(error);
                reject('Error to generate token');
            }
            else {
                resolve(token);
            }
        });
    });
};
exports.generateJWT = generateJWT;
//# sourceMappingURL=generate-jwt.js.map