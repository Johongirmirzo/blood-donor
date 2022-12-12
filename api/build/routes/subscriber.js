"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validators_1 = require("../middleware/validators");
const validateAdmin_1 = __importDefault(require("../middleware/validateAdmin"));
const isAdmin_1 = __importDefault(require("../middleware/isAdmin"));
const subscriber_1 = __importDefault(require("../controllers/subscriber"));
const router = (0, express_1.Router)();
router.get("/get-all-subscribers", validateAdmin_1.default, isAdmin_1.default, subscriber_1.default.getALlSubscribers);
router.get("/get-subscriber/:subscriberId", validateAdmin_1.default, isAdmin_1.default, subscriber_1.default.getSubscriber);
router.post("/create-subscriber", validators_1.subscriberValidator, subscriber_1.default.createSubscriber);
router.delete("/delete-subscriber/:subscriberId", validateAdmin_1.default, isAdmin_1.default, subscriber_1.default.deleteSubscriber);
exports.default = router;
