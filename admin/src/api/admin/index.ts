import API from "../index";
import {ENDPOINTS} from "../../config/endpoints";
import {IProfileData, IPasswordData} from "../../types/form";

interface IUser {
    email: string;
    password: string;
    rememberMe: boolean;
}

const login = async (userData: IUser)=>{
    return await API.post(ENDPOINTS.LOGIN, userData);
}
const logout = async (adminId: string)=>{
    return await API.delete(`${ENDPOINTS.LOGOUT}/${adminId}`)
}
const changeProfile = async (profileData: IProfileData, adminId: string)=>{
    return await API.put(`${ENDPOINTS.CHANGE_PROFILE}/${adminId}`, profileData)
}
const changePassword = async (passwordData: IPasswordData, adminId: string)=>{
    return await API.put(`${ENDPOINTS.CHANGE_PASSWORD}/${adminId}`, passwordData)
}
const getAllDonors = async ()=>{
    return await API.get(ENDPOINTS.GET_ALL_DONORS);
}
const getDonor = async (donorId: string) => {
    return await API.get(`${ENDPOINTS.GET_DONOR}/${donorId}`);
}
const toggleDonor = async (donorId: string) => {
    return await API.put(`${ENDPOINTS.TOGGLE_DONOR}/${donorId}`)
}
const deleteDonor = async (donorId: string)=>{
    return await API.delete(`${ENDPOINTS.DELETE_DONOR}/${donorId}`);
}

export {
    login,
    logout,
    changeProfile,
    changePassword,
    getAllDonors,
    getDonor,
    toggleDonor,
    deleteDonor
}