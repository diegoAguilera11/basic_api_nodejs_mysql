"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../controllers/auth");
const express_validator_1 = require("express-validator");
const index_1 = require("../middlewares/index");
const router = (0, express_1.Router)();
router.post('/login', [
    (0, express_validator_1.check)('email', 'The email is required').not().isEmpty(),
    (0, express_validator_1.check)('password', 'The password is required').not().isEmpty(),
    index_1.validateFields,
], auth_1.login);
exports.default = router;
//# sourceMappingURL=auth.js.map