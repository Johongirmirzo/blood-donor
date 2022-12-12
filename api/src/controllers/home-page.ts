import { Request, Response, NextFunction } from "express";
import path from "path"
import fs from "fs"
import HomePage, { IHomePage } from "../models/home-page";
import cloudinary from "../config/cloudinary";

const HomePageController = {
    getAllHomePageData: async (req: Request, res: Response) => {
        const homePageData = await HomePage.findOne() as IHomePage;
        if(!homePageData){
            const newHomePage = await HomePage.create({});
            return res.status(201).json(newHomePage);
        }
        console.log(homePageData)
        res.json(homePageData);
    },
    getAllSliders: async (req: Request, res: Response) => {
        try {
            const homePage = await HomePage.findOne() as IHomePage;
            console.log(homePage)
            res.json(homePage.sliders)
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    },
    getSlider: async (req: Request, res: Response) => {
        try {
            const { sliderId } = req.params;
            const homePage = await HomePage.findOne() as IHomePage;
            const slider = homePage.sliders.find(slider => slider._id?.toString() === sliderId);
            res.json(slider)
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    },
    createSlider: async (req: Request, res: Response) => {
        try {
            const { title, description } = req.body;
            const homePage = await HomePage.findOne() as IHomePage;
            const options = {
                use_filename: true,
                unique_filename: false,
                overwrite: true,
              };
               
            const sliderImage =  await cloudinary.v2.uploader.upload(req.file.path, options);
            homePage.sliders.push({
                title,
                description,
                image: sliderImage.secure_url,
                imageId: sliderImage.public_id,
                imagePath: req.file.filename
            })
            await homePage.save();
            console.log(sliderImage);
            res.json(homePage.sliders.at(-1));
        } catch (err: any) {
            console.error(err)
            res.status(400).json({ error: err.message });
        }
    },
    editSlider: async (req: Request, res: Response) => {
        try {
            const {sliderId} = req.params;
            const {title, description} = req.body;
            const homePage = await HomePage.findOne() as IHomePage;
            const slider = homePage.sliders.find(slider => slider._id?.toString() === sliderId);
            if(slider){
                const options = {
                    use_filename: true,
                    unique_filename: false,
                    overwrite: true,
                  };
                fs.rm(path.join(__dirname, `../public/images/${slider.imagePath}`), async ()=>{
                    await cloudinary.v2.uploader.destroy(slider.imageId);
                    console.log(slider.imagePath);
                    const newImage = await cloudinary.v2.uploader.upload(req.file.path, options);
                    slider.title = title || slider.title;
                    slider.description = description || slider.description;
                    slider.image = newImage.secure_url;
                    slider.imageId = newImage.public_id;
                    slider.imagePath = req.file.filename;
                    await homePage.save();
                    res.json(slider);
                })
            }    
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    },
    deleteSlider: async (req: Request, res: Response) => {
        try {
            const {sliderId} = req.params;
            const homePage = await HomePage.findOne() as IHomePage;
            const slider = homePage.sliders.find(slider => slider._id?.toString() === sliderId);
            if(slider){
                fs.rm(path.join(__dirname, `../public/images/${slider.imagePath}`), async ()=>{
                    await cloudinary.v2.uploader.destroy(slider.imageId);
                    const sliderIndex = homePage.sliders.findIndex(slider => slider._id?.toString() === sliderId);
                    homePage.sliders.splice(sliderIndex, 1);
                    await homePage.save();
                    res.json({message: "Slider is deleted successfully"})
                })
            }
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    },
    getHelpfulInfo: async (req: Request, res: Response) => {
        try {
            const homePage = await HomePage.findOne() as IHomePage;
            res.json(homePage.helpfulInfo)
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    },
    updateHelpfulInfo: async (req: Request, res: Response) => {
        try {
            const {title, description, infoList} = req.body;
            const homePage = await HomePage.findOne() as IHomePage;
            if(homePage.helpfulInfo.title){
                homePage.helpfulInfo = {...homePage.helpfulInfo, title, description, infoList};
            } else {
                homePage.helpfulInfo = {title, description, infoList};
            }
            await homePage.save();
            res.json(homePage.helpfulInfo)
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    },
    getBloodGroupsIfno: async (req: Request, res: Response) => {
        try {
            const homePage = await HomePage.findOne() as IHomePage;
            res.json(homePage.bloodGroups)
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    },
    updateBloodGroupsInfo: async (req: Request, res: Response) => {
        try {
            const {title, description, bloodGroupList, bloodGroupListDescription} = req.body;
            console.log({title, description, bloodGroupList, bloodGroupListDescription})
             
            const homePage = await HomePage.findOne() as IHomePage;
            const options = {
                use_filename: true,
                unique_filename: false,
                overwrite: true,
              };
            if(homePage.bloodGroups.bloodGroupImage){
                fs.rm(path.join(__dirname, `../public/images/${homePage.bloodGroups.bloodGroupImagePath}`), async ()=>{
                    console.log("Update")
                    await cloudinary.v2.uploader.destroy(homePage.bloodGroups.bloodGroupImageId);
                    const newImage = await cloudinary.v2.uploader.upload(req.file.path, options);
                    homePage.bloodGroups.title = title || homePage.bloodGroups.title;
                    homePage.bloodGroups.description = description || homePage.bloodGroups.description;
                    homePage.bloodGroups.bloodGroupList = JSON.parse(bloodGroupList) || homePage.bloodGroups.bloodGroupList;
                    homePage.bloodGroups.bloodGroupListDescription = bloodGroupListDescription || homePage.bloodGroups.bloodGroupListDescription;
                    homePage.bloodGroups.bloodGroupImage = newImage.secure_url;
                    homePage.bloodGroups.bloodGroupImageId = newImage.public_id;
                    homePage.bloodGroups.bloodGroupImagePath = req.file.filename;
                    await homePage.save();
                    res.json(homePage.bloodGroups);
                })
            } else {
                
                const newImage = await cloudinary.v2.uploader.upload(req.file.path, options);
                console.log("Create")
                homePage.bloodGroups.title = title;
                homePage.bloodGroups.description = description;
                homePage.bloodGroups.bloodGroupList = JSON.parse(bloodGroupList) || [];
                homePage.bloodGroups.bloodGroupListDescription = bloodGroupListDescription;
                homePage.bloodGroups.bloodGroupImage = newImage.secure_url;
                homePage.bloodGroups.bloodGroupImageId = newImage.public_id;
                homePage.bloodGroups.bloodGroupImagePath = req.file.filename;
                await homePage.save();
                res.json(homePage.bloodGroups);
            }
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    },
    getInitiative: async (req: Request, res: Response) => {
        try {
            const homePage = await HomePage.findOne() as IHomePage;
            res.json(homePage.initiative)
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    },
    updateInitiative: async (req: Request, res: Response) => {
        try {
            const {title, description} = req.body;
            const homePage = await HomePage.findOne() as IHomePage;
            if(homePage.initiative.title){
                homePage.initiative = {...homePage.initiative, title, description}
            } else {
                homePage.initiative = {title, description}
            }
            await homePage.save();
            res.json(homePage.initiative)
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    },
    getValue: async (req: Request, res: Response) => {
        try {
            const homePage = await HomePage.findOne() as IHomePage;
            res.json(homePage.value)
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    },
    updateValue: async (req: Request, res: Response) => {
        try {
            const {value} = req.body;
            const homePage = await HomePage.findOne() as IHomePage;
            if(homePage.value){
                homePage.value = value|| homePage.value ;
            } else {    
                homePage.value = value;

            }
            await homePage.save();
            res.json(homePage.value);
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    },
}

export default HomePageController;