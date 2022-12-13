"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const setAllowedOrigins = (app) => {
    const allowedDomains = [process.env.CLIENT_URL || "http://localhost:3000", process.env.ADMIN_URL || "http://localhost:3001"];
    console.log("Allowed domains", allowedDomains);
    app.use((0, cors_1.default)({
        origin: function (origin, callback) {
            console.log("Origin Check", origin);
            // bypass the requests with no origin (like curl requests, mobile apps, etc )
            if (!origin)
                return callback(null, true);
            if (allowedDomains.indexOf(origin) === -1) {
                var msg = `This site ${origin} does not have an access!. Only specific domains are allowed to access it.`;
                return callback(new Error(msg), false);
            }
            console.log("Access control enabled", allowedDomains.indexOf(origin));
            return callback(null, true);
        },
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    }));
};
exports.default = setAllowedOrigins;
