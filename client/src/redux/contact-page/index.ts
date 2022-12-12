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
    },
}
const contactUsPageSlice = createSlice({
    name: "contact-us-page",
    initialState,
    reducers: {
        storeAllContactUsPageData: (state, {payload: {contactUsPageData}}) => {
            state.heroImage = contactUsPageData.heroImage;
            state.contactInfo = contactUsPageData.contactInfo;   
        }
    }
});
export const {storeAllContactUsPageData} = contactUsPageSlice.actions;
export default contactUsPageSlice.reducer;