import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, viewportOnce } from "../util/useScrollAnimation"
import { useEffect, useState, useRef } from "react"

const sliderImages = [
  "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1661915652986-fe818e1973f9?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1602052577122-f73b9710adba?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://www.glamorgananimalclinic.com/uploads/6/1/9/9/61993581/glammorganac2019-139_orig.jpg",
]

const specialties = [
  {
    title: "Advanced Diagnostics",
    img: "https://images.unsplash.com/photo-1606206873764-fd15e242df52?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Modern diagnostic tools including digital X-ray and lab testing to quickly identify health issues."
  },
  {
    title: "Experienced Veterinarians",
    img: "https://images.unsplash.com/photo-1700665537604-412e89a285c3?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Our team combines years of expertise with genuine compassion for every pet."
  },
  {
    title: "Emergency Care",
    img: "https://images.unsplash.com/photo-1577175889968-f551f5944abd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Rapid emergency treatment when your pet needs immediate medical attention."
  },
  {
    title: "Preventive Wellness",
    img: "https://images.unsplash.com/photo-1553550102-590bc483f15c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Vaccinations, routine exams, and nutrition guidance for long-term health."
  },

  {
    title: "Surgical Services",
    img: "https://images.unsplash.com/photo-1725859189289-a48cca8ad6af?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "State-of-the-art surgical suite for everything from routine spays/neuters to complex procedures."
  },

  {
    title: "Grooming & Boarding",
    img: "https://images.unsplash.com/photo-1625279138876-8910c2af9a30?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Professional grooming and safe boarding services to keep your pet looking and feeling great."
  }
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
          className="relative mt-16 max-w-4xl mx-auto"
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
            className="w-full flex-shrink-0 h-80 object-cover"
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

        <h3 className="mt-12 text-2xl font-bold text-teal-primary text-center">
          Our Specialties
        </h3>

        <p className="mt-4 text-gray-500 text-center max-w-2xl mx-auto">
         Our clinic offers a comprehensive range of veterinary services to keep your pet healthy and happy.
        </p>


        {/* Specialties Grid */}

        <motion.div
          variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20"
        >

          {specialties.map((item, i) => (

            <motion.div
              key={i}
              variants={fadeInUp}
              className="group relative rounded-xl overflow-hidden shadow-lg"
            >

              <img
                src={item.img}
                className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover Overlay */}
<div className="absolute inset-0 bg-teal-primary/60 text-white flex flex-col justify-center items-center text-center p-6
opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100
transition-all duration-500 ease-out">

  <div className="translate-y-6 group-hover:translate-y-0 transition-all duration-500 delay-150">
            <h3 className="font-bold text-lg">
                  {item.title}
                </h3>

                <p className="text-sm mt-2 text-white/90">
                  {item.desc}
                </p>
  </div>

</div>
       

        

            </motion.div>

          ))}

        </motion.div>

      </motion.div>

    </section>
  )
}