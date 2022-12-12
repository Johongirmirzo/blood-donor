import mongoose from "mongoose";

export interface IBloodRequirer extends mongoose.Document {
    fullname: string;
    phoneNumber: string;
    email: string;
    blodNeededFor: string;
    message: string;
    donorId: string;
    applyDate: string;
}
const BloodRequirerSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    phoneNumber: { 
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    bloodNeededFor: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    donorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Donor"
    },
    applyDate: {
        type: Date,
        default: new Date()
    }
})

export default mongoose.model<IBloodRequirer>("BloodRequirer", BloodRequirerSchema);