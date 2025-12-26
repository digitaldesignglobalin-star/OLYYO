import express from "express";
import { register, login } from "../controller/authcontroller.js";

const router = express.Router();

// User Register 
router.post("/register", register);
// User Login
router.post("/login", login);

export default router;
