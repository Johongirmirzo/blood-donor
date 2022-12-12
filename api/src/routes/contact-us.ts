import {Router} from "express";
import {contactUsValidator} from "../middleware/validators"
import {userSendMessageRateLimiter} from "../middleware/apiRateLimiters"
import validateAdmin from "../middleware/validateAdmin";
import isAdmin from "../middleware/isAdmin"
import ContactUsController from "../controllers/contact-us";

const router = Router();

router.get("/get-all-messages", validateAdmin, isAdmin, ContactUsController.getAllMessage);
router.get("/get-message/:messageId", validateAdmin, isAdmin, ContactUsController.getMessage);
router.post("/create-message", userSendMessageRateLimiter, contactUsValidator, ContactUsController.createMessage); 
router.delete("/delete-message/:messageId", validateAdmin, isAdmin, ContactUsController.deleteMessage);

export default router;