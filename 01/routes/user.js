import express from "express";
import { user } from "../utils/data.js";
// import productRoute from "./productRoute";



const userRouter = express.Router()

userRouter.get('/product/:userId', (req, res) => {
    const { userId } = req.params;
    res.send({ message: `User ID received: ${userId}` });
});

export default userRouter