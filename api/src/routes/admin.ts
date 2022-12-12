import {Router} from "express";
import AdminController from "../controllers/admin"
import validateAdmin from "../middleware/validateAdmin"
import { 
    loginValidator, 
    changePasswordValidator,
    changeProfileValidator
} from "../middleware/validators";

const router = Router();

router.post("/login", loginValidator, AdminController.login)
router.delete("/logout/:adminId", AdminController.logout);
router.put("/change-profile/:adminId", validateAdmin, changeProfileValidator, AdminController.changeProfile);
router.put("/change-password/:adminId", validateAdmin, changePasswordValidator, AdminController.changePassword);
router.get("/get-all-donors", AdminController.getAllDonors);
router.get("/get-donor/:donorId", AdminController.getDonor);
router.put("/toggle-donor/:donorId", validateAdmin, AdminController.toggleDonor);
router.delete("/delete-donor/:donorId", validateAdmin, AdminController.deleteDonor);

export default router;