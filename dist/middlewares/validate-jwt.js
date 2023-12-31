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
exports.validateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = __importDefault(require("../models/user"));
const validateJWT = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const authHeader = req.headers['authorization'];
    // Separate the token from the "Bearer" prefix
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({
            msg: 'Not in token'
        });
    }
    const secret = process.env.JWT_SECRETORPRIVATEKEY || 'b2281595217199259b2b0c2d106095a92e55a00f1c8ce5297b138472c5e3b1442c5404691acf842d4ac7adbd4958679ba238d98a4b506bdb57acde490e33f6c9';
    try {
        const { id } = jsonwebtoken_1.default.verify(token, secret);
        // Read to user == id
        const user = yield user_1.default.findByPk(id);
        if (!user) {
            return res.status(401).json({
                msg: 'Not in token'
            });
        }
        //Verify this state is true for uid
        // if (!user.status) {
        //     return res.status(401).json({
        //         msg: 'Not in token'
        //     });
        // }
        req.user = user;
        next();
    }
    catch (error) {
        return res.status(401).json({
            msg: 'invalid token',
        });
    }
});
exports.validateJWT = validateJWT;
//# sourceMappingURL=validate-jwt.js.map