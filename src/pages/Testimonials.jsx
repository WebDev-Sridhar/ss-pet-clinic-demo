import { useState } from "react"
import {    PawIcon, HeartIcon, StarIcon, BubbleIcon} from '../util/Icons'


export default function Testimonials() {
  const [hovered, setHovered] = useState(null)

  const testimonials = [
    {
      name: "Ananya Rao",
      role: "Golden Retriever Mom",
      rating: 5,
      text: "The doctors treated Bruno like their own. The care, attention, and follow-up were beyond anything we’ve experienced before.",
      petImg:
        "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=200&h=200&fit=crop&q=80",
      ownerImg:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&q=80",
    },
    {
      name: "Rahul Mehta",
      role: "Persian Cat Owner",
      rating: 5,
      text: "Clean facility, compassionate staff, and modern equipment. My cat Simba recovered so quickly thanks to them!",
      petImg:
        "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=200&h=200&fit=crop&q=80",
      ownerImg:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&q=80",
    },
    {
      name: "Priya Nair",
      role: "Indie Dog Parent",
      rating: 5,
      text: "From emergency surgery to routine vaccination, they’ve always delivered exceptional care with genuine love.",
      petImg:
        "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=200&h=200&fit=crop&q=80",
      ownerImg:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&h=200&fit=crop&q=80",
    },
    {
      name: "Karthik Iyer",
      role: "Beagle Dad",
      rating: 5,
      text: "Booking was easy, treatment was transparent, and they explained everything clearly. Highly recommend!",
      petImg:
        "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=200&h=200&fit=crop&q=80",
      ownerImg:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200&h=200&fit=crop&q=80",
    },
  ]

  return (
    <div className="min-h-screen bg-cream font-['Inter','Outfit',sans-serif] mb-20">
         <section
        className="relative min-h-[80vh] flex items-center justify-center text-center px-6"
        style={{
          background: 'linear-gradient(135deg, #0F4C5C 0%, #17697E 40%, #1E8A9E 70%, #0F4C5C 100%)',
        }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-coral/10 blur-3xl pointer-events-none" />

<div className="relative z-10 max-w-3xl mx-auto">
  <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
    <BubbleIcon className="w-4 h-4" /> Testimonials
  </span>

  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
    Stories from Loving{' '}
    <span className="relative inline-block">
      <span className="relative z-10">Pet Parents</span>
      <span className="absolute -bottom-2 left-0 w-full h-3 bg-coral/40 rounded-full -rotate-1" />
    </span>
  </h1>

  <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-xl mx-auto leading-relaxed">
    Real experiences from families who trust us with their pets’ health — heartfelt stories of care, recovery, and compassion.
  </p>
</div>

        {/* wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full" preserveAspectRatio="none">
            <path fill="#FFF8F0" d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,64C1200,75,1320,85,1380,90.7L1440,96L1440,120L0,120Z" />
          </svg>
        </div>
      </section>
      <div className="max-w-6xl mx-auto text-center">


        <h1 className="text-4xl sm:text-5xl font-black text-teal-primary">
          Trusted by Pet Families
        </h1>


        {/* Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-8 text-left shadow-xl shadow-gray-200/40 transition-all duration-500"
              style={{
                transform:
                  hovered === i
                    ? "perspective(800px) rotateY(5deg) rotateX(-3deg) scale(1.04)"
                    : "perspective(800px) rotateY(0) rotateX(0) scale(1)",
              }}
            >
              {/* Quote mark */}
              <span className="absolute top-6 right-8 text-7xl text-teal-primary/10 font-serif select-none">
                &ldquo;
              </span>

              {/* Pet + Owner Images */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={t.petImg}
                  alt="Pet"
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-white shadow-lg"
                />
                <img
                  src={t.ownerImg}
                  alt="Owner"
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-coral shadow-lg -ml-6"
                />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <StarIcon key={j} className="w-5 h-5" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed italic">
                {t.text}
              </p>

              {/* Name */}
              <div className="mt-6">
                <p className="font-bold text-teal-primary text-sm">{t.name}</p>
                <p className="text-xs text-gray-400">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-coral text-white font-bold text-lg px-10 py-4 rounded-2xl shadow-xl shadow-coral/30 transition-transform duration-300 hover:scale-110"
          >
            Share Your Experience →
          </a>
        </div>
      </div>
    </div>
  )
}