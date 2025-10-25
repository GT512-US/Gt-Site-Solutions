'use client'

import type { StaticImageData } from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface BeforeAfterSliderProps {
  beforeImage: string | StaticImageData
  afterImage: string | StaticImageData
  title?: string
  className?: string
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  title,
  className = '',
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Extract src from StaticImageData or use string directly
  const beforeImageSrc =
    typeof beforeImage === 'string' ? beforeImage : beforeImage.src
  const afterImageSrc =
    typeof afterImage === 'string' ? afterImage : afterImage.src

  const handleMove = (clientX: number) => {
    if (!isDragging || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))
    setSliderPosition(percent)
  }

  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX)

  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0]
    handleMove(touch.clientX)
  }

  const handleMouseDown = () => setIsDragging(true)
  const handleTouchStart = () => setIsDragging(true)

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false)
    const handleTouchEnd = () => setIsDragging(false)

    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('touchend', handleTouchEnd)
    document.addEventListener('mouseleave', handleMouseUp)

    return () => {
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('touchend', handleTouchEnd)
      document.removeEventListener('mouseleave', handleMouseUp)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`group relative aspect-[4/3] overflow-hidden rounded-xl shadow-2xl ${className}`}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (base layer) */}
      <div className="absolute inset-0 bg-gray-900">
        <img
          src={afterImageSrc}
          alt="After cleaning"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Before Image (top layer with clip) */}
      <div
        className="absolute inset-0 bg-gray-900"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImageSrc}
          alt="Before cleaning"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Slider Handle */}
      <div
        className="absolute inset-y-0 -ml-1 w-0.5 cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className="absolute inset-y-0 -ml-px w-1 bg-white shadow-lg" />
        <div className="absolute top-1/2 -mt-4 -ml-4 flex h-8 w-8 cursor-ew-resize items-center justify-center rounded-full bg-white shadow-lg">
          <svg
            className="h-4 w-4 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 9l-3 3 3 3m8-6l3 3-3 3"
            />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 rounded-full bg-black/70 px-3 py-1 text-sm font-semibold text-white backdrop-blur-sm">
        BEFORE
      </div>
      <div className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-black">
        AFTER
      </div>

      {/* Title */}
      {title && (
        <div className="absolute right-4 bottom-4 left-4 rounded-lg bg-black/70 p-3 text-white backdrop-blur-sm">
          <p className="text-sm font-semibold">{title}</p>
        </div>
      )}
    </div>
  )
}
