import {object, string} from "yup";

const volunteerSectionSchema =  object({
    title:
        string().
        required("Title can't be empty!").
        min(5, "Minimum allowed title length is 5").
        max(100, "Maximum allowed title length is 100"),
    description:
        string().
        required("Description can't be empty!").
        min(5, "Minimum allowed description length is 5").
        max(255, "Maximum allowed description length is 255"),
    volunteerHeroImage:
        string().
        required("Donor review section image must be provided")
})

export default volunteerSectionSchema;