import {object, string} from "yup";

const donorReviewSchema = object({
    donorReview:
        string().
        required("Donor review can't be empty!").
        min(100, "Minimum allowed donor review length is 100").
        max(500, "Maximum allowed donor review length is 500"),
    donorName:
        string().
        required("Donor name can't be empty!").
        min(2, "Minimum allowed donor name length is 2").
        max(55, "Maximum allowed donor name length is 55"),
    donorProfession:
        string().
        required("Donor profession can't be empty!").
        min(5, "Minimum allowed donor profession length is 5").
        max(70, "Maximum allowed donor profession length is 70"),
    donorLocation:
        string().
        required("Donor location can't be empty!").
        min(5, "Minimum allowed donor location length is 5").
        max(70, "Maximum allowed donor location length is 70"),
})
export default donorReviewSchema;