"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup_1 = require("yup");
const bloodGroupSchema = (0, yup_1.object)({
    bloodType: (0, yup_1.string)().
        required("Blodtype can't be empty!").
        min(2, "Minimum allowed blood type character length is 2").
        max(3, "Maximum allowed blood type character length is 3")
});
exports.default = bloodGroupSchema;
