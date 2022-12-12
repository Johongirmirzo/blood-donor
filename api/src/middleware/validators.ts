import {Request, Response, NextFunction} from "express";
import {
    donorRegisterSchema, 
    donorLoginSchema, 
    changePasswordSchema,
    changeProfileSchema,
    bloodGroupSchema,
    contactUsSchema,
    subscriberSchema,
    bloodRequirerSchema,
    sliderSchema,
    helpfulInfoSchema,
    initiativeSchema,
    valueSchema,
    achievementsSchema,
    donorReviewSchema,
    gallerySchema,
    faqSchema,
    contactInfoSchema
} from "../schemas";

const registerValidator = async (req: Request, res: Response, next: NextFunction)=>{
    try {
        await donorRegisterSchema.validate(req.body, {abortEarly: false});
        next();
    }catch(err: any){
        res.json({errors: err.errors})
    }
}
const loginValidator = async (req: Request, res: Response, next: NextFunction)=>{
    try {
        await donorLoginSchema.validate(req.body, {abortEarly: false});
        next();
    }catch(err: any){
        res.json({errors: err.errors})
    }
}
const changePasswordValidator = async (req: Request, res: Response, next: NextFunction)=>{
    try {
        await changePasswordSchema.validate(req.body, {abortEarly: false});
        next();
    }catch(err: any){
        res.json({errors: err.errors})
    }
}
const changeProfileValidator = async (req: Request, res: Response, next: NextFunction)=>{
    try {
        await changeProfileSchema.validate(req.body, {abortEarly: false});
        next();
    }catch(err: any){
        res.json({errors: err.errors})
    }
}
const bloodGroupValidator = async (req: Request, res: Response, next: NextFunction)=>{
    try {
        await bloodGroupSchema.validate(req.body, {abortEarly: false});
        next();
    }catch(err: any){
        res.json({errors: err.errors})
    }
}
const contactUsValidator = async (req: Request, res: Response, next: NextFunction)=>{
    try {
        await contactUsSchema.validate(req.body, {abortEarly: false});
        next();
    }catch(err: any){
        res.json({errors: err.errors})
    }
}
const subscriberValidator = async (req: Request, res: Response, next: NextFunction)=>{
    try {
        await subscriberSchema.validate(req.body, {abortEarly: false});
        next();
    }catch(err: any){
        res.json({errors: err.errors})
    }
}
const bloodRequirerValidator = async (req: Request, res: Response, next: NextFunction)=>{
    try {
        await bloodRequirerSchema.validate(req.body, {abortEarly: false});
        next();
    }catch(err: any){
        res.json({errors: err.errors})
    }
}
const sliderValidator = async (req: Request, res: Response, next: NextFunction)=>{
    try {
        await sliderSchema.validate(req.body, {abortEarly: false});
        next();
    }catch(err: any){
        res.json({errors: err.errors})
    }
}
const helpfulInfoValidator = async (req: Request, res: Response, next: NextFunction)=>{
    try {
        await helpfulInfoSchema.validate(req.body, {abortEarly: false});
        next();
    }catch(err: any){
        res.json({errors: err.errors})
    }
}
const initiativeValidator = async (req: Request, res: Response, next: NextFunction)=>{
    try {
        await initiativeSchema.validate(req.body, {abortEarly: false});
        next();
    }catch(err: any){
        res.json({errors: err.errors})
    }
}
const valueValidator = async (req: Request, res: Response, next: NextFunction)=>{
    try {
        await valueSchema.validate(req.body, {abortEarly: false});
        next();
    }catch(err: any){
        res.json({errors: err.errors})
    }
}
const achievementsValidator = async (req: Request, res: Response, next: NextFunction)=>{
    try {
        await achievementsSchema.validate(req.body, {abortEarly: false});
        next();
    }catch(err: any){
        res.json({errors: err.errors})
    }
}
const donorReviewValidator = async (req: Request, res: Response, next: NextFunction)=>{
    try {
        await donorReviewSchema.validate(req.body, {abortEarly: false});
        next();
    }catch(err: any){
        res.json({errors: err.errors})
    }
}
const galleryValidator = async (req: Request, res: Response, next: NextFunction)=>{
    try {
        await gallerySchema.validate(req.body, {abortEarly: false});
        next();
    }catch(err: any){
        res.json({errors: err.errors})
    }
}
const faqValidator = async (req: Request, res: Response, next: NextFunction)=>{
    try {
        await faqSchema.validate(req.body, {abortEarly: false});
        next();
    }catch(err: any){
        res.json({errors: err.errors})
    }
}
const contactInfoValidator = async (req: Request, res: Response, next: NextFunction)=>{
    try {
        await contactInfoSchema.validate(req.body, {abortEarly: false});
        next();
    }catch(err: any){
        res.json({errors: err.errors})
    }
}

export {
    registerValidator,
    loginValidator,
    changePasswordValidator,
    changeProfileValidator,
    bloodGroupValidator,
    contactUsValidator,
    subscriberValidator,
    bloodRequirerValidator,
    sliderValidator,
    helpfulInfoValidator,
    initiativeValidator,
    valueValidator,
    achievementsValidator,
    donorReviewValidator,
    galleryValidator,
    faqValidator,
    contactInfoValidator
}