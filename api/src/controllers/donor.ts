import {Request, Response} from "express";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken";
import sanitizeData from "../utils/sanitizeData";
import Donor, {IDonor} from "../models/donor";
import BloodRequirer from "../models/blood-requirer";
import Session from "../models/session";

const DonorController = {
    login: async (req: Request, res: Response)=>{
        try {
            const {email, password} = req.body;
            const donor = await Donor.findOne({email});
            if(!donor){
                return res.status(400).json({error: "Email does not exist!"})
            }
            if(!(await bcrypt.compare(password, donor.password))){
                return res.status(400).json({error: "Incorrect Password!"});
            }
             
            const accessToken = generateToken({id: donor._id, fullname: donor.fullname, isAdmin: donor.isAdmin, isHidden: donor.isHidden, expirationTime: `${process.env.ACCESS_TOKEN_EXPIRATION_TIME}`})
            const refreshToken = generateToken({id: donor._id, fullname: donor.fullname, isAdmin: donor.isAdmin, isHidden: donor.isHidden, expirationTime: `${process.env.REFRESH_TOKEN_EXPIRATION_TIME}`})
            res.json({donor, accessToken, refreshToken});
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
    register: async (req: Request, res: Response)=>{
        try {
            const {fullname, phoneNumber, email, age, gender, bloodGroup, city, password} = req.body;
            const donor = await Donor.findOne({email});
            if(donor){
                return res.status(400).json({error: "Email is already in use!"})
            }
            const hashedPassword = await bcrypt.hash(password, 12);
            const newDonor = await Donor.create({
                fullname: sanitizeData(fullname), 
                phoneNumber: sanitizeData(phoneNumber), 
                email: sanitizeData(email), 
                age: sanitizeData(age), 
                bloodGroup: sanitizeData(bloodGroup),
                city: sanitizeData(city),
                gender: gender.toUpperCase(), 
                password: hashedPassword
            })
            res.status(201).json(newDonor);
        }catch(err: any){
            console.log(err)
            res.status(400).json({error: err.message})
        }
    },
    logout: async (req: Request, res: Response)=>{
        try {
            req.donor = {id: "", fullname: "", isHidden: false, isAdmin: false}
            res.json({message: "User's logged out successfully"})
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
    changeProfile: async (req: Request, res: Response)=>{
        try {
            const donor = await Donor.findOne({email: req.body.email});
            if(donor){
                if(donor._id.toString() !== req.donor.id.toString()){
                    return res.status(400).json({error: "Email is already taken!"})
                }
            }
            const updatedProfileData =  await Donor.findByIdAndUpdate(req.donor.id, {$set: {...req.body, gender: req.body.gender.toUpperCase()}}, {new: true});
            res.json(updatedProfileData)
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
    changePassword: async (req: Request, res: Response)=>{
        try {
            const {currentPassword, newPassword} = req.body;
             
            const donor = await Donor.findById(req.donor.id) as IDonor;
            if(!(await bcrypt.compare(currentPassword, donor.password))){
                return res.status(400).json({error: "Incorrect Password!"});
            }
            const newHashedPassword = await bcrypt.hash(newPassword, 12);
            donor.password = newHashedPassword;
            await donor.save();
            res.json({message: "Password is changed successfully!"})
        }catch(err: any){
            res.status(400).json({error: err.message})
        }
    },
}

export default DonorController;