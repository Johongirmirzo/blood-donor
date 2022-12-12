"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup_1 = require("yup");
const faqSchema = (0, yup_1.object)({
    question: (0, yup_1.string)().
        required("Question must't be empty!").
        min(10, "Minimum allowed question length is 10").
        max(70, "Maximum allowed question length is 70"),
    answer: (0, yup_1.string)().
        required("Answer must't be empty!").
        min(10, "Minimum allowed answer length is 10").
        max(255, "Maximum allowed answer length is 255")
});
exports.default = faqSchema;
