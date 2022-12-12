import {createSlice} from "@reduxjs/toolkit";
import {IBloodRequirer} from "../../types/blood-requirer"

const initialState: IBloodRequirer = {
    bloodRequirers: []
}

const bloodRequirerSlice = createSlice({
    name: "blood-requirer",
    initialState,
    reducers: {
        storeAllBloodRequirers: (state, {payload: {allBloodRequirers}}) =>{
            state.bloodRequirers = [...allBloodRequirers]
        },
        createBloodRequirer: (state, {payload: {newBloodRequirer}}) =>{
            state.bloodRequirers.push(newBloodRequirer);
        },
    }
})

export const {storeAllBloodRequirers, createBloodRequirer} = bloodRequirerSlice.actions;
export default bloodRequirerSlice.reducer;