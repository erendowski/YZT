"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

export function FadeIn({ 
  children, 
  delay = 0,
  direction = "up"
}: { 
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
}) {
  const directionOffset = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 }
  }

  return (
    <motion.div
      initial={{ 
        opacity: 0,
        ...directionOffset[direction]
      }}
      animate={{ 
        opacity: 1,
        x: 0,
        y: 0
      }}
      transition={{
        duration: 0.7,
        ease: [0.21, 0.47, 0.32, 0.98],
        delay
      }}
    >
      {children}
    </motion.div>
  )
}