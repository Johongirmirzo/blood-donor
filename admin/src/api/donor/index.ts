import API from "../index";
import { ENDPOINTS } from "../../config/endpoints";

const getAllDonors = async () => {
    return API.get(ENDPOINTS.GET_ALL_DONORS)
};
const getDonor = async (donorId: string) => {
    return API.get(`${ENDPOINTS.GET_DONOR}/${donorId}`)
}
const toggleDonor = async (donorId: string) => {
    return API.put(`${ENDPOINTS.TOGGLE_DONOR}/${donorId}`)
};
const deleteDonor = async (donorId: string) => {
    return await API.delete(`${ENDPOINTS.DELETE_DONOR}/${donorId}`)
};

export {
    getAllDonors,
    getDonor,
    toggleDonor,
    deleteDonor
}