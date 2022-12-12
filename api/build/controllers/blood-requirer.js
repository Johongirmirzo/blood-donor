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
const sanitizeData_1 = __importDefault(require("../utils/sanitizeData"));
const blood_requirer_1 = __importDefault(require("../models/blood-requirer"));
const BloodRequirerController = {
    getAllBloodRequirers: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const bloodRequirers = yield blood_requirer_1.default.find();
            res.json(bloodRequirers);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    getBloodRequirer: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { bloodRequirerId } = req.params;
            const bloodRequirer = yield blood_requirer_1.default.findById(bloodRequirerId);
            res.json(bloodRequirer);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    createBloodRequirer: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { fullname, phoneNumber, email, bloodNeededFor, message, donorId } = req.body;
            const newBloodRequirer = yield blood_requirer_1.default.create({
                fullname: (0, sanitizeData_1.default)(fullname),
                phoneNumber: (0, sanitizeData_1.default)(phoneNumber),
                email: (0, sanitizeData_1.default)(email),
                bloodNeededFor: (0, sanitizeData_1.default)(bloodNeededFor),
                message: (0, sanitizeData_1.default)(message),
                applyDate: new Date(),
                donorId
            });
            res.status(201).json(newBloodRequirer);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    deleteBloodRequirer: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { bloodRequirerId } = req.params;
            yield blood_requirer_1.default.findByIdAndDelete(bloodRequirerId);
            res.json({ message: "Blood Requirer deleted successfully!" });
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
};
exports.default = BloodRequirerController;
