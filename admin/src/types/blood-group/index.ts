export type IBloodType = {
    bloodType: string;
}
export interface IBloodGroup {
    _id: string;
    bloodType: string;
    creationDate: string;
}
export interface IBloodGroupList {
    bloodGroups: IBloodGroup[];
}