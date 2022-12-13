import {Request, Response} from "express";
import path from "path";
import fs from "fs";
import cloudinary, {cloudinaryOptions} from "../config/cloudinary";
import FaqPage, {IFaqPage} from "../models/faq-page";

const FaqPageController = {
    getAllFaqPageData: async (req: Request, res: Response)=>{
        try {
            const faqPage = await FaqPage.findOne();
            if(!faqPage){
                const newFaqPage = await FaqPage.create({});
                return res.status(201).json(newFaqPage);
            }
            res.json(faqPage);
            
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
    getHeroImage: async (req: Request, res: Response)=>{
        try {
            const faqPage = await FaqPage.findOne() as IFaqPage;
            res.json(faqPage.heroImage);
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
    updateHeroImage: async (req: Request, res: Response)=>{
        try {
            const faqPage = await FaqPage.findOne() as IFaqPage
            if(faqPage.heroImage){
                fs.rm(path.join(__dirname, `../public/images/${faqPage.heroImagePath}`), async () => {
                    await cloudinary.v2.uploader.destroy(faqPage.heroImageId);
                    const newImage=  await cloudinary.v2.uploader.upload(req.file.path, cloudinaryOptions);
                    faqPage.heroImage = newImage.secure_url;
                    faqPage.heroImageId = newImage.public_id;
                    faqPage.heroImagePath = req.file.filename;
                    await faqPage.save();
                    res.json(faqPage.heroImage);
                })
            } else {
                const newImage=  await cloudinary.v2.uploader.upload(req.file.path, cloudinaryOptions);
                faqPage.heroImage = newImage.secure_url;
                faqPage.heroImageId = newImage.public_id;
                faqPage.heroImagePath = req.file.filename;
                await faqPage.save();
                res.json(faqPage.heroImage);
            }
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
    getFaqsSection: async (req: Request, res: Response)=>{
        try {
            const faqPage = await FaqPage.findOne() as IFaqPage
            res.json(faqPage.faq)
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
    updateFaqsSection: async (req: Request, res: Response)=>{
        try {
            const {title, description} = req.body;
            const faqPage = await FaqPage.findOne() as IFaqPage
            faqPage.faq = {
                ...faqPage.faq,
                title,
                description
            }
            await faqPage.save();
            res.json(faqPage.faq)
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
    getAllFaqs: async (req: Request, res: Response)=>{
        try {
            const faqPage = await FaqPage.findOne() as IFaqPage;
            res.json(faqPage.faq.faqList) 
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
    getFaq: async (req: Request, res: Response)=>{
        try {
            const {faqId} = req.params;
            const faqPage = await FaqPage.findOne() as IFaqPage;
            const faq = faqPage.faq.faqList.find(faq => faq._id?.toString() === faqId);
            res.json(faq);
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
    createFaq: async (req: Request, res: Response)=>{
        try {
            const {question, answer} = req.body;
            const faqPage = await FaqPage.findOne() as IFaqPage;
            faqPage.faq.faqList.push({question, answer});
             
            await faqPage.save();
            res.status(201).json(faqPage.faq.faqList[faqPage.faq.faqList.length - 1]);
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
    editFaq: async (req: Request, res: Response)=>{
        try {
            const {faqId} = req.params;
            const {question, answer} = req.body;
            const faqPage = await FaqPage.findOne() as IFaqPage;
            const faq = faqPage.faq.faqList.filter(faq => faq._id?.toString() === faqId)[0];
            faq.question = question || faq.question;
            faq.answer = answer || faq.answer;
            await faqPage.save();
            res.json(faq)
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
    deleteFaq: async (req: Request, res: Response)=>{
        try {
            const {faqId} = req.params;
            const faqPage = await FaqPage.findOne() as IFaqPage;
            const faqIndex = faqPage.faq.faqList.findIndex(faq => faq._id?.toString() === faqId);
            faqPage.faq.faqList.splice(faqIndex, 1);
            await faqPage.save();
            res.json("Faq is deleted successfully!")
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
    getAllSponsors: async (req: Request, res: Response)=>{
        try {
            const faqPage = await FaqPage.findOne() as IFaqPage
            res.json(faqPage.sponsor.images);
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
    createSponsor: async (req: Request, res: Response)=>{
        try {
            const faqPage = await FaqPage.findOne() as IFaqPage
            const newImage=  await cloudinary.v2.uploader.upload(req.file.path, cloudinaryOptions);
            faqPage.sponsor.images.push({
                image: newImage.secure_url,
                imageId: newImage.public_id,
                imagePath: req.file.filename,
                imageCreationDate: new Date().toString()
            })
            await faqPage.save();
            res.json(faqPage.sponsor.images[faqPage.sponsor.images.length - 1]);
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
    deleteSponsor: async (req: Request, res: Response)=>{
        try {
            const {sponsorId} = req.params;
            const faqPage = await FaqPage.findOne() as IFaqPage
            const sponsor = faqPage.sponsor.images.filter(image => image._id?.toString() === sponsorId)[0];
            fs.rm(path.join(__dirname, `../public/images/${sponsor.imagePath}`), async () => {
                await cloudinary.v2.uploader.destroy(sponsor.imageId);
                const sponsorIndex = faqPage.sponsor.images.findIndex(image => image._id?.toString() === sponsorId);
                faqPage.sponsor.images.splice(sponsorIndex, 1)
                await faqPage.save();
            })
            res.json({message: "Sponsor image is deleted successfully!"})

        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
    getSponsorsSection: async (req: Request, res: Response)=>{
        try {
            const faqPage = await FaqPage.findOne() as IFaqPage
            res.json(faqPage.sponsor)
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
    updateSponsorsSection: async (req: Request, res: Response)=>{
        try {
            const {title, description} = req.body;
            const faqPage = await FaqPage.findOne() as IFaqPage
            faqPage.sponsor = {
                ...faqPage.sponsor,
                title,
                description
            }
            await faqPage.save();
            res.json(faqPage.sponsor)
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
}
export default FaqPageController;