import {object, string, array} from "yup";

const volunteerSchema = object({
    volunteerName: 
        string().
        required("Volunteer name can't be empty!").
        min(2, "Minimum allowed volunteer name length is 2").
        max(70, "Minimum allowed volunteer name length is 70"),
    volunteerTitle:
        string().
        required("Volunteer title can't be empty!").
        min(2, "Minimum allowed volunteer title length is 2").
        max(70, "Minimum allowed volunteer title length is 70"),
    volunteerImage:
        string().
        required("Volunteer image can't be empty!"),
    volunteerSocialMedia:
        array().
        of(object({
            socialMediaName:
                string(),
            socialMediaUrl:
                string()
        }))
})
export default volunteerSchema;