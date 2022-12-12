"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validators_1 = require("../middleware/validators");
const validateAdmin_1 = __importDefault(require("../middleware/validateAdmin"));
const isAdmin_1 = __importDefault(require("../middleware/isAdmin"));
const blood_group_1 = __importDefault(require("../controllers/blood-group"));
const router = (0, express_1.Router)();
router.get("/get-all-blood-groups", blood_group_1.default.getAllBloodGroups);
router.get("/get-blood-group/:bloodGroupId", blood_group_1.default.getBloodGroup);
router.post("/create-blood-group", validateAdmin_1.default, isAdmin_1.default, validators_1.bloodGroupValidator, blood_group_1.default.createBloodGroup);
router.put("/edit-blood-group/:bloodGroupId", validateAdmin_1.default, isAdmin_1.default, validators_1.bloodGroupValidator, blood_group_1.default.editBloodGroup);
router.delete("/delete-blood-group/:bloodGroupId", validateAdmin_1.default, isAdmin_1.default, blood_group_1.default.deleteBloodGroup);
exports.default = router;
