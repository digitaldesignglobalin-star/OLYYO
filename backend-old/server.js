// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import userRouter from "./routes/auth.user.routes.js"
// import corsMiddleware from "./middleware/cors.js";
// import adminRouter from "./routes/auth.admin.routes.js";
// import middlemanAuthRouter from "./routes/auth.middleman.routes.js";
// import restaurantAuthRouter from "./routes/auth.restaurant.routes.js";


// dotenv.config();

// const app = express();

// app.use(corsMiddleware);
// app.use(express.json());

// // USER + DELIVERY
// app.use("/api/auth", userRouter);
// // ADMIN 
// app.use("/api/auth/admin", adminRouter);
// // RESTAURANT
// app.use("/api/auth/restaurant", restaurantAuthRouter);
// //MIDDLEMAN
// app.use("/api/auth/middleman", middlemanAuthRouter);


// const PORT = process.env.PORT || 2000;
// const MONGO_URI = process.env.MONGO_URI;

// mongoose
//   .connect(
//     MONGO_URI,
//     {
//       dbName: "Olyyo_db",
//     }
//   )
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log(err));


// app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
