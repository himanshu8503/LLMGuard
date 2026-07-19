import mongoose from "mongoose";

const User_Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["User","Admin"],
        default: "User"
    }
},
{
    timestamps: true
});

const User_Model = mongoose.model("Users",User_Schema);

export default User_Model;

