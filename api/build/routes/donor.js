"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const donor_1 = __importDefault(require("../controllers/donor"));
const validateDonor_1 = __importDefault(require("../middleware/validateDonor"));
const validators_1 = require("../middleware/validators");
const router = (0, express_1.Router)();
router.post("/login", validators_1.loginValidator, donor_1.default.login);
router.post("/register", validators_1.registerValidator, donor_1.default.register);
router.delete("/logout/:donorId", donor_1.default.logout);
router.put("/change-profile/:donorId", validateDonor_1.default, validators_1.changeProfileValidator, donor_1.default.changeProfile);
router.put("/change-password/:donorId", validateDonor_1.default, validators_1.changePasswordValidator, donor_1.default.changePassword);
exports.default = router;
