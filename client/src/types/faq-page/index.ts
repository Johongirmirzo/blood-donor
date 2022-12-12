export interface IFaqListData {
    question: string;
    answer: string;
}
export interface IFaqList extends IFaqListData {
    _id: string;
}
export interface IFaqData {
    title: string;
    description: string;
}
export interface IFaq extends IFaqData {
    faqList: IFaqList[];
}

export interface ISponsorList {
    _id: string;
    image: string;
    imageCreationDate: string;
}
export interface ISponsor {
    title: string;
    description: string;
    images: ISponsorList[];
}
export interface IFaqPage {
    heroImage: string;
    faq: IFaq;
    sponsor: ISponsor;
}
