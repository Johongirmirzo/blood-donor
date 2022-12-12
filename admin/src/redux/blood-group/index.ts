import {createSlice} from "@reduxjs/toolkit";
import { IBloodGroupList } from "../../types/blood-group";

const initialState: IBloodGroupList = {
    bloodGroups: []
}

const bloodGroupSlice = createSlice({
    name: "blood-group",
    initialState,
    reducers: {
        storeAllBloodGroups: (state, {payload: {bloodGroups}})=>{
            state.bloodGroups = [...bloodGroups]
        },
        addBloodGroup: (state, {payload: {bloodGroup}})=>{
            state.bloodGroups.push(bloodGroup)
        },
        editBloodGroup: (state, {payload: {editedBloodGroup}})=>{
            state.bloodGroups = state.bloodGroups.map(bloodGroup => bloodGroup._id ===editedBloodGroup._id ? editedBloodGroup : bloodGroup);
        },
        deleteBloodGroup: (state, {payload: {bloodGroupId}})=>{
            state.bloodGroups = state.bloodGroups.filter(bloodGroup => bloodGroup._id !== bloodGroupId)
        },
    }
})

export const {storeAllBloodGroups, addBloodGroup, editBloodGroup, deleteBloodGroup} = bloodGroupSlice.actions;
export default bloodGroupSlice.reducer;