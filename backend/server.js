const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const authRoutes = require("./routes/auth")

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB successfully")
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err)
    process.exit(1)
  })

// Routes
app.use("/api/auth", authRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
