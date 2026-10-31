'use client'

import type { StaticImageData } from 'next/image'
import { useRef, useState } from 'react'

interface BeforeAfterSliderProps {
  beforeImage: string | StaticImageData
  afterImage: string | StaticImageData
  title?: string
  alt?: string
  className?: string
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  title,
  alt = title ?? 'Property',
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

  const moveTo = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const percent = ((clientX - rect.left) / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(percent, 100)))
  }

  // Pointer capture keeps the drag going outside the image, and preventDefault
  // stops the browser from starting a text selection or native image drag
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.currentTarget.setPointerCapture(e.pointerId)
    setIsDragging(true)
    moveTo(e.clientX)
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) moveTo(e.clientX)
  }

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false)
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const step = e.shiftKey ? 10 : 5
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      setSliderPosition((p) => Math.max(0, p - step))
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      setSliderPosition((p) => Math.min(100, p + step))
    }
  }

  return (
    <div
      ref={containerRef}
      className={`group relative aspect-[4/3] cursor-ew-resize touch-pan-y select-none overflow-hidden ${className}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {/* After Image (base layer) */}
      <div className="absolute inset-0 bg-gray-900">
        <img
          src={afterImageSrc}
          alt={`${alt} after cleaning`}
          draggable={false}
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
          alt={`${alt} before cleaning`}
          draggable={false}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Slider Handle */}
      <div
        role="slider"
        tabIndex={0}
        aria-label="Compare before and after"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(sliderPosition)}
        onKeyDown={handleKeyDown}
        className="absolute inset-y-0 -ml-1 w-0.5 outline-none focus-visible:[&>div:last-child]:ring-2 focus-visible:[&>div:last-child]:ring-[#3b82f6]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute inset-y-0 -ml-px w-1 bg-white shadow-lg" />
        <div className="absolute top-1/2 -mt-4 -ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg">
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
      <div className="pointer-events-none absolute top-4 left-4 rounded-full bg-black/70 px-3 py-1 text-sm font-semibold text-white backdrop-blur-sm">
        BEFORE
      </div>
      <div className="pointer-events-none absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-black">
        AFTER
      </div>

      {/* Title */}
      {title && (
        <div className="pointer-events-none absolute right-4 bottom-4 left-4 rounded-lg bg-black/70 p-3 text-white backdrop-blur-sm">
          <p className="text-sm font-semibold">{title}</p>
        </div>
      )}
    </div>
  )
}
