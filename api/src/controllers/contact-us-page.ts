import {Request, Response} from "express";
import path from "path";
import fs from "fs";
import cloudinary, {cloudinaryOptions} from "../config/cloudinary"
import ContactUsPage, {IContactUsPage} from "../models/contact-us-page";

const ContactUsPageController = {
    getAllContactUsPageData: async (req: Request, res: Response) => {
        try {
            const contactUsPage = await ContactUsPage.findOne() as IContactUsPage;
            if(!contactUsPage){
                const newContactUsPage = await ContactUsPage.create({});
                return res.status(201).json(newContactUsPage);
            }
            res.json(contactUsPage);
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
    getHeroImage: async (req: Request, res: Response)=>{
        try {
            const contactUsPage = await ContactUsPage.findOne() as IContactUsPage;
            res.json(contactUsPage.heroImage)
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
    updateHeroImage: async (req: Request, res: Response)=>{
        try {
            const contactUsPage = await ContactUsPage.findOne() as IContactUsPage;
            if(contactUsPage.heroImage){
                fs.rm(path.join(__dirname, `../public/images/${contactUsPage.heroImagePath}`), async ()=>{
                    await cloudinary.v2.uploader.destroy(contactUsPage.heroImageId);
                    const newImage = await cloudinary.v2.uploader.upload(req.file.path, cloudinaryOptions);
                    contactUsPage.heroImage = newImage.secure_url;
                    contactUsPage.heroImageId = newImage.public_id;
                    contactUsPage.heroImagePath = req.file.filename;
                    await contactUsPage.save();
                    res.json(contactUsPage.heroImage);
                })
            } else {
                const newImage = await cloudinary.v2.uploader.upload(req.file.path, cloudinaryOptions);
                contactUsPage.heroImage = newImage.secure_url;
                contactUsPage.heroImageId = newImage.public_id;
                contactUsPage.heroImagePath = req.file.filename;
                await contactUsPage.save();
                res.json(contactUsPage.heroImage);
            }
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
    getContactInfo: async (req: Request, res: Response)=>{
        try {
            const contactUsPage = await ContactUsPage.findOne() as IContactUsPage;
            res.json(contactUsPage.contactInfo)
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
    updateContactInfo: async (req: Request, res: Response)=>{
        try {
            const {supportEmail, helpEmail, address, officePhoneNumber, cellPhoneNumber} = req.body;
            const contactUsPage = await ContactUsPage.findOne() as IContactUsPage;       
            contactUsPage.contactInfo = {
                ...contactUsPage.contactInfo,
                supportEmail, 
                helpEmail, 
                address, 
                officePhoneNumber, 
                cellPhoneNumber
            }
            await contactUsPage.save();
            res.json(contactUsPage.contactInfo);
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
}

export default ContactUsPageController;