import {createSlice} from "@reduxjs/toolkit";
import {ISubscriber} from "../../types/subscriber";

const initialState: ISubscriber = {
    subscribers: []
}
const subscriberSlice = createSlice({
    name: "subscriber",
    initialState,
    reducers: {
        storeAllSubcribers: (state, {payload: {allSubcribers}}) =>{
            state.subscribers = [...allSubcribers];
        },
        deleteSubscriber: (state, {payload: {subscriberId}}) =>{
            state.subscribers = state.subscribers.filter(subscriber => subscriber._id !== subscriberId);
        }
    }
});

export const {storeAllSubcribers, deleteSubscriber} = subscriberSlice.actions;
export default subscriberSlice.reducer;