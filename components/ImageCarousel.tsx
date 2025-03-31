'use client'

import React, { useEffect, useCallback, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

const initialImages = [
  { src: '/images/BOBBOD.webp', alt: 'Bob Bod' },
  { src: '/images/BobBodily.webp', alt: 'Bob Bodily' },
  { src: '/images/Casey Simpson.webp', alt: 'Casey Simpson' },
  { src: '/images/file_00000000eb4c52308a6878179faad686_conversation_id67eaaf25-db08-8013-91fc-ff7c109522f1message_ida2e1aa38-a630-4aa4-8f51-7dc92382fa72.webp', alt: 'Simpson Character' },
  { src: '/images/MSAYLORSIMP.webp', alt: 'Michael Saylor Simpson' },
  { src: '/images/SIMPOSNWIZ.webp', alt: 'Simpson Wizard' }
]

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export function ImageCarousel() {
  const [images, setImages] = useState(initialImages)

  useEffect(() => {
    setImages(shuffleArray(initialImages))
  }, [])

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    containScroll: 'trimSnaps',
    dragFree: true,
    skipSnaps: true,
    inViewThreshold: 0.7,
  })

  const scrollNext = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    const interval = setInterval(() => {
      scrollNext()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [scrollNext])

  return (
    <div className="overflow-hidden rounded-xl" ref={emblaRef}>
      <div className="flex transition-all duration-[2000ms] ease-in-out">
        {images.map((image, index) => (
          <div key={image.src} className="flex-[0_0_100%] min-w-0 px-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
            <div className="relative aspect-square transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="rounded-2xl object-cover border-4 border-[#ffd521] shadow-lg"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 