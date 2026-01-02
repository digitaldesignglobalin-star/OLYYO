import express from "express";
import Restaurant from "../Models/Restaurant.js";
import User from "../Models/User.js";

const router = express.Router();

/**
 * Create restaurant profile
 */
router.post("/profile", async (req, res) => {
  try {
    const { name, email, userId } = req.body;

    if (!userId) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    // Check if restaurant already exists
    const existing = await Restaurant.findOne({ owner: userId });
    if (existing) {
      return res.status(400).json({ message: "Restaurant already exists" });
    }

    // Create restaurant
    const restaurant = await Restaurant.create({
      name,
      email,
      owner: userId,
    });

    // Save restaurantId in user
    await User.findByIdAndUpdate(userId, {
      restaurantId: restaurant._id,
    });

    res.status(201).json({
      message: "Restaurant created",
      restaurant,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
