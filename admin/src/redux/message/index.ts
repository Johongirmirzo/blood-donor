import {createSlice} from "@reduxjs/toolkit";
import {IMessage} from "../../types/message"

const initialState: IMessage = {
    messages: []
}

const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        storeAllMessages: (state, {payload: {allMessages}}) => {
            state.messages = [...allMessages]
        },
        deleteMessage: (state, {payload: {messageId}}) => {
            state.messages = state.messages.filter(message => message._id !== messageId);
        },
    }
})

export const {storeAllMessages, deleteMessage} = messageSlice.actions;
export default messageSlice.reducer;