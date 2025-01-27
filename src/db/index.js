import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB Connected!! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MongoDB Connection error", error);
        process.exit(1) // Exit the node process
    }
}

export default connectDB;