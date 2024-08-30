import { Request, Response } from 'express';
import {Hotel} from '../models'

const getAllHotels = async (req: Request, res: Response) => {
    try {
        const hotels = await Hotel.find({});
       
        res.status(200).json(hotels);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get hotels' });
    }
    };


const getSingleHotel = async (req: Request, res: Response) => {
    try {
        const hotelId = req.params.id;
        const hotel = await Hotel.findById(hotelId);
        res.status(200).json(hotel);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get hotel' });
    }
    };


const getSpecials = async (req: Request, res: Response) => {
    try {
        const hotels = await Hotel.find({ isSpecial: true });
        res.status(200).json(hotels);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get specials' });
    }
    };



const getTrending = async (req: Request, res: Response) => {
    try {
        const hotels = await Hotel.find({ isTrending: true });
        res.status(200).json(hotels);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get trending' });
    }
    };

export {
    getAllHotels,
    getSingleHotel,
    getSpecials,
    getTrending
}
