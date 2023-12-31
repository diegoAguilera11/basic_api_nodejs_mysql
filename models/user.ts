import { DataTypes, Model } from "sequelize";
import db from "../db/connection";


class User extends Model {
    public id!: number; // To generate to db
    public name!: string;
    public email!: string;
    public password!: string;
    public status!: boolean;
}

User.init({
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.BOOLEAN
    }
}, {
    sequelize: db,
    modelName: 'User'
});

export default User;