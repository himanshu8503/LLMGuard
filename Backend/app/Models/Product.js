import mongoose from "mongoose";

const Product_Schema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        default: ""
    },
    isActive: {
        type: Boolean,
        default: true
    }

},
{
    timestamps: true
});

const Product_Model = mongoose.model("Projects",Product_Schema);

export default Product_Model;

