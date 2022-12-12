import {Router} from 'express';
import {helpfulInfoValidator, initiativeValidator} from '../middleware/validators';
import {uploadImage} from "../middleware/uploadImage";
import validateAdmin from "../middleware/validateAdmin"
import isAdmin from "../middleware/isAdmin"
import HomePageController from '../controllers/home-page';


const router = Router();

router.get("/get-all-sliders", HomePageController.getAllSliders);
router.get("/get-slider/:sliderId", HomePageController.getSlider);
router.post("/create-slider", validateAdmin, isAdmin,  uploadImage.single("image"), HomePageController.createSlider);
router.put("/edit-slider/:sliderId", validateAdmin, isAdmin, uploadImage.single("image"),  HomePageController.editSlider);
router.delete("/delete-slider/:sliderId", validateAdmin, isAdmin, HomePageController.deleteSlider);

router.get("/get-all-home-page-data",  HomePageController.getAllHomePageData);
router.get("/get-helpful-info", HomePageController.getHelpfulInfo);
router.post("/update-helpful-info", validateAdmin, isAdmin, helpfulInfoValidator, HomePageController.updateHelpfulInfo);
router.get("/get-blood-group-info", HomePageController.getBloodGroupsIfno);
router.post("/update-blood-group-info", validateAdmin, isAdmin, uploadImage.single("image"), HomePageController.updateBloodGroupsInfo);
router.get("/get-initiative", HomePageController.getInitiative);
router.post("/update-initiative", validateAdmin, isAdmin, initiativeValidator, HomePageController.updateInitiative);
router.get("/get-value", HomePageController.getValue);
router.post("/update-value", validateAdmin, isAdmin, HomePageController.updateValue);

export default router;