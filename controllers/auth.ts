import { Request, Response } from "express";
import bcryptjs from 'bcryptjs';


import User from "../models/user";
import { generateJWT } from "../helpers/generate-jwt";



const login = async (req: Request, res: Response) => {

    const { email, password } = req.body;

    try {

        // Validate exists email
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({
                msg: 'Invalidate credentials.'
            });
        }

        // Verify password
        const validPassword = bcryptjs.compareSync(password, user.password);

        if (!validPassword) {
            return res.status(400).json({
                msg: 'Invalidate credentials -password'
            });
        }

        // Generate JWT
        const token = await generateJWT(user.id);

        res.json({
            user,
            token
        });

    } catch (error) {
        return res.status(500).json({
            msg: 'Oops, error is comming.'
        })
    }
};

export { login }