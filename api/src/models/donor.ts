import mongoose from "mongoose";

export interface IDonor extends mongoose.Document {
    id: string;
    fullname: string;
    phoneNumber: string;
    email: string;
    age: number;
    gender: string;
    bloodGroup: string;
    city: string;
    password: string;
    isAdmin: boolean;
    isHidden: boolean;
    isDemoMode?: boolean;
}

const DonorSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        enum: ["MALE", "FEMALE"]
    },
    bloodGroup: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isHidden: {
        type: Boolean,
        default: false,
    }
})

export default mongoose.model<IDonor>("Donor", DonorSchema)