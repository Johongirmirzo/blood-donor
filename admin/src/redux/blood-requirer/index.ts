import {createSlice} from "@reduxjs/toolkit";
import {IBloodRequirer} from "../../types/blood-requirer"

const initialState: IBloodRequirer = {
    bloodRequirers: []
}

const bloodRequirerSlice = createSlice({
    name: "blood-requirer",
    initialState,
    reducers: {
        storeAllBloodRequirers: (state, {payload: {allBloodRequirers}})=>{
            state.bloodRequirers = [...allBloodRequirers]
        },
        deleteBloodRequirer: (state, {payload: {bloodRequirerId}})=>{
            state.bloodRequirers = state.bloodRequirers.filter(bloodRequirer => bloodRequirer._id !== bloodRequirerId);
        }
    }
})
export const {storeAllBloodRequirers, deleteBloodRequirer} = bloodRequirerSlice.actions;
export default bloodRequirerSlice.reducer;

