import mongoose from "mongoose";

interface IContactInfo {
    supportEmail: string;
    helpEmail: string;
    address: string;
    officePhoneNumber: string;
    cellPhoneNumber: string;  
}
export interface IContactUsPage extends mongoose.Document {
    heroImage: string;
    heroImageId: string;
    heroImagePath: string;
    contactInfo: IContactInfo;
}

const ContactUsPageSchmea = new mongoose.Schema({
    heroImage: String,
    heroImageId: String,
    heroImagePath: String,
    contactInfo: {
        supportEmail: String,
        helpEmail: String,
        address: String,
        officePhoneNumber: String,
        cellPhoneNumber: String   
    }
})

export default mongoose.model<IContactUsPage>("ContactUsPage", ContactUsPageSchmea)