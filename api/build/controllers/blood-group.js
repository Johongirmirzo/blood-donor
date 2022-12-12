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
const blood_group_1 = __importDefault(require("../models/blood-group"));
const BloodGroupController = {
    getAllBloodGroups: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const bloodGroups = yield blood_group_1.default.find();
            res.json(bloodGroups);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    getBloodGroup: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { bloodGroupId } = req.params;
            const bloodGroup = yield blood_group_1.default.findById(bloodGroupId);
            res.json(bloodGroup);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    createBloodGroup: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { bloodType } = req.body;
            const bloodGroup = yield blood_group_1.default.findOne({ bloodType: bloodType.toUpperCase() });
            if (bloodGroup) {
                return res.status(400).json({ error: "This blood type already exists!" });
            }
            const newBloodGroup = yield blood_group_1.default.create({ bloodType, creationDate: new Date() });
            res.status(201).json(newBloodGroup);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    editBloodGroup: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { bloodGroupId } = req.params;
            const { bloodType } = req.body;
            const bloodGroup = yield blood_group_1.default.findOne({ bloodType });
            if (bloodGroup) {
                if (bloodGroup._id.toString() !== bloodGroupId) {
                    return res.status(400).json({ error: "This bloodtype already exists!" });
                }
            }
            const editedBloodGroup = yield blood_group_1.default.findByIdAndUpdate(bloodGroupId, { $set: { bloodType } }, { new: true });
            res.json(editedBloodGroup);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    deleteBloodGroup: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { bloodGroupId } = req.params;
            yield blood_group_1.default.findByIdAndDelete(bloodGroupId);
            res.json({ message: "Bloodgroup is deleted successfully!" });
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
};
exports.default = BloodGroupController;
