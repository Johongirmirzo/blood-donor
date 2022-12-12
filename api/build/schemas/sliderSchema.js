"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup_1 = require("yup");
const sliderSchema = (0, yup_1.object)({
    title: (0, yup_1.string)().
        required("Title can't be empty!").
        min(5, "Minimum allowed title length is 5").
        max(100, "Maximum allowed title length is 100"),
    description: (0, yup_1.string)().
        required("Description can't be empty!").
        min(15, "Minimum allowed description length is 15").
        max(70, "Maximum allowed description length is 70"),
});
exports.default = sliderSchema;
