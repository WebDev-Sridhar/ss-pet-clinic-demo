import { useState } from "react"
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon, HeartIcon, GetInTouchIcon } from "../util/Icons"
import FAQ from "../components/FAQ"
import { contactDetails, workingHours, contactBackgroundImage } from '../data/contact'
import { motion } from 'framer-motion'
import { fadeInLeft, fadeInUp, staggerContainer, viewportOnce } from '../util/useScrollAnimation'

/* ─── icon lookup for contact details ─── */
const contactIconMap = {
  phone:    (cls) => <PhoneIcon className={cls} />,
  envelope: (cls) => <EnvelopeIcon className={cls} />,
  mapPin:   (cls) => <MapPinIcon className={cls} />,
}

export default function Contact() {
  const [hovered, setHovered] = useState(false)
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
  
    }, 2000)
  }

  return (
    <div className="relative min-h-screen bg-cream font-['Inter','Outfit',sans-serif] overflow-hidden">
  <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative md:min-h-[80vh] min-h-[60vh] flex items-center justify-center text-center px-6  z-10 "
        style={{
          background: 'linear-gradient(135deg, #0F4C5C 0%, #17697E 40%, #1E8A9E 70%, #0F4C5C 100%)',
        }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-white/5 blur-3xl pointer-events-none "/>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-coral/10 blur-3xl pointer-events-none" />

        <motion.div variants={fadeInUp} className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <GetInTouchIcon className="w-4 h-4" />  Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
            We're Here for You{' '}
            <span className="relative inline-block">
              <span className="relative z-10">and Your Pet</span>
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-coral/40 rounded-full -rotate-1" />
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-xl mx-auto leading-relaxed">
  Whether it's a routine check-up or emergency care, our team is always ready to help.
          </p>
        </motion.div>

        {/* wave */}
        <div className="absolute bottom-0 left-0 right-0 ">
          <svg viewBox="0 0 1440 120" className="w-full " preserveAspectRatio="none">
            <path fill="#e9e6e3ff " d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,64C1200,75,1320,85,1380,90.7L1440,96L1440,120L0,120Z" />
          </svg>
        </div>
      </motion.section> 
  
       <div className="absolute inset-0">
        <img
        src={contactBackgroundImage}
          alt="Happy dog with owner"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-cream/55" />
      </div>

<motion.div   variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
           className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-start">

        {/* ───────── LEFT SIDE ───────── */}
        <div>
          <span className="inline-flex items-center gap-2 bg-coral/10 text-coral text-sm font-semibold px-4 py-1 rounded-full mb-6">
            <HeartIcon className="w-4 h-4" /> Get in Touch
          </span>

          <h1 className="text-4xl sm:text-5xl font-black text-teal-primary leading-tight">
            We're Here for You<br />and Your Pet
          </h1>

          <p className="mt-6 text-gray-600 max-w-md leading-relaxed">
            Whether it's a routine check-up or emergency care, our team is always ready to help.
          </p>

          {/* Contact Details */}
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mt-12 grid gap-8">
            {contactDetails.map((detail, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-teal-primary/10 flex items-center justify-center text-teal-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  {contactIconMap[detail.iconName]("w-5 h-5")}
                </div>
                <div>
                  <p className="font-semibold text-teal-primary">{detail.label}</p>
                  <p className="text-gray-500 text-sm">{detail.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Working Hours */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/60 transition-transform duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <ClockIcon className="w-5 h-5 text-coral" />
              <p className="font-semibold text-teal-primary">Working Hours</p>
            </div>
            <ul className="text-sm text-gray-600 space-y-2">
              {workingHours.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>

  
        </div>
        

        {/* ───────── RIGHT SIDE (FORM) ───────── */}
        <motion.div variants={fadeInLeft}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl p-10 shadow-2xl shadow-gray-200/50 transition-transform duration-500"
          style={{
            transform: hovered
              ? "perspective(900px) rotateY(-5deg) rotateX(3deg) scale(1.02)"
              : "perspective(900px) rotateY(0) rotateX(0) scale(1)",
          }}
        >
          <h2 className="text-3xl font-bold text-teal-primary mb-6">
           Have a Question?
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-primary/40 transition"
              />
            </div>
                  <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-primary/40 transition"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-primary/40 transition"
              />
            </div>

      

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Tell us about your pet..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-primary/40 transition resize-none"
              />
            </div>

         <button
    type="submit"
    disabled={loading}
    className="w-full bg-coral text-white font-bold py-4 rounded-2xl shadow-xl shadow-coral/30 transition-transform duration-300 hover:scale-105 flex items-center justify-center"
  >
    {loading ? (
      <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
    ) : (
      "Send Message →"
    )}
  </button>
          </form>

        </motion.div>
          <div className=" text-center lg:col-span-2">
   <FAQ/>
</div>
      </motion.div>
       {/* ───── SUCCESS MODAL ───── */}
      {success && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-6">
          <div className="bg-white rounded-2xl p-12 text-center shadow-2xl max-w-md w-full animate-[fadeIn_.3s_ease-in-out]">
            <h3 className="text-2xl font-bold text-teal-primary">
              Message Received!
            </h3>
            <p className="mt-4 text-gray-500">
              Thank you for your message {formData.name}. Our team will contact you shortly.
            </p>
            <button
              onClick={() => {
                setSuccess(false);
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  message: "",
                });
              }}
              className="mt-8 bg-coral text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Floating Emergency Button */}
      <a
        href="tel:+919876543210"
        className="fixed bottom-24 right-6 bg-coral text-white p-5 rounded-full shadow-2xl shadow-coral/40 transition-transform duration-300 hover:scale-110 z-10"
      >
        <PhoneIcon className="w-5 h-5" />
      </a>

    </div>

  )
}