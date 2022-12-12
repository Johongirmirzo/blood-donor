import {Request, Response, NextFunction} from "express";
import Donor, {IDonor} from "../models/donor";
import {DecodedToken} from "../typings";
import reissueAccessToken from "../utils/reissueAccessToken";
import decodeToken from "../utils/decodeToken";

const validateDonor = async (req: Request, res: Response, next: NextFunction)=>{
    const authheader = req.headers.authorization;
    if(authheader){
        const accessToken = authheader.split("Bearer ")[1];
        const refreshToken = (req.headers.refreshtoken as string).split("Bearer ")[1];
        if(accessToken){
            const {decoded, expired} = decodeToken(accessToken) as DecodedToken
            if(decoded){
                req.donor = await Donor.findById(decoded.id) as IDonor;
                return next();
            }
            if(expired && refreshToken){
                const accessToken = reissueAccessToken(refreshToken);
                
                if(accessToken){
                    const {decoded} = decodeToken(accessToken) as DecodedToken
                    req.donor = await Donor.findById(decoded.id) as IDonor;
                    return next();
                    
                } else {
                    res.status(401).json({isLoginRequired: true, message: "Your access and refresh tokens are expired! Please login again!"});
                }
            } else {
                res.status(401).json({isLoginRequired: true, message: "Invalid/Expired token"})
            }
        } else {
            res.status(401).json({isLoginRequired: true, message: "Bearer \"accesstoken\" is missing! Please login!"})
        }
    } else {
        res.status(401).json({isLoginRequired: true, message: "Auth Headers are missing! Please login!"})
    }
}

export default validateDonor;