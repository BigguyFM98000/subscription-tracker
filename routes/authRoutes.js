import { Router } from "express";
const authRouter = Router();

authRouter.post("/sign-up", (req, res) => {
    res.json({message: "Sign Up"});
});
authRouter.post("/sign-in", (req, res) => {
    res.json({message: "Sign In"});
});
authRouter.post("/sign-out", (req, res) => {
    res.json({message: "Sign Out"});
});

export default authRouter;