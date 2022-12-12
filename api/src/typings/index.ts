export interface Token {
    id: string;
    fullname: string;
    isAdmin: boolean;
    isHidden: boolean;
    iat: number;
    exp: number;
}

export interface DecodedToken {
    valid: boolean;
    expired: boolean;
    decoded: Token;
}