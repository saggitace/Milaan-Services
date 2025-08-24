"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface HoverCardProps {
  children: ReactNode
  className?: string
  hoverEffect?: "lift" | "glow" | "scale" | "border" | "shadow"
}

export default function HoverCard({ children, className, hoverEffect = "lift" }: HoverCardProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const hoverClasses = {
    lift: "hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-primary/20",
    glow: "hover:shadow-lg hover:shadow-primary/20 dark:hover:shadow-primary/30",
    scale: "hover:scale-[1.02]",
    border: "hover:border-primary dark:hover:border-primary/70",
    shadow: "hover:shadow-xl dark:hover:shadow-primary/10",
  }

  return (
    <div
      className={cn(
        "transition-all duration-300 ease-in-out",
        hoverClasses[hoverEffect],
        mounted && theme === "dark" && "dark:theme-transition", // Avoid SSR mismatch
        className,
      )}
    >
      {children}
    </div>
  )
}
