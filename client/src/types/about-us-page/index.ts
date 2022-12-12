export interface IAboutUs {
    title: string;
    description: string;
    aboutUsImage: string;
    aboutUsList: string[];
}  
interface ISocialMedia {
    _id: string;
    socialMediaName: string;
    socialMediaUrl: string;
}
export interface IVolunteerData {
    volunteerName: string;
    volunteerTitle: string;
    volunteerImage: string;
    volunteerSocialMedia: ISocialMedia[];
}
export interface IVolunteerList extends IVolunteerData {
    _id: string;
} 
export interface IVolunteerSection {
    title: string;
    description: string;
    volunteerHeroImage: string;
}
export interface IVolunteer {
    title: string;
    description: string;
    volunteerHeroImage: string;
    volunteers: IVolunteerList[];
}
export interface IOurAchievementList {
    _id: string;
    title: string;
    result: number;
}
export interface IOurAchievements {
    title: string;
    description: string;
    achievementList: IOurAchievementList[];
}

export interface IDonorData {
    donorReview: string;
    donorName: string;
    donorProfession: string;
    donorLocation: string;
}
export interface IDonorList extends IDonorData {
    _id: string;
}
export interface IDonorReviewSection {
    title: string;
    description: string;
    donorReviewHeroImage: string;
}
export interface IDonor {
    title: string;
    description: string;
    donorReviewHeroImage: string;
    donors: IDonorList[];
}
export interface IAboutUsPage {
    heroImage: string;
    aboutUs: IAboutUs;
    volunteers: IVolunteer;
    ourAchievements: IOurAchievements;
    donorReviews: IDonor;
}