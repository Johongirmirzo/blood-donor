import {Router} from "express";
import {achievementsValidator, donorReviewValidator} from "../middleware/validators";
import AboutUsPageController from "../controllers/about-us-page";
import {uploadImage} from "../middleware/uploadImage";
import validateAdmin from "../middleware/validateAdmin";
import isAdmin from "../middleware/isAdmin"

const router = Router();

router.get("/get-all-about-us-page-data", AboutUsPageController.getAllAboutUsPageData);
router.get("/get-hero-image", AboutUsPageController.getHeroImage);
router.post("/update-hero-image", validateAdmin, isAdmin, uploadImage.single("about-hero-image"), AboutUsPageController.updateHeroImage);
router.get("/get-about-us", AboutUsPageController.getAboutUs);
router.post("/update-about-us", validateAdmin, isAdmin, uploadImage.single("about-us-image"), AboutUsPageController.updateAboutUs);
router.get("/get-all-volunteers", AboutUsPageController.getAllVolunteers);
router.get("/get-volunteer/:volunteerId", AboutUsPageController.getVolunteer);
router.post("/create-volunteer", validateAdmin, isAdmin, uploadImage.single("volunteer-image"), AboutUsPageController.createVolunteer);
router.put("/edit-volunteer/:volunteerId", validateAdmin, isAdmin, uploadImage.single("volunteer-image"), AboutUsPageController.editVolunteer);
router.delete("/delete-volunteer/:volunteerId", validateAdmin, isAdmin, AboutUsPageController.deleteVolunteer);
router.get("/get-volunteer-section", AboutUsPageController.getVolunteerSection);
router.post("/update-volunteer-section", validateAdmin, isAdmin, uploadImage.single("volunteer-hero-image"), AboutUsPageController.updateVolunteerSection);
router.get("/get-our-achievements", AboutUsPageController.getOurAchievements);
router.post("/update-our-achievements", validateAdmin, isAdmin, achievementsValidator, AboutUsPageController.updateOurAchievements);
router.get("/get-all-donor-reviews", AboutUsPageController.getAllDonorReviews);
router.get("/get-donor-review/:donorReviewId", AboutUsPageController.getDonorReview);
router.post("/create-donor-review", validateAdmin, isAdmin, donorReviewValidator, AboutUsPageController.createDonorReview);
router.put("/edit-donor-review/:donorReviewId", validateAdmin, isAdmin, donorReviewValidator, AboutUsPageController.editDonorReview);
router.delete("/delete-donor-review/:donorReviewId", validateAdmin, isAdmin, AboutUsPageController.deleteDonorReview);
router.get("/get-donor-review-section", AboutUsPageController.getDonorReviewSection);
router.post("/update-donor-review-section", validateAdmin, isAdmin, uploadImage.single("donor-review-hero-image"), AboutUsPageController.updateDonorReviewSection);

export default router;