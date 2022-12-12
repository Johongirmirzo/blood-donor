import {Router} from "express";
import {bloodGroupValidator} from "../middleware/validators"
import validateAdmin from "../middleware/validateAdmin";
import isAdmin from "../middleware/isAdmin"
import BloodGroupController from "../controllers/blood-group"

const router = Router();

router.get("/get-all-blood-groups", BloodGroupController.getAllBloodGroups);
router.get("/get-blood-group/:bloodGroupId", BloodGroupController.getBloodGroup);
router.post("/create-blood-group", validateAdmin, isAdmin, bloodGroupValidator, BloodGroupController.createBloodGroup);
router.put("/edit-blood-group/:bloodGroupId", validateAdmin, isAdmin, bloodGroupValidator, BloodGroupController.editBloodGroup);
router.delete("/delete-blood-group/:bloodGroupId", validateAdmin, isAdmin, BloodGroupController.deleteBloodGroup);

export default router;