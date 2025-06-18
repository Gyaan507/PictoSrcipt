"use client"

import { createContext, useState, useContext, useEffect } from "react"
import { authAPI } from "../services/api"

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      fetchCurrentUser()
    } else {
      setLoading(false)
    }
  }, [])

  const fetchCurrentUser = async () => {
    try {
      const response = await authAPI.getCurrentUser()
      setUser(response.data.user)
    } catch (error) {
      console.error("Error fetching user:", error)
      localStorage.removeItem("token")
      localStorage.removeItem("user")
    } finally {
      setLoading(false)
    }
  }

  const login = async (email, password) => {
    try {
      setError(null)
      const response = await authAPI.login(email, password)
      const { token, user } = response.data

      localStorage.setItem("token", token)
      localStorage.setItem("user", JSON.stringify(user))
      setUser(user)

      return { success: true }
    } catch (error) {
      const message = error.response?.data?.message || "Login failed"
      setError(message)
      return { success: false, error: message }
    }
  }

  const register = async (email, password) => {
    try {
      setError(null)
      const response = await authAPI.register(email, password)
      const { token, user } = response.data

      localStorage.setItem("token", token)
      localStorage.setItem("user", JSON.stringify(user))
      setUser(user)

      return { success: true }
    } catch (error) {
      const message = error.response?.data?.message || "Registration failed"
      setError(message)
      return { success: false, error: message }
    }
  }

  const logout = async () => {
    try {
      await authAPI.logout()
    } catch (error) {
      console.error("Logout error:", error)
    } finally {
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      setUser(null)
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading, error }}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
