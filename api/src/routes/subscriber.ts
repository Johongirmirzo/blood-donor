import {Router} from "express";
import { subscriberValidator } from "../middleware/validators";
import {userSubscriptionRateLimter} from "../middleware/apiRateLimiters"
import validateAdmin from "../middleware/validateAdmin";
import isAdmin from "../middleware/isAdmin"
import SubscriberController from "../controllers/subscriber"

const router = Router();

router.get("/get-all-subscribers", validateAdmin, isAdmin, SubscriberController.getALlSubscribers);
router.get("/get-subscriber/:subscriberId", validateAdmin, isAdmin, SubscriberController.getSubscriber);
router.post("/create-subscriber", userSubscriptionRateLimter, subscriberValidator, SubscriberController.createSubscriber);
router.delete("/delete-subscriber/:subscriberId", validateAdmin, isAdmin, SubscriberController.deleteSubscriber);

export default router;