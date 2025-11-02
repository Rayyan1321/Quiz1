import mongoose from "mongoose";

// MongoDB connection URL (your database)
const MONGO_URL = "mongodb://localhost:27017/testDB";

// Function to connect MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Connected to MongoDB ");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    process.exit(1); // Stop the server if DB connection fails
  }
};

export default connectDB;
