"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"

export default function ClientLogos() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const logos = containerRef.current?.querySelectorAll(".client-logo")
            logos?.forEach((logo, index) => {
              setTimeout(() => {
                logo.classList.remove("opacity-0")
                logo.classList.add("opacity-100")
              }, index * 200)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="space-y-4">
      <h3 className="text-xl font-semibold text-center mb-6">Trusted by Leading Brands</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="relative h-12 w-32 grayscale hover:grayscale-0 transition-all duration-500 opacity-0 client-logo"
          >
            <Image
              src={`/placeholder.svg?height=48&width=128&text=Client ${i + 1}`}
              alt={`Client ${i + 1}`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
