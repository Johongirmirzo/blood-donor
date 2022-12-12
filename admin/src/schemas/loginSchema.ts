import {object, string} from "yup";

const adminLoginSchema = object({
    email: 
        string().
        email("Email must include @").
        required("Email can't be empty!"),
    password:
        string().
        required("Passwords can't be empty!'").
        min(9, "Minimum password length length is 9").
        max(55, "Maximum password length is 55")
})

export default adminLoginSchema