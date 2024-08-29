import express from 'express';
import multer from 'multer';
import { getAllHotels, getSingleHotel, getSpecials, getTrending } from '../controllers';


const hotelsRouter = express.Router();


hotelsRouter.get('/all', getAllHotels);
hotelsRouter.get('/single/:id', getSingleHotel);
hotelsRouter.get('/specials', getSpecials);
hotelsRouter.get('/trending', getTrending);






export default hotelsRouter;