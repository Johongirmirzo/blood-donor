"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup_1 = require("yup");
const achievementsSchema = (0, yup_1.object)({
    title: (0, yup_1.string)().
        required("Title can't be empty!").
        min(10, "Minimum allowed title length is 10").
        max(100, "Maximum allowed title length is 100"),
    description: (0, yup_1.string)().
        required("Description can't be empty!").
        min(25, "Minimum allowed description length is 25").
        max(255, "Maximum allowed description length is 255"),
    achievementList: (0, yup_1.array)().
        required("Achievement list can't be empty!").
        min(4, "Minimum 4 achievement list must be provided")
        .of((0, yup_1.object)({
        title: (0, yup_1.string)(),
        result: (0, yup_1.number)()
    }))
});
exports.default = achievementsSchema;
