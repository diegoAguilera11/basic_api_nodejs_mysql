import { Router } from "express";
import { check } from "express-validator";

import { validateFields, validateJWT } from "../middlewares/index";

import { verifyEmail, existUserID } from "../helpers/db-validators";

import { deleteUser, 
    getUser, 
    getUsers, 
    postUser, 
    putUser } from "../controllers/users";
    

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUser);

router.post('/', [
    check('name', 'The  name is required').not().isEmpty(),
    check('email', 'This email is invalid').isEmail(),
    check('email', 'This email already exists').custom(verifyEmail),
    check('password', 'This password must be less than 6 characters').isLength({ min: 6 }),
    validateFields
],postUser);

router.put('/:id', [
    check('id').custom(existUserID),
    validateFields
] , putUser);

router.delete('/:id',[
    validateJWT,
    check('id').custom(existUserID),
    validateFields
], deleteUser);


export default router;