import {object, string} from "yup";

const contactUsInfoSchema =  object({
    supportEmail: 
        string().
        required("Support email  can't be empty!").
        min(2, "Minimum allowed supprt email length is 2").
        max(55, "Maximum allowed supprt email length is 55"),
    helpEmail: 
        string().
        required("Help email can't be empty!").
        min(7, "Minimum allwed help email length is 7").
        max(55, "Maximum allwed help email length is 55"),
    address: 
        string().
        required("Address can't be empty!").
        min(5, "Minimum allowed address length is 5").
        max(70, "Maximum allowed address length is 70"),
    officePhoneNumber: 
        string().
        required("Office phone number cna't be empty!").
        min(7, "Minimum allowed office phone number length is 7").
        max(15, "Maximum allowed office phone number lenth is 15"),
    cellPhoneNumber: 
        string().
        required("Cell phone number cna't be empty!").
        min(7, "Minimum allowed cell phone number length is 7").
        max(15, "Maximum allowed cell phone number lenth is 15")
})

export default contactUsInfoSchema;