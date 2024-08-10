import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import "dotenv/config";

import { userRouter } from './routes';
import path from 'path';


const app = express();

// Middlewares
app.use(cors(
    {
        origin: process.env.FRONTEND_URL as string || 'http://localhost:5173', 
        credentials: true,
    }
));

app.use(express.static(path.join(__dirname, '../../frontend/dist')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/auth', userRouter);

// Connect to database & start server
const PORT =  5000;

mongoose.connect(process.env.MONGODB_URL as string)
    .then(() => {
    console.log('Connected to database');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        }); 
    })
    .catch((error) => {
    console.log('Error connecting to database: ', error.message);
    });



