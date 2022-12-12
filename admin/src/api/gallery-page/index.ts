import API from "../index";
import {ENDPOINTS} from "../../config/endpoints";
import { IGallerySection } from "../../types/gallery-page";

const getAllGaleryPageData = async () => {
    return API.get(ENDPOINTS.GET_ALL_GALLERY_PAGE_DATA);
}
const createImage = async (image: any) => {
    return API.post(ENDPOINTS.CREATE_GALLERY, image, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
}
const deleteImage = async (imageId: string) => {
    return API.delete(`${ENDPOINTS.DELETE_GALLERY}/${imageId}`);
}
const updateHeroImage = async (image: any) => {
    return API.post(ENDPOINTS.UPDATE_GALLERY_HERO_IMAGE, image, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}
const updateGallerySection = async (gallerySectionData: IGallerySection) => {
    return API.post(ENDPOINTS.UPDATE_GALLERY_SECTION, gallerySectionData)
}
export {
    getAllGaleryPageData,
    createImage,
    deleteImage,
    updateHeroImage,
    updateGallerySection
}