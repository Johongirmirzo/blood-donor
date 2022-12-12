import mongoose from "mongoose";

export interface ISession extends mongoose.Document {
    donorId: string;
}

const SessionSchema = new mongoose.Schema({
    donorId: {
        type: String,
        required: true,
    }
})
export default mongoose.model("Session", SessionSchema);