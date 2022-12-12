"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup_1 = require("yup");
const gallerySchema = (0, yup_1.object)({
    title: (0, yup_1.string)().
        required("Title must't be empty!").
        min(10, "Minimum allowed title length is 10").
        max(70, "Maximum allowed title length is 70"),
    description: (0, yup_1.string)().
        required("Description must't be empty!").
        min(25, "Minimum allowed description length is 25").
        max(255, "Maximum allowed description length is 255")
});
exports.default = gallerySchema;
