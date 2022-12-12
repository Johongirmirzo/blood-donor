export interface ISlider {
    _id?: string;
    title: string;
    description: string;
    image: string;
}
 
export interface IHelpfulInfo {
  title: string;
  description: string;
  infoList: string[];  
}
export interface IBloodGroup {
    title: string;
    description: string;
    bloodGroupImage: string;
    bloodGroupList: string[];
    bloodGroupListDescription: string;
}
export interface IInitiative {
    title: string;
    description: string;
}

export interface IHomePage {
    sliders: ISlider[];
    helpfulInfo: IHelpfulInfo;
    bloodGroups: IBloodGroup;
    initiative: IInitiative;
    value: string;
}
