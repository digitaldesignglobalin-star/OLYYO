import express from "express";
import {
  createOrder,
  getRestaurantOrders,
  updateOrderStatus,
} from "../Controllers/orderController.js";

const router = express.Router();

router.post("/", createOrder);
router.get("/restaurant/:restaurantId", getRestaurantOrders);
router.patch("/:orderId/status", updateOrderStatus);

export default router;
