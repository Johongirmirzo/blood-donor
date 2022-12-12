import {configureStore} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {
    homePageReducer, 
    aboutUsPageReducer, 
    galleryPageReducer,
    faqPageReducer,
    contactPageReducer,
    donorReducer,
    authUserReducer,
    bloodGroupReducer,
    bloodRequirerReducer
} from "./index";


const persistConfig = {
    key: 'donor',
    storage,
}

const persistedUser = persistReducer(persistConfig, authUserReducer) 

const store = configureStore({
    reducer: {        
        homePage: homePageReducer,
        aboutUsPage: aboutUsPageReducer,
        galleryPage: galleryPageReducer,
        faqPage: faqPageReducer,
        contactPage: contactPageReducer,
        donors: donorReducer,
        authUser: persistedUser,
        bloodGroup: bloodGroupReducer,
        bloodRequirer: bloodRequirerReducer
    }
})

const persistor = persistStore(store);
export {persistor, store}


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch