import mongoose from "mongoose";


interface IFaqList {
    _id?: string;
    question: string;
    answer: string;
}
interface IFaq {
    title: string;
    description: string;
    faqList: IFaqList[];
}

interface ISponsorList {
    _id?: string;
    image: string;
    imageId: string;
    imagePath: string;
    imageCreationDate: string;
}
interface ISponsor {
    title: string;
    description: string;
    images: ISponsorList[];
}
export interface IFaqPage extends mongoose.Document {
    heroImage: string;
    heroImagePath: string;
    heroImageId: string;
    faq: IFaq;
    sponsor: ISponsor;
}

const FaqPageSchema = new mongoose.Schema({
    heroImage: String,
    heroImagePath: String,
    heroImageId: String,
    faq: {
        title: String,
        description: String,
        faqList: [{question: String, answer: String}]
    },
    sponsor: {
        title: String,
        description: String,
        images: [{image: String, imageId: String, imagePath: String, imageCreationDate: {type: Date, default: Date.now()}}]
    }
})

export default mongoose.model<IFaqPage>("FaqPage", FaqPageSchema);