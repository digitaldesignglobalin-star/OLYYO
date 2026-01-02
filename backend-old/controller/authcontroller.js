
// import bcrypt from "bcryptjs";
// import User from "../Model/User.js";

// // =============REGISTER===============
// export const register = async (req, res) => {
//   try {
//     const { username, email, password, confirmPassword } = req.body;

//     // ✅ validation
//     if (!username || !email || !password || !confirmPassword) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     if (password !== confirmPassword) {
//       return res
//         .status(400)
//         .json({ message: "Passwords do not match" });
//     }

//     // check username
//     const existingUsername = await User.findOne({ username });
//     if (existingUsername) {
//       return res.status(400).json({ message: "Username already taken" });
//     }

//     // check email
//     const existingEmail = await User.findOne({ email });
//     if (existingEmail) {
//       return res.status(400).json({ message: "Email already exists" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     await User.create({
//       username,
//       email,
//       password: hashedPassword,
//     });

//     res.status(201).json({
//       message: "User registered successfully",
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };



// // ============= RESTAURANT REGISTER =============
// export const registerRestaurant = async (req, res) => {
//   try {
//     const { username, email, password, confirmPassword } = req.body;

//     if (!username || !email || !password || !confirmPassword) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     if (password !== confirmPassword) {
//       return res.status(400).json({ message: "Passwords do not match" });
//     }

//     const existingUser = await User.findOne({
//       $or: [{ username }, { email }],
//     });

//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     await User.create({
//       username,
//       email,
//       password: hashedPassword,
//       role: "restaurant", // 🔒 FORCE ROLE
//     });

//     res.status(201).json({
//       message: "Restaurant registered successfully",
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };




// // ============= MIDDLEMAN REGISTER =============
// export const registerMiddleman = async (req, res) => {
//   try {
//     const { username, email, password, confirmPassword } = req.body;

//     if (!username || !email || !password || !confirmPassword) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     if (password !== confirmPassword) {
//       return res.status(400).json({ message: "Passwords do not match" });
//     }

//     const existingUser = await User.findOne({
//       $or: [{ username }, { email }],
//     });

//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     await User.create({
//       username,
//       email,
//       password: hashedPassword,
//       role: "middleman", // 🔒 FORCE ROLE
//     });

//     res.status(201).json({
//       message: "Middleman registered successfully",
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };





// // =============login===============


// export const login = async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     if (!username || !password) {
//       return res.status(400).json({ message: "All fields required" });
//     }

//     const user = await User.findOne({ username });
//     if (!user) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     res.json({
//       message: "Login successful",
//       user: {
//         id: user._id,
//         username: user.username,
//         role: user.role,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };




// // ===============ADMIN LOGIN===============
// export const adminLogin = async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     if (!username || !password) {
//       return res.status(400).json({ message: "All fields required" });
//     }

//     // 🔍 find admin only
//     const admin = await User.findOne({ username, role: "admin" });
//     if (!admin) {
//       return res.status(401).json({ message: "Not an admin account" });
//     }

//     const isMatch = await bcrypt.compare(password, admin.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     res.json({
//       message: "Admin login successful",
//       user: {
//         id: admin._id,
//         username: admin.username,
//         role: admin.role,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
