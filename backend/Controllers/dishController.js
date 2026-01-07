import Dish from "../Models/Dish.js";
import Restaurant from "../Models/Restaurant.js";
import mongoose from "mongoose";

/**
 * CREATE A NEW DISH
 * POST /api/dishes
 */
export const createDish = async (req, res) => {
  try {
    const { restaurantId, name, category, price, prepTime } = req.body;

    // Basic validation
    if (!restaurantId || !name || !category || !price) {
      return res.status(400).json({
        message: "restaurantId, name, category and price are required",
      });
    }

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(restaurantId)) {
      return res.status(400).json({ message: "Invalid restaurant ID" });
    }

    // Check if restaurant exists
    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    // Create dish
    const dish = await Dish.create({
      restaurant: restaurantId,
      name,
      category,
      price,
      prepTime,
    });

    // Return created dish
    return res.status(201).json(dish);
  } catch (error) {
    console.error("Create Dish Error:", error);
    return res.status(500).json({ message: error.message });
  }
};

/**
 * GET ALL DISHES OF A RESTAURANT
 * GET /api/dishes/:restaurantId
 */
export const getRestaurantDishes = async (req, res) => {
  try {
    const { restaurantId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(restaurantId)) {
      return res.status(400).json({ message: "Invalid restaurant ID" });
    }

    const dishes = await Dish.find({ restaurant: restaurantId }).sort({
      createdAt: -1,
    });

    return res.json(dishes);
  } catch (error) {
    console.error("Get Dishes Error:", error);
    return res.status(500).json({ message: error.message });
  }
};

/**
 * TOGGLE DISH AVAILABILITY
 * PATCH /api/dishes/:id/toggle
 */
export const toggleDishAvailability = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid dish ID" });
    }

    const dish = await Dish.findById(id);

    if (!dish) {
      return res.status(404).json({ message: "Dish not found" });
    }

    dish.available = !dish.available;
    await dish.save();

    return res.json(dish);
  } catch (error) {
    console.error("Toggle Dish Error:", error);
    return res.status(500).json({ message: error.message });
  }
};
