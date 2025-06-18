const mongoose = require("mongoose")
require("dotenv").config()

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("MongoDB connected successfully")
    console.log("Database initialized and ready to use")
    process.exit(0)
  } catch (error) {
    console.error("Database connection error:", error)
    process.exit(1)
  }
}

connectDB()
