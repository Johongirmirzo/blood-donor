import mongoose from "mongoose";

interface IImageList {
    _id?: string;
    image: string;
    imagePath: string;
    imageId: string;
    imageCreationDate: string;
}

interface IGallery {
    title: string;
    description: string;
    images: IImageList[];
}

export interface IGalleryPage extends mongoose.Document {
    heroImage: string;
    heroImagePath: string;
    heroImageId: string;
    gallery: IGallery;

}

const GalleryPageSchema = new mongoose.Schema({
    heroImage: String,
    heroImagePath: String,
    heroImageId: String,
    gallery: {
        title: String,
        description: String,
        images: [{image: String, imagePath: String, imageId: String, imageCreationDate: {type: Date, default: new Date()}}]
    }
})

export default mongoose.model<IGalleryPage>("GalleryPage", GalleryPageSchema);