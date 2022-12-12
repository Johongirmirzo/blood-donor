import mongoose from "mongoose";

export interface ISubscriber extends mongoose.Document {
    subscriberEmail: string;
    subscriptionDate: string;
}

const SubscriberSchema = new mongoose.Schema({
    subscriberEmail: {
        type: String,
        required: true,
        unique: true,
    },
    subscriptionDate: {
        type: Date,
        default: new Date(),
    }
})

export default mongoose.model("Subscriber", SubscriberSchema);