import { Request, Response, NextFunction} from "express";
import path from "path";
import fs from "fs";
import cloudinary, {cloudinaryOptions} from "../config/cloudinary";
import AboutUsPage, {IAboutUsPage} from "../models/about-us-page";

const AboutUsPageController = {
    getAllAboutUsPageData: async (req: Request, res: Response)=>{
        try {
            const aboutUsData = await AboutUsPage.findOne();
            if(!aboutUsData){
                const aboutUsData = await AboutUsPage.create({});
                return res.json(aboutUsData);
            }
            res.json(aboutUsData);
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
    getHeroImage: async (req: Request, res: Response)=>{
        try {
            const aboutUsData = await AboutUsPage.findOne() as IAboutUsPage;
            res.json(aboutUsData.heroImage);
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
    updateHeroImage: async (req: Request, res: Response)=>{
        try {
            const aboutUsData = await AboutUsPage.findOne() as IAboutUsPage;
            if(aboutUsData.heroImage){
                fs.rm(path.join(__dirname, `../public/images/${aboutUsData.heroImagePath}`), async ()=>{
                    await cloudinary.v2.uploader.destroy(aboutUsData.heroImageId);
                    const newImage = await cloudinary.v2.uploader.upload(req.file.path, cloudinaryOptions);
                    aboutUsData.heroImage = newImage.secure_url;
                    aboutUsData.heroImageId = newImage.public_id;
                    aboutUsData.heroImagePath = req.file.filename;
                    console.log(newImage);
                    await aboutUsData.save();
                    res.json(aboutUsData.heroImage);
                })
            } else {
                const newImage = await cloudinary.v2.uploader.upload(req.file.path, cloudinaryOptions);
                aboutUsData.heroImage = newImage.secure_url;
                aboutUsData.heroImageId = newImage.public_id;
                aboutUsData.heroImagePath = req.file.filename;
                await aboutUsData.save();
                res.json(aboutUsData.heroImage);
            }
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
    getAboutUs: async (req: Request, res: Response)=>{
        try {
            const aboutUsData = await AboutUsPage.findOne() as IAboutUsPage;
            res.json(aboutUsData.aboutUs);
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
    updateAboutUs: async (req: Request, res: Response)=>{
        try {
            const {title, description, aboutUsList = []} = req.body;
            const aboutUsData = await AboutUsPage.findOne() as IAboutUsPage;
            const aboutUsParsedList = JSON.parse(aboutUsList)
            if(aboutUsData.aboutUs.aboutUsImage){
                fs.rm(path.join(__dirname, `../public/images/${aboutUsData.aboutUs.aboutUsImagePath}`), async ()=>{
                    await cloudinary.v2.uploader.destroy(aboutUsData.aboutUs.aboutUsImageId);
                    const newImage = await cloudinary.v2.uploader.upload(req.file.path, cloudinaryOptions);
                    aboutUsData.aboutUs = {
                        ...aboutUsData.aboutUs,
                        title, 
                        description, 
                        aboutUsList: aboutUsParsedList,
                        aboutUsImage: newImage.secure_url,
                        aboutUsImageId: newImage.public_id,
                        aboutUsImagePath: req.file.filename,
                    }
                    await aboutUsData.save();
                    res.json(aboutUsData.aboutUs);
                })
            } else {
                const newImage = await cloudinary.v2.uploader.upload(req.file.path, cloudinaryOptions);
                aboutUsData.aboutUs = {
                    title, 
                    description, 
                    aboutUsList: aboutUsParsedList,
                    aboutUsImage: newImage.secure_url,
                    aboutUsImageId: newImage.public_id,
                    aboutUsImagePath: req.file.filename,
                }
                await aboutUsData.save();
                res.json(aboutUsData.aboutUs);
            }
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
    getAllVolunteers: async (req: Request, res: Response)=>{
        try {
            const aboutUsData = await AboutUsPage.findOne() as IAboutUsPage;
            res.json(aboutUsData.volunteers.volunteers);
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
    getVolunteer: async (req: Request, res: Response)=>{
        try {
            const {volunteerId} = req.params;
            const aboutUsData = await AboutUsPage.findOne() as IAboutUsPage;
            const volunteer = aboutUsData.volunteers.volunteers.find(volunteer => volunteer._id?.toString() === volunteerId);
            res.json(volunteer);
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
    createVolunteer: async (req: Request, res: Response)=>{
        try {
            const {volunteerName, volunteerTitle, volunteerSocialMedia = []} = req.body;
            const aboutUsData = await AboutUsPage.findOne() as IAboutUsPage;
            const parsedVolunteerSocialMedia = JSON.parse(volunteerSocialMedia)
            const newImage = await cloudinary.v2.uploader.upload(req.file.path, cloudinaryOptions);
            aboutUsData.volunteers.volunteers.push({
                volunteerName, 
                volunteerTitle, 
                volunteerSocialMedia: parsedVolunteerSocialMedia,
                volunteerImage: newImage.secure_url,
                volunteerImageId: newImage.public_id,
                volunteerImagePath: req.file.filename
            })
            await aboutUsData.save();
            res.status(201).json(aboutUsData.volunteers.volunteers.at(-1));
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
    editVolunteer: async (req: Request, res: Response)=>{
        try {
            const {volunteerName, volunteerTitle, volunteerSocialMedia = []} = req.body;
            const {volunteerId} = req.params;
            const aboutUsData = await AboutUsPage.findOne() as IAboutUsPage;
            const volunteer = aboutUsData.volunteers.volunteers.filter(volunteer => volunteer._id?.toString() === volunteerId)[0];
                fs.rm(path.join(__dirname, `../public/images/${volunteer?.volunteerImagePath}`), async ()=>{
                    await cloudinary.v2.uploader.destroy(volunteer?.volunteerImageId);
                    const newImage = await cloudinary.v2.uploader.upload(req.file.path, cloudinaryOptions);
                    volunteer.volunteerName = volunteerName || volunteer.volunteerName;
                    volunteer.volunteerTitle = volunteerTitle || volunteer.volunteerTitle;
                    volunteer.volunteerSocialMedia = volunteerSocialMedia.length ? JSON.parse(volunteerSocialMedia) : volunteer.volunteerSocialMedia;
                    volunteer.volunteerImage = newImage.secure_url;
                    volunteer.volunteerImageId = newImage.public_id;
                    volunteer.volunteerImagePath = req.file.filename;
                    await aboutUsData.save();
                    res.json(volunteer); 
                })
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
    deleteVolunteer: async (req: Request, res: Response)=>{
        try {
            const {volunteerId} = req.params;
            const aboutUsData = await AboutUsPage.findOne() as IAboutUsPage;
            const volunteer = aboutUsData.volunteers.volunteers.filter(volunteer => volunteer._id?.toString() === volunteerId)[0];             
            fs.rm(path.join(__dirname, `../public/images/${volunteer?.volunteerImagePath}`), async ()=>{
                await cloudinary.v2.uploader.destroy(volunteer?.volunteerImageId);
                const volunteerIndex = aboutUsData.volunteers.volunteers.findIndex(volunteer => volunteer._id?.toString() === volunteerId);
                aboutUsData.volunteers.volunteers.splice(volunteerIndex, 1);
                await aboutUsData.save();
                res.json("Volunteer is deleted successfully!"); 
            })
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
    getVolunteerSection: async (req: Request, res: Response)=>{
        try {
            const aboutUsData = await AboutUsPage.findOne() as IAboutUsPage;
            res.json(aboutUsData.volunteers) 
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
    updateVolunteerSection: async (req: Request, res: Response)=>{
        try {
            const {title, description} = req.body;
            const aboutUsData = await AboutUsPage.findOne() as IAboutUsPage;
            if(aboutUsData.volunteers.volunteerHeroImage){
                fs.rm(path.join(__dirname, `../public/images/${aboutUsData.volunteers.volunteerHeroImagePath}`), async ()=>{
                    await cloudinary.v2.uploader.destroy(aboutUsData.volunteers.volunteerHeroImageId);
                    const newImage = await cloudinary.v2.uploader.upload(req.file.path, cloudinaryOptions);
                    aboutUsData.volunteers = {
                        ...aboutUsData.volunteers,
                        title, 
                        description, 
                        volunteerHeroImage: newImage.secure_url,
                        volunteerHeroImageId: newImage.public_id,
                        volunteerHeroImagePath: req.file.filename,
                    }
                    await aboutUsData.save();
                    res.json(aboutUsData.volunteers);
                })
            } else {
                const newImage = await cloudinary.v2.uploader.upload(req.file.path, cloudinaryOptions);
                aboutUsData.volunteers = {
                    ...aboutUsData.volunteers,
                    title, 
                    description, 
                    volunteerHeroImage: newImage.secure_url,
                    volunteerHeroImageId: newImage.public_id,
                    volunteerHeroImagePath: req.file.filename,
                }
                await aboutUsData.save();
                res.json(aboutUsData.volunteers);
            }
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
    getOurAchievements: async (req: Request, res: Response)=>{
        try {
            const aboutUsData = await AboutUsPage.findOne() as IAboutUsPage;
            res.json(aboutUsData.ourAchievements);
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
    updateOurAchievements: async (req: Request, res: Response)=>{
        try {
            const {title, description, achievementList = []} = req.body;
            const aboutUsData = await AboutUsPage.findOne() as IAboutUsPage;
            if(aboutUsData.ourAchievements.title){
                aboutUsData.ourAchievements = {
                    ...aboutUsData.ourAchievements,
                    title,
                    description,
                    achievementList
                }
            } else {
                aboutUsData.ourAchievements = {
                    title,
                    description,
                    achievementList
                }
            }
            await aboutUsData.save();
            res.json(aboutUsData.ourAchievements);
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
    getAllDonorReviews: async (req: Request, res: Response)=>{
        try {
            const aboutUsData = await AboutUsPage.findOne() as IAboutUsPage;
            res.json(aboutUsData.donorReviews.donors)
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
    getDonorReview: async (req: Request, res: Response)=>{
        try {
            const {donorReviewId} = req.params;
            const aboutUsData = await AboutUsPage.findOne() as IAboutUsPage;
            const donor = aboutUsData.donorReviews.donors.find(donor => donor._id?.toString() === donorReviewId);
            res.json(donor);
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
    createDonorReview: async (req: Request, res: Response)=>{
        try {
            const {donorReview, donorName, donorProfession, donorLocation} = req.body;
            const aboutUsData = await AboutUsPage.findOne() as IAboutUsPage;
            aboutUsData.donorReviews.donors.push({
                donorReview, 
                donorName, 
                donorProfession, 
                donorLocation
            })
            await aboutUsData.save();
            res.status(201).json(aboutUsData.donorReviews.donors.at(-1));
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
    editDonorReview: async (req: Request, res: Response)=>{
        try {
            const {donorReviewId} = req.params;
            const {donorReview, donorName, donorProfession, donorLocation} = req.body;
            const aboutUsData = await AboutUsPage.findOne() as IAboutUsPage;
            const donor = aboutUsData.donorReviews.donors.find(donor => donor._id?.toString() === donorReviewId);
            console.log(donor, donorReviewId)
            if(donor){
                donor.donorReview = donorReview || donor.donorReview
                donor.donorName = donorName || donor.donorName
                donor.donorProfession = donorProfession || donor.donorProfession
                donor.donorLocation = donorLocation || donor.donorLocation
            }
            await aboutUsData.save();
            res.json(donor)
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
    deleteDonorReview: async (req: Request, res: Response)=>{
        try {
            const {donorReviewId} = req.params;
            const aboutUsData = await AboutUsPage.findOne() as IAboutUsPage;
            const donorIndex = aboutUsData.donorReviews.donors.findIndex(donor => donor._id?.toString() === donorReviewId);
            aboutUsData.donorReviews.donors.splice(donorIndex, 1);
            await aboutUsData.save();
            res.json("Donor review is deleted successfully!")
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
    getDonorReviewSection: async (req: Request, res: Response)=>{
        try {
            const aboutUsData = await AboutUsPage.findOne() as IAboutUsPage;
            res.json(aboutUsData.donorReviews);
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
    updateDonorReviewSection: async (req: Request, res: Response)=>{
        try {
            const {title, description} = req.body;
            const aboutUsData = await AboutUsPage.findOne() as IAboutUsPage;
            if(aboutUsData.donorReviews.donorReviewHeroImage){
                fs.rm(path.join(__dirname, `../public/images/${aboutUsData.donorReviews.donorReviewHeroImagePath}`), async ()=>{
                    await cloudinary.v2.uploader.destroy(aboutUsData.donorReviews.donorReviewHeroImageId);
                    const newImage = await cloudinary.v2.uploader.upload(req.file.path, cloudinaryOptions);
                    aboutUsData.donorReviews = {
                        ...aboutUsData.donorReviews,
                        title, 
                        description, 
                        donorReviewHeroImage: newImage.secure_url,
                        donorReviewHeroImageId: newImage.public_id,
                        donorReviewHeroImagePath: req.file.filename,
                    }
                    await aboutUsData.save();
                    res.json(aboutUsData.donorReviews);
                })
            } else {
                const newImage = await cloudinary.v2.uploader.upload(req.file.path, cloudinaryOptions);
                aboutUsData.donorReviews = {
                    ...aboutUsData.donorReviews,
                    title, 
                    description, 
                    donorReviewHeroImage: newImage.secure_url,
                    donorReviewHeroImageId: newImage.public_id,
                    donorReviewHeroImagePath: req.file.filename,
                }
                await aboutUsData.save();
                res.json(aboutUsData.donorReviews);
            }
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
}

export default AboutUsPageController;