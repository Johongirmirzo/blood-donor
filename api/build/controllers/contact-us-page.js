"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const cloudinary_1 = __importStar(require("../config/cloudinary"));
const contact_us_page_1 = __importDefault(require("../models/contact-us-page"));
const ContactUsPageController = {
    getAllContactUsPageData: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const contactUsPage = yield contact_us_page_1.default.findOne();
            if (!contactUsPage) {
                const newContactUsPage = yield contact_us_page_1.default.create({});
                return res.status(201).json(newContactUsPage);
            }
            res.json(contactUsPage);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    getHeroImage: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const contactUsPage = yield contact_us_page_1.default.findOne();
            res.json(contactUsPage.heroImage);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    updateHeroImage: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const contactUsPage = yield contact_us_page_1.default.findOne();
            if (contactUsPage.heroImage) {
                fs_1.default.rm(path_1.default.join(__dirname, `../public/images/${contactUsPage.heroImagePath}`), () => __awaiter(void 0, void 0, void 0, function* () {
                    yield cloudinary_1.default.v2.uploader.destroy(contactUsPage.heroImageId);
                    const newImage = yield cloudinary_1.default.v2.uploader.upload(req.file.path, cloudinary_1.cloudinaryOptions);
                    contactUsPage.heroImage = newImage.secure_url;
                    contactUsPage.heroImageId = newImage.public_id;
                    contactUsPage.heroImagePath = req.file.filename;
                    yield contactUsPage.save();
                    res.json(contactUsPage.heroImage);
                }));
            }
            else {
                const newImage = yield cloudinary_1.default.v2.uploader.upload(req.file.path, cloudinary_1.cloudinaryOptions);
                contactUsPage.heroImage = newImage.secure_url;
                contactUsPage.heroImageId = newImage.public_id;
                contactUsPage.heroImagePath = req.file.filename;
                yield contactUsPage.save();
                res.json(contactUsPage.heroImage);
            }
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    getContactInfo: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const contactUsPage = yield contact_us_page_1.default.findOne();
            res.json(contactUsPage.contactInfo);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    updateContactInfo: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { supportEmail, helpEmail, address, officePhoneNumber, cellPhoneNumber } = req.body;
            const contactUsPage = yield contact_us_page_1.default.findOne();
            contactUsPage.contactInfo = Object.assign(Object.assign({}, contactUsPage.contactInfo), { supportEmail,
                helpEmail,
                address,
                officePhoneNumber,
                cellPhoneNumber });
            yield contactUsPage.save();
            res.json(contactUsPage.contactInfo);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
};
exports.default = ContactUsPageController;
