import {createSlice} from "@reduxjs/toolkit";
import {IDonor} from "../../types/donor";

const initialState: IDonor = {
    donors: []
}
const contactUsPageSlice = createSlice({
    name: "contact-us-page",
    initialState,
    reducers: {
        storeAllDonors: (state, {payload: {allDonors}}) => {
            state.donors = [...allDonors];  
        },
        createDonor: (state, {payload: {newDonor}})=>{
            state.donors.push(newDonor);
        },
        editDonor: (state, {payload: {editedDonor}})=>{
            state.donors = state.donors.map(donor => donor._id === editedDonor._id ? editedDonor : donor);
        }
    }
});
export const {storeAllDonors, createDonor, editDonor} = contactUsPageSlice.actions;
export default contactUsPageSlice.reducer;