"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const AboutUsPageSchema = new mongoose_1.default.Schema({
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
                volunteerSocialMedia: [{ socialMediaName: String, socialMediaUrl: String }],
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
        achievementList: [{ title: String, result: { type: Number, default: 0 } }]
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
});
exports.default = mongoose_1.default.model("AboutUsPage", AboutUsPageSchema);
