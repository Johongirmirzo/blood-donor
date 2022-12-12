import {object, string, number} from "yup";

const donorProfileSchema =  object({
    fullname: 
        string().
        required("Fullname can't be empty!").
        min(5, "Minium allowed fullname character length is 5").
        max(100, "Maximum allowed fullname character length is 100"),
    phoneNumber: 
        string().
        required("Phone number can't be empty!").
        min(7, "Minium allowed phone number character length is 7").
        max(15, "Maximum allowed phone number character length is 15"),
    email: 
        string().
        email("Email must contain @").
        required("Email can't be empty!").
        min(5, "Minimum allowed email character length is 5").
        max(100, "Maximum allowed email character length is 100"),
    age:
        number().
        required("Age can't be empty!").
        min(18, "Minimum allowed age is 18").
        max(90, "Maximum allowed age is 90"),
    bloodGroup: 
        string().
        required("Blood group can't be empty!"),
    gender: 
        string().
        required("Gender can't be empty!").
        matches(/male|female/i, "Please choose either male or female"),
    city: 
        string().
        required("City can't be empty!").
        min(2, "Minimum allowed city length is 2").
        max(150, "Maximum allowed city length is 150"),  
});

export default donorProfileSchema;