import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Config/db.js";
import restaurantRoutes from "./Routes/restaurantRoutes.js";
import orderRoutes from "./Routes/orderRoutes.js";


dotenv.config();

const app = express();

// ✅ Middleware FIRST
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));

app.use(express.json());

// ✅ Routes
app.use("/api/restaurants", restaurantRoutes);
// orderRoutes
app.use("/api/orders", orderRoutes);


// ✅ DB Connection
connectDB();

// Health check
app.get("/", (req, res) => {
  res.send("OLYYO Backend is running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
