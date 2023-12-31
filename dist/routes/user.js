"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const index_1 = require("../middlewares/index");
const db_validators_1 = require("../helpers/db-validators");
const users_1 = require("../controllers/users");
const router = (0, express_1.Router)();
router.get('/', users_1.getUsers);
router.get('/:id', users_1.getUser);
router.post('/', [
    (0, express_validator_1.check)('name', 'The  name is required').not().isEmpty(),
    (0, express_validator_1.check)('email', 'This email is invalid').isEmail(),
    (0, express_validator_1.check)('email', 'This email already exists').custom(db_validators_1.verifyEmail),
    (0, express_validator_1.check)('password', 'This password must be less than 6 characters').isLength({ min: 6 }),
    index_1.validateFields
], users_1.postUser);
router.put('/:id', [
    (0, express_validator_1.check)('id').custom(db_validators_1.existUserID),
    index_1.validateFields
], users_1.putUser);
router.delete('/:id', [
    index_1.validateJWT,
    (0, express_validator_1.check)('id').custom(db_validators_1.existUserID),
    index_1.validateFields
], users_1.deleteUser);
exports.default = router;
//# sourceMappingURL=user.js.map