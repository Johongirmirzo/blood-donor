import API from "../index";
import {ENDPOINTS} from "../../config/endpoints"

const getAllGalleryPageData = async () => {
    return await API.get(ENDPOINTS.GET_ALL_GALLERY_PAGE_DATA)
} 

export {
    getAllGalleryPageData   
}