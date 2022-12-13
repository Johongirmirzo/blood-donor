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
const faq_page_1 = __importDefault(require("../models/faq-page"));
const FaqPageController = {
    getAllFaqPageData: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const faqPage = yield faq_page_1.default.findOne();
            if (!faqPage) {
                const newFaqPage = yield faq_page_1.default.create({});
                return res.status(201).json(newFaqPage);
            }
            res.json(faqPage);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    getHeroImage: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const faqPage = yield faq_page_1.default.findOne();
            res.json(faqPage.heroImage);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    updateHeroImage: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const faqPage = yield faq_page_1.default.findOne();
            if (faqPage.heroImage) {
                fs_1.default.rm(path_1.default.join(__dirname, `../public/images/${faqPage.heroImagePath}`), () => __awaiter(void 0, void 0, void 0, function* () {
                    yield cloudinary_1.default.v2.uploader.destroy(faqPage.heroImageId);
                    const newImage = yield cloudinary_1.default.v2.uploader.upload(req.file.path, cloudinary_1.cloudinaryOptions);
                    faqPage.heroImage = newImage.secure_url;
                    faqPage.heroImageId = newImage.public_id;
                    faqPage.heroImagePath = req.file.filename;
                    yield faqPage.save();
                    res.json(faqPage.heroImage);
                }));
            }
            else {
                const newImage = yield cloudinary_1.default.v2.uploader.upload(req.file.path, cloudinary_1.cloudinaryOptions);
                faqPage.heroImage = newImage.secure_url;
                faqPage.heroImageId = newImage.public_id;
                faqPage.heroImagePath = req.file.filename;
                yield faqPage.save();
                res.json(faqPage.heroImage);
            }
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    getFaqsSection: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const faqPage = yield faq_page_1.default.findOne();
            res.json(faqPage.faq);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    updateFaqsSection: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { title, description } = req.body;
            const faqPage = yield faq_page_1.default.findOne();
            faqPage.faq = Object.assign(Object.assign({}, faqPage.faq), { title,
                description });
            yield faqPage.save();
            res.json(faqPage.faq);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    getAllFaqs: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const faqPage = yield faq_page_1.default.findOne();
            res.json(faqPage.faq.faqList);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    getFaq: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { faqId } = req.params;
            const faqPage = yield faq_page_1.default.findOne();
            const faq = faqPage.faq.faqList.find(faq => { var _a; return ((_a = faq._id) === null || _a === void 0 ? void 0 : _a.toString()) === faqId; });
            res.json(faq);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    createFaq: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { question, answer } = req.body;
            const faqPage = yield faq_page_1.default.findOne();
            faqPage.faq.faqList.push({ question, answer });
            yield faqPage.save();
            res.status(201).json(faqPage.faq.faqList[faqPage.faq.faqList.length - 1]);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    editFaq: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { faqId } = req.params;
            const { question, answer } = req.body;
            const faqPage = yield faq_page_1.default.findOne();
            const faq = faqPage.faq.faqList.filter(faq => { var _a; return ((_a = faq._id) === null || _a === void 0 ? void 0 : _a.toString()) === faqId; })[0];
            faq.question = question || faq.question;
            faq.answer = answer || faq.answer;
            yield faqPage.save();
            res.json(faq);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    deleteFaq: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { faqId } = req.params;
            const faqPage = yield faq_page_1.default.findOne();
            const faqIndex = faqPage.faq.faqList.findIndex(faq => { var _a; return ((_a = faq._id) === null || _a === void 0 ? void 0 : _a.toString()) === faqId; });
            faqPage.faq.faqList.splice(faqIndex, 1);
            yield faqPage.save();
            res.json("Faq is deleted successfully!");
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    getAllSponsors: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const faqPage = yield faq_page_1.default.findOne();
            res.json(faqPage.sponsor.images);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    createSponsor: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const faqPage = yield faq_page_1.default.findOne();
            const newImage = yield cloudinary_1.default.v2.uploader.upload(req.file.path, cloudinary_1.cloudinaryOptions);
            faqPage.sponsor.images.push({
                image: newImage.secure_url,
                imageId: newImage.public_id,
                imagePath: req.file.filename,
                imageCreationDate: new Date().toString()
            });
            yield faqPage.save();
            res.json(faqPage.sponsor.images[faqPage.sponsor.images.length - 1]);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    deleteSponsor: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { sponsorId } = req.params;
            const faqPage = yield faq_page_1.default.findOne();
            const sponsor = faqPage.sponsor.images.filter(image => { var _a; return ((_a = image._id) === null || _a === void 0 ? void 0 : _a.toString()) === sponsorId; })[0];
            fs_1.default.rm(path_1.default.join(__dirname, `../public/images/${sponsor.imagePath}`), () => __awaiter(void 0, void 0, void 0, function* () {
                yield cloudinary_1.default.v2.uploader.destroy(sponsor.imageId);
                const sponsorIndex = faqPage.sponsor.images.findIndex(image => { var _a; return ((_a = image._id) === null || _a === void 0 ? void 0 : _a.toString()) === sponsorId; });
                faqPage.sponsor.images.splice(sponsorIndex, 1);
                yield faqPage.save();
            }));
            res.json({ message: "Sponsor image is deleted successfully!" });
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    getSponsorsSection: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const faqPage = yield faq_page_1.default.findOne();
            res.json(faqPage.sponsor);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    updateSponsorsSection: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { title, description } = req.body;
            const faqPage = yield faq_page_1.default.findOne();
            faqPage.sponsor = Object.assign(Object.assign({}, faqPage.sponsor), { title,
                description });
            yield faqPage.save();
            res.json(faqPage.sponsor);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
};
exports.default = FaqPageController;
