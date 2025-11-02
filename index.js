import express from "express";
import cors from "cors";
import connectDB from "./db.js";
import userRoutes from "./components/user.js";
import bookingRoutes from "./components/booking.js";

// Create express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/bookings", bookingRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("✅ Backend Running...");
});

// User routes
app.use("/api/users", userRoutes);

// Server port
const PORT = 5000;

// Start server
app.listen(PORT, () => {
  console.log(' Server running on http://localhost:${PORT}');
});