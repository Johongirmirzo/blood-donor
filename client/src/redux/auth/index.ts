import {createSlice} from "@reduxjs/toolkit";
import {IDonorList} from "../../types/donor"

const initialState: IDonorList = {
    _id: "",
    isAdmin: false,
    isHidden: false,
    fullname: "",
    phoneNumber: "",
    email: "",
    age: 0,
    gender: "",
    bloodGroup: "",
    city: "",
}

const authUserSlice = createSlice({
    name: "auth-user",
    initialState,
    reducers: {
        loginUser: (state, {payload: {authenticatedUser}}) =>{
            state._id = authenticatedUser._id;
            state.isHidden = authenticatedUser.isHidden;
            state.isAdmin = authenticatedUser.isAdmin;
            state.fullname = authenticatedUser.fullname;
            state.phoneNumber = authenticatedUser.phoneNumber;
            state.email = authenticatedUser.email;
            state.age = authenticatedUser.age;
            state.gender = authenticatedUser.gender;
            state.bloodGroup = authenticatedUser.bloodGroup;
            state.city = authenticatedUser.city;
        },
        logoutUser: (state, action) =>{
            state._id = "";
            state.isHidden = false;
            state.isAdmin = false;
            state.fullname = "";
            state.phoneNumber = "";
            state.email = "";
            state.age = 0;
            state.gender = "";
            state.bloodGroup = "";
            state.city = "";
        },
        changeProfile: (state, {payload: {editedProfileData}}) =>{
            console.log("redx",editedProfileData)
            state.fullname = editedProfileData.fullname;
            state.phoneNumber = editedProfileData.phoneNumber;
            state.email = editedProfileData.email;
            state.age = editedProfileData.age;
            state.gender = editedProfileData.gender;
            state.bloodGroup = editedProfileData.bloodGroup;
            state.city = editedProfileData.city;
        },
    }
})

export const {loginUser, logoutUser, changeProfile} = authUserSlice.actions;
export default authUserSlice.reducer;