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
const donor_1 = __importDefault(require("../models/donor"));
const validateDonor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { donorId } = req.cookies;
    if (donorId) {
        const donor = yield donor_1.default.findById(donorId);
        if (donor) {
            req.donor = {
                id: donor._id,
                fullname: donor.fullname,
                isHidden: donor.isHidden,
                isAdmin: donor.isAdmin
            };
            next();
        }
        else {
            res.status(401).json({ isLoginRequired: true, message: "Login session expired! Please login a new!" });
        }
    }
    else {
        res.status(401).json({ isLoginRequired: true, message: "Login session expired! Please login a new!" });
    }
});
exports.default = validateDonor;
