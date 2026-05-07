import express from "express";

const PORT = 5001; 
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";
import subscriptionRouter from "./routes/subscriptionRoutes.js";

const app = express();

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);

app.get("/", (req, res) => {
    res.send("Welcome to Subscription Tracker API!");
});

app.listen(PORT, () => {
    console.log(`Server listening on Port ${PORT}`);
});

export default app;