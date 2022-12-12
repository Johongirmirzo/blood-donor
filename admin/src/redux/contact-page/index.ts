import {createSlice} from "@reduxjs/toolkit";
import {IContactUsPage} from "../../types/contact-us-page";

const initialState: IContactUsPage = {
    heroImage: "",
    contactInfo: {
        supportEmail: "",
        helpEmail: "",
        address: "",
        officePhoneNumber: "",
        cellPhoneNumber: "", 
    }
}
const contactUsPageSlice = createSlice({
    name: "contact-us-page",
    initialState,
    reducers: {
        storeAllContactUsPageData: (state, {payload: {contactUsPageData}}) =>{
            state.heroImage = contactUsPageData.heroImage;
            state.contactInfo = contactUsPageData.contactInfo;
        },
        updateHeroImage: (state, {payload: {heroImage}}) =>{
            state.heroImage = heroImage;
        },
        updateContactUsInfo: (state, {payload: {contactUsInfo}}) =>{
            state.contactInfo = {...state.contactInfo, ...contactUsInfo}
        },
    }
})

export const {storeAllContactUsPageData, updateHeroImage, updateContactUsInfo} = contactUsPageSlice.actions;
export default contactUsPageSlice.reducer;