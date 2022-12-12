import API from "../index";
import {ENDPOINTS} from "../../config/endpoints"

const createSubscriber = async (subscriberEmail: string) => {
    return await API.post(ENDPOINTS.CREATE_SUBSCRIBER, {subscriberEmail})
} 

export {
    createSubscriber   
}