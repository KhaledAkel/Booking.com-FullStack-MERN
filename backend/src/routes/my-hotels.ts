import express from 'express';
import multer from 'multer';
import {createMyHotel } from '../controllers';
import { verifyToken } from '../middleware';

const myHotelsRouter = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ 
    storage,
    limits: {
        fileSize: 1024 * 1024 * 5,
    },
 });

 myHotelsRouter.post('/create', verifyToken,  upload.array("images", 6), createMyHotel);


export default myHotelsRouter;