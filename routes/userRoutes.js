import { Router } from "express";
import { getUser, getUsers } from "../controllers/userController.js";
const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", getUser);
userRouter.post("/", (req, res) => {
    res.json({message: "CREATE new user"});
});
userRouter.put("/:id", (req, res) => {
    res.json({message: "UPDATE a user"});
});
userRouter.delete("/:id", (req, res) => {
    res.json({message: "DELETE a user"});
});

export default userRouter;