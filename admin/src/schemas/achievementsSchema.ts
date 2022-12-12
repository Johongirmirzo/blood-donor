import {object, string, array, number} from "yup";

const achievementsSchema =  object({
    title:
        string().
        required("Title can't be empty!").
        min(10, "Minimum allowed title length is 10").
        max(100, "Maximum allowed title length is 100"),
    description:
        string().
        required("Description can't be empty!").
        min(25, "Minimum allowed description length is 25").
        max(255, "Maximum allowed description length is 255"),
    achievementList:
        array().
        required("Achievement list can't be empty!").
        min(4, "Minimum 4 achievement list must be provided")
        .of(object({
            title: string(),
            result: number()
        }))
})
export default achievementsSchema;