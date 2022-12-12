import {configureStore} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {
    adminReducer, 
    bloodGroupReducer, 
    homePageReducer, 
    aboutUsPageReducer, 
    galleryPageReducer,
    faqPageReducer,
    contactUsPageReducer,
    donorReducer,
    messageReducer,
    bloodRequirerReducer,
    subscriberReducer
} from "./index";


const persistConfig = {
    key: 'admin',
    storage,
}

const persistedReducer = persistReducer(persistConfig, adminReducer)

const store = configureStore({
    reducer: {
        admin: persistedReducer,
        bloodGroup: bloodGroupReducer,
        homePage: homePageReducer,
        aboutUsPage: aboutUsPageReducer,
        galleryPage: galleryPageReducer,
        faqPage: faqPageReducer,
        contactUsPage: contactUsPageReducer,
        donors: donorReducer,
        messages: messageReducer,
        bloodRequirers: bloodRequirerReducer,
        subscribers: subscriberReducer
    }
})

const persistor = persistStore(store);

export {persistor, store}
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch