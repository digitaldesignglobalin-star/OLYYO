// import jwt from "jsonwebtoken";
// import User from "../Models/User.js";

// export const protect = async (req, res, next) => {
//   let token;

//   try {
//     // 1️⃣ Get token from header
//     if (
//       req.headers.authorization &&
//       req.headers.authorization.startsWith("Bearer")
//     ) {
//       token = req.headers.authorization.split(" ")[1];
//     }

//     if (!token) {
//       return res.status(401).json({ message: "Not authorized, no token" });
//     }

//     // 2️⃣ VERIFY USING NEXTAUTH SECRET (NOT JWT_SECRET)
//     const decoded = jwt.verify(token, process.env.NEXTAUTH_SECRET);

//     // 3️⃣ Get user from DB
//     const user = await User.findById(decoded.id).select("-password");

//     if (!user) {
//       return res.status(401).json({ message: "User not found" });
//     }

//     // 4️⃣ Attach user to request
//     req.user = user;
//     next();
//   } catch (error) {
//     console.error(error);
//     return res.status(401).json({ message: "Not authorized, token failed" });
//   }
// };
