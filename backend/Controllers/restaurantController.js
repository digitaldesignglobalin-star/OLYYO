import Restaurant from "../Models/Restaurant.js";
import User from "../Models/User.js";
import mongoose from "mongoose";

export const createRestaurant = async (req, res) => {
  try {
    const { name, email, phone, address, userId } = req.body;

    // 1️⃣ Validation
    if (!name || !email || !userId) {
      return res.status(400).json({
        message: "name, email and userId are required",
      });
    }

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid userId" });
    }

    // 2️⃣ Check user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // 3️⃣ Prevent duplicate restaurant
    if (user.restaurantId) {
      return res.status(400).json({
        message: "Restaurant already linked to this user",
      });
    }

    // 4️⃣ Create restaurant
    const restaurant = await Restaurant.create({
      name,
      email,
      phone,
      address,
    });

    // 5️⃣ 🔥 LINK RESTAURANT TO USER
    user.restaurantId = restaurant._id;
    await user.save();

    // 6️⃣ Return success
    return res.status(201).json({
      message: "Restaurant created and linked successfully",
      restaurant,
    });
  } catch (error) {
    console.error("Create Restaurant Error:", error);
    return res.status(500).json({ message: error.message });
  }
};
