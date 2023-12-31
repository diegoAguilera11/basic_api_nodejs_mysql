import { Router } from "express";
import { login } from "../controllers/auth";
import { check } from "express-validator";
import { validateFields } from "../middlewares/index";



const router = Router();

router.post('/login', [
    check('email', 'The email is required').not().isEmpty(),
    check('password', 'The password is required').not().isEmpty(),
    validateFields,
], login);


export default router;