import {Request, Response} from "express";
import path from "path";
import fs from "fs";
import GalleryPage, {IGalleryPage} from "../models/gallery-page";
import cloudinary, {cloudinaryOptions} from "../config/cloudinary"

const GalleryPageController = {
    getAllGalleryPageData: async (req: Request, res: Response)=>{
        try {
            const galleryPageData = await GalleryPage.findOne();
            if(!galleryPageData){
                const newGalleryPageData =  await GalleryPage.create({});
                return res.status(201).json(newGalleryPageData);
            }
            res.json(galleryPageData);
        }catch(err: any){
            res.status(400).json({error: err.message});
        }
    },
    getHeroImage: async (req: Request, res: Response)=>{
        try {
            const galleryPage = await GalleryPage.findOne() as IGalleryPage;
            res.json(galleryPage.heroImage); 
        }catch(err: any){
            res.status(400).json({error: err.message});
        }
    },
    updateHeroImage: async (req: Request, res: Response)=>{
        try {
            const galleryPage = await GalleryPage.findOne() as IGalleryPage;
            if(galleryPage.heroImage){
                fs.rm(path.join(__dirname, `../public/images/${galleryPage.heroImagePath}`), async () => {
                    await cloudinary.v2.uploader.destroy(galleryPage.heroImageId);
                    const newImage=  await cloudinary.v2.uploader.upload(req.file.path, cloudinaryOptions);
                    galleryPage.heroImage = newImage.secure_url;
                    galleryPage.heroImageId = newImage.public_id;
                    galleryPage.heroImagePath = req.file.filename;
                    await galleryPage.save();
                    res.json(galleryPage.heroImage);
                })
            } else {
                const newImage=  await cloudinary.v2.uploader.upload(req.file.path, cloudinaryOptions);
                galleryPage.heroImage = newImage.secure_url;
                galleryPage.heroImageId = newImage.public_id;
                galleryPage.heroImagePath = req.file.filename;
                await galleryPage.save();
                res.json(galleryPage.heroImage);
            }
        }catch(err: any){
            res.status(400).json({error: err.message});
        }
    },
    getGallery: async (req: Request, res: Response)=>{
        try {
            const galleryPage = await GalleryPage.findOne() as IGalleryPage;
            res.json(galleryPage.gallery);
        }catch(err: any){
            res.status(400).json({error: err.message});
        }
    },
    createGallery: async (req: Request, res: Response)=>{
        try {
            const galleryPage = await GalleryPage.findOne() as IGalleryPage;
            const newImage = await cloudinary.v2.uploader.upload(req.file.path, cloudinaryOptions);
            galleryPage.gallery.images.push({
                image: newImage.secure_url,
                imageId: newImage.public_id,
                imagePath: req.file.filename,
                imageCreationDate: new Date().toString()
            })
            await galleryPage.save();
            res.status(201).json(galleryPage.gallery.images.at(-1));
        }catch(err: any){
            res.status(400).json({error: err.message});
        }
    },
    deleteGallery: async (req: Request, res: Response)=>{
        try {
            const {imageId} = req.params;
            const galleryPage = await GalleryPage.findOne() as IGalleryPage;
            const image = galleryPage.gallery.images.find(image => image._id?.toString() === imageId);
            if(image){
                fs.rm(path.join(__dirname, `../public/images/${image.imagePath}`), async () => {
                    await cloudinary.v2.uploader.destroy(image.imageId);
                    const imageIndex = galleryPage.gallery.images.findIndex(image => image._id?.toString() == imageId);
                    galleryPage.gallery.images.splice(imageIndex, 1);
                    await galleryPage.save();
                    res.json({message: "Image is deleted successfully!"})
                })
                return;
            }   
            res.json("Current iamge does not exist")
        }catch(err: any){
            res.status(400).json({error: err.message});
        }
    },
    getGallerySection: async (req: Request, res: Response)=>{
        try {
            const galleryPage = await GalleryPage.findOne() as IGalleryPage;
            res.json(galleryPage.gallery);
        }catch(err: any){
            res.status(400).json({error: err.message});
        }
    },
    updateGallerySection: async (req: Request, res: Response)=>{
        try {
            const {title, description} = req.body;
            const galleryPage = await GalleryPage.findOne() as IGalleryPage;
            if(galleryPage.gallery.title){
                galleryPage.gallery = {
                    ...galleryPage.gallery,
                    title,
                    description
                }
            } else {
                galleryPage.gallery = {
                    ...galleryPage.gallery,
                    title,
                    description
                }
            }
            await galleryPage.save();
            res.json(galleryPage.gallery)
        }catch(err: any){
            res.status(400).json({error: err.message});
        }
    },
}

export default GalleryPageController;