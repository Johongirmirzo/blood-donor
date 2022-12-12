import API from "../index";
import {ENDPOINTS} from "../../config/endpoints"
import {IMessage} from "../../types/message"

const sendMessage = async (message: IMessage) => {
    return API.post(ENDPOINTS.CREATE_MESSAGE, message)
}

export {
    sendMessage,
}