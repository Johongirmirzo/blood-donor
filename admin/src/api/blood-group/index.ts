import API from "../index";
import {ENDPOINTS} from "../../config/endpoints";
import {IBloodType} from "../../types/blood-group" 

const getAllBloudGroups = async ()=>{
    return await API.get(ENDPOINTS.GET_ALL_BLOOD_GROUPS);
}
const getBloodGroup = async (bloodGroupId: string)=>{
    return await API.get(`${ENDPOINTS.GET_BLOOD_GROUP}/${bloodGroupId}`);
}
const createBloodGroup = async (bloodGroupData: IBloodType)=>{
    return await API.post(ENDPOINTS.CREATE_BLOOD_GROUP, bloodGroupData)
}
const editBloodGroup = async (bloodGroupData: IBloodType, bloodGroupId: string)=>{
    return await API.put(`${ENDPOINTS.EDIT_BLOOD_GROUP}/${bloodGroupId}`, bloodGroupData)
}
const deleteBloodGroup = async (bloodGroupId: string)=>{
    return await API.delete(`${ENDPOINTS.DELETE_BLOOD_GROUP}/${bloodGroupId}`)
}

export {
    getAllBloudGroups,
    getBloodGroup,
    createBloodGroup,
    editBloodGroup,
    deleteBloodGroup,
}