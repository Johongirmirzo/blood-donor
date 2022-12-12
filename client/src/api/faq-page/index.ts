import API from "../index";
import {ENDPOINTS} from "../../config/endpoints"

const getAllFaqsPageData = async () => {
    return await API.get(ENDPOINTS.GET_ALL_FAQS_PAGE_DATA)
} 

export {
    getAllFaqsPageData   
}