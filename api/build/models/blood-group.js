"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const BloodGroupSchema = new mongoose_1.default.Schema({
    bloodType: {
        type: String,
        required: true,
        unique: true,
    },
    creationDate: {
        type: Date,
        default: new Date(),
    }
});
exports.default = mongoose_1.default.model("BloodGroup", BloodGroupSchema);
