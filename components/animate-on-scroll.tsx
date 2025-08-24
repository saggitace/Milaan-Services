"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type AnimateOnScrollProps = {
  children: ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "slide-in-left" | "slide-in-right" | "zoom-in" | "bounce"
  threshold?: number
  delay?: number
  duration?: number
  once?: boolean
}

export default function AnimateOnScroll({
  children,
  className,
  animation = "fade-up",
  threshold = 0.1,
  delay = 0,
  duration = 500,
  once = true,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, once])

  const animationClasses = {
    "fade-up": "opacity-0 translate-y-8",
    "fade-in": "opacity-0",
    "slide-in-left": "opacity-0 -translate-x-8",
    "slide-in-right": "opacity-0 translate-x-8",
    "zoom-in": "opacity-0 scale-95",
    bounce: "opacity-0 translate-y-4",
  }

  const activeAnimationClasses = {
    "fade-up": "opacity-100 translate-y-0",
    "fade-in": "opacity-100",
    "slide-in-left": "opacity-100 translate-x-0",
    "slide-in-right": "opacity-100 translate-x-0",
    "zoom-in": "opacity-100 scale-100",
    bounce: "opacity-100 translate-y-0 animate-bounce",
  }

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all",
        animationClasses[animation],
        isVisible && activeAnimationClasses[animation],
        className,
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
