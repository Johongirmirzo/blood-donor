import {object, string} from "yup";

const faqSchema = object({
    question: 
        string().
        required("Question must't be empty!").
        min(10, "Minimum allowed question length is 10").
        max(70, "Maximum allowed question length is 70"),
    answer: 
        string().
        required("Answer must't be empty!").
        min(10, "Minimum allowed answer length is 10").
        max(255, "Maximum allowed answer length is 255")
})

export default faqSchema;