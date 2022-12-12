"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const HomePageSchema = new mongoose_1.default.Schema({
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
});
exports.default = mongoose_1.default.model("HomePage", HomePageSchema);
