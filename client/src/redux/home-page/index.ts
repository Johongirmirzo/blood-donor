import {createSlice} from "@reduxjs/toolkit";
import {IHomePage} from "../../types/home-page";

const initialState: IHomePage = {
    sliders: [],
    helpfulInfo: {
        title: "",
        description: "",
        infoList: []
    },
    bloodGroups: {
        title: "",
        description: "",
        bloodGroupImage: "",
        bloodGroupList: [],
        bloodGroupListDescription: "",
    },
    initiative: {
        title: "",
        description: "",
    },
    value: "",
}
const homePageSlice = createSlice({
    name: "home-page",
    initialState,
    reducers: {
        storeAllHomePageData: (state, {payload: {homePageData}}) => {
            state.sliders = homePageData.sliders;
            state.helpfulInfo = homePageData.helpfulInfo;
            state.bloodGroups = homePageData.bloodGroups;
            state.initiative = homePageData.initiative;
            state.value = homePageData.value;
        },
    }
});
export const {storeAllHomePageData} = homePageSlice.actions;
export default homePageSlice.reducer;