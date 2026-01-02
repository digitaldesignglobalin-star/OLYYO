import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Config/db.js";
import restaurantRoutes from "./Routes/restaurantRoutes.js";


dotenv.config();

const app = express();


app.use(express.json());
app.use("/api/restaurants", restaurantRoutes);



// Connect DB
connectDB();

// Middleware
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("OLYYO Backend is running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
