import {Router} from "express";
import {uploadImage} from "../middleware/uploadImage"
import {faqValidator} from "../middleware/validators"
import validateAdmin from "../middleware/validateAdmin";
import isAdmin from "../middleware/isAdmin"
import FaqPageController from "../controllers/faq-page";

const router = Router();

router.get("/get-all-faq-page-data", FaqPageController.getAllFaqPageData);
router.get("/get-hero-image", FaqPageController.getHeroImage);
router.post("/update-hero-image", validateAdmin, isAdmin, uploadImage.single("faq-page-hero-image"), FaqPageController.updateHeroImage);
router.get("/get-faqs-section", FaqPageController.getFaqsSection);
router.post("/update-faqs-section", validateAdmin, isAdmin, FaqPageController.updateFaqsSection);
router.get("/get-all-faqs", FaqPageController.getAllFaqs);
router.get("/get-faq/:faqId", FaqPageController.getFaq);
router.post("/create-faq", validateAdmin, isAdmin, faqValidator, FaqPageController.createFaq);
router.put("/edit-faq/:faqId", validateAdmin, isAdmin, faqValidator, FaqPageController.editFaq);
router.delete("/delete-faq/:faqId", validateAdmin, isAdmin, FaqPageController.deleteFaq);
router.get("/get-all-sponsors", FaqPageController.getAllSponsors);
router.post("/create-sponsor", validateAdmin, isAdmin, uploadImage.single("sponsor-logo"), FaqPageController.createSponsor);
router.delete("/delete-sponsor/:sponsorId", validateAdmin, isAdmin, FaqPageController.deleteSponsor);
router.get("/get-sponsors-section", FaqPageController.getSponsorsSection);
router.post("/update-sponsors-section", validateAdmin, isAdmin,  FaqPageController.updateSponsorsSection);

export default router;