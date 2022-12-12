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
const contact_us_1 = __importDefault(require("../models/contact-us"));
// If you have everything under control, you're not moving fast enough.
// Mario Andretti
const ContactUsController = {
    getAllMessage: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const messages = yield contact_us_1.default.find();
            res.json(messages);
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }),
    getMessage: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { messageId } = req.params;
            const message = yield contact_us_1.default.findById(messageId);
            res.json(message);
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }),
    createMessage: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { fullname, email, phoneNumber, message } = req.body;
            const userMessage = yield contact_us_1.default.create({
                fullname,
                email,
                phoneNumber,
                message,
                messageDate: new Date()
            });
            res.status(201).json(userMessage);
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }),
    deleteMessage: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { messageId } = req.params;
            yield contact_us_1.default.findByIdAndDelete(messageId);
            res.json({ message: "User message is deleted successfully!" });
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }),
};
exports.default = ContactUsController;
