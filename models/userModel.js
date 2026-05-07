import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String, 
        required: [true, "User name is required"],
        trim: true,
        minlength: 2,
        maxLength: 50
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please fill a valid email address"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: 6
    }
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;