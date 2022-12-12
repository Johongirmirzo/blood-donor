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
const about_us_page_1 = __importDefault(require("../models/about-us-page"));
const AboutUsPageController = {
    getAllAboutUsPageData: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const aboutUsData = yield about_us_page_1.default.findOne();
            if (!aboutUsData) {
                const aboutUsData = yield about_us_page_1.default.create({});
                return res.json(aboutUsData);
            }
            res.json(aboutUsData);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    getHeroImage: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const aboutUsData = yield about_us_page_1.default.findOne();
            res.json(aboutUsData.heroImage);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    updateHeroImage: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const aboutUsData = yield about_us_page_1.default.findOne();
            if (aboutUsData.heroImage) {
                fs_1.default.rm(path_1.default.join(__dirname, `../public/images/${aboutUsData.heroImagePath}`), () => __awaiter(void 0, void 0, void 0, function* () {
                    yield cloudinary_1.default.v2.uploader.destroy(aboutUsData.heroImageId);
                    const newImage = yield cloudinary_1.default.v2.uploader.upload(req.file.path, cloudinary_1.cloudinaryOptions);
                    aboutUsData.heroImage = newImage.secure_url;
                    aboutUsData.heroImageId = newImage.public_id;
                    aboutUsData.heroImagePath = req.file.filename;
                    console.log(newImage);
                    yield aboutUsData.save();
                    res.json(aboutUsData.heroImage);
                }));
            }
            else {
                const newImage = yield cloudinary_1.default.v2.uploader.upload(req.file.path, cloudinary_1.cloudinaryOptions);
                aboutUsData.heroImage = newImage.secure_url;
                aboutUsData.heroImageId = newImage.public_id;
                aboutUsData.heroImagePath = req.file.filename;
                yield aboutUsData.save();
                res.json(aboutUsData.heroImage);
            }
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    getAboutUs: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const aboutUsData = yield about_us_page_1.default.findOne();
            res.json(aboutUsData.aboutUs);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    updateAboutUs: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { title, description, aboutUsList = [] } = req.body;
            const aboutUsData = yield about_us_page_1.default.findOne();
            const aboutUsParsedList = JSON.parse(aboutUsList);
            if (aboutUsData.aboutUs.aboutUsImage) {
                fs_1.default.rm(path_1.default.join(__dirname, `../public/images/${aboutUsData.aboutUs.aboutUsImagePath}`), () => __awaiter(void 0, void 0, void 0, function* () {
                    yield cloudinary_1.default.v2.uploader.destroy(aboutUsData.aboutUs.aboutUsImageId);
                    const newImage = yield cloudinary_1.default.v2.uploader.upload(req.file.path, cloudinary_1.cloudinaryOptions);
                    aboutUsData.aboutUs = Object.assign(Object.assign({}, aboutUsData.aboutUs), { title,
                        description, aboutUsList: aboutUsParsedList, aboutUsImage: newImage.secure_url, aboutUsImageId: newImage.public_id, aboutUsImagePath: req.file.filename });
                    yield aboutUsData.save();
                    res.json(aboutUsData.aboutUs);
                }));
            }
            else {
                const newImage = yield cloudinary_1.default.v2.uploader.upload(req.file.path, cloudinary_1.cloudinaryOptions);
                aboutUsData.aboutUs = {
                    title,
                    description,
                    aboutUsList: aboutUsParsedList,
                    aboutUsImage: newImage.secure_url,
                    aboutUsImageId: newImage.public_id,
                    aboutUsImagePath: req.file.filename,
                };
                yield aboutUsData.save();
                res.json(aboutUsData.aboutUs);
            }
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    getAllVolunteers: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const aboutUsData = yield about_us_page_1.default.findOne();
            res.json(aboutUsData.volunteers.volunteers);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    getVolunteer: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { volunteerId } = req.params;
            const aboutUsData = yield about_us_page_1.default.findOne();
            const volunteer = aboutUsData.volunteers.volunteers.find(volunteer => { var _a; return ((_a = volunteer._id) === null || _a === void 0 ? void 0 : _a.toString()) === volunteerId; });
            res.json(volunteer);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    createVolunteer: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { volunteerName, volunteerTitle, volunteerSocialMedia = [] } = req.body;
            const aboutUsData = yield about_us_page_1.default.findOne();
            const parsedVolunteerSocialMedia = JSON.parse(volunteerSocialMedia);
            const newImage = yield cloudinary_1.default.v2.uploader.upload(req.file.path, cloudinary_1.cloudinaryOptions);
            aboutUsData.volunteers.volunteers.push({
                volunteerName,
                volunteerTitle,
                volunteerSocialMedia: parsedVolunteerSocialMedia,
                volunteerImage: newImage.secure_url,
                volunteerImageId: newImage.public_id,
                volunteerImagePath: req.file.filename
            });
            yield aboutUsData.save();
            res.status(201).json(aboutUsData.volunteers.volunteers.at(-1));
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    editVolunteer: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { volunteerName, volunteerTitle, volunteerSocialMedia = [] } = req.body;
            const { volunteerId } = req.params;
            const aboutUsData = yield about_us_page_1.default.findOne();
            const volunteer = aboutUsData.volunteers.volunteers.filter(volunteer => { var _a; return ((_a = volunteer._id) === null || _a === void 0 ? void 0 : _a.toString()) === volunteerId; })[0];
            fs_1.default.rm(path_1.default.join(__dirname, `../public/images/${volunteer === null || volunteer === void 0 ? void 0 : volunteer.volunteerImagePath}`), () => __awaiter(void 0, void 0, void 0, function* () {
                yield cloudinary_1.default.v2.uploader.destroy(volunteer === null || volunteer === void 0 ? void 0 : volunteer.volunteerImageId);
                const newImage = yield cloudinary_1.default.v2.uploader.upload(req.file.path, cloudinary_1.cloudinaryOptions);
                volunteer.volunteerName = volunteerName || volunteer.volunteerName;
                volunteer.volunteerTitle = volunteerTitle || volunteer.volunteerTitle;
                volunteer.volunteerSocialMedia = volunteerSocialMedia.length ? JSON.parse(volunteerSocialMedia) : volunteer.volunteerSocialMedia;
                volunteer.volunteerImage = newImage.secure_url;
                volunteer.volunteerImageId = newImage.public_id;
                volunteer.volunteerImagePath = req.file.filename;
                yield aboutUsData.save();
                res.json(volunteer);
            }));
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    deleteVolunteer: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { volunteerId } = req.params;
            const aboutUsData = yield about_us_page_1.default.findOne();
            const volunteer = aboutUsData.volunteers.volunteers.filter(volunteer => { var _a; return ((_a = volunteer._id) === null || _a === void 0 ? void 0 : _a.toString()) === volunteerId; })[0];
            fs_1.default.rm(path_1.default.join(__dirname, `../public/images/${volunteer === null || volunteer === void 0 ? void 0 : volunteer.volunteerImagePath}`), () => __awaiter(void 0, void 0, void 0, function* () {
                yield cloudinary_1.default.v2.uploader.destroy(volunteer === null || volunteer === void 0 ? void 0 : volunteer.volunteerImageId);
                const volunteerIndex = aboutUsData.volunteers.volunteers.findIndex(volunteer => { var _a; return ((_a = volunteer._id) === null || _a === void 0 ? void 0 : _a.toString()) === volunteerId; });
                aboutUsData.volunteers.volunteers.splice(volunteerIndex, 1);
                yield aboutUsData.save();
                res.json("Volunteer is deleted successfully!");
            }));
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    getVolunteerSection: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const aboutUsData = yield about_us_page_1.default.findOne();
            res.json(aboutUsData.volunteers);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    updateVolunteerSection: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { title, description } = req.body;
            const aboutUsData = yield about_us_page_1.default.findOne();
            if (aboutUsData.volunteers.volunteerHeroImage) {
                fs_1.default.rm(path_1.default.join(__dirname, `../public/images/${aboutUsData.volunteers.volunteerHeroImagePath}`), () => __awaiter(void 0, void 0, void 0, function* () {
                    yield cloudinary_1.default.v2.uploader.destroy(aboutUsData.volunteers.volunteerHeroImageId);
                    const newImage = yield cloudinary_1.default.v2.uploader.upload(req.file.path, cloudinary_1.cloudinaryOptions);
                    aboutUsData.volunteers = Object.assign(Object.assign({}, aboutUsData.volunteers), { title,
                        description, volunteerHeroImage: newImage.secure_url, volunteerHeroImageId: newImage.public_id, volunteerHeroImagePath: req.file.filename });
                    yield aboutUsData.save();
                    res.json(aboutUsData.volunteers);
                }));
            }
            else {
                const newImage = yield cloudinary_1.default.v2.uploader.upload(req.file.path, cloudinary_1.cloudinaryOptions);
                aboutUsData.volunteers = Object.assign(Object.assign({}, aboutUsData.volunteers), { title,
                    description, volunteerHeroImage: newImage.secure_url, volunteerHeroImageId: newImage.public_id, volunteerHeroImagePath: req.file.filename });
                yield aboutUsData.save();
                res.json(aboutUsData.volunteers);
            }
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    getOurAchievements: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const aboutUsData = yield about_us_page_1.default.findOne();
            res.json(aboutUsData.ourAchievements);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    updateOurAchievements: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { title, description, achievementList = [] } = req.body;
            const aboutUsData = yield about_us_page_1.default.findOne();
            if (aboutUsData.ourAchievements.title) {
                aboutUsData.ourAchievements = Object.assign(Object.assign({}, aboutUsData.ourAchievements), { title,
                    description,
                    achievementList });
            }
            else {
                aboutUsData.ourAchievements = {
                    title,
                    description,
                    achievementList
                };
            }
            yield aboutUsData.save();
            res.json(aboutUsData.ourAchievements);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    getAllDonorReviews: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const aboutUsData = yield about_us_page_1.default.findOne();
            res.json(aboutUsData.donorReviews.donors);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    getDonorReview: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { donorReviewId } = req.params;
            const aboutUsData = yield about_us_page_1.default.findOne();
            const donor = aboutUsData.donorReviews.donors.find(donor => { var _a; return ((_a = donor._id) === null || _a === void 0 ? void 0 : _a.toString()) === donorReviewId; });
            res.json(donor);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    createDonorReview: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { donorReview, donorName, donorProfession, donorLocation } = req.body;
            const aboutUsData = yield about_us_page_1.default.findOne();
            aboutUsData.donorReviews.donors.push({
                donorReview,
                donorName,
                donorProfession,
                donorLocation
            });
            yield aboutUsData.save();
            res.status(201).json(aboutUsData.donorReviews.donors.at(-1));
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    editDonorReview: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { donorReviewId } = req.params;
            const { donorReview, donorName, donorProfession, donorLocation } = req.body;
            const aboutUsData = yield about_us_page_1.default.findOne();
            const donor = aboutUsData.donorReviews.donors.find(donor => { var _a; return ((_a = donor._id) === null || _a === void 0 ? void 0 : _a.toString()) === donorReviewId; });
            console.log(donor, donorReviewId);
            if (donor) {
                donor.donorReview = donorReview || donor.donorReview;
                donor.donorName = donorName || donor.donorName;
                donor.donorProfession = donorProfession || donor.donorProfession;
                donor.donorLocation = donorLocation || donor.donorLocation;
            }
            yield aboutUsData.save();
            res.json(donor);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    deleteDonorReview: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { donorReviewId } = req.params;
            const aboutUsData = yield about_us_page_1.default.findOne();
            const donorIndex = aboutUsData.donorReviews.donors.findIndex(donor => { var _a; return ((_a = donor._id) === null || _a === void 0 ? void 0 : _a.toString()) === donorReviewId; });
            aboutUsData.donorReviews.donors.splice(donorIndex, 1);
            yield aboutUsData.save();
            res.json("Donor review is deleted successfully!");
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    getDonorReviewSection: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const aboutUsData = yield about_us_page_1.default.findOne();
            res.json(aboutUsData.donorReviews);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    updateDonorReviewSection: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { title, description } = req.body;
            const aboutUsData = yield about_us_page_1.default.findOne();
            if (aboutUsData.donorReviews.donorReviewHeroImage) {
                fs_1.default.rm(path_1.default.join(__dirname, `../public/images/${aboutUsData.donorReviews.donorReviewHeroImagePath}`), () => __awaiter(void 0, void 0, void 0, function* () {
                    yield cloudinary_1.default.v2.uploader.destroy(aboutUsData.donorReviews.donorReviewHeroImageId);
                    const newImage = yield cloudinary_1.default.v2.uploader.upload(req.file.path, cloudinary_1.cloudinaryOptions);
                    aboutUsData.donorReviews = Object.assign(Object.assign({}, aboutUsData.donorReviews), { title,
                        description, donorReviewHeroImage: newImage.secure_url, donorReviewHeroImageId: newImage.public_id, donorReviewHeroImagePath: req.file.filename });
                    yield aboutUsData.save();
                    res.json(aboutUsData.donorReviews);
                }));
            }
            else {
                const newImage = yield cloudinary_1.default.v2.uploader.upload(req.file.path, cloudinary_1.cloudinaryOptions);
                aboutUsData.donorReviews = Object.assign(Object.assign({}, aboutUsData.donorReviews), { title,
                    description, donorReviewHeroImage: newImage.secure_url, donorReviewHeroImageId: newImage.public_id, donorReviewHeroImagePath: req.file.filename });
                yield aboutUsData.save();
                res.json(aboutUsData.donorReviews);
            }
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
};
exports.default = AboutUsPageController;
