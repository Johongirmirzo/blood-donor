import {object, string} from "yup";

const bloodGroupSchema = object({
    bloodType:
        string().
        required("Blodtype can't be empty!").
        min(2, "Minimum allowed blood type character length is 2").
        max(3, "Maximum allowed blood type character length is 3")
})
export default bloodGroupSchema;