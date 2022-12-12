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
const subscriber_1 = __importDefault(require("../models/subscriber"));
const SubscriberController = {
    getALlSubscribers: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const subscribers = yield subscriber_1.default.find();
            res.json(subscribers);
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }),
    getSubscriber: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { subscriberId } = req.params;
            const subscriber = yield subscriber_1.default.findById(subscriberId);
            res.json(subscriber);
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }),
    createSubscriber: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { subscriberEmail } = req.body;
            const subscriber = yield subscriber_1.default.findOne({ subscriberEmail });
            if (subscriber) {
                return res.status(400).json({ error: "Subscriber with current email already exists!" });
            }
            const newSubscriber = yield subscriber_1.default.create({ subscriberEmail, subscriptionDate: new Date() });
            res.status(201).json(newSubscriber);
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }),
    deleteSubscriber: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { subscriberId } = req.params;
            yield subscriber_1.default.findByIdAndDelete(subscriberId);
            res.json({ message: "Subscriber is deleted successfully!" });
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }),
};
exports.default = SubscriberController;
