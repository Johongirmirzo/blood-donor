import mongoose from "mongoose";

export interface IContactUs extends mongoose.Document {
    fullname: string;
    phoneNumber: string;
    email: string;
    message: string;
    messageDate: string;
}

const ContactUsSchema = new mongoose.Schema({
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
    },
    message: {
        type: String,
        required: true,
    },
    messageDate: {
        type: Date,
        default: new Date(),
    }
})

export default mongoose.model<IContactUs>("ContactUs", ContactUsSchema)