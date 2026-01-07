import Order from "../Models/Order.js";
import Restaurant from "../Models/Restaurant.js";
import Dish from "../Models/Dish.js";
import mongoose from "mongoose";

/**
 * CREATE ORDER
 * POST /api/orders
 */
export const createOrder = async (req, res) => {
  try {
    const { restaurantId, items, totalPrice } = req.body;

    if (!restaurantId || !items || !totalPrice) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    if (!mongoose.Types.ObjectId.isValid(restaurantId)) {
      return res.status(400).json({ message: "Invalid restaurant ID" });
    }

    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    const order = await Order.create({
      restaurant: restaurantId,
      items,
      totalPrice,
    });

    return res.status(201).json(order);
  } catch (error) {
    console.error("Create Order Error:", error);
    return res.status(500).json({ message: error.message });
  }
};

/**
 * GET ORDERS OF A RESTAURANT
 * GET /api/orders/restaurant/:restaurantId
 */
export const getRestaurantOrders = async (req, res) => {
  try {
    const { restaurantId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(restaurantId)) {
      return res.status(400).json({ message: "Invalid restaurant ID" });
    }

    const orders = await Order.find({ restaurant: restaurantId })
      .populate("items.dish", "name category price")
      .sort({ createdAt: -1 });

    return res.json(orders);
  } catch (error) {
    console.error("Get Orders Error:", error);
    return res.status(500).json({ message: error.message });
  }
};

/**
 * UPDATE ORDER STATUS
 * PATCH /api/orders/:orderId/status
 */
export const updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    if (!mongoose.Types.ObjectId.isValid(orderId)) {
      return res.status(400).json({ message: "Invalid order ID" });
    }

    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.status = status;
    await order.save();

    return res.json(order);
  } catch (error) {
    console.error("Update Order Error:", error);
    return res.status(500).json({ message: error.message });
  }
};
