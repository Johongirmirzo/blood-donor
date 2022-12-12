import {object, string} from "yup";

const contactUsSchema =  object({
    fullname: 
        string().
        required("Fullname  can't be empty!").
        min(2, "Minimum allowed fullname length is 2").
        max(55, "Maximum allowed fullname length is 55"),
    phoneNumber: 
        string().
        required("Phone number can't be empty!").
        min(7, "Minimum allwed phone number length is 7").
        max(15, "Maximum allwed phone number length is 15"),
    email: 
        string().
        required("Email can't be empty!").
        email("Email must contain @").
        min(5, "Minimum allowed email length is 5").
        max(55, "Maximum allowed email length is 55"),
    message: 
        string().
        required("Message cna't be empty!").
        min(15, "Minimum allowed message length is 15").
        max(255, "Maximum allowed message lenth is 255")
})

export default contactUsSchema;