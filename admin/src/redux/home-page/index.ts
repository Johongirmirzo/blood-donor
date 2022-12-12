import {createSlice} from "@reduxjs/toolkit";
import { IHomePage } from "../../types/home-page";

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
       storeAllHomePageData: (state, {payload: homePageData})=>{
        state.sliders = homePageData.sliders;
        state.helpfulInfo = homePageData.helpfulInfo;
        state.bloodGroups = homePageData.bloodGroups;
        state.initiative = homePageData.initiative;
        state.value = homePageData.value;
       },
       addSlider: (state, {payload: {slider}})=>{
        state.sliders.push(slider);
       },
       updateSlider: (state, {payload: {editedSlider}})=>{
        state.sliders = state.sliders.map(slider => slider._id === editedSlider._id ? editedSlider : slider);
       },
       removeSlider: (state, {payload: {sliderId}})=>{
        state.sliders = state.sliders.filter(slider => slider._id !== sliderId);
       },
       updateHelpfulInfo: (state, {payload: {helpfulInfo}})=>{
        state.helpfulInfo = {...state.helpfulInfo, ...helpfulInfo}
       },
       updateBloodGroupsInfo: (state, {payload: {bloodGroups}})=>{
        state.bloodGroups = {...state.bloodGroups, ...bloodGroups}
       },
       updateInitiative: (state, {payload: {initiative}})=>{
        state.initiative = {...state.initiative, ...initiative}   
       },
       updateValue: (state, {payload: {value}})=>{
        state.value = value
       },
    }
})

export const {
    storeAllHomePageData, 
    addSlider, 
    updateSlider, 
    removeSlider, 
    updateHelpfulInfo,
    updateBloodGroupsInfo,
    updateInitiative,
    updateValue
} = homePageSlice.actions;

export default homePageSlice.reducer;