import {Request, Response, NextFunction} from "express";
import Subscriber, {ISubscriber} from "../models/subscriber";

const SubscriberController = {
    getALlSubscribers: async (req: Request, res: Response)=>{
        try {
            const subscribers = await Subscriber.find();
            res.json(subscribers);
        }catch(err: any){
            res.status(400).json({message: err.message});
        }
    },
    getSubscriber: async (req: Request, res: Response)=>{
        try {
            const {subscriberId} = req.params;
            const subscriber = await Subscriber.findById(subscriberId) as ISubscriber;
            res.json(subscriber);
        }catch(err: any){
            res.status(400).json({message: err.message});
        }
    },
    createSubscriber: async (req: Request, res: Response)=>{
        try {
            const {subscriberEmail} = req.body;
            const subscriber = await Subscriber.findOne({subscriberEmail});
            if(subscriber){
                return res.status(400).json({error: "Subscriber with current email already exists!"})
            }
            const newSubscriber = await Subscriber.create({subscriberEmail, subscriptionDate: new Date()});
            res.status(201).json(newSubscriber);
        }catch(err: any){
            res.status(400).json({message: err.message});
        }
    },
    deleteSubscriber: async (req: Request, res: Response)=>{
        try {
            const {subscriberId} = req.params;
            await Subscriber.findByIdAndDelete(subscriberId);
            res.json({message: "Subscriber is deleted successfully!"})
        }catch(err: any){
            res.status(400).json({message: err.message});
        }
    },
}

export default SubscriberController;