"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup_1 = require("yup");
const helpfulInfoSchema = (0, yup_1.object)({
    title: (0, yup_1.string)().
        required("Title can't be empty!").
        min(5, "Minimum allowed title length is 5").
        max(55, "Maximum allowed title length is 55"),
    description: (0, yup_1.string)().
        required("Description can't be empty!").
        min(5, "Minimum allowed description length is 5").
        max(255, "Maximum allowed description length is 255"),
    infoList: (0, yup_1.array)().required("Info List can't be empty").min(5, "Minimum array length is 5").of((0, yup_1.string)().
        required("Info list can't be empty!").
        min(10, "Minimum allwed info length is 10").
        max(100, "Maximum allowed description length is 100"))
});
exports.default = helpfulInfoSchema;
