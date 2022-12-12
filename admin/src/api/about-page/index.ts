import API from "../index"
import {ENDPOINTS} from "../../config/endpoints";
import { IOurAchievements, IDonorData } from "../../types/about-us-page"

const getAllAboutUsPageData = async ()=>{
    return await API.get(ENDPOINTS.GET_ALL_ABOUT_US_PAGE_DATA)
}
const updateHeroImage = async (heroImage: any)=>{
    return API.post(ENDPOINTS.UPDATE_HERO_IMAGE, heroImage, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}
const updateAboutUs = async (aboutUsData: any)=>{
    return API.post(ENDPOINTS.UPDATE_ABOUT_US, aboutUsData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}
const createVolunteer = async (volunteerData: any)=>{
    return API.post(ENDPOINTS.CREATE_VOLUNTEER, volunteerData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}
const editVolunteer = async (volunteerData: any, volunteerId: string)=>{
    return API.put(`${ENDPOINTS.EDIT_VOLUNTEER}/${volunteerId}`, volunteerData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })

}
const deleteVolunteer = async (volunteerId: string)=>{
    return await API.delete(`${ENDPOINTS.DELETE_VOLUNTEER}/${volunteerId}`)
}
const updateVolunteerSection = async (volunteerSectionData: any)=>{
    return API.post(ENDPOINTS.UPDATE_VOLUNTEER_SECTION, volunteerSectionData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}
const updateOurAchievements = async (achievementsData: IOurAchievements)=>{
    return API.post(ENDPOINTS.UPDATE_OUR_ACHIEVEMENTS, achievementsData)
}   
const createDonorReview = async (donorReviewData: IDonorData)=>{
    return API.post(ENDPOINTS.CREATE_DONOR_REVIEW, donorReviewData)
}
const editDonorReview = async (donorReviewData: IDonorData, donorReviewId: string)=>{
    return API.put(`${ENDPOINTS.EDIT_DONOR_REVIEW}/${donorReviewId}`, donorReviewData)
}
const deleteDonorReview = async (donorReviewId: string)=>{
    return await API.delete(`${ENDPOINTS.DELETE_DONOR_REVIEW}/${donorReviewId}`)
}
const updateDonorReviewSection = async (donorReviewSectionData: any)=>{
    return API.post(ENDPOINTS.UPDATE_DONOR_REVIEW_SECTION, donorReviewSectionData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}

export {
    getAllAboutUsPageData,
    updateHeroImage,
    updateAboutUs,
    createVolunteer,
    editVolunteer,
    deleteVolunteer,
    updateVolunteerSection,
    updateOurAchievements,
    createDonorReview,
    editDonorReview,
    deleteDonorReview,
    updateDonorReviewSection
}