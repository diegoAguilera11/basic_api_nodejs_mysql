import dotenv from 'dotenv';
import { Config } from '../types/sequelize';

dotenv.config();

const config: Config = {
  development: {
      username: process.env.DB_USERNAME as string,
      password: process.env.DB_PASSWORD as string,
      database: process.env.DB_NAME as string,
      host: 'localhost',
      port: process.env.DB_PORT as string,
      dialect: 'mysql',
      dialectOptions: {
          bigNumberStrings: true
      }
  },
  test: {
      // Configuración para test
  },
  production: {
      // Configuración para producción
  }
};

export default config;