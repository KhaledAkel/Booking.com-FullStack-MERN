import mongoose from 'mongoose';

export type HotelType = {
    _id: String;
    userId : String ;
    name: string;
    country: string;
    city: string;
    description: string;
    type: string;
    adults: number;
    children: number;
    facilities : string[];
    pricePerNight: number;
    starRating : number;
    images: string[];
    isTreanding : boolean;
    isSpecial : boolean;
    lastUpdated : Date;
};

const hotelSchema = new mongoose.Schema<HotelType>({
    userId : {type: String, required: true},
    name: { type: String, required: true },
    country: { type: String, required: true },
    city: { type: String },
    description: { type: String, required: true },
    type: { type: String, required: true },
    adults: { type: Number, required: true },
    children: { type: Number, required: true },
    facilities : { type: [String], required: true },
    pricePerNight: { type: Number, required: true },
    starRating : { type: Number, required: true },
    images: { type: [String], required: true },
    isTreanding : { type: Boolean },
    isSpecial : { type: Boolean},
    lastUpdated : { type: Date, required: true }
}); 

const Hotel = mongoose.model<HotelType>('Hotel', hotelSchema);
export default Hotel;
