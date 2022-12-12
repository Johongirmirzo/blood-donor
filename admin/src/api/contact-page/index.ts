import API from "../index";
import { ENDPOINTS } from "../../config/endpoints";
import { IContactInfo } from "../../types/contact-us-page";

const getAllContactUsPageData = async () => {
  return API.get(ENDPOINTS.GET_ALL_CONTACT_US_PAGE_DATA);
};
const updateHeroImage = async (heroImage: any) => {
  return API.post(ENDPOINTS.UPDATE_CONTACT_US_HERO_IMAGE, heroImage, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
const updateContactUsInfo = async (contactUsInfo: IContactInfo) => {
  return API.post(ENDPOINTS.UPDATE_CONTACT_US_INFO, contactUsInfo);
};
export { getAllContactUsPageData, updateHeroImage, updateContactUsInfo };
