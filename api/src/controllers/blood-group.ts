import {Request, Response, NextFunction} from "express";
import BloodGroup, {IBloodGroup} from "../models/blood-group";

const BloodGroupController = {
    getAllBloodGroups: async (req: Request, res: Response)=>{
        try {
            const bloodGroups = await BloodGroup.find();
            res.json(bloodGroups);
        }catch(err: any) {
            res.status(400).json({error: err.message});
        }
    },
    getBloodGroup: async (req: Request, res: Response)=>{
        try {
            const {bloodGroupId} = req.params;
            const bloodGroup = await BloodGroup.findById(bloodGroupId);
            res.json(bloodGroup);
        }catch(err: any) {
            res.status(400).json({error: err.message});
        }
    },
    createBloodGroup: async (req: Request, res: Response)=>{
        try {
            const {bloodType} = req.body;
            const bloodGroup = await BloodGroup.findOne({bloodType: bloodType.toUpperCase()})
            if(bloodGroup){
                return res.status(400).json({error: "This blood type already exists!"});
            }
            const newBloodGroup =  await BloodGroup.create({bloodType, creationDate: new Date()});
            res.status(201).json(newBloodGroup)
        }catch(err: any) {
            res.status(400).json({error: err.message});
        }
    },
    editBloodGroup: async (req: Request, res: Response)=>{
        try {
            const {bloodGroupId} = req.params;
            const {bloodType} = req.body;
            const bloodGroup = await BloodGroup.findOne({bloodType}) as IBloodGroup;
            if(bloodGroup){
                if(bloodGroup._id.toString() !== bloodGroupId){
                    return res.status(400).json({error: "This bloodtype already exists!"});
                }
            }
            const editedBloodGroup = await BloodGroup.findByIdAndUpdate(bloodGroupId, {$set: {bloodType}}, {new: true});
            res.json(editedBloodGroup);
        }catch(err: any) {
            res.status(400).json({error: err.message});
        }
    },
    deleteBloodGroup: async (req: Request, res: Response)=>{
        try {
            const {bloodGroupId} = req.params;
            await BloodGroup.findByIdAndDelete(bloodGroupId);
            res.json({message: "Bloodgroup is deleted successfully!"});
        }catch(err: any) {
            res.status(400).json({error: err.message});
        }
    },
}
export default BloodGroupController;
