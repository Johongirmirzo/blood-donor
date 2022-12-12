import API from "../index";
import {ENDPOINTS} from "../../config/endpoints"
import {IDonorLogin, IDonorProfile, IDonorRegisterData, IDonorPassword} from "../../types/donor"

const login = async (loginData: IDonorLogin) => {
    return await API.post(ENDPOINTS.LOGIN, loginData);
}
const register = async (registerData: IDonorRegisterData) => {
    return await API.post(ENDPOINTS.REGISTER, registerData);
}
const logout = async (donorId: string) => {
    return await API.delete(`${ENDPOINTS.LOGOUT}/${donorId}`);
}
const getAllDonors = async ()=>{
    return await API.get(ENDPOINTS.GET_ALL_DONORS)
}
const changeProfile = async (profileData: IDonorProfile, donorId: string)=>{
    return await API.put(`${ENDPOINTS.CHANGE_PROFILE}/${donorId}`, profileData)
}
const changePassword = async (passwordData: IDonorPassword, donorId: string)=>{
    return await API.put(`${ENDPOINTS.CHANGE_PASSWORD}/${donorId}`, passwordData)
}

export {
    login,
    register,
    logout,
    getAllDonors,
    changeProfile,
    changePassword
}