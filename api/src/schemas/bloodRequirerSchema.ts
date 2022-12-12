import {object, string} from "yup";

const bloodRequirerSchema = object({
    fullname:
        string().
        required("Fullname can't be empty!").
        min(2, "Minimum allowed fullname length is 2").
        max(55, "Maximum allowed fullname length is 55"),
    phoneNumber: 
        string().
        required("Phone number can't be empty!").
        min(7, "Minimum allowed phone number length is 7").
        max(15, "Maximum allowed phone number length is 15"),
    email: 
        string().
        required("Email can't be empty!").
        email("Email must contain @").
        min(5, "Minimum allowed email length is 5").
        max(55, "Maximum allowed email length is 55"),
    bloodNeededFor:
        string().
        required("Blood needed for can't be empty!").
        min(2, "Minimum allowed blood-needed-for length is 2").
        max(15, "Maximum allowed blood-needed-for length is 15"),
    message: 
        string().
        required("Message can't be empty!").
        min(15, "Minimum allowed message length is 15").
        max(255, "Maximum allowed message length is 255")
})

export default bloodRequirerSchema;