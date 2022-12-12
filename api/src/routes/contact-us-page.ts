import {Router} from 'express';
import {contactInfoValidator} from "../middleware/validators";
import {uploadImage} from "../middleware/uploadImage";
import validateAdmin from "../middleware/validateAdmin"
import isAdmin from "../middleware/isAdmin"
import ContactUsPageController from "../controllers/contact-us-page";

const router = Router();

router.get("/get-all-contact-us-page-data", ContactUsPageController.getAllContactUsPageData);
router.get("/get-hero-image", ContactUsPageController.getHeroImage);
router.post("/update-hero-image", validateAdmin, isAdmin, uploadImage.single("contact-us-hero-image"), ContactUsPageController.updateHeroImage);
router.get("/get-contact-info", ContactUsPageController.getContactInfo);
router.post("/update-contact-info", validateAdmin, isAdmin, contactInfoValidator, ContactUsPageController.updateContactInfo);

export default router;