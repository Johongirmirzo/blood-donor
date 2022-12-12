import API from "../index";
import {ENDPOINTS} from "../../config/endpoints"

const getAllAboutUsPageData = async () => {
    return await API.get(ENDPOINTS.GET_ALL_ABOUT_US_PAGE_DATA);
}

export {
    getAllAboutUsPageData
}