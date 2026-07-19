import mongoose, { model } from "mongoose";

const ApiRequest_Schema = new mongoose.Schema(
    {
        request_id:{
            type: String,
            required: true,
            unique: true
        },
        project_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Projects",
            required: true,
        },
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users",
            required: true
        },
        model: {
            type: String,
            required: true,
        },
        feature: {
            type: String,
            required: true,
            default: "default"
        },
        provider : {
            type: String,
            required: true,
        },
        prompt_tokens: {
            type: Number,
            required: true,
            default: 0,
            min: 0
        },
        completion_tokens: {
            type: Number,
            required: true,
            default: 0,
            min: 0
        },        
        total_tokens: {
            type: Number,
            required: true,
            default: 0,
            min: 0
        },
        cost_usd: {
            type: Number,
            required: true,
            default: 0.0,
            min: 0.0
        },
        latency_ms: {
            type: Number,
            required: true
        },
        flagged_spike: {
            type: Boolean,
            default: false
        },
        flagged_bloat: {
            type: Boolean,
            default: false
        },
        flagged_burn_rate: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);

const ApiRequest_Model = model("Requests",ApiRequest_Schema);

export default ApiRequest_Model;
