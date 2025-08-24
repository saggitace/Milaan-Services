"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-md border flex items-center justify-center">
        <div className="h-5 w-5 bg-muted rounded-full animate-pulse"></div>
      </div>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative h-9 w-16 rounded-full bg-muted p-1 overflow-hidden transition-colors"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <div className="absolute inset-0 flex items-center justify-between px-2">
        <Moon
          className={`h-5 w-5 text-yellow-400 transition-opacity ${theme === "dark" ? "opacity-100" : "opacity-30"}`}
        />
        <Sun
          className={`h-5 w-5 text-yellow-500 transition-opacity ${theme === "dark" ? "opacity-30" : "opacity-100"}`}
        />
      </div>
      <div
        className={`absolute h-7 w-7 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
          theme === "dark" ? "translate-x-7" : "translate-x-0"
        }`}
      ></div>
    </button>
  )
}
