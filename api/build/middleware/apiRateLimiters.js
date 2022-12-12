"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminLoginRateLimiter = exports.userSubscriptionRateLimter = exports.userSendMessageRateLimiter = exports.donorRegisterRateLimiter = exports.donorLoginRateLimiter = void 0;
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const donorLoginRateLimiter = (0, express_rate_limit_1.default)({
    windowMs: 60 * 60 * 1000,
    max: 3,
    message: 'Too many login attempts. please try again after an hour!',
    standardHeaders: true,
    legacyHeaders: false,
});
exports.donorLoginRateLimiter = donorLoginRateLimiter;
const donorRegisterRateLimiter = (0, express_rate_limit_1.default)({
    windowMs: 1000 * 60 * 60 * 24,
    max: 1,
    message: 'You can create one account a day. please try again after 24 hours!',
    standardHeaders: true,
    legacyHeaders: false,
});
exports.donorRegisterRateLimiter = donorRegisterRateLimiter;
const userSendMessageRateLimiter = (0, express_rate_limit_1.default)({
    windowMs: 1000 * 60 * 60 * 24,
    max: 1,
    message: 'You can send one message a day. please try again after 24 hours!',
    standardHeaders: true,
    legacyHeaders: false,
});
exports.userSendMessageRateLimiter = userSendMessageRateLimiter;
const userSubscriptionRateLimter = (0, express_rate_limit_1.default)({
    windowMs: 1000 * 60 * 60 * 24,
    max: 1,
    message: 'You can subscribe once a day only. please try again after 24 hours!',
    standardHeaders: true,
    legacyHeaders: false,
});
exports.userSubscriptionRateLimter = userSubscriptionRateLimter;
const adminLoginRateLimiter = (0, express_rate_limit_1.default)({
    windowMs: 60 * 60 * 1000,
    max: 3,
    message: 'Too many login attempts. please try again after an hour!',
    standardHeaders: true,
    legacyHeaders: false,
});
exports.adminLoginRateLimiter = adminLoginRateLimiter;
