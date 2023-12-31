import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import User from "../models/user";


const validateJWT = async (req: Request, res: Response, next: NextFunction) => {
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
        const { id } = jwt.verify(token, secret) as { id: number };


        // Read to user == id
        const user = await User.findByPk(id);

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
    } catch (error) {
        return res.status(401).json({
            msg: 'invalid token',
        });
    }
}

export {validateJWT}