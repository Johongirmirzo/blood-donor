"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isAdmin = (req, res, next) => {
    try {
        console.log(req.donor);
        if (req.donor.isAdmin) {
            next();
        }
        else {
            res.status(403).json({ message: "You are not admin! You don't have permission to access this resource" });
        }
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
};
exports.default = isAdmin;
