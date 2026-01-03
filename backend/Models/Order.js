import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    // Who placed the order (customer)
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Which restaurant receives the order
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    },

    // Items ordered (simple for now)
    items: [
      {
        name: String,
        quantity: Number,
        price: Number,
      },
    ],

    // Total price
    totalAmount: {
      type: Number,
      required: true,
    },

    // Order status
    status: {
      type: String,
      enum: ["pending", "preparing", "ready", "delivered", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
