export type ConfigEnvironment = 'development' | 'test' | 'production';

export interface SequelizeConfig {
    username: string;
    password: string;
    database: string;
    host: string;
    port: string;
    dialect: string;
    dialectOptions: {
        bigNumberStrings: boolean;
    };
}

export interface Config {
    [key in ConfigEnvironment]: SequelizeConfig;
}