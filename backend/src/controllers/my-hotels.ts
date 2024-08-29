import multer from 'multer';
import cloudinary from 'cloudinary';
import { Request, Response } from 'express';
import { HotelType, Hotel } from '../models';

export const createMyHotel = async (req: Request, res: Response) => {
    try {
        const imageFiles = req.files as Express.Multer.File[];
        const newHotel : HotelType = req.body;
        // Upload the images to Cloudinary
        const uploadPromises = imageFiles.map(async (image) => {
            const b64 = image.buffer.toString('base64');
            const dataURI = "data:image/jpeg;base64," + b64;
            const result = await cloudinary.v2.uploader.upload(dataURI);
            return result.url; // Return the URL of the uploaded image
        });
 
        // Wait for all uploads to complete
        const imageUrls = await Promise.all(uploadPromises);
        newHotel.images = imageUrls;
        newHotel.lastUpdated = new Date();
        newHotel.userId = req.userId as string;

        // Add the URLs to the newHotel object
        newHotel.images = imageUrls;

        // Save the hotel to your database
        const hotel = new Hotel(newHotel);
        await hotel.save();

        res.status(201).json({ message: 'Hotel created successfully', hotel: newHotel });
    } catch (error: any) {
        console.error('Failed to create hotel: ', error.message );
        res.status(500).json({ message: 'Failed to create hotel'});
    }
};

export const viewMyHotels = async (req: Request, res: Response) => {
    try {
        const hotels = await Hotel.find({ userId: req.userId });
        res.status(200).json(hotels);
    } catch (error: any) {
        console.error('Failed to get hotels: ', error.message );
        res.status(500).json({ message: 'Failed to get hotels'});
    }
}

export const deleteMyHotel = async (req: Request, res: Response) => {
    try {
        const hotelId = req.params.id;
        await Hotel.deleteOne({ _id: hotelId, userId: req.userId });
        const hotels = await Hotel.find({ userId: req.userId });
        res.status(200).json(hotels);
    }
    catch (error: any) {
        console.error('Failed to delete hotel: ', error.message );
        res.status(500).json({ message: 'Failed to delete hotel'});
    }
}