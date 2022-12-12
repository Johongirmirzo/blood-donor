import {Request, Response, NextFunction} from "express";

const isAdmin = (req: Request, res: Response, next: NextFunction)=>{
    try {
        console.log(req.donor)
        if(req.donor.isAdmin){
            next();
        } else {
            res.status(403).json({message: "You are not admin! You don't have permission to access this resource"})
        }
    }catch(err: any) {
        res.status(400).json({message: err.message});
    }
}

export default isAdmin;