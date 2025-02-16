import mongoose from "mongoose";
import { DB_URI } from "../config/env.js";

if (!DB_URI) {
    throw new Error("Databasenya gak ada di env");
}

export const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log("Berhasil konek ke database");
    } catch (error) {
        console.log("Gagal konek ke database", error);
        process.exit(1)
    }
}