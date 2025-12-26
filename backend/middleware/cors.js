import cors from "cors";

const corsMiddleware = cors({
  origin: "http://localhost:3000", // your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
});

export default corsMiddleware;
