import API from "../index";
import {ENDPOINTS} from "../../config/endpoints"
import {IBloodRequirerData} from "../../types/blood-requirer"


const getAllBloodRequirers = async ()=>{
    return await API.get(ENDPOINTS.GET_ALL_BLOOD_REQUIRERS)
};
const createBloodRequirer = async (bloodRequirerData: IBloodRequirerData)=>{
    return await API.post(ENDPOINTS.CREATE_BLOOD_REQUIRER, bloodRequirerData)
}

export {
    getAllBloodRequirers,
    createBloodRequirer
}