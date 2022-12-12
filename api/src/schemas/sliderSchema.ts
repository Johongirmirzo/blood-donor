import {object, string} from "yup";

const sliderSchema = object({
    title: 
        string().
        required("Title can't be empty!").
        min(5, "Minimum allowed title length is 5").
        max(100, "Maximum allowed title length is 100"),
    description: 
        string().
        required("Description can't be empty!").
        min(15, "Minimum allowed description length is 15").
        max(70, "Maximum allowed description length is 70"),
});

export default sliderSchema;