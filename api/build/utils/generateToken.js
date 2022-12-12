"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateToken = ({ id, fullname, isAdmin, isHidden, expirationTime }) => {
    return jsonwebtoken_1.default.sign({ id, fullname, isAdmin, isHidden }, `${process.env.TOKEN_PRIVATE_KEY}`, { expiresIn: expirationTime });
};
exports.default = generateToken;
