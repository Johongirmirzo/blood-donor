
export interface IBloodRequirerData {
    fullname: string;
    phoneNumber: string;
    email: string;
    bloodNeededFor: string;
    message: string;
    donorId: string;
}
export interface IBloodRequirerList extends IBloodRequirerData {
    _id: string;
    applyDate: string;
}
export interface IBloodRequirer {
    bloodRequirers: IBloodRequirerList[];
}
