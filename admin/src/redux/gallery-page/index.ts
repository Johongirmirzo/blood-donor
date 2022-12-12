import {createSlice} from "@reduxjs/toolkit";
import {IGalleryPage} from "../../types/gallery-page"

const initialState: IGalleryPage = {
    heroImage: "",
    gallery: {
        title: "",
        description: "",
        images: []
    }
}

const galleryPageSlice = createSlice({
    name: "gallery-page",
    initialState,
    reducers: {
        storeAllGalleryPageData: (state, {payload: {galleryPageData}})=>{
            state.heroImage = galleryPageData.heroImage;
            state.gallery = galleryPageData.gallery;
        },
        addGallery: (state, {payload: {newImage}})=>{
            state.gallery.images.push(newImage);
        },
        deleteImage: (state, {payload: {imageId}})=>{
            state.gallery.images = state.gallery.images.filter(image => image._id !== imageId);
        },
        updateGallerySection: (state, {payload: {gallerySection}})=>{
            state.gallery = {...state.gallery, ...gallerySection}
        },
        updateHeroImage: (state, {payload: {heroImage}})=>{
            state.heroImage = heroImage;
        },
    }
})

export const {storeAllGalleryPageData, addGallery, deleteImage, updateGallerySection, updateHeroImage} = galleryPageSlice.actions;
export default galleryPageSlice.reducer;