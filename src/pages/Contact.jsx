import { useState } from "react"
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon, HeartIcon, GetInTouchIcon } from "../util/Icons"

export default function Contact() {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="relative min-h-screen bg-cream font-['Inter','Outfit',sans-serif] overflow-hidden">
  <section
        className="relative min-h-[80vh] flex items-center justify-center text-center px-6  z-10 "
        style={{
          background: 'linear-gradient(135deg, #0F4C5C 0%, #17697E 40%, #1E8A9E 70%, #0F4C5C 100%)',
        }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-white/5 blur-3xl pointer-events-none "/>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-coral/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <GetInTouchIcon className="w-4 h-4" />  Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
            We’re Here for You{' '}
            <span className="relative inline-block">
              <span className="relative z-10">and Your Pet</span>
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-coral/40 rounded-full -rotate-1" />
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-xl mx-auto leading-relaxed">
  Whether it’s a routine check-up or emergency care, our team is always ready to help.
          </p>
        </div>

        {/* wave */}
        <div className="absolute bottom-0 left-0 right-0 ">
          <svg viewBox="0 0 1440 120" className="w-full " preserveAspectRatio="none">
            <path fill="#e9e6e3ff " d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,64C1200,75,1320,85,1380,90.7L1440,96L1440,120L0,120Z" />
          </svg>
        </div>
      </section> 
  
       <div className="absolute inset-0">
        <img
        src="https://images.unsplash.com/photo-1525253013412-55c1a69a5738?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Happy dog with owner"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-cream/55" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-start">

        {/* ───────── LEFT SIDE ───────── */}
        <div>
          <span className="inline-flex items-center gap-2 bg-coral/10 text-coral text-sm font-semibold px-4 py-1 rounded-full mb-6">
            <HeartIcon className="w-4 h-4" /> Get in Touch
          </span>

          <h1 className="text-4xl sm:text-5xl font-black text-teal-primary leading-tight">
            We’re Here for You<br />and Your Pet
          </h1>

          <p className="mt-6 text-gray-600 max-w-md leading-relaxed">
            Whether it’s a routine check-up or emergency care, our team is always ready to help.
          </p>

          {/* Contact Details */}
          <div className="mt-10 space-y-6">

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-teal-primary/10 flex items-center justify-center text-teal-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <PhoneIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-teal-primary">Phone</p>
                <p className="text-gray-500 text-sm">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-teal-primary/10 flex items-center justify-center text-teal-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <EnvelopeIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-teal-primary">Email</p>
                <p className="text-gray-500 text-sm">care@sspetclinic.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-teal-primary/10 flex items-center justify-center text-teal-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <MapPinIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-teal-primary">Location</p>
                <p className="text-gray-500 text-sm">123 Pet Care Street, Chennai, India</p>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/60 transition-transform duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <ClockIcon className="w-5 h-5 text-coral" />
              <p className="font-semibold text-teal-primary">Working Hours</p>
            </div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>Mon – Fri: 9:00 AM – 8:00 PM</li>
              <li>Saturday: 10:00 AM – 6:00 PM</li>
              <li>Sunday: Emergency Only</li>
            </ul>
          </div>

          {/* Static Map Placeholder */}
          <div className="mt-10 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
              alt="Map location placeholder"
              className="w-full h-56 object-cover"
            />
          </div>
        </div>

        {/* ───────── RIGHT SIDE (FORM) ───────── */}
        <div
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
            Book an Appointment
          </h2>

          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-primary/40 transition"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-primary/40 transition"
              />
            </div>

            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-primary/40 transition"
              />
            </div>

            <div>
              <textarea
                rows="4"
                placeholder="Tell us about your pet..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-primary/40 transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-coral text-white font-bold py-4 rounded-2xl shadow-lg shadow-coral/30 transition-transform duration-300 hover:scale-105"
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>

      {/* Floating Emergency Button */}
      <a
        href="tel:+919876543210"
        className="fixed bottom-6 right-6 bg-coral text-white p-5 rounded-full shadow-2xl shadow-coral/40 transition-transform duration-300 hover:scale-110"
      >
        <PhoneIcon className="w-6 h-6" />
      </a>
    </div>
  )
}