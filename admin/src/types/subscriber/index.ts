export interface ISubscriberList {
    _id: string;
    subscriberEmail: string;
    subscriptionDate: string;
}
export interface ISubscriber{
    subscribers: ISubscriberList[];
}
