import {createSlice} from "@reduxjs/toolkit";
import {IAdmin} from "../../types/admin";

const initialState: IAdmin = {
    adminId: "",
    fullname: "",
    phoneNumber: "",
    email: "",
    age: 0,
    gender: "",
    bloodGroup: "",
    city: "",
    isHidden: false,
    isAdmin: false,
}

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        storeAdmin: (state, {payload: {admin}})=>{
            state.adminId = admin.adminId || "";
            state.fullname = admin.fullname || "";
            state.phoneNumber = admin.phoneNumber || "";
            state.email = admin.email || "";
            state.age = admin.age || 0;
            state.gender = admin.gender || "";
            state.bloodGroup = admin.bloodGroup || "";
            state.city = admin.city || "";
            state.isHidden = admin.isHidden || false;
            state.isAdmin = admin.isAdmin || false;
        },
        removeAdmin: (state, action)=>{
            state.adminId = "";
            state.fullname = "";
            state.phoneNumber =  "";
            state.email = "";
            state.age = 0
            state.gender = "";
            state.bloodGroup = "";
            state.city =  "";
            state.isHidden = false;
            state.isAdmin = false;
        },
        changeProfile: (state, {payload: {admin}})=>{
            state.fullname = admin.fullname || "";
            state.phoneNumber = admin.phoneNumber || "";
            state.email = admin.email || "";
            state.age = admin.age || 0;
            state.gender = admin.gender || "";
            state.city = admin.city || "";
        },
    }
})

export const {storeAdmin, removeAdmin, changeProfile} = adminSlice.actions;
export default adminSlice.reducer;