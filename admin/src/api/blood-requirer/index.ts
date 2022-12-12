import API from "../index";
import {ENDPOINTS} from "../../config/endpoints";

const getAllBloodRequirers = async () => {
    return API.get(ENDPOINTS.GET_ALL_BLOOD_REQUIRERS);
}
const deleteBloodRequirer = async (bloodRequirerId: string) => {
    return API.delete(`${ENDPOINTS.DELETE_BLOOD_REQUIRER}/${bloodRequirerId}`);
}
export {
    getAllBloodRequirers,
    deleteBloodRequirer
}