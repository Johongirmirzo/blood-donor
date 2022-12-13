// const BASE_URL = "https://blood-donor-production.up.railway.app/api";
const BASE_URL = "https://blood-donor.onrender.com/api";

const ENDPOINTS = {
    LOGIN: "/admin/login",
    LOGOUT: "/admin/logout",
    CHANGE_PROFILE: "/admin/change-profile",
    CHANGE_PASSWORD: "/admin/change-password",
    GET_ALL_DONORS: "/admin/get-all-donors",
    GET_DONOR: "/admin/get-donor",
    TOGGLE_DONOR: "/admin/toggle-donor",
    DELETE_DONOR: "/admin/delete-donor",

    GET_ALL_BLOOD_GROUPS: "/blood-group/get-all-blood-groups",
    GET_BLOOD_GROUP: "/blood-group/get-blood-group",
    CREATE_BLOOD_GROUP: "/blood-group/create-blood-group",
    EDIT_BLOOD_GROUP: "/blood-group/edit-blood-group",
    DELETE_BLOOD_GROUP: "/blood-group/delete-blood-group",

    GET_ALL_HOME_PAGE_DATA: "/home-page/get-all-home-page-data",
    GET_ALL_SLIDERS: "/home-page/get-all-sliders",
    CREATE_SLIDER: "/home-page/create-slider",
    EDIT_SLIDER: "/home-page/edit-slider",
    DELETE_SLIDER: "/home-page/delete-slider",
    GET_HELPFUL_INFO: "/home-page/get-helpful-info",
    UPDATE_HELPFUL_INFO: "/home-page/update-helpful-info",
    GET_BLOOD_GROUP_INFO: "/home-page/get-blood-group-info",
    UPDATE_BLOOD_GROUP_INFO: "/home-page/update-blood-group-info",
    GET_INITIATIVE: "/home-page/get-initiative",
    UPDATE_INITIATIVE: "/home-page/update-initiative",
    GET_VALUE: "/home-page/get-value",
    UPDATE_VALUE: "/home-page/update-value",

    GET_ALL_ABOUT_US_PAGE_DATA: "/about-us-page/get-all-about-us-page-data",
    UPDATE_HERO_IMAGE: "/about-us-page/update-hero-image",
    UPDATE_ABOUT_US: "/about-us-page/update-about-us",
    CREATE_VOLUNTEER: "/about-us-page/create-volunteer",
    EDIT_VOLUNTEER: "/about-us-page/edit-volunteer",
    DELETE_VOLUNTEER: "/about-us-page/delete-volunteer",
    UPDATE_VOLUNTEER_SECTION: "/about-us-page/update-volunteer-section",
    UPDATE_OUR_ACHIEVEMENTS: "/about-us-page/update-our-achievements",
    CREATE_DONOR_REVIEW: "/about-us-page/create-donor-review",
    EDIT_DONOR_REVIEW: "/about-us-page/edit-donor-review",
    DELETE_DONOR_REVIEW: "/about-us-page/delete-donor-review",
    UPDATE_DONOR_REVIEW_SECTION: "/about-us-page/update-donor-review-section",

    GET_ALL_GALLERY_PAGE_DATA: "/gallery-page/get-all-gallery-page-data",
    CREATE_GALLERY: "/gallery-page/create-gallery",
    DELETE_GALLERY: "/gallery-page/delete-gallery",
    UPDATE_GALLERY_HERO_IMAGE: "/gallery-page/update-hero-image",
    UPDATE_GALLERY_SECTION: "/gallery-page/update-gallery-section",

    GET_ALL_FAQS_PAGE_DATA: "/faq-page/get-all-faq-page-data",
    UPDATE_FAQS_HERO_IMAGE: "/faq-page/update-hero-image",
    UPDATE_FAQS_SECTION: "/faq-page/update-faqs-section",
    UPDATE_SPONSORS_SECTION: "/faq-page/update-sponsors-section",
    CREATE_FAQ: "/faq-page/create-faq",
    EDIT_FAQ: "/faq-page/edit-faq",
    DELETE_FAQ: "/faq-page/delete-faq",
    CREATE_SPONSOR: "/faq-page/create-sponsor",
    DELETE_SPONSOR: "/faq-page/delete-sponsor",

    GET_ALL_CONTACT_US_PAGE_DATA: "/contact-us-page/get-all-contact-us-page-data",
    UPDATE_CONTACT_US_HERO_IMAGE: "/contact-us-page/update-hero-image",
    UPDATE_CONTACT_US_INFO: "/contact-us-page/update-contact-info",

    GET_ALL_MESSAGES: "/contact-us/get-all-messages",
    DELETE_MESSAGE: "/contact-us/delete-message",

    GET_ALL_BLOOD_REQUIRERS: "/blood-requirer/get-all-blood-requirers",
    DELETE_BLOOD_REQUIRER: "/blood-requirer/delete-blood-requirer",

    GET_ALL_SUBSCRIBERS: "/subscriber/get-all-subscribers",
    DELETE_SUBSCRIBER: "/subscriber/delete-subscriber"
}

export {
    BASE_URL,
    ENDPOINTS
}