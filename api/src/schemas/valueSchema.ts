import {object, string} from "yup";

const valueSchema = object({
    value: 
        string().
        required("Value must't be empty!'").
        min(10, "Minimum allowed value length is 10").
        max(500, "Maximum allowed value length is 500")
})
export default valueSchema;