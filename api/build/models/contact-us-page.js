"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ContactUsPageSchmea = new mongoose_1.default.Schema({
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
});
exports.default = mongoose_1.default.model("ContactUsPage", ContactUsPageSchmea);
