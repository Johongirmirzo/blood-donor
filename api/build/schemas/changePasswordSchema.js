"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup_1 = require("yup");
const changePasswordSchema = (0, yup_1.object)({
    currentPassword: (0, yup_1.string)().
        required("Current password can't be empty!"),
    newPassword: (0, yup_1.string)().
        required("New password can't be empty!").
        min(9, "Minimum allowed password length is 9").
        max(55, "Maxmimum allowed password length is 55"),
    newConfirmPassword: (0, yup_1.string)().
        required("Confirm password can't be empty!'").
        oneOf([(0, yup_1.ref)("newPassword"), null], "New confirm password did not match!")
});
exports.default = changePasswordSchema;
