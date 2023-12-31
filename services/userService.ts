import bcryptjs from 'bcryptjs';
import User from '../models/user';

interface UserData {
    name: string,
    email: string,
    password: string,
    status: number
}


const createUser = async (userData: UserData) => {
    const user = new User(userData);
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(user.password, salt);
    await user.save();
    return user;
}

const updatePasswordUser = async (password: string) => {

    const salt = bcryptjs.genSaltSync();
    const newPassword = bcryptjs.hashSync(password, salt);
    
    return newPassword;
}

export { createUser, updatePasswordUser };