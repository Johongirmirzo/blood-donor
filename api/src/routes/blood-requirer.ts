import {Router} from "express";
import {bloodRequirerValidator} from "../middleware/validators";
import validateAdmin from "../middleware/validateAdmin";
import isAdmin from "../middleware/isAdmin";
import BloodRequirerController from "../controllers/blood-requirer";

const router = Router();

router.get("/get-all-blood-requirers", BloodRequirerController.getAllBloodRequirers);
router.get("/get-blood-requirer/:bloodRequirerId", validateAdmin, isAdmin, BloodRequirerController.getBloodRequirer);
router.post("/create-blood-requirer", bloodRequirerValidator,  BloodRequirerController.createBloodRequirer);
router.delete("/delete-blood-requirer/:bloodRequirerId", validateAdmin, isAdmin, BloodRequirerController.deleteBloodRequirer);


export default router;