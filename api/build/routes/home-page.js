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
const home_page_1 = __importDefault(require("../controllers/home-page"));
const router = (0, express_1.Router)();
router.get("/get-all-sliders", home_page_1.default.getAllSliders);
router.get("/get-slider/:sliderId", home_page_1.default.getSlider);
router.post("/create-slider", validateAdmin_1.default, isAdmin_1.default, uploadImage_1.uploadImage.single("image"), home_page_1.default.createSlider);
router.put("/edit-slider/:sliderId", validateAdmin_1.default, isAdmin_1.default, uploadImage_1.uploadImage.single("image"), home_page_1.default.editSlider);
router.delete("/delete-slider/:sliderId", validateAdmin_1.default, isAdmin_1.default, home_page_1.default.deleteSlider);
router.get("/get-all-home-page-data", home_page_1.default.getAllHomePageData);
router.get("/get-helpful-info", home_page_1.default.getHelpfulInfo);
router.post("/update-helpful-info", validateAdmin_1.default, isAdmin_1.default, validators_1.helpfulInfoValidator, home_page_1.default.updateHelpfulInfo);
router.get("/get-blood-group-info", home_page_1.default.getBloodGroupsIfno);
router.post("/update-blood-group-info", validateAdmin_1.default, isAdmin_1.default, uploadImage_1.uploadImage.single("image"), home_page_1.default.updateBloodGroupsInfo);
router.get("/get-initiative", home_page_1.default.getInitiative);
router.post("/update-initiative", validateAdmin_1.default, isAdmin_1.default, validators_1.initiativeValidator, home_page_1.default.updateInitiative);
router.get("/get-value", home_page_1.default.getValue);
router.post("/update-value", validateAdmin_1.default, isAdmin_1.default, home_page_1.default.updateValue);
exports.default = router;
