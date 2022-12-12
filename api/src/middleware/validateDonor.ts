import {Request, Response, NextFunction} from "express";
import Donor, {IDonor} from "../models/donor"


const validateDonor = async (req: Request, res: Response, next: NextFunction)=>{
    const {donorId} = req.cookies;  
    if(donorId){
        const donor = await Donor.findById(donorId) as IDonor;
        if(donor){
            req.donor = {
                id: donor._id, 
                fullname: donor.fullname, 
                isHidden: donor.isHidden, 
                isAdmin: donor.isAdmin
            }
            next();
        } else {
            res.status(401).json({isLoginRequired: true, message: "Login session expired! Please login a new!"})
        }
    } else {
        res.status(401).json({isLoginRequired: true, message: "Login session expired! Please login a new!"})
    }
}

export default validateDonor