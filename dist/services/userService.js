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
exports.updatePasswordUser = exports.createUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_1 = __importDefault(require("../models/user"));
const createUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new user_1.default(userData);
    const salt = bcryptjs_1.default.genSaltSync();
    user.password = bcryptjs_1.default.hashSync(user.password, salt);
    yield user.save();
    return user;
});
exports.createUser = createUser;
const updatePasswordUser = (password) => __awaiter(void 0, void 0, void 0, function* () {
    const salt = bcryptjs_1.default.genSaltSync();
    const newPassword = bcryptjs_1.default.hashSync(password, salt);
    return newPassword;
});
exports.updatePasswordUser = updatePasswordUser;
//# sourceMappingURL=userService.js.map