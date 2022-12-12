import {object, string, array} from "yup";

const bloodGroupInfoSchema =  object({
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
    bloodGroupListDescription:
        string().
        required("Description can't be empty!").
        min(5, "Minimum allowed description length is 5").
        max(255, "Maximum allowed description length is 255"),
    bloodGroupImage:
        string().
        required("Blood group image can't be empty"),
    bloodGroupList:
        array().
        of(
            string().
            required("Info list can't be empty!").
            min(10, "Minimum allwed info length is 10").
            max(100, "Maximum allowed description length is 100")
        )
})