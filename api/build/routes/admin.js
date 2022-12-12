"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_1 = __importDefault(require("../controllers/admin"));
const validateAdmin_1 = __importDefault(require("../middleware/validateAdmin"));
const validators_1 = require("../middleware/validators");
const router = (0, express_1.Router)();
router.post("/login", validators_1.loginValidator, admin_1.default.login);
router.delete("/logout/:adminId", admin_1.default.logout);
router.put("/change-profile/:adminId", validateAdmin_1.default, validators_1.changeProfileValidator, admin_1.default.changeProfile);
router.put("/change-password/:adminId", validateAdmin_1.default, validators_1.changePasswordValidator, admin_1.default.changePassword);
router.get("/get-all-donors", admin_1.default.getAllDonors);
router.get("/get-donor/:donorId", admin_1.default.getDonor);
router.put("/toggle-donor/:donorId", validateAdmin_1.default, admin_1.default.toggleDonor);
router.delete("/delete-donor/:donorId", validateAdmin_1.default, admin_1.default.deleteDonor);
exports.default = router;
