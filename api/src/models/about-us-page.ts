import mongoose from "mongoose";

interface IAboutUs {
    title: string;
    description: string;
    aboutUsImage: string;
    aboutUsImageId: string;
    aboutUsImagePath: string;
    aboutUsList: string[];
}  
interface ISocialMedia {
    socialMediaName: string;
    socialMediaUrl: string;
}
interface IVolunteerList {
    _id?: string;
    volunteerName: string;
    volunteerTitle: string;
    volunteerImage: string;
    volunteerImageId: string;
    volunteerImagePath: string;
    volunteerSocialMedia: ISocialMedia[];
} 
interface IVolunteer {
    title: string;
    description: string;
    volunteerHeroImage: string;
    volunteerHeroImageId: string;
    volunteerHeroImagePath: string;
    volunteers: IVolunteerList[];
}
interface IOurAchievementList {
    title: string;
    result: number;
}
interface IOurAchievements {
    title: string;
    description: string;
    achievementList: IOurAchievementList[];
}
interface IDonorList {
    _id?: string;
    donorReview: string;
    donorName: string;
    donorProfession: string;
    donorLocation: string;
}
interface IDonor {
    title: string,
    description: string,
    donorReviewHeroImage: string,
    donorReviewHeroImageId: string;
    donorReviewHeroImagePath: string;
    donors: IDonorList[];
}
export interface IAboutUsPage extends mongoose.Document {
    heroImage: string;
    heroImageId: string;
    heroImagePath: string;
    aboutUs: IAboutUs;
    volunteers: IVolunteer;
    ourAchievements: IOurAchievements;
    donorReviews: IDonor;
}

const AboutUsPageSchema = new mongoose.Schema({
    heroImage: {
        type: String,
        default: "",
    },
    heroImageId: {
        type: String,
        default: "",
    },
    heroImagePath: {
        type: String,
        default: "",
    },
    aboutUs: {
        title: {
            type: String,
            default: "",
        },
        description: {
            type: String,
            default: "",
        },
        aboutUsImage: {
            type: String,
            default: "",
        },
        aboutUsImageId: {
            type: String,
            default: "",
        },
        aboutUsImagePath: {
            type: String,
            default: "",
        },
        aboutUsList: []
    },
    volunteers: {
        title: {
            type: String,
            default: "",
        },
        description: {
            type: String,
            default: "",
        },
        volunteerHeroImage: {
            type: String,
            default: "",
        },
        volunteerHeroImageId: {
            type: String,
            default: "",
        },
        volunteerHeroImagePath: {
            type: String,
            default: "",
        },
        volunteers: [{
            volunteerName: String, 
            volunteerTitle: String, 
            volunteerImage: String, 
            volunteerImagePath: String, 
            volunteerImageId: String,
            volunteerSocialMedia: [{socialMediaName: String, socialMediaUrl: String}], 
        }]
    },
    ourAchievements: {
        title: {
            type: String,
            default: "",
        },
        description: {
            type: String,
            default: "",
        },
        achievementList: [{title: String, result: {type: Number, default: 0}}]
    },
    donorReviews: {
        title: {
            type: String,
            default: ""
        },
        description: {
            type: String,
            default: ""
        },
        donorReviewHeroImage: {
            type: String,
            default: ""
        },
        donorReviewHeroImageId: {
            type: String,
            default: ""
        },
        donorReviewHeroImagePath: {
            type: String,
            default: ""
        },
        donors: [{
            donorReview: String, 
            donorName: String, 
            donorProfession: String, 
            donorLocation: String
        }]
    }
})

export default mongoose.model("AboutUsPage", AboutUsPageSchema)