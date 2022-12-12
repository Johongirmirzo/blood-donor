"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const FaqPageSchema = new mongoose_1.default.Schema({
    heroImage: String,
    heroImagePath: String,
    heroImageId: String,
    faq: {
        title: String,
        description: String,
        faqList: [{ question: String, answer: String }]
    },
    sponsor: {
        title: String,
        description: String,
        images: [{ image: String, imageId: String, imagePath: String, imageCreationDate: { type: Date, default: Date.now() } }]
    }
});
exports.default = mongoose_1.default.model("FaqPage", FaqPageSchema);
