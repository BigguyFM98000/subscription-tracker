import express from "express";
import cookieParser  from "cookie-parser";
import {config} from "dotenv";
config();

const PORT = 5001; 
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";
import subscriptionRouter from "./routes/subscriptionRoutes.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";

const app = express();

app.use(express.json());
// app.use(express.urlencoded({options: {extended: false}}));
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);

app.use(errorMiddleware);

app.get("/", (req, res) => {
    res.send("Welcome to Subscription Tracker API!");
});

app.listen(PORT, async () => {
    console.log(`Server listening on Port ${PORT}`);
    await connectToDatabase();
});

export default app;