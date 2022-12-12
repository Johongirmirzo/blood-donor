import {object, string} from "yup";

const heroImageSchema =  object({
    heroImage: 
        string().
        required("Hero image can't be empty!")
})

export default heroImageSchema;