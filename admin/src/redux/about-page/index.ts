import {createSlice} from "@reduxjs/toolkit";
import {IAboutUsPage} from "../../types/about-us-page"

const initialState: IAboutUsPage = {
    heroImage: "",
    aboutUs: {
        title: "",
        description: "",
        aboutUsImage: "",
        aboutUsList: [],
    },
    volunteers: {
        title: "",
        description: "",
        volunteerHeroImage: "",
        volunteers: []
    },
    ourAchievements: {
        title: "",
        description: "",
        achievementList: []
    },
    donorReviews: {
        title: "",
        description: "",
        donorReviewHeroImage: "",
        donors: []
    }
}

const aboutUsPageSlice = createSlice({
    name: "about-us-page",
    initialState,
    reducers: {
        storeAllAboutUsPageData: (state, {payload: {aboutUsPageData}})=>{
            console.log(aboutUsPageData)
            state.heroImage = aboutUsPageData.heroImage;
            state.aboutUs = aboutUsPageData.aboutUs;
            state.volunteers = aboutUsPageData.volunteers;
            state.ourAchievements = aboutUsPageData.ourAchievements;
            state.donorReviews = aboutUsPageData.donorReviews;
        },
        updateHeroImage: (state, {payload: {heroImage}})=>{
            state.heroImage = heroImage;
        },
        updateAboutUs: (state, {payload: {aboutUsData}})=>{
            state.aboutUs = {...state.aboutUs, ...aboutUsData};
        },
        addVolunteer: (state, {payload: {newVolunteer}})=>{
            state.volunteers.volunteers.push(newVolunteer)
        },
        updateVolunteer: (state, {payload: {editedVolunteer}})=>{
            state.volunteers.volunteers = state.volunteers.volunteers.map((volunteer => volunteer._id === editedVolunteer._id ? editedVolunteer : volunteer));
        },
        deleteVolunteer: (state, {payload: {volunteerId}})=>{
            state.volunteers.volunteers = state.volunteers.volunteers.filter(volunteer => volunteer._id !== volunteerId);
        },
        updateVolunteerSection: (state, {payload: {volunteerSection}})=>{
            state.volunteers = {...state.volunteers, ...volunteerSection};
        },
        updateOurAchievements: (state, {payload: {ourAchievements}})=>{
            state.ourAchievements = {...state.ourAchievements, ...ourAchievements}
        },
        addDonorReview: (state, {payload: {newDonoReview}})=>{
            state.donorReviews.donors.push(newDonoReview)
        },
        updateDonorReview: (state, {payload: {editedDonorReview}})=>{
            state.donorReviews.donors = state.donorReviews.donors.map(donor => donor._id === editedDonorReview._id ? editedDonorReview : donor)
        },
        deleteDonorReview: (state, {payload: {donorReviewId}})=>{
            state.donorReviews.donors = state.donorReviews.donors.filter(donor => donor._id !== donorReviewId);
        },
        updateDonorReviewSection: (state, {payload: {donorReviewsSection}})=>{
            console.log("redx",donorReviewsSection)
            state.donorReviews = {...state.donorReviews, ...donorReviewsSection}
        },
    }
})

export const {
    storeAllAboutUsPageData, 
    updateHeroImage,
    updateAboutUs,
    addVolunteer,
    updateVolunteer,
    deleteVolunteer,
    updateVolunteerSection,
    updateOurAchievements,
    addDonorReview,
    updateDonorReview,
    deleteDonorReview,
    updateDonorReviewSection
} = aboutUsPageSlice.actions;
export default aboutUsPageSlice.reducer;