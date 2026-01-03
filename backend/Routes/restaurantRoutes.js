import express from "express";
import { createRestaurantProfile } from "../Controllers/restaurantController.js";

const router = express.Router();

// Create restaurant profile
router.post("/profile", createRestaurantProfile);

export default router;
