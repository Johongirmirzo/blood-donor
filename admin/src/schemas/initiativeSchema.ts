import {object, string} from "yup";

const iniativeSchema = object({
    title: 
        string().
        required("Title can't be empty!'").
        min(10, "Minimum allowed title length is 10").
        max(100, "Maximum allowed title length is 100"),
    description:
        string().
        required("Description can't be empty!").
        min(15, "Minimum allowed description length is 15").
        max(255, "Maximum allowed description length is 255")
})

export default iniativeSchema;