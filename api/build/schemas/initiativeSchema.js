"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup_1 = require("yup");
const iniativeSchema = (0, yup_1.object)({
    title: (0, yup_1.string)().
        required("Title can't be empty!'").
        min(10, "Minimum allowed title length is 10").
        max(100, "Maximum allowed title length is 100"),
    description: (0, yup_1.string)().
        required("Description can't be empty!").
        min(15, "Minimum allowed description length is 15").
        max(255, "Maximum allowed description length is 255")
});
exports.default = iniativeSchema;
