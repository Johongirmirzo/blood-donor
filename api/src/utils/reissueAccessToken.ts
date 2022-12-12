import {DecodedToken} from "../typings";
import decodeToken from "./decodeToken";
import generateToken from "./generateToken";

const reissueAccessToken = (token: string)=>{
    const {decoded} = decodeToken(token) as DecodedToken;
    if(!decoded){
        return false
    }
    const accessToken = generateToken({id: decoded.id, fullname: decoded.fullname, isAdmin: decoded.isAdmin, isHidden: decoded.isHidden, expirationTime: `${process.env.ACCESS_TOKEN_EXPIRATION_TIME}`})
    return accessToken;
}

export default reissueAccessToken;