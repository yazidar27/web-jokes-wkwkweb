import mongoose from "mongoose";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { JWT_EXPIRES_IN, JWT_SECRET } from "../config/env.js";
import bcrypt from "bcryptjs";

export const signUp = async (req, res, next) => {
    const session = await mongoose.startSession()
    session.startTransaction();
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            const error = new Error('User already exist');
            error.statusCode = 409;
            throw error;
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUsers = await User.create([{ name, email, password: hashedPassword }], { session });

        const token = jwt.sign({ userId: newUsers[0].id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });


        await session.commitTransaction();
        await session.endSession();

        res.status(201).json({
            success: true,
            message: 'User Created Succesfully',
            data: {
                token,
                user: newUsers[0]
            }
        })
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        next(error);
    }
}

export const signIn = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            const error = "User not found";
            error.statusCode = 404;
            throw error
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            const error = "Password is not valid";
            error.statusCode = 401;
            throw error
        }

        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
        res.status(201).json({
            success: true,
            message: "user login success",
            data: {
                token,
                user
            }
        })
    } catch (error) {
        next(error);
    }
}