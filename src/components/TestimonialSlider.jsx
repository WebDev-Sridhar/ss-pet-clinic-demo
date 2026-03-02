import { useEffect, useRef, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { StarIcon } from "@heroicons/react/24/solid"

export default function TestimonialSlider({ testimonials }) {
  const controls = useAnimation()
  const containerRef = useRef(null)
  const [index, setIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [centerOffset, setCenterOffset] = useState(0)

  // Triple the array to handle infinite looping smoothly
  const extended = [...testimonials, ...testimonials, ...testimonials]
  const middleIndex = testimonials.length

  const cardWidth = 360 // Width of the card
  const gap = 32 // Gap between cards (gap-8)
  const slideWidth = cardWidth + gap

  // Calculate the offset needed to put the "index" card in the dead center of the screen
  useEffect(() => {
    const updateOffset = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        // Offset = (Half the screen) - (Half the card)
        setCenterOffset((containerWidth / 2) - (cardWidth / 2))
      }
    }
    updateOffset()
    window.addEventListener("resize", updateOffset)
    return () => window.removeEventListener("resize", updateOffset)
  }, [])

  const goToSlide = (i, animate = true) => {
    setIndex(i)
    const targetX = -(i * slideWidth) + centerOffset
    
    if (animate) {
      controls.start({
        x: targetX,
        transition: { type: "spring", stiffness: 150, damping: 25 }
      })
    } else {
      controls.set({ x: targetX })
    }
  }

  const next = () => goToSlide(index + 1)
  const prev = () => goToSlide(index - 1)

  // Infinite Reset Logic
  useEffect(() => {
    // If we've scrolled into the third set or before the first set, jump back to middle
    if (index >= testimonials.length * 2 || index < testimonials.length) {
      const timer = setTimeout(() => {
        const newIdx = (index % testimonials.length) + testimonials.length
        goToSlide(newIdx, false)
      }, 400) // Match transition duration
      return () => clearTimeout(timer)
    }
  }, [index, testimonials.length])

  // Initialize position
  useEffect(() => {
    if (centerOffset !== 0) {
      goToSlide(middleIndex, false)
    }
  }, [centerOffset])

  // Auto-play
  useEffect(() => {
    if (isDragging) return
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [index, isDragging])

  return (
    <section className="py-24 bg-[#FFFDF9] overflow-hidden mx-auto " ref={containerRef}>
      <div className="w-full   text-center">
        <h2 className="text-4xl sm:text-5xl font-black text-[#1D4D4F] text-center">
          What Pet Parents Say
        </h2>

        <div className="relative mt-16">
          <motion.div
            className="flex gap-8 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: -9999, right: 9999 }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(e, info) => {
              setIsDragging(false)
              if (info.offset.x < -50) next()
              else if (info.offset.x > 50) prev()
              else goToSlide(index)
            }}
            animate={controls}
            style={{ x: -(index * slideWidth) + centerOffset }}
          >
            {extended.map((t, i) => {
              const isActive = i === index
              
              return (
                <motion.div
                  key={i}
                  className="min-w-[360px] rounded-3xl p-8  text-left bg-white shadow-lg border border-gray-100 relative"
                  animate={{
                    scale: isActive ? 1.05 : 0.9,
                    opacity: isActive ? 1 : 0.5,
                    borderColor: isActive ? "#FF7F50" : "#F3F4F6"
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <StarIcon key={j} className="w-5 h-5" />
                    ))}
                  </div>

                  <p className="text-gray-600 text-sm italic leading-relaxed">
                    "{t.text}"
                  </p>

                  <div className="mt-6 flex items-center gap-4">
                    <img
                      src={t.ownerImg}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover bg-gray-200"
                    />
                    <div>
                      <p className="font-bold text-[#1D4D4F] text-sm">{t.name}</p>
                      <p className="text-xs text-gray-400">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Progress Bars */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => {
            const currentActiveIdx = (index % testimonials.length)
            const isActive = currentActiveIdx === i

            return (
              <div
                key={i}
                className="relative w-12 h-1.5 bg-gray-200 rounded-full overflow-hidden"
              >
                {isActive && (
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-[#FF7F50]"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                  />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}