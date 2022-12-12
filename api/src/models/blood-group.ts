import mongoose from "mongoose";

export interface IBloodGroup extends mongoose.Document {
    bloodType: string
    creationDate: string;
}

const BloodGroupSchema = new mongoose.Schema({
    bloodType: {
        type: String,
        required: true,
        unique: true,
    },
    creationDate: {
        type: Date,
        default: new Date(),
    }
})

export default mongoose.model<IBloodGroup>("BloodGroup", BloodGroupSchema);