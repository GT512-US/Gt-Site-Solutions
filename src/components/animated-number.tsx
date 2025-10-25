'use client'

import { useEffect, useState } from 'react'

interface AnimatedNumberProps {
  start: number
  end: number
  duration?: number
  className?: string
}

export function AnimatedNumber({
  start,
  end,
  duration = 2000,
  className = '',
}: AnimatedNumberProps) {
  const [current, setCurrent] = useState(start)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      const value = Math.floor(start + (end - start) * easeOutCubic)

      setCurrent(value)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [start, end, duration])

  return <span className={className}>{current}</span>
}

