import API from "../index";
import {ENDPOINTS} from "../../config/endpoints"

const getAllContactUsPageData = async () => {
    return await API.get(ENDPOINTS.GET_ALL_CONTACT_US_PAGE_DATA);
}

export {
    getAllContactUsPageData
}