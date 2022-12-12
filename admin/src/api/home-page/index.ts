import API from "../index";
import {ENDPOINTS} from "../../config/endpoints";
import {IHelpfulInfo, IInitiative} from "../../types/home-page"


const getAllHomePageData = async ()=>{
    return await API.get(ENDPOINTS.GET_ALL_HOME_PAGE_DATA);
}
const getAllSliders = async ()=>{
    return await API.get(ENDPOINTS.GET_ALL_SLIDERS);
}
const getSlider = async ()=>{

}
const createSlider = async (formData: any)=>{
    return await API.post(ENDPOINTS.CREATE_SLIDER, formData,
    {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
}
const editSlider = async (formData: any, sliderId: string)=>{
    return await API.put(`${ENDPOINTS.EDIT_SLIDER}/${sliderId}`, formData,
        {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
}
const deleteSlider = async (sliderId: string)=>{
    return await API.delete(`${ENDPOINTS.DELETE_SLIDER}/${sliderId}`)
}
const getHelpfulInfo = async ()=>{
    return await API.get(ENDPOINTS.GET_HELPFUL_INFO);
}
const updateHelpfulInfo = async (helpfulInfoData: IHelpfulInfo)=>{
    return await API.post(ENDPOINTS.UPDATE_HELPFUL_INFO, helpfulInfoData)
}
const getBloodGroupInfo = async ()=>{
    return await API.get(ENDPOINTS.GET_BLOOD_GROUP_INFO);
}
const updateBloodGroupInfo = async (bloodGroupInfoData: any)=>{
    return await API.post(ENDPOINTS.UPDATE_BLOOD_GROUP_INFO, bloodGroupInfoData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}
const getInitiative = async ()=>{
    return await API.get(ENDPOINTS.GET_INITIATIVE);
}
const updateInitiative = async (initiativeData: IInitiative)=>{
    return await API.post(ENDPOINTS.UPDATE_INITIATIVE, initiativeData)
}
const getValue = async ()=>{
    return await API.get(ENDPOINTS.GET_VALUE);
}
const updateValue = async (value: string)=>{
    return await API.post(ENDPOINTS.UPDATE_VALUE, {value})
}

export {
    getAllHomePageData,
    getAllSliders,
    getSlider, 
    createSlider,
    editSlider,
    deleteSlider,
    getHelpfulInfo,
    updateHelpfulInfo,
    getBloodGroupInfo,
    updateBloodGroupInfo,
    getInitiative,
    updateInitiative,
    getValue,
    updateValue
}