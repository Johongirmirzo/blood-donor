"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const GalleryPageSchema = new mongoose_1.default.Schema({
    heroImage: String,
    heroImagePath: String,
    heroImageId: String,
    gallery: {
        title: String,
        description: String,
        images: [{ image: String, imagePath: String, imageId: String, imageCreationDate: { type: Date, default: new Date() } }]
    }
});
exports.default = mongoose_1.default.model("GalleryPage", GalleryPageSchema);
