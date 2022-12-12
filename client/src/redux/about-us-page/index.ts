import {createSlice} from "@reduxjs/toolkit";
import {IAboutUsPage} from "../../types/about-us-page";

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
        volunteers: [],
    },
    ourAchievements: {
        title: "",
        description: "",
        achievementList: [],
    },
    donorReviews: {
        title: "",
        description: "",
        donorReviewHeroImage: "",
        donors: [],
    }
}
const aboutUsPageSlice = createSlice({
    name: "about-us-page",
    initialState,
    reducers: {
        storeAllAboutUsPageData: (state, {payload: {aboutUsPageData}}) => {
            state.heroImage = aboutUsPageData.heroImage;
            state.aboutUs = aboutUsPageData.aboutUs;
            state.volunteers = aboutUsPageData.volunteers;
            state.ourAchievements = aboutUsPageData.ourAchievements;
            state.donorReviews = aboutUsPageData.donorReviews;
        },
    }
});
export const {storeAllAboutUsPageData} = aboutUsPageSlice.actions;
export default aboutUsPageSlice.reducer;