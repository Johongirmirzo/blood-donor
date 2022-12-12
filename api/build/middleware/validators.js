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
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactInfoValidator = exports.faqValidator = exports.galleryValidator = exports.donorReviewValidator = exports.achievementsValidator = exports.valueValidator = exports.initiativeValidator = exports.helpfulInfoValidator = exports.sliderValidator = exports.bloodRequirerValidator = exports.subscriberValidator = exports.contactUsValidator = exports.bloodGroupValidator = exports.changeProfileValidator = exports.changePasswordValidator = exports.loginValidator = exports.registerValidator = void 0;
const schemas_1 = require("../schemas");
const registerValidator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield schemas_1.donorRegisterSchema.validate(req.body, { abortEarly: false });
        next();
    }
    catch (err) {
        res.json({ errors: err.errors });
    }
});
exports.registerValidator = registerValidator;
const loginValidator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield schemas_1.donorLoginSchema.validate(req.body, { abortEarly: false });
        next();
    }
    catch (err) {
        res.json({ errors: err.errors });
    }
});
exports.loginValidator = loginValidator;
const changePasswordValidator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield schemas_1.changePasswordSchema.validate(req.body, { abortEarly: false });
        next();
    }
    catch (err) {
        res.json({ errors: err.errors });
    }
});
exports.changePasswordValidator = changePasswordValidator;
const changeProfileValidator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield schemas_1.changeProfileSchema.validate(req.body, { abortEarly: false });
        next();
    }
    catch (err) {
        res.json({ errors: err.errors });
    }
});
exports.changeProfileValidator = changeProfileValidator;
const bloodGroupValidator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield schemas_1.bloodGroupSchema.validate(req.body, { abortEarly: false });
        next();
    }
    catch (err) {
        res.json({ errors: err.errors });
    }
});
exports.bloodGroupValidator = bloodGroupValidator;
const contactUsValidator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield schemas_1.contactUsSchema.validate(req.body, { abortEarly: false });
        next();
    }
    catch (err) {
        res.json({ errors: err.errors });
    }
});
exports.contactUsValidator = contactUsValidator;
const subscriberValidator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield schemas_1.subscriberSchema.validate(req.body, { abortEarly: false });
        next();
    }
    catch (err) {
        res.json({ errors: err.errors });
    }
});
exports.subscriberValidator = subscriberValidator;
const bloodRequirerValidator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield schemas_1.bloodRequirerSchema.validate(req.body, { abortEarly: false });
        next();
    }
    catch (err) {
        res.json({ errors: err.errors });
    }
});
exports.bloodRequirerValidator = bloodRequirerValidator;
const sliderValidator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield schemas_1.sliderSchema.validate(req.body, { abortEarly: false });
        next();
    }
    catch (err) {
        res.json({ errors: err.errors });
    }
});
exports.sliderValidator = sliderValidator;
const helpfulInfoValidator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield schemas_1.helpfulInfoSchema.validate(req.body, { abortEarly: false });
        next();
    }
    catch (err) {
        res.json({ errors: err.errors });
    }
});
exports.helpfulInfoValidator = helpfulInfoValidator;
const initiativeValidator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield schemas_1.initiativeSchema.validate(req.body, { abortEarly: false });
        next();
    }
    catch (err) {
        res.json({ errors: err.errors });
    }
});
exports.initiativeValidator = initiativeValidator;
const valueValidator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield schemas_1.valueSchema.validate(req.body, { abortEarly: false });
        next();
    }
    catch (err) {
        res.json({ errors: err.errors });
    }
});
exports.valueValidator = valueValidator;
const achievementsValidator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield schemas_1.achievementsSchema.validate(req.body, { abortEarly: false });
        next();
    }
    catch (err) {
        res.json({ errors: err.errors });
    }
});
exports.achievementsValidator = achievementsValidator;
const donorReviewValidator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield schemas_1.donorReviewSchema.validate(req.body, { abortEarly: false });
        next();
    }
    catch (err) {
        res.json({ errors: err.errors });
    }
});
exports.donorReviewValidator = donorReviewValidator;
const galleryValidator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield schemas_1.gallerySchema.validate(req.body, { abortEarly: false });
        next();
    }
    catch (err) {
        res.json({ errors: err.errors });
    }
});
exports.galleryValidator = galleryValidator;
const faqValidator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield schemas_1.faqSchema.validate(req.body, { abortEarly: false });
        next();
    }
    catch (err) {
        res.json({ errors: err.errors });
    }
});
exports.faqValidator = faqValidator;
const contactInfoValidator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield schemas_1.contactInfoSchema.validate(req.body, { abortEarly: false });
        next();
    }
    catch (err) {
        res.json({ errors: err.errors });
    }
});
exports.contactInfoValidator = contactInfoValidator;
