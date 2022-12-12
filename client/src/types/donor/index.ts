
export interface IDonorLogin {
    email: string;
    password: string;
}
export interface IDonorPassword {
    currentPassword: string;
    newPassword: string;
    newConfirmPassword: string;
}

export interface IDonorProfile {
    fullname: string;
    phoneNumber: string;
    email: string;
    age: number;
    gender: string;
    bloodGroup: string;
    city: string;
}
export interface IDonorRegisterData extends IDonorProfile {
    password: string;
    confirmPassword: string;
}
export interface IDonorList extends IDonorProfile {
    _id: string;
    isAdmin: boolean;
    isHidden: boolean;
    
}
export interface IDonor{
    donors: IDonorList[];
}