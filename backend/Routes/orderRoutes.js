import express from "express";
import {
  createOrder,
  getRestaurantOrders,
  updateOrderStatus,
} from "../Controllers/orderController.js";

const router = express.Router();

// Create order
router.post("/", createOrder);

// Get orders for restaurant
router.get("/restaurant/:userId", getRestaurantOrders);

// Update order status
router.patch("/:orderId/status", updateOrderStatus);

export default router;
