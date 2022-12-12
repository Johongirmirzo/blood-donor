"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validators_1 = require("../middleware/validators");
const uploadImage_1 = require("../middleware/uploadImage");
const validateAdmin_1 = __importDefault(require("../middleware/validateAdmin"));
const isAdmin_1 = __importDefault(require("../middleware/isAdmin"));
const contact_us_page_1 = __importDefault(require("../controllers/contact-us-page"));
const router = (0, express_1.Router)();
router.get("/get-all-contact-us-page-data", contact_us_page_1.default.getAllContactUsPageData);
router.get("/get-hero-image", contact_us_page_1.default.getHeroImage);
router.post("/update-hero-image", validateAdmin_1.default, isAdmin_1.default, uploadImage_1.uploadImage.single("contact-us-hero-image"), contact_us_page_1.default.updateHeroImage);
router.get("/get-contact-info", contact_us_page_1.default.getContactInfo);
router.post("/update-contact-info", validateAdmin_1.default, isAdmin_1.default, validators_1.contactInfoValidator, contact_us_page_1.default.updateContactInfo);
exports.default = router;
