import express from "express";
import {
  createDish,
  getRestaurantDishes,
  toggleDishAvailability,
} from "../Controllers/dishController.js";

const router = express.Router();

// create dish
router.post("/", createDish);

// get dishes of a restaurant
router.get("/:restaurantId", getRestaurantDishes);

// toggle availability
router.patch("/:id/toggle", toggleDishAvailability);

export default router;
