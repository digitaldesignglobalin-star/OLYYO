import express from "express";
import { registerRestaurant } from "../controller/authcontroller.js";

const router = express.Router();

// RESTAURANT REGISTER
router.post("/register", registerRestaurant);

export default router;
