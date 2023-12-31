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
exports.existUserID = exports.verifyEmail = void 0;
const user_1 = __importDefault(require("../models/user"));
// Verify exists email
const verifyEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const existEmail = yield user_1.default.findOne({ where: { email } });
    if (existEmail) {
        throw new Error(`This email already exists`);
    }
    ;
});
exports.verifyEmail = verifyEmail;
const existUserID = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existUser = yield user_1.default.findByPk(id);
    if (!existUser) {
        throw new Error(`This ID: ${id} is not exists`);
    }
    ;
});
exports.existUserID = existUserID;
//# sourceMappingURL=db-validators.js.map