import API from "../index";
import {ENDPOINTS} from "../../config/endpoints"

const getAllHomePageData = async () => {
    return await API.get(ENDPOINTS.GET_ALL_HOME_PAGE_DATA)
} 

export {
    getAllHomePageData   
}