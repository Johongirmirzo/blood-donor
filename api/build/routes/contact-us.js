"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validators_1 = require("../middleware/validators");
const apiRateLimiters_1 = require("../middleware/apiRateLimiters");
const validateAdmin_1 = __importDefault(require("../middleware/validateAdmin"));
const isAdmin_1 = __importDefault(require("../middleware/isAdmin"));
const contact_us_1 = __importDefault(require("../controllers/contact-us"));
const router = (0, express_1.Router)();
router.get("/get-all-messages", validateAdmin_1.default, isAdmin_1.default, contact_us_1.default.getAllMessage);
router.get("/get-message/:messageId", validateAdmin_1.default, isAdmin_1.default, contact_us_1.default.getMessage);
router.post("/create-message", apiRateLimiters_1.userSendMessageRateLimiter, validators_1.contactUsValidator, contact_us_1.default.createMessage);
router.delete("/delete-message/:messageId", validateAdmin_1.default, isAdmin_1.default, contact_us_1.default.deleteMessage);
exports.default = router;
