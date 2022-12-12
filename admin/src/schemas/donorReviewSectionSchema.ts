import {object, string, array} from "yup";

const donorReviewSectionSchema =  object({
    title:
        string().
        required("Title can't be empty!").
        min(5, "Minimum allowed title length is 5").
        max(55, "Maximum allowed title length is 55"),
    description:
        string().
        required("Description can't be empty!").
        min(5, "Minimum allowed description length is 5").
        max(255, "Maximum allowed description length is 255"),
    donorReviewHeroImage:
        string().
        required("Donor review section image must be provided")
})

export default donorReviewSectionSchema;