import API from "../index";
import {ENDPOINTS} from "../../config/endpoints";

const getAllSubscribers = async () => {
    return API.get(ENDPOINTS.GET_ALL_SUBSCRIBERS)
}
const deleteSubscriber = async (subscriberId: string) => {
    return API.delete(`${ENDPOINTS.DELETE_SUBSCRIBER}/${subscriberId}`)
}
export {
    getAllSubscribers,
    deleteSubscriber
}