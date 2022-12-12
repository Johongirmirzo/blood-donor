import API from "../index";
import {ENDPOINTS} from "../../config/endpoints";

const getAllMessages = async ()=>{
    return await API.get(ENDPOINTS.GET_ALL_MESSAGES)
}
const deleteMessage = async (messageId: string)=>{
    return await API.delete(`${ENDPOINTS.DELETE_MESSAGE}/${messageId}`)
}
export {
    getAllMessages,
    deleteMessage
}