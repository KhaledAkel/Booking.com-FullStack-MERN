import mongoose from 'mongoose';

export type HotelType = {
    _id: String;
    userId : String ;
    name: string;
    adress: string;
    description: string;
    type: string;
    adults: number;
    children: number;
    facilities : string[];
    pricePerNight: number;
    starRating : number;
    images: string[];
    lastUpdated : Date;
};

const hotelSchema = new mongoose.Schema<HotelType>({
    userId : {type: String, required: true},
    name: { type: String, required: true },
    adress: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true },
    adults: { type: Number, required: true },
    children: { type: Number, required: true },
    facilities : { type: [String], required: true },
    pricePerNight: { type: Number, required: true },
    starRating : { type: Number, required: true },
    images: { type: [String], required: true },
    lastUpdated : { type: Date, required: true }
}); 

const Hotel = mongoose.model<HotelType>('Hotel', hotelSchema);
export default Hotel;
