import { useState } from "react"
import FAQ from "../components/FAQ"

export default function Appointment() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)


    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      e.target.reset(); // clears all inputs

    }, 2000)
  }

  return (
    <div className="min-h-screen bg-cream font-['Inter','Outfit',sans-serif] px-6 py-24">
<div className="max-w-6xl mx-auto px-6 pt-16 pb-12 text-center">
      <span className="inline-block bg-teal-primary/10 text-teal-primary text-sm font-semibold px-4 py-1 rounded-full mb-4">
                Schedule a Visit
          </span>
  <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
    Compassionate Care for Your Beloved Pets
  </h1>

  <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
    Book an appointment with certified veterinary professionals dedicated 
    to your pet’s health, comfort, and happiness.
  </p>

  <div className="w-24 h-1 bg-teal-500 mx-auto mt-6 rounded-full"></div>
</div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        

        {/* ───── LEFT SIDE IMAGE WITH LAYER ───── */}
        <div className="relative group rounded-2xl overflow-hidden shadow-2xl shadow-black/20">
          <img
            src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=1200&q=80"
            alt="Veterinarian with pet"
            className="w-full h-[650px] object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-teal-primary/80 via-teal-primary/40 to-transparent" />

          {/* Decorative Blur Blob */}
          <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-coral/20 rounded-full blur-3xl pointer-events-none" />

          {/* Text Content Over Image */}
          <div className="absolute bottom-10 left-10 right-10 text-white">
            <span className="inline-block bg-white/20 backdrop-blur px-4 py-1 rounded-full text-sm font-medium mb-4">
              Premium Veterinary Care
            </span>
            <h2 className="text-3xl sm:text-4xl font-black leading-tight">
              Compassionate Care <br /> for Every Paw
            </h2>
            <p className="mt-4 text-white/80 max-w-md">
              Our experienced team ensures personalized treatment, modern diagnostics,
              and gentle handling for every pet we serve.
            </p>
          </div>
        </div>

        {/* ───── RIGHT SIDE FORM ───── */}
        <div className="relative bg-white rounded-2xl shadow-2xl shadow-gray-200/60 p-12">

          {/* Section Header */}
          <span className="inline-block bg-coral/10 text-coral text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Appointment
          </span>

          <h2 className="text-4xl font-black text-teal-primary leading-tight">
            Book a Visit Today
          </h2>

          <p className="mt-4 text-gray-500 max-w-md">
            Scheduling your pet’s appointment is quick and easy. Fill out the form below,
            and our team will confirm your visit shortly.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-10">

            {/* Floating Inputs */}
            <div className="relative">
              <input
                type="text"
                required
                placeholder=" "
                className="peer w-full border-b-2 border-gray-300 focus:border-teal-primary outline-none py-3 transition-all"
              />
              <label className="absolute left-0 top-3 text-gray-400 text-sm transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:text-teal-primary peer-valid:-top-5 peer-valid:text-xs">
                Your Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                required
                placeholder=" "
                className="peer w-full border-b-2 border-gray-300 focus:border-teal-primary outline-none py-3 transition-all"
              />
              <label className="absolute left-0 top-3 text-gray-400 text-sm transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:text-teal-primary peer-valid:-top-5 peer-valid:text-xs">
                Email Address
              </label>
            </div>

            <div className="relative">
              <input
                type="tel"
                required
                placeholder=" "
                className="peer w-full border-b-2 border-gray-300 focus:border-teal-primary outline-none py-3 transition-all"
              />
              <label className="absolute left-0 top-3 text-gray-400 text-sm transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:text-teal-primary peer-valid:-top-5 peer-valid:text-xs">
                Phone Number
              </label>
            </div>

            <div className="relative">
              <input
                type="date"
                required
                className="peer w-full border-b-2 border-gray-300 focus:border-teal-primary outline-none py-3 transition-all"
              />
              <label className="absolute left-0 -top-5 text-xs text-gray-400">
                Preferred Date
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-coral text-white font-bold py-4 rounded-2xl shadow-xl shadow-coral/30 transition-transform duration-300 hover:scale-105 flex items-center justify-center"
            >
              {loading ? (
                <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                "Confirm Appointment →"
              )}
            </button>
          </form>
        </div>
                  <div className=" text-center lg:col-span-2">
           <FAQ/>
        </div>
      </div>

      {/* ───── SUCCESS MODAL ───── */}
      {success && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-6">
          <div className="bg-white rounded-2xl p-12 text-center shadow-2xl max-w-md w-full animate-[fadeIn_.3s_ease-in-out]">
            <h3 className="text-2xl font-bold text-teal-primary">
              Appointment Confirmed!
            </h3>
            <p className="mt-4 text-gray-500">
              Thank you for booking. Our team will contact you shortly with further details.
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="mt-8 bg-coral text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}