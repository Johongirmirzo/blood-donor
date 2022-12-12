
export interface IBloodRequirerList {
    _id: string;
    fullname: string;
    phoneNumber: string;
    email: string;
    blodNeededFor: string;
    message: string;
    donorFullname: string;
    donorPhoneNumber: string;
    donorEmail: string;
    donorBloodGroup: string;
}
export interface IBloodRequirerData {
    _id: string;
    fullname: string;
    phoneNumber: string;
    email: string;
    blodNeededFor: string;
    message: string;
    donorId: string;
}
export interface IBloodRequirer {
    bloodRequirers: IBloodRequirerList[];
}
