"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

type OrbConfig = {
  width: number
  height: number
  left: string
  top: string
  xMove: number
  yMove: number
}

export default function ParallaxGreeting() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  const [currentGreeting, setCurrentGreeting] = useState(0)
  const greetings = [
    "Welcome to Innovation",
    "नमस्ते! स्वागत है",
    "Welcome to Growth",
    "आपका स्वागत है",
    "Welcome to Success",
  ]

  const orbConfigs = useRef<OrbConfig[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [greetings.length])

  useEffect(() => {
    // Generate orb configuration only once on client
    if (orbConfigs.current.length === 0) {
      orbConfigs.current = Array.from({ length: 6 }).map(() => ({
        width: Math.random() * 200 + 100,
        height: Math.random() * 200 + 100,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        xMove: Math.random() * 100 - 50,
        yMove: Math.random() * 100 - 50,
      }))
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative h-[60vh] overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        {orbConfigs.current.map((orb, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full blur-xl bg-primary/10"
            style={{
              width: orb.width,
              height: orb.height,
              left: orb.left,
              top: orb.top,
            }}
            animate={{
              x: [0, orb.xMove],
              y: [0, orb.yMove],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-primary/30 rotate-45"
          animate={{ rotate: [45, 405] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full border-2 border-secondary/30"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-r from-primary/20 to-secondary/20 rotate-12"
          animate={{ rotate: [12, 372] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Main Content */}
      <motion.div style={{ y, opacity, scale }} className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center space-y-8 px-4">
          <motion.div
            key={currentGreeting}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text">
              {greetings[currentGreeting]}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="space-y-4"
          >
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Where Digital Dreams Meet Reality
            </p>
            <div className="flex items-center justify-center space-x-2">
              {[0, 0.2, 0.4].map((delay, idx) => (
                <motion.div
                  key={idx}
                  className="w-2 h-2 bg-primary rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay }}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
          >
            {[
              { icon: "🚀", text: "Innovation" },
              { icon: "💡", text: "Ideas" },
              { icon: "🎯", text: "Results" },
              { icon: "🌟", text: "Excellence" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-background/80 backdrop-blur-sm rounded-lg p-4 border border-primary/20 cursor-pointer transition-all hover:shadow-lg hover:border-primary/40"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-sm font-medium text-muted-foreground">{item.text}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
