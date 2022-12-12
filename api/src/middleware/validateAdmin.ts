import {Request, Response, NextFunction} from "express";
import Donor, {IDonor} from "../models/donor"


const validateAdmin = async (req: Request, res: Response, next: NextFunction)=>{
    const {adminId} = req.cookies;
    if(adminId){
        const admin = await Donor.findById(adminId) as IDonor;
        if(admin){
            req.donor = {
                id: admin._id, 
                fullname: admin.fullname, 
                isHidden: admin.isHidden, 
                isAdmin: admin.isAdmin
            }
            next();
        } else {
            res.status(401).json({isLoginRequired: true, message: "Login session expired! Please login a new!"})
        }
    } else {
        res.status(401).json({isLoginRequired: true, message: "Login session expired! Please login a new!"})
    }
}

export default validateAdmin