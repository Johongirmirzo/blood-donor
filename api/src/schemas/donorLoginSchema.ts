import {object, string} from "yup";

const donorLoginSchema = object({
    email: 
        string().
        email("Email must include @").
        required("Email can't be empty!"),
    password:
        string().
        required("Passwords can't be empty!'")
})

export default donorLoginSchema