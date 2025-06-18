const express = require("express")
const jwt = require("jsonwebtoken")
const User = require("../models/User")
const router = express.Router()

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"]
  const token = authHeader && authHeader.split(" ")[1]

  if (!token) {
    return res.status(401).json({ message: "Access token required" })
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token" })
    }
    req.user = decoded
    next()
  })
}

// User registration
router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" })
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters long" })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Please enter a valid email address" })
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() })
    if (existingUser) {
      return res.status(400).json({ message: "User with this email already exists" })
    }

    // Create new user (password will be hashed automatically by the pre-save middleware)
    const user = new User({
      email: email.toLowerCase(),
      password,
    })

    await user.save()

    // Generate JWT token
    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "24h" },
    )

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: user._id,
        email: user.email,
        createdAt: user.createdAt,
      },
    })
  } catch (error) {
    console.error("Registration error:", error)

    // Handle mongoose validation errors
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message)
      return res.status(400).json({ message: messages[0] })
    }

    // Handle duplicate key error
    if (error.code === 11000) {
      return res.status(400).json({ message: "User with this email already exists" })
    }

    res.status(500).json({ message: "Internal server error" })
  }
})

// User login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" })
    }

    // Find user by email
    const user = await User.findOne({ email: email.toLowerCase() })
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" })
    }

    // Verify password using the instance method
    const isValidPassword = await user.comparePassword(password)
    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid email or password" })
    }

    // Generate JWT token
    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "24h" },
    )

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        email: user.email,
        createdAt: user.createdAt,
      },
    })
  } catch (error) {
    console.error("Login error:", error)
    res.status(500).json({ message: "Internal server error" })
  }
})

// Get current user (protected route)
router.get("/me", authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password")
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    res.json({
      user: {
        id: user._id,
        email: user.email,
        createdAt: user.createdAt,
      },
    })
  } catch (error) {
    console.error("Get user error:", error)
    res.status(500).json({ message: "Internal server error" })
  }
})

// Logout (client-side will handle token removal)
router.post("/logout", authenticateToken, (req, res) => {
  res.json({ message: "Logout successful" })
})

// Change password (protected route)
router.put("/change-password", authenticateToken, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body

    if (!currentPassword || !newPassword) {
      return res.status(400).json({ message: "Current password and new password are required" })
    }

    if (newPassword.length < 6) {
      return res.status(400).json({ message: "New password must be at least 6 characters long" })
    }

    const user = await User.findById(req.user.userId)
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    // Verify current password
    const isValidPassword = await user.comparePassword(currentPassword)
    if (!isValidPassword) {
      return res.status(401).json({ message: "Current password is incorrect" })
    }

    // Update password (will be hashed automatically by pre-save middleware)
    user.password = newPassword
    await user.save()

    res.json({ message: "Password changed successfully" })
  } catch (error) {
    console.error("Change password error:", error)
    res.status(500).json({ message: "Internal server error" })
  }
})

module.exports = router
