import mongoose from 'mongoose';

export type UserDocument =  {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
}


const userSchema = new mongoose.Schema({
    email : {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true
    },
    first_name : {
        type: String,
        required: true
    },
    last_name : {
        type: String,
        required: true
    }
});

const User = mongoose.model<UserDocument>('User', userSchema);

export default User;