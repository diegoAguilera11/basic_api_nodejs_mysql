import { Request, Response } from "express"
import User from "../models/user";
import { createUser, updatePasswordUser } from "../services/userService";



export const getUsers = async (req: Request, res: Response) => {

    const users = await User.findAll();

    res.json({
        msg: 'desde getUsers',
        users
    });
}

export const getUser = async (req: Request, res: Response) => {

    const { id } = req.params;

    const user = await User.findByPk(id);
    res.json({
        msg: 'desde getUser',
        user
    });
}

export const postUser = async (req: Request, res: Response) => {
    const { body } = req;

    try {

        const user = await createUser(body);

        res.json({
            user
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Internal server error'
        });
    }
}

export const putUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { password, email, ...other } = req.body;

    if (password) {
        // Update Password
        other.password = await updatePasswordUser(password);
    }

    const user = await User.findByPk(id);
    console.log(user);

    if (user) {
        const updatedUser = await User.update({ name: other.name, password: other.password }, { where: { id: user.id } });
        res.json({
            updatedUser
        });
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (user) {
        const userDelete = await User.update({ status: 0 }, { where: { id: user.id } });

        res.json({
            msg: 'desde deleteUser',
            userDelete
        });
    }
}