import { Router } from "express";
import authorize from "../middlewares/authMiddleware.js";
import { createSubscription, getUserSubscriptions } from "../controllers/subscriptionController.js";
const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
    res.json({message: "GET all subscriptions"});
});
subscriptionRouter.get("/:id", (req, res) => {
    res.json({message: "GET subscription details"});
});
subscriptionRouter.post("/", authorize, createSubscription);

subscriptionRouter.put("/:id", (req, res) => {
    res.json({message: "UPDATE a subscription"});
});
subscriptionRouter.delete("/:id", (req, res) => {
    res.json({message: "DELETE a subscription"});
});
subscriptionRouter.get("/user/:id", authorize, getUserSubscriptions);
subscriptionRouter.put("/:id/cancel", (req, res) => {
    res.json({message: "CANCEL subscription"});
});
subscriptionRouter.get("/upcoming-renewals", (req, res) => {
    res.json({message: "GET upcoming renewals"});
});

export default subscriptionRouter;