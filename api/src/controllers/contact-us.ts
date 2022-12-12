import {Request, Response, NextFunction} from "express";
import ContactUs from "../models/contact-us"
// If you have everything under control, you're not moving fast enough.
// Mario Andretti
const ContactUsController = {
    getAllMessage: async (req: Request, res: Response)=>{
        try {
            const messages = await ContactUs.find();
            res.json(messages);
        }catch(err: any){
            res.status(400).json({message: err.message});
        }
    },
    getMessage: async (req: Request, res: Response)=>{
        try {
            const {messageId} = req.params;
            const message = await ContactUs.findById(messageId);
            res.json(message);
        }catch(err: any){
            res.status(400).json({message: err.message});
        }
    },
    createMessage: async (req: Request, res: Response)=>{
        try {
            const {fullname, email, phoneNumber, message} = req.body;
            const userMessage = await ContactUs.create({
                fullname, 
                email, 
                phoneNumber, 
                message,
                messageDate: new Date()
            })
            res.status(201).json(userMessage);
        }catch(err: any){
            res.status(400).json({message: err.message});
        }
    },
    deleteMessage: async (req: Request, res: Response)=>{
        try {
            const {messageId} = req.params;
            await ContactUs.findByIdAndDelete(messageId);
            res.json({message: "User message is deleted successfully!"})
        }catch(err: any){
            res.status(400).json({message: err.message});
        }
    },
}

export default ContactUsController;