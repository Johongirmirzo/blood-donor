import API from "../index";
import {ENDPOINTS} from "../../config/endpoints";
import {IFaqData, IFaqListData, IFaqList} from "../../types/faq-page"

const getAllFaqPageData = async ()=>{
    return API.get(ENDPOINTS.GET_ALL_FAQS_PAGE_DATA)
}
const updateFaqsSection = async (faqSectionData: IFaqData)=>{
    return await API.post(ENDPOINTS.UPDATE_FAQS_SECTION, faqSectionData)
}
const updateHeroImage = async (heroImage: any)=>{
    return await API.post(ENDPOINTS.UPDATE_FAQS_HERO_IMAGE, heroImage, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}
const updateSponsorsSection = async (faqSponsorData: IFaqData)=>{
    return await API.post(ENDPOINTS.UPDATE_SPONSORS_SECTION, faqSponsorData)
}
const createFaq = async (faqData: IFaqListData)=>{
    return await API.post(ENDPOINTS.CREATE_FAQ, faqData)
}
const editFaq = async (faqData: IFaqListData, faqId: string)=>{
    return await API.put(`${ENDPOINTS.EDIT_FAQ}/${faqId}`, faqData)
}
const deleteFaq = async (faqId: string)=>{
    return await API.delete(`${ENDPOINTS.DELETE_FAQ}/${faqId}`)
}
const createSponsor = async (sponsorImage: any)=>{
    return await API.post(ENDPOINTS.CREATE_SPONSOR, sponsorImage, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}
const deleteSponsor = async (sponsorId: string) => {
    return await API.delete(`${ENDPOINTS.DELETE_SPONSOR}/${sponsorId}`)
}
export {
    getAllFaqPageData,
    updateFaqsSection,
    updateSponsorsSection,
    updateHeroImage,
    createFaq,
    editFaq,
    deleteFaq,
    createSponsor,
    deleteSponsor
}