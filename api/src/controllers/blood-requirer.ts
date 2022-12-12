import {Request, Response, NextFunction} from "express";
import sanitizeData from "../utils/sanitizeData"
import BloodRequirer, {IBloodRequirer} from "../models/blood-requirer";

const BloodRequirerController = {
    getAllBloodRequirers: async (req: Request, res: Response)=>{
        try {
            const bloodRequirers = await BloodRequirer.find();
            res.json(bloodRequirers);
        }catch(err: any) {
            res.status(400).json({error: err.message});
        }
    },
    getBloodRequirer: async (req: Request, res: Response)=>{
        try {
            const {bloodRequirerId} = req.params;
            const bloodRequirer = await BloodRequirer.findById(bloodRequirerId);
            res.json(bloodRequirer);
        }catch(err: any) {
            res.status(400).json({error: err.message});
        }
    },
    createBloodRequirer: async (req: Request, res: Response)=>{
        try {
            const {fullname, phoneNumber, email, bloodNeededFor, message, donorId} = req.body;
            const newBloodRequirer = await BloodRequirer.create({
                fullname: sanitizeData(fullname), 
                phoneNumber: sanitizeData(phoneNumber), 
                email: sanitizeData(email), 
                bloodNeededFor: sanitizeData(bloodNeededFor), 
                message: sanitizeData(message), 
                applyDate: new Date(),
                donorId
            })
            res.status(201).json(newBloodRequirer);
        }catch(err: any) {
            res.status(400).json({error: err.message});
        }
    },
    deleteBloodRequirer: async (req: Request, res: Response)=>{
        try {
            const {bloodRequirerId} = req.params;
            await BloodRequirer.findByIdAndDelete(bloodRequirerId);
            res.json({message: "Blood Requirer deleted successfully!"});
        }catch(err: any) {
            res.status(400).json({error: err.message});
        }
    },
}
export default BloodRequirerController;