"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup_1 = require("yup");
const bloodRequirerSchema = (0, yup_1.object)({
    fullname: (0, yup_1.string)().
        required("Fullname can't be empty!").
        min(2, "Minimum allowed fullname length is 2").
        max(55, "Maximum allowed fullname length is 55"),
    phoneNumber: (0, yup_1.string)().
        required("Phone number can't be empty!").
        min(7, "Minimum allowed phone number length is 7").
        max(15, "Maximum allowed phone number length is 15"),
    email: (0, yup_1.string)().
        required("Email can't be empty!").
        email("Email must contain @").
        min(5, "Minimum allowed email length is 5").
        max(55, "Maximum allowed email length is 55"),
    bloodNeededFor: (0, yup_1.string)().
        required("Blood needed for can't be empty!").
        min(2, "Minimum allowed blood-needed-for length is 2").
        max(15, "Maximum allowed blood-needed-for length is 15"),
    message: (0, yup_1.string)().
        required("Message can't be empty!").
        min(15, "Minimum allowed message length is 15").
        max(255, "Maximum allowed message length is 255")
});
exports.default = bloodRequirerSchema;
