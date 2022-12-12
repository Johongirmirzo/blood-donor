"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validators_1 = require("../middleware/validators");
const validateAdmin_1 = __importDefault(require("../middleware/validateAdmin"));
const isAdmin_1 = __importDefault(require("../middleware/isAdmin"));
const blood_requirer_1 = __importDefault(require("../controllers/blood-requirer"));
const router = (0, express_1.Router)();
router.get("/get-all-blood-requirers", blood_requirer_1.default.getAllBloodRequirers);
router.get("/get-blood-requirer/:bloodRequirerId", validateAdmin_1.default, isAdmin_1.default, blood_requirer_1.default.getBloodRequirer);
router.post("/create-blood-requirer", validators_1.bloodRequirerValidator, blood_requirer_1.default.createBloodRequirer);
router.delete("/delete-blood-requirer/:bloodRequirerId", validateAdmin_1.default, isAdmin_1.default, blood_requirer_1.default.deleteBloodRequirer);
exports.default = router;
