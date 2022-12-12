import {createSlice} from "@reduxjs/toolkit";
import {IFaqPage} from "../../types/faq-page";

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
        images: [],
    },
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
    }
});
export const {storeAllFaqPageData} = faqPageSlice.actions;
export default faqPageSlice.reducer;