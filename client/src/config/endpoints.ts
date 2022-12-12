const BASE_URL = 'https://blood-donor-production.up.railway.app/api'

const ENDPOINTS = {
    LOGIN: "/donor/login",
    REGISTER: "/donor/register",
    LOGOUT: "/donor/logout",
    GET_ALL_DONORS: "/admin/get-all-donors",
    CHANGE_PROFILE: "/donor/change-profile",
    CHANGE_PASSWORD: "/donor/change-password",

    GET_ALL_HOME_PAGE_DATA: "/home-page/get-all-home-page-data",
    GET_ALL_ABOUT_US_PAGE_DATA: "/about-us-page/get-all-about-us-page-data",
    GET_ALL_GALLERY_PAGE_DATA: "/gallery-page/get-all-gallery-page-data",
    GET_ALL_FAQS_PAGE_DATA: "/faq-page/get-all-faq-page-data",
    GET_ALL_CONTACT_US_PAGE_DATA: "/contact-us-page/get-all-contact-us-page-data",
    GET_ALL_BLOOD_GROUPS: "/blood-group/get-all-blood-groups",
    GET_ALL_BLOOD_REQUIRERS: "/blood-requirer/get-all-blood-requirers",

    CREATE_BLOOD_REQUIRER: "/blood-requirer/create-blood-requirer",
    CREATE_MESSAGE: "/contact-us/create-message",
    CREATE_SUBSCRIBER: "/subscriber/create-subscriber"
}

export {
    BASE_URL,
    ENDPOINTS
}