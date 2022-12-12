"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const BloodRequirerSchema = new mongoose_1.default.Schema({
    fullname: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    bloodNeededFor: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    donorId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Donor"
    },
    applyDate: {
        type: Date,
        default: new Date()
    }
});
exports.default = mongoose_1.default.model("BloodRequirer", BloodRequirerSchema);
