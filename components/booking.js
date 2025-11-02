import express from "express";
import Booking from "../models/Booking.js";

const router = express.Router();

// 🟢 GET all bookings
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🟢 POST new booking
router.post("/", async (req, res) => {
  try {
    const { name, date, feedback } = req.body;
    if (!name || !date)
      return res.status(400).json({ message: "Name and date are required" });

    const newBooking = new Booking({ name, date, feedback });
    await newBooking.save();
    res.json(newBooking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🟠 UPDATE booking
router.put("/:id", async (req, res) => {
  try {
    const { name, date, feedback } = req.body;
    const updated = await Booking.findByIdAndUpdate(
      req.params.id,
      { name, date, feedback },
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🔴 DELETE booking
router.delete("/:id", async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: "Booking deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
