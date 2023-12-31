import User from "../models/user";


// Verify exists email
const verifyEmail = async (email: string): Promise<void> => {
    const existEmail = await User.findOne({ where: { email } });
    if (existEmail) {
        throw new Error(`This email already exists`);
    };
}

const existUserID = async (id: number): Promise<void> => {

    const existUser = await User.findByPk(id);
    if (!existUser) {
        throw new Error(`This ID: ${id} is not exists`);
    };
}

export {
    verifyEmail,
    existUserID
}
