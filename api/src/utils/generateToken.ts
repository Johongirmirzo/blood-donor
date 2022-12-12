import jwt from "jsonwebtoken";

interface IToken {
    id: string;
    fullname: string;
    isAdmin: boolean;
    isHidden: boolean;
    expirationTime: string;
}

const generateToken = ({id, fullname, isAdmin, isHidden, expirationTime}: IToken) => {
    return jwt.sign({id, fullname, isAdmin, isHidden}, `${process.env.TOKEN_PRIVATE_KEY}`, {expiresIn: expirationTime});
}

export default generateToken;