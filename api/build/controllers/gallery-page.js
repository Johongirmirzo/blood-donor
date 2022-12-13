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
const gallery_page_1 = __importDefault(require("../models/gallery-page"));
const cloudinary_1 = __importStar(require("../config/cloudinary"));
const GalleryPageController = {
    getAllGalleryPageData: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const galleryPageData = yield gallery_page_1.default.findOne();
            if (!galleryPageData) {
                const newGalleryPageData = yield gallery_page_1.default.create({});
                return res.status(201).json(newGalleryPageData);
            }
            res.json(galleryPageData);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    getHeroImage: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const galleryPage = yield gallery_page_1.default.findOne();
            res.json(galleryPage.heroImage);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    updateHeroImage: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const galleryPage = yield gallery_page_1.default.findOne();
            if (galleryPage.heroImage) {
                fs_1.default.rm(path_1.default.join(__dirname, `../public/images/${galleryPage.heroImagePath}`), () => __awaiter(void 0, void 0, void 0, function* () {
                    yield cloudinary_1.default.v2.uploader.destroy(galleryPage.heroImageId);
                    const newImage = yield cloudinary_1.default.v2.uploader.upload(req.file.path, cloudinary_1.cloudinaryOptions);
                    galleryPage.heroImage = newImage.secure_url;
                    galleryPage.heroImageId = newImage.public_id;
                    galleryPage.heroImagePath = req.file.filename;
                    yield galleryPage.save();
                    res.json(galleryPage.heroImage);
                }));
            }
            else {
                const newImage = yield cloudinary_1.default.v2.uploader.upload(req.file.path, cloudinary_1.cloudinaryOptions);
                galleryPage.heroImage = newImage.secure_url;
                galleryPage.heroImageId = newImage.public_id;
                galleryPage.heroImagePath = req.file.filename;
                yield galleryPage.save();
                res.json(galleryPage.heroImage);
            }
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    getGallery: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const galleryPage = yield gallery_page_1.default.findOne();
            res.json(galleryPage.gallery);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    createGallery: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const galleryPage = yield gallery_page_1.default.findOne();
            const newImage = yield cloudinary_1.default.v2.uploader.upload(req.file.path, cloudinary_1.cloudinaryOptions);
            galleryPage.gallery.images.push({
                image: newImage.secure_url,
                imageId: newImage.public_id,
                imagePath: req.file.filename,
                imageCreationDate: new Date().toString()
            });
            yield galleryPage.save();
            res.status(201).json(galleryPage.gallery.images[galleryPage.gallery.images.length - 1]);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    deleteGallery: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { imageId } = req.params;
            const galleryPage = yield gallery_page_1.default.findOne();
            const image = galleryPage.gallery.images.find(image => { var _a; return ((_a = image._id) === null || _a === void 0 ? void 0 : _a.toString()) === imageId; });
            if (image) {
                fs_1.default.rm(path_1.default.join(__dirname, `../public/images/${image.imagePath}`), () => __awaiter(void 0, void 0, void 0, function* () {
                    yield cloudinary_1.default.v2.uploader.destroy(image.imageId);
                    const imageIndex = galleryPage.gallery.images.findIndex(image => { var _a; return ((_a = image._id) === null || _a === void 0 ? void 0 : _a.toString()) == imageId; });
                    galleryPage.gallery.images.splice(imageIndex, 1);
                    yield galleryPage.save();
                    res.json({ message: "Image is deleted successfully!" });
                }));
                return;
            }
            res.json("Current iamge does not exist");
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    getGallerySection: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const galleryPage = yield gallery_page_1.default.findOne();
            res.json(galleryPage.gallery);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    updateGallerySection: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { title, description } = req.body;
            const galleryPage = yield gallery_page_1.default.findOne();
            if (galleryPage.gallery.title) {
                galleryPage.gallery = Object.assign(Object.assign({}, galleryPage.gallery), { title,
                    description });
            }
            else {
                galleryPage.gallery = Object.assign(Object.assign({}, galleryPage.gallery), { title,
                    description });
            }
            yield galleryPage.save();
            res.json(galleryPage.gallery);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
};
exports.default = GalleryPageController;
