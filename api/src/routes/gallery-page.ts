import {Router} from "express";
import {uploadImage} from "../middleware/uploadImage";
import {galleryValidator} from "../middleware/validators";
import validateAdmin from "../middleware/validateAdmin";
import isAdmin from "../middleware/isAdmin"
import GalleryPageController from "../controllers/gallery-page";

const router = Router();

router.get("/get-all-gallery-page-data", GalleryPageController.getAllGalleryPageData);
router.get("/get-hero-image", GalleryPageController.getHeroImage);
router.post("/update-hero-image", validateAdmin, isAdmin, uploadImage.single("gallery-hero-image"), GalleryPageController.updateHeroImage);
router.get("/get-gallery", GalleryPageController.getGallery);
router.post("/create-gallery", validateAdmin, isAdmin, uploadImage.single("gallery-image"), GalleryPageController.createGallery);
router.delete("/delete-gallery/:imageId", validateAdmin, isAdmin, uploadImage.single("gallery-image"), GalleryPageController.deleteGallery);
router.get("/get-gallery-section", uploadImage.array("gallery-images", 100), GalleryPageController.getGallerySection);
router.post("/update-gallery-section", validateAdmin, isAdmin, galleryValidator, GalleryPageController.updateGallerySection);


export default router;