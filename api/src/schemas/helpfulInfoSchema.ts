import {object, string, array} from "yup";

const helpfulInfoSchema =  object({
    title:
        string().
        required("Title can't be empty!").
        min(5, "Minimum allowed title length is 5").
        max(55, "Maximum allowed title length is 55"),
    description:
        string().
        required("Description can't be empty!").
        min(5, "Minimum allowed description length is 5").
        max(255, "Maximum allowed description length is 255"),
    infoList:
        array().required("Info List can't be empty").min(5, "Minimum array length is 5").of(
            string().
            required("Info list can't be empty!").
            min(10, "Minimum allwed info length is 10").
            max(100, "Maximum allowed description length is 100")
            
        )
})

export default helpfulInfoSchema;