import {Router} from "express";
import DonorController from "../controllers/donor"
import validateDonor from "../middleware/validateDonor"
import {
    registerValidator, 
    loginValidator, 
    changePasswordValidator,
    changeProfileValidator
} from "../middleware/validators";

const router = Router();


router.post("/login", loginValidator, DonorController.login);
router.post("/register", registerValidator, DonorController.register);
router.delete("/logout/:donorId", DonorController.logout);
router.put("/change-profile/:donorId", validateDonor, changeProfileValidator, DonorController.changeProfile);
router.put("/change-password/:donorId", validateDonor, changePasswordValidator, DonorController.changePassword);

export default router;