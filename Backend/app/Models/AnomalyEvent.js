import mongoose from "mongoose";

const Anomaly_Schema = new mongoose.Schema({
    request_id: {
        type: String,
        required: true,
        unique: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    anomaly_type: {
        type: String,
        enum:["spike","token_bloat","burn_rate"],
        required: true
    },
    severity: {
        type: String,
        enum: ["warning","critical"],
        required: true
    },
    detail:
    {
        type: String,
    },
    alert_sent: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
});


const Anomaly_Model = mongoose.model("AnomalyEvents",Anomaly_Schema);

export default Anomaly_Model;
