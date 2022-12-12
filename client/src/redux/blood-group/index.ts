import {createSlice} from "@reduxjs/toolkit";
import {IBloodGroupList} from "../../types/blood-group";

const initialState: IBloodGroupList = {
    bloodGroups: []
}

const bloodGroupSlice = createSlice({
    name: "blood-group",
    initialState,
    reducers: {
        storeAllBloodGroups: (state, {payload: {allBloodGroups}})=>{
            state.bloodGroups = [...allBloodGroups];
        }
    }
})
export const {storeAllBloodGroups} = bloodGroupSlice.actions;
export default bloodGroupSlice.reducer;