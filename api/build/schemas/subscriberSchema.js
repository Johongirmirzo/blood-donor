"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup_1 = require("yup");
const subscriberSchema = (0, yup_1.object)({
    subscriberEmail: (0, yup_1.string)().
        required("Email can't be empty!").
        email("Email must contain @").
        min(5, "Minimum allowed email length is 5").
        max(55, "Maximum allowed email length is 55")
});
exports.default = subscriberSchema;
