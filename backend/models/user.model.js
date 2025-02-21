import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "username is required"],
        trim: true,
        minLength: 2,
        maxLength: 50,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        lowerCase: true,
        match: /\S+@\S+\.\S+/,
    },
    password: {
        type: String,
        required: [true, 'User Password is required'],
        trim: true,
        minLength: 8
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;