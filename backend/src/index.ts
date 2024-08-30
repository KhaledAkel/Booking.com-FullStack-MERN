import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import {v2 as cloudinary} from 'cloudinary';
import "dotenv/config";

import { userRouter, myHotelsRouter, hotelsRouter, searchRouter} from './routes';
import path from 'path';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});




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

app.use('/api/auth', userRouter);
app.use('/api/my-hotels', myHotelsRouter);
app.use('/api/hotels', hotelsRouter);
app.use('/api/search', searchRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'));
});

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



