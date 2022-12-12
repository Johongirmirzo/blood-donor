"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup_1 = require("yup");
const valueSchema = (0, yup_1.object)({
    value: (0, yup_1.string)().
        required("Value must't be empty!'").
        min(10, "Minimum allowed value length is 10").
        max(500, "Maximum allowed value length is 500")
});
exports.default = valueSchema;
