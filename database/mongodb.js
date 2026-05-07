import mongoose from "mongoose";
import {config} from "dotenv";
config();

if(!process.env.MONGODB_URI){
    throw new Error("Please define a Mongodb URI in .env file.");
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB Database");
    } catch (error) {
        console.log("Error connecting to database: ", error);
        process.exit(1);
    }
}

export default connectToDatabase;