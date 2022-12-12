import {createSlice} from "@reduxjs/toolkit";
import {IFaqPage} from "../../types/faq-page"

const initialState: IFaqPage = {
    heroImage: "",
    faq: {
        title: "",
        description: "",
        faqList: []
    },
    sponsor: {
        title: "",
        description: "",
        images: []   
    }
}

const faqPageSlice = createSlice({
    name: "faq-page",
    initialState,
    reducers: {
        storeAllFaqPageData: (state, {payload: {faqPageData}}) => {
            state.heroImage = faqPageData.heroImage;
            state.faq = faqPageData.faq;
            state.sponsor = faqPageData.sponsor;
        },
        updateFaqsSection: (state, {payload: {faqSection}}) => {
            state.faq = {...state.faq, ...faqSection};
        },
        updateSponsorsSection: (state, {payload: {sponsorSection}}) => {
            state.sponsor = {...state.sponsor, ...sponsorSection};
        },
        updateHeroImage: (state, {payload: {heroImage}}) => {
            state.heroImage = heroImage;
        },
        addFaq: (state, {payload: {newFaq}}) => {
            console.log("redux",newFaq);
            state.faq.faqList.push(newFaq)
        },
        updateFaq: (state, {payload: {editedFaq}}) => {
            state.faq.faqList = state.faq.faqList.map(faqItem => faqItem._id === editedFaq._id ? editedFaq: faqItem);
        },
        deleteFaq: (state, {payload: {faqId}}) => {
            state.faq.faqList = state.faq.faqList.filter(faqItem => faqItem._id !== faqId);
        },
        addSponsor: (state, {payload: {newSponsor}}) => {
            state.sponsor.images.push(newSponsor)
        },
        deleteSponsor: (state, {payload: {sponsorId}}) => {
            state.sponsor.images = state.sponsor.images.filter(image => image._id !== sponsorId);
        },
    }
})
export const {
    storeAllFaqPageData, 
    updateFaqsSection, 
    updateSponsorsSection, 
    updateHeroImage, 
    addFaq, 
    updateFaq, 
    deleteFaq, 
    addSponsor, 
    deleteSponsor
} = faqPageSlice.actions;
export default faqPageSlice.reducer;