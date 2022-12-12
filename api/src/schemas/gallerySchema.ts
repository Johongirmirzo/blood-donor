import {object, string} from "yup";

const gallerySchema = object({
    title: 
        string().
        required("Title must't be empty!").
        min(10, "Minimum allowed title length is 10").
        max(70, "Maximum allowed title length is 70"),
    description: 
        string().
        required("Description must't be empty!").
        min(25, "Minimum allowed description length is 25").
        max(255, "Maximum allowed description length is 255")
})

export default gallerySchema;