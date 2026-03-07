import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, viewportOnce } from "../util/useScrollAnimation"
import { useEffect, useState, useRef } from "react"

const sliderImages = [
  "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1661915652986-fe818e1973f9?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1602052577122-f73b9710adba?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://www.glamorgananimalclinic.com/uploads/6/1/9/9/61993581/glammorganac2019-139_orig.jpg",
]



export default function AboutSection() {

  const [current, setCurrent] = useState(0)
  const [index, setIndex] = useState(0)
  const sliderRef = useRef(null)


   const nextSlide = () => {
    setIndex((prev) => (prev + 1) % sliderImages.length)
  }

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + sliderImages.length) % sliderImages.length)
  }
    useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 4000)

    return () => clearInterval(interval)
  }, [])
  return (
    <section className="bg-cream py-24 px-6 overflow-hidden">

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="max-w-7xl mx-auto"
      >

        {/* Section Header */}

        <div  className="text-center max-w-6xl mx-auto">
          <span className="bg-teal-primary/10 text-teal-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          About Our Clinic
          </span>

          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-teal-primary">
            Compassionate Care <br/> For Every Pet
          </h2>

          <p className="mt-4 text-gray-500 leading-relaxed">
         Started in 2004, as a small practice in 10×10 space with versatile mobile visits to responsible pet owners due to its commitment, this hospital has grown into a referral setup with all advanced and essential state of art facilities. Now we have two branches with its own facilities of IDEXX Lab, ECG, Surgical suite, Inpatient facilities, Spa, Vital monitors, closed oxygen supply, separate infectious ward and separate digital medical records. There is a centralised appointment system to fix the doctor in charge of duty of their own.
          </p>
        </div>


        {/* Image Slider */}

        <div
          className="relative mt-16 max-w-6xl mx-auto"
        >

          <div className="overflow-hidden rounded-xl shadow-xl shadow-gray-300/50">

            <div
        ref={sliderRef}
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${index * 100}%)`
        }}
      >
        {sliderImages.map((img, i) => (
          <img
            key={i}
            src={img}
            className="w-full flex-shrink-0 h-80 md:h-[500px] object-cover"
          />
        ))}
      </div>
          </div>

          {/* Prev Button */}

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition"
          >
            ‹
          </button>

          {/* Next Button */}

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition"
          >
            ›
          </button>

        </div>


      </motion.div>

    </section>
  )
}