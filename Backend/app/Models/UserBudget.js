import mongoose from "mongoose";

const UserBudget_Schema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    daily_budget_usd: {
        type: Number,
    },
    monthly_budget_usd:{
        type: Number
    },
    throttle_on_exceed: {
        type: Boolean,
        default: true
    }
},
{
    timestamps: true
}
);

const UserBudget_Model = mongoose.model("Budgets",UserBudget_Schema);

export default UserBudget_Model;
