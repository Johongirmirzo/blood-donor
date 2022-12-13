"use strict";
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
const home_page_1 = __importDefault(require("../models/home-page"));
const cloudinary_1 = __importDefault(require("../config/cloudinary"));
const HomePageController = {
    getAllHomePageData: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const homePageData = yield home_page_1.default.findOne();
        if (!homePageData) {
            const newHomePage = yield home_page_1.default.create({});
            return res.status(201).json(newHomePage);
        }
        console.log(homePageData);
        res.json(homePageData);
    }),
    getAllSliders: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const homePage = yield home_page_1.default.findOne();
            console.log(homePage);
            res.json(homePage.sliders);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    getSlider: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { sliderId } = req.params;
            const homePage = yield home_page_1.default.findOne();
            const slider = homePage.sliders.find(slider => { var _a; return ((_a = slider._id) === null || _a === void 0 ? void 0 : _a.toString()) === sliderId; });
            res.json(slider);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    createSlider: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { title, description } = req.body;
            const homePage = yield home_page_1.default.findOne();
            const options = {
                use_filename: true,
                unique_filename: false,
                overwrite: true,
            };
            const sliderImage = yield cloudinary_1.default.v2.uploader.upload(req.file.path, options);
            homePage.sliders.push({
                title,
                description,
                image: sliderImage.secure_url,
                imageId: sliderImage.public_id,
                imagePath: req.file.filename
            });
            yield homePage.save();
            console.log(sliderImage);
            res.json(homePage.sliders[homePage.sliders.length - 1]);
        }
        catch (err) {
            console.error(err);
            res.status(400).json({ error: err.message });
        }
    }),
    editSlider: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { sliderId } = req.params;
            const { title, description } = req.body;
            const homePage = yield home_page_1.default.findOne();
            const slider = homePage.sliders.find(slider => { var _a; return ((_a = slider._id) === null || _a === void 0 ? void 0 : _a.toString()) === sliderId; });
            if (slider) {
                const options = {
                    use_filename: true,
                    unique_filename: false,
                    overwrite: true,
                };
                fs_1.default.rm(path_1.default.join(__dirname, `../public/images/${slider.imagePath}`), () => __awaiter(void 0, void 0, void 0, function* () {
                    yield cloudinary_1.default.v2.uploader.destroy(slider.imageId);
                    console.log(slider.imagePath);
                    const newImage = yield cloudinary_1.default.v2.uploader.upload(req.file.path, options);
                    slider.title = title || slider.title;
                    slider.description = description || slider.description;
                    slider.image = newImage.secure_url;
                    slider.imageId = newImage.public_id;
                    slider.imagePath = req.file.filename;
                    yield homePage.save();
                    res.json(slider);
                }));
            }
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    deleteSlider: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { sliderId } = req.params;
            const homePage = yield home_page_1.default.findOne();
            const slider = homePage.sliders.find(slider => { var _a; return ((_a = slider._id) === null || _a === void 0 ? void 0 : _a.toString()) === sliderId; });
            if (slider) {
                fs_1.default.rm(path_1.default.join(__dirname, `../public/images/${slider.imagePath}`), () => __awaiter(void 0, void 0, void 0, function* () {
                    yield cloudinary_1.default.v2.uploader.destroy(slider.imageId);
                    const sliderIndex = homePage.sliders.findIndex(slider => { var _a; return ((_a = slider._id) === null || _a === void 0 ? void 0 : _a.toString()) === sliderId; });
                    homePage.sliders.splice(sliderIndex, 1);
                    yield homePage.save();
                    res.json({ message: "Slider is deleted successfully" });
                }));
            }
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    getHelpfulInfo: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const homePage = yield home_page_1.default.findOne();
            res.json(homePage.helpfulInfo);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    updateHelpfulInfo: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { title, description, infoList } = req.body;
            const homePage = yield home_page_1.default.findOne();
            if (homePage.helpfulInfo.title) {
                homePage.helpfulInfo = Object.assign(Object.assign({}, homePage.helpfulInfo), { title, description, infoList });
            }
            else {
                homePage.helpfulInfo = { title, description, infoList };
            }
            yield homePage.save();
            res.json(homePage.helpfulInfo);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    getBloodGroupsIfno: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const homePage = yield home_page_1.default.findOne();
            res.json(homePage.bloodGroups);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    updateBloodGroupsInfo: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { title, description, bloodGroupList, bloodGroupListDescription } = req.body;
            console.log({ title, description, bloodGroupList, bloodGroupListDescription });
            const homePage = yield home_page_1.default.findOne();
            const options = {
                use_filename: true,
                unique_filename: false,
                overwrite: true,
            };
            if (homePage.bloodGroups.bloodGroupImage) {
                fs_1.default.rm(path_1.default.join(__dirname, `../public/images/${homePage.bloodGroups.bloodGroupImagePath}`), () => __awaiter(void 0, void 0, void 0, function* () {
                    console.log("Update");
                    yield cloudinary_1.default.v2.uploader.destroy(homePage.bloodGroups.bloodGroupImageId);
                    const newImage = yield cloudinary_1.default.v2.uploader.upload(req.file.path, options);
                    homePage.bloodGroups.title = title || homePage.bloodGroups.title;
                    homePage.bloodGroups.description = description || homePage.bloodGroups.description;
                    homePage.bloodGroups.bloodGroupList = JSON.parse(bloodGroupList) || homePage.bloodGroups.bloodGroupList;
                    homePage.bloodGroups.bloodGroupListDescription = bloodGroupListDescription || homePage.bloodGroups.bloodGroupListDescription;
                    homePage.bloodGroups.bloodGroupImage = newImage.secure_url;
                    homePage.bloodGroups.bloodGroupImageId = newImage.public_id;
                    homePage.bloodGroups.bloodGroupImagePath = req.file.filename;
                    yield homePage.save();
                    res.json(homePage.bloodGroups);
                }));
            }
            else {
                const newImage = yield cloudinary_1.default.v2.uploader.upload(req.file.path, options);
                console.log("Create");
                homePage.bloodGroups.title = title;
                homePage.bloodGroups.description = description;
                homePage.bloodGroups.bloodGroupList = JSON.parse(bloodGroupList) || [];
                homePage.bloodGroups.bloodGroupListDescription = bloodGroupListDescription;
                homePage.bloodGroups.bloodGroupImage = newImage.secure_url;
                homePage.bloodGroups.bloodGroupImageId = newImage.public_id;
                homePage.bloodGroups.bloodGroupImagePath = req.file.filename;
                yield homePage.save();
                res.json(homePage.bloodGroups);
            }
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    getInitiative: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const homePage = yield home_page_1.default.findOne();
            res.json(homePage.initiative);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    updateInitiative: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { title, description } = req.body;
            const homePage = yield home_page_1.default.findOne();
            if (homePage.initiative.title) {
                homePage.initiative = Object.assign(Object.assign({}, homePage.initiative), { title, description });
            }
            else {
                homePage.initiative = { title, description };
            }
            yield homePage.save();
            res.json(homePage.initiative);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    getValue: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const homePage = yield home_page_1.default.findOne();
            res.json(homePage.value);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    updateValue: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { value } = req.body;
            const homePage = yield home_page_1.default.findOne();
            if (homePage.value) {
                homePage.value = value || homePage.value;
            }
            else {
                homePage.value = value;
            }
            yield homePage.save();
            res.json(homePage.value);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
};
exports.default = HomePageController;
