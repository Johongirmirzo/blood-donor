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
const bcrypt_1 = __importDefault(require("bcrypt"));
const generateToken_1 = __importDefault(require("../utils/generateToken"));
const donor_1 = __importDefault(require("../models/donor"));
const blood_requirer_1 = __importDefault(require("../models/blood-requirer"));
const session_1 = __importDefault(require("../models/session"));
const AdminController = {
    getAllDonors: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const donors = yield donor_1.default.find();
            res.json(donors.filter(donor => !donor.isAdmin));
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    getDonor: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { donorId } = req.params;
            const donor = yield donor_1.default.findById(donorId);
            res.json(donor);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    toggleDonor: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { donorId } = req.params;
            const donor = yield donor_1.default.findById(donorId);
            donor.isHidden = !donor.isHidden;
            yield donor.save();
            res.json({ message: "Donor is toggled successfully!" });
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    deleteDonor: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { donorId } = req.params;
            console.log(donorId);
            console.log(req.donor);
            if (donorId === req.donor.id) {
                res.clearCookie("donorId");
                yield session_1.default.deleteOne({ donorId: req.donor.id });
                req.donor = { id: "", fullname: "", isHidden: false, isAdmin: false };
            }
            yield donor_1.default.findByIdAndDelete(donorId);
            yield blood_requirer_1.default.deleteMany({ donorId });
            res.json({ message: "Donor is deleted successfully!" });
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    login: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            const donor = yield donor_1.default.findOne({ email });
            if (!donor) {
                return res.status(400).json({ error: "Email does not exist!" });
            }
            if (!(yield bcrypt_1.default.compare(password, donor.password))) {
                return res.status(400).json({ error: "Incorrect Password!" });
            }
            const accessToken = (0, generateToken_1.default)({ id: donor._id, fullname: donor.fullname, isAdmin: donor.isAdmin, isHidden: donor.isHidden, expirationTime: `${process.env.ACCESS_TOKEN_EXPIRATION_TIME}` });
            const refreshToken = (0, generateToken_1.default)({ id: donor._id, fullname: donor.fullname, isAdmin: donor.isAdmin, isHidden: donor.isHidden, expirationTime: `${process.env.REFRESH_TOKEN_EXPIRATION_TIME}` });
            res.json({ donor, accessToken, refreshToken });
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    logout: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            req.donor = { id: "", fullname: "", isHidden: false, isAdmin: false };
            res.json({ message: "Admin's logged out successfully" });
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    changeProfile: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const donor = yield donor_1.default.findOne({ email: req.body.email });
            if (donor) {
                if (donor._id.toString() !== req.donor.id.toString()) {
                    return res.status(400).json({ error: "Email is already taken!" });
                }
            }
            const updatedProfileData = yield donor_1.default.findByIdAndUpdate(req.donor.id, { $set: Object.assign(Object.assign({}, req.body), { gender: req.body.gender.toUpperCase() }) }, { new: true });
            res.json(updatedProfileData);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
    changePassword: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { currentPassword, newPassword } = req.body;
            const donor = yield donor_1.default.findById(req.donor.id);
            if (!(yield bcrypt_1.default.compare(currentPassword, donor.password))) {
                return res.status(400).json({ error: "Incorrect Password!" });
            }
            const newHashedPassword = yield bcrypt_1.default.hash(newPassword, 12);
            donor.password = newHashedPassword;
            yield donor.save();
            res.json({ message: "Password is changed successfully!" });
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }),
};
exports.default = AdminController;
