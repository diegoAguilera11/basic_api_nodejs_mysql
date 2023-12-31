import {Sequelize} from 'sequelize';
import config from '../config/config';

const env = process.env.NODE_ENV as keyof typeof config || 'development';
const {database, username, password, port} = config[env];


const db = new Sequelize(database, username, password, {
    host: 'localhost',
    port: port,
    dialect: 'mysql',
    logging: false,
});


export default db;