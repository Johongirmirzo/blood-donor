export interface IMessageList {
    _id: string;
    fullname: string;
    phoneNumber: string;
    email: string;
    message: string;
    messageDate: string;
}
export interface IMessage {
    messages: IMessageList[]
}
