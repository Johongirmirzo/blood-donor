"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const decodeToken_1 = __importDefault(require("./decodeToken"));
const generateToken_1 = __importDefault(require("./generateToken"));
const reissueAccessToken = (token) => {
    const { decoded } = (0, decodeToken_1.default)(token);
    if (!decoded) {
        return false;
    }
    const accessToken = (0, generateToken_1.default)({ id: decoded.id, fullname: decoded.fullname, isAdmin: decoded.isAdmin, isHidden: decoded.isHidden, expirationTime: `${process.env.ACCESS_TOKEN_EXPIRATION_TIME}` });
    return accessToken;
};
exports.default = reissueAccessToken;
