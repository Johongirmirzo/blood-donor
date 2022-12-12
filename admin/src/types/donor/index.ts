export interface IDonorList {
    _id: string;
    fullname: string;
    phoneNumber: string;
    email: string;
    age: number;
    gender: string;
    bloodGroup: string;
    city: string;
    isAdmin: boolean;
    isHidden: boolean;
}
export interface IDonor{
    donors: IDonorList[];
}