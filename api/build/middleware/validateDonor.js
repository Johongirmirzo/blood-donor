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
const reissueAccessToken_1 = __importDefault(require("../utils/reissueAccessToken"));
const decodeToken_1 = __importDefault(require("../utils/decodeToken"));
const validateDonor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const authheader = req.headers.authorization;
    if (authheader) {
        const accessToken = authheader.split("Bearer ")[1];
        const refreshToken = req.headers.refreshtoken.split("Bearer ")[1];
        if (accessToken) {
            const { decoded, expired } = (0, decodeToken_1.default)(accessToken);
            if (decoded) {
                req.donor = (yield donor_1.default.findById(decoded.id));
                return next();
            }
            if (expired && refreshToken) {
                const accessToken = (0, reissueAccessToken_1.default)(refreshToken);
                if (accessToken) {
                    const { decoded } = (0, decodeToken_1.default)(accessToken);
                    req.donor = (yield donor_1.default.findById(decoded.id));
                    return next();
                }
                else {
                    res.status(401).json({ isLoginRequired: true, message: "Your access and refresh tokens are expired! Please login again!" });
                }
            }
            else {
                res.status(401).json({ isLoginRequired: true, message: "Invalid/Expired token" });
            }
        }
        else {
            res.status(401).json({ isLoginRequired: true, message: "Bearer \"accesstoken\" is missing! Please login!" });
        }
    }
    else {
        res.status(401).json({ isLoginRequired: true, message: "Auth Headers are missing! Please login!" });
    }
});
exports.default = validateDonor;
