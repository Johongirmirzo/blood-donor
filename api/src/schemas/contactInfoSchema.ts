import {object, string} from "yup";

const contactInfoSchema = object({
    supportEmail: 
        string().
        required("Support email musn't be empty!").
        min(5, "Minimum allowed support email length is 5").
        max(70, "Maximum allowed support email length is 70"),
    helpEmail: 
        string().
        required("Help email must't be empty!").
        min(5, "Minimum allowed help email length is 5").
        max(70, "Maximum allowed help email length is 70"),
    address: 
        string().
        required("Address mustn't be empty!").
        min(10, "Minimum allowed address length is 10").
        max(255, "Maximum allowed address length is 255"),
    officePhoneNumber: 
        string().
        required("Office phone number mustn't be empty!").
        min(7, "Minimum allowed office phone number length is 7").
        max(15, "Maximum allowed office phone number length is 15"),
    cellPhoneNumber: 
        string().
        required("Cell phone number mustn't be empty!").
        min(7, "Minimum allowed cell phone number length is 7").
        max(15, "Maximum allowed cell phone number length is 15"),
})

export default contactInfoSchema;