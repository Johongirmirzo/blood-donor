import {object, ref, string} from "yup";

const changePasswordSchema =  object({
    currentPassword: 
        string().
        required("Current password can't be empty!"),
    newPassword: 
        string().
        required("New password can't be empty!").
        min(9, "Minimum allowed password length is 9").
        max(55, "Maxmimum allowed password length is 55"),
    newConfirmPassword:
        string().
        required("Confirm password can't be empty!'").
        oneOf([ref("newPassword"), null], "New confirm password did not match!")
})
export default changePasswordSchema