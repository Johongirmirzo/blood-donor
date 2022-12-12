import {object, string, array} from "yup";

const aboutUsSchema =  object({
    title:
        string().
        required("Title can't be empty!").
        min(10, "Minimum allowed title length is 10").
        max(100, "Maximum allowed title length is 100"),
    description:
        string().
        required("Description can't be empty!").
        min(25, "Minimum allowed description length is 25").
        max(255, "Maximum allowed description length is 255"),
    aboutUsImage:
        string().
        required("About us image can't be empty!"),
    aboutUsList:
        array().
        required("Achievement list can't be empty!").
        min(4, "Minimum 4 achievement list must be provided")
        .of(
            string().
            required("About us item can't be empty!").
            min(5, "Minimum allowed about us item length is 5").
            max(100, "Minimum allowed about us item length is 100")
        )
})
export default aboutUsSchema;