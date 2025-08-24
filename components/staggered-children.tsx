"use client"

import { useRef, useEffect, useState, type ReactNode, Children, cloneElement, isValidElement } from "react"
import { cn } from "@/lib/utils"

type StaggeredChildrenProps = {
  children: ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "slide-in-left" | "slide-in-right" | "zoom-in"
  staggerDelay?: number
  initialDelay?: number
  duration?: number
  threshold?: number
  once?: boolean
}

export default function StaggeredChildren({
  children,
  className,
  animation = "fade-up",
  staggerDelay = 100,
  initialDelay = 0,
  duration = 500,
  threshold = 0.1,
  once = true,
}: StaggeredChildrenProps) {
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
  }

  const activeAnimationClasses = {
    "fade-up": "opacity-100 translate-y-0",
    "fade-in": "opacity-100",
    "slide-in-left": "opacity-100 translate-x-0",
    "slide-in-right": "opacity-100 translate-x-0",
    "zoom-in": "opacity-100 scale-100",
  }

  const childrenArray = Children.toArray(children)

  return (
    <div ref={ref} className={className}>
      {childrenArray.map((child, index) => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            ...child.props,
            className: cn(
              "transition-all",
              animationClasses[animation],
              isVisible && activeAnimationClasses[animation],
              child.props.className,
            ),
            style: {
              ...child.props.style,
              transitionDuration: `${duration}ms`,
              transitionDelay: `${initialDelay + index * staggerDelay}ms`,
            },
          })
        }
        return child
      })}
    </div>
  )
}
