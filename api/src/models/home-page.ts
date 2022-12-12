import mongoose from "mongoose";


interface ISlider {
    _id?: string;
    title: string;
    description: string;
    image: string;
    imagePath: string;
    imageId: string;
}
 
interface IHelpfulInfo {
  title: string;
  description: string;
  infoList: string[];  
}
interface IBloodGroup {
    title: string;
    description: string;
    bloodGroupImage: string;
    bloodGroupImageId: string;
    bloodGroupImagePath: string;
    bloodGroupList: string[];
    bloodGroupListDescription: string;
}
interface IInitiative {
    title: string;
    description: string;
}

export interface IHomePage extends mongoose.Document {
    sliders: ISlider[];
    helpfulInfo: IHelpfulInfo;
    bloodGroups: IBloodGroup;
    initiative: IInitiative;
    value: string;
}


const HomePageSchema = new mongoose.Schema({
    sliders: [{
        title: {
            type: String,
            default: "",
        },
        description: { 
            type: String,
            default: "", 
        },
        image: {
            type: String,
            default: "",
        },
        imagePath: {
            type: String,
            default: "",
        },
        imageId: {
            type: String,
            default: "",
        }
    }],
    helpfulInfo: {
        title: {
            type: String,
            default: "", 
        },
        description: {
            type: String,
            default: "",
        },
        infoList: []
    },
    bloodGroups: {
        title: {
            type: String,
            default: "",
            
        },
        description: {
            type: String,
            default: "",
        },
        bloodGroupImage: {
            type: String,
            default: "",
        },
        bloodGroupImageId: {
            type: String,
            default: "",
        },
        bloodGroupImagePath: {
            type: String,
            default: "",
        },
        bloodGroupListDescription: {
            type: String,
            default: "",
        },
        bloodGroupList: []
    },
    initiative: {
        title: {
            type: String,
            default: "", 
        },
    description: {
        type: String,
        default: "",
    },  
},
    value: {
        type: String,
        default: "",
    }
})

export default mongoose.model<IHomePage>("HomePage", HomePageSchema);