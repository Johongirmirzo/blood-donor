import {createSlice} from "@reduxjs/toolkit";
import {IDonor} from "../../types/donor";

const initialState: IDonor = {
    donors: []
}

const donorSlice = createSlice({
    name: "donor",
    initialState,
    reducers: {
        storeAllDonors: (state, {payload: {allDonors}})=>{
            state.donors = [...allDonors]
        },
        toggleDonor: (state, {payload: {donorId}})=>{
            state.donors = state.donors.map(donor => donor._id === donorId ? {...donor, isHidden: !donor.isHidden} : donor)
        },
        deleteDonor: (state, {payload: {donorId}})=>{
            state.donors = state.donors.filter(donor => donor._id !== donorId);
        },
    }
})

export const {storeAllDonors, toggleDonor, deleteDonor} = donorSlice.actions;
export default donorSlice.reducer;