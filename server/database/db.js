import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

 const connection = () => {

    const MONGODB_URL = `mongodb://${USERNAME}:${PASSWORD}@ac-d3cl5bt-shard-00-00.u4flyza.mongodb.net:27017,ac-d3cl5bt-shard-00-01.u4flyza.mongodb.net:27017,ac-d3cl5bt-shard-00-02.u4flyza.mongodb.net:27017/?ssl=true&replicaSet=atlas-vo7sh9-shard-0&authSource=admin&retryWrites=true&w=majority`;

    mongoose.connect(MONGODB_URL,{ useNewUrlParser: true});

    mongoose.connection.on('connected', () => {
        console.log('Database connected successfully');

    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with database', error.message);
    })
}

export default connection;



