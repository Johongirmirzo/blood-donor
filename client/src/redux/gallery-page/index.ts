import {createSlice} from "@reduxjs/toolkit";
import {IGalleryPage} from "../../types/gallery-page";

const initialState: IGalleryPage = {
    heroImage: "",
    gallery: {
        title: "",
        description: "",
        images: [],
    },
}
const galleryPageSlice = createSlice({
    name: "gallery-page",
    initialState,
    reducers: {
        storeAllGalleryPageData: (state, {payload: {galleryPageData}}) => {
            state.heroImage = galleryPageData.heroImage;
            state.gallery = galleryPageData.gallery;
        },
    }
});
export const {storeAllGalleryPageData} = galleryPageSlice.actions;
export default galleryPageSlice.reducer;