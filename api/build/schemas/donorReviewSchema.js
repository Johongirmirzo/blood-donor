"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup_1 = require("yup");
const donorReviewSchema = (0, yup_1.object)({
    donorReview: (0, yup_1.string)().
        required("Donor review can't be empty!").
        min(100, "Minimum allowed donor review length is 100").
        max(500, "Maximum allowed donor review length is 500"),
    donorName: (0, yup_1.string)().
        required("Donor name can't be empty!").
        min(2, "Minimum allowed donor name length is 2").
        max(55, "Maximum allowed donor name length is 55"),
    donorProfession: (0, yup_1.string)().
        required("Donor profession can't be empty!").
        min(5, "Minimum allowed donor profession length is 5").
        max(70, "Maximum allowed donor profession length is 70"),
    donorLocation: (0, yup_1.string)().
        required("Donor location can't be empty!").
        min(5, "Minimum allowed donor location length is 5").
        max(70, "Maximum allowed donor location length is 70"),
});
exports.default = donorReviewSchema;
