import Restaurant from "../Models/Restaurant.js";
import User from "../Models/User.js";

export const createRestaurantProfile = async (req, res) => {
  try {
    const { name, email, userId } = req.body;

    if (!userId) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    // ✅ Prevent duplicate restaurant
    const existingRestaurant = await Restaurant.findOne({ owner: userId });

    if (existingRestaurant) {
      return res.json(existingRestaurant);
    }

    // ✅ Create restaurant
    const restaurant = await Restaurant.create({
      name,
      email,
      owner: userId,
    });

    // ✅ Attach restaurant to user
    await User.findByIdAndUpdate(userId, {
      restaurantId: restaurant._id,
    });

    res.status(201).json({
      message: "Restaurant profile created",
      restaurant,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




