import Order from "../Models/Order.js";
import User from "../Models/User.js";




export const createOrder = async (req, res) => {
  try {
    const { userId, items, totalAmount } = req.body;

    if (!userId || !items || !totalAmount) {
      return res.status(400).json({ message: "Missing order data" });
    }

    // Get user
    const user = await User.findById(userId);

    if (!user || !user.restaurantId) {
      return res.status(400).json({ message: "Restaurant not linked to user" });
    }

    // Create order
    const order = await Order.create({
      user: userId,
      restaurant: user.restaurantId,
      items,
      totalAmount,
    });

    res.status(201).json({
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// Fetches all orders for that restaurant
export const getRestaurantOrders = async (req, res) => {
  try {
    const { userId } = req.params;

    // Find the user
    const user = await User.findById(userId);

    if (!user || !user.restaurantId) {
      return res
        .status(400)
        .json({ message: "Restaurant not linked to user" });
    }

    // Find orders for this restaurant
    const orders = await Order.find({
      restaurant: user.restaurantId,
    }).sort({ createdAt: -1 });

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// explaination  : 
// What this does (plain words)
// Takes user ID
// Finds which restaurant belongs to that user
// Fetches all orders for that restaurant
// Sends them back







// Update order status
export const updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    // Allowed status values
    const allowedStatus = [
      "pending",
      "preparing",
      "ready",
      "delivered",
      "cancelled",
    ];

    if (!allowedStatus.includes(status)) {
      return res.status(400).json({ message: "Invalid order status" });
    }

    // Find and update order
    const order = await Order.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json({
      message: "Order status updated",
      order,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

