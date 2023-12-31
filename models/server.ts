import express, { Application } from 'express';
import cors from 'cors';
import userRoutes from '../routes/user';
import authRoute from '../routes/auth';
import db from '../db/connection';
import User from './user';

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        users: '/api/users',
        auth: '/api/auth',
    }


    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        // Initial Methods
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    // Connect to Database
    async dbConnection() {
        try {
            await db.authenticate();
            await User.sync({ force: false });
            console.log('DATABASE CONNECTED');
        } catch (error) {
            // throw new Error();
            console.log(error);
        }
    }

    middlewares() {

        // CORS
        this.app.use(cors());

        // Read Body
        this.app.use(express.json());

        // Public Folder
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(this.apiPaths.users, userRoutes)
        this.app.use(this.apiPaths.auth, authRoute)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server is running: ', this.port);
        });
    }
}

export default Server;