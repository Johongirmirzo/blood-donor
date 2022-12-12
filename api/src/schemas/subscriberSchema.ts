import {object, string} from "yup";

const subscriberSchema = object({
    subscriberEmail: 
        string().
        required("Email can't be empty!").
        email("Email must contain @").
        min(5, "Minimum allowed email length is 5").
        max(55, "Maximum allowed email length is 55")
})
export default subscriberSchema;