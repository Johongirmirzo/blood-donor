import API from "../index";
import {ENDPOINTS} from "../../config/endpoints";

const getAllBloodGroups = async ()=>{
    return await API.get(ENDPOINTS.GET_ALL_BLOOD_GROUPS);
}
export {
    getAllBloodGroups
}