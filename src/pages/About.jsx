import { useState } from 'react'
import { PawIcon, HeartIcon, EyeIcon, TargetIcon} from "../util/Icons"


/* ─── Timeline data ─── */
const milestones = [
  { year: '2014', title: 'Founded', desc: 'S.S Pet Clinic opened its doors with a small but passionate team of 3 veterinarians.' },
  { year: '2016', title: '24/7 Emergency Wing', desc: 'Launched round-the-clock emergency care, becoming the first in the district.' },
  { year: '2018', title: 'Advanced Diagnostics', desc: 'Invested in digital X-ray, ultrasound, and in-house lab for rapid results.' },
  { year: '2020', title: '10,000+ Patients', desc: 'Crossed the milestone of caring for over 10,000 happy pets and counting.' },
  { year: '2022', title: 'Grooming & Wellness Spa', desc: 'Expanded with a luxury grooming studio and holistic wellness programmes.' },
  { year: '2024', title: 'Community Leader', desc: 'Recognised as the top-rated veterinary clinic with 4.9★ across 5,000+ reviews.' },
]

/* ────────────────────── COMPONENT ────────────────────── */
export default function About() {
  const [hoveredMilestone, setHoveredMilestone] = useState(null)

  return (
    <div className="min-h-screen bg-cream font-['Inter',_'Outfit',_sans-serif] overflow-x-hidden">

      <section
        className="relative min-h-[80vh] flex items-center justify-center text-center px-6 "
        style={{
          background: 'linear-gradient(135deg, #0F4C5C 0%, #17697E 40%, #1E8A9E 70%, #0F4C5C 100%)',
        }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-coral/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <HeartIcon className="w-4 h-4" /> Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
            Caring for Pets Like Family{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Since 2014</span>
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-coral/40 rounded-full -rotate-1" />
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-xl mx-auto leading-relaxed">
            A decade of trust, compassion, and world-class veterinary medicine — built on the belief that every pet deserves the very best.
          </p>
        </div>

        {/* wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full" preserveAspectRatio="none">
            <path fill="#FFF8F0" d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,64C1200,75,1320,85,1380,90.7L1440,96L1440,120L0,120Z" />
          </svg>
        </div>
      </section>

      {/* ── Story Section (two-column) ── */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="group relative rounded-2xl overflow-hidden shadow-xl shadow-gray-200/60 transition-transform duration-500 hover:scale-[1.02]">
            <img
              src="https://images.unsplash.com/photo-1629740067905-bd3f515aa739?w=700&h=525&fit=crop&q=80"
              alt="Veterinarian examining a pet in a bright clinic"
              className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* decorative corner badge */}
            <div className="absolute top-4 right-4 bg-coral text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              Est. 2014
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block bg-teal-primary/10 text-teal-primary text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-primary leading-tight">
              Born From a Love for Animals
            </h2>
            <p className="mt-5 text-gray-500 leading-relaxed">
              S.S Pet Clinic was founded with a simple yet powerful conviction — that every animal deserves
              medical care delivered with the same compassion and precision we would want for our own family.
            </p>
            <p className="mt-4 text-gray-500 leading-relaxed">
              What started as a modest practice with three dedicated veterinarians has blossomed
              into a full-service facility equipped with cutting-edge diagnostics, a 24/7 emergency wing,
              and a luxury grooming studio. Through it all, our heart remains the same: treating every
              patient as if they were our own.
            </p>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Today, over <span className="font-semibold text-teal-primary">15,000 happy pets</span> and
              their families trust S.S Pet Clinic for everything from routine wellness to life-saving emergencies.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 mt-8 bg-coral text-white font-bold px-7 py-3 rounded-2xl shadow-lg shadow-coral/25 transition-transform duration-300 hover:scale-105"
            >
              Get in Touch <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="bg-cream-dark py-24 px-6">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <span className="inline-block bg-coral/10 text-coral text-sm font-semibold px-4 py-1 rounded-full mb-4">
            What Drives Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-primary">
            Mission &amp; Vision
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="group relative bg-white rounded-2xl p-10 shadow-lg shadow-gray-200/50 transition-transform duration-500 hover:scale-105 overflow-hidden">
            {/* subtle bg image overlay */}
            <img
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop&q=60"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-[0.04] pointer-events-none"
            />
            <div className="absolute -top-6 -right-6 w-28 h-28 bg-teal-primary/5 rounded-full blur-2xl pointer-events-none transition-transform duration-500 group-hover:scale-150" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-teal-primary to-teal-light text-white mb-6 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                <TargetIcon />
              </div>
              <h3 className="text-2xl font-bold text-teal-primary mb-3">Our Mission</h3>
              <p className="text-gray-500 leading-relaxed">
                To provide accessible, compassionate, and evidence-based veterinary care that enhances the
                quality of life for every animal — while empowering pet parents with the knowledge and
                confidence to make the best decisions for their companions.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="group relative bg-white rounded-2xl p-10 shadow-lg shadow-gray-200/50 transition-transform duration-500 hover:scale-105 overflow-hidden">
            {/* subtle bg image overlay */}
            <img
              src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&h=400&fit=crop&q=60"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-[0.04] pointer-events-none"
            />
            <div className="absolute -top-6 -right-6 w-28 h-28 bg-coral/5 rounded-full blur-2xl pointer-events-none transition-transform duration-500 group-hover:scale-150" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-coral to-coral-light text-white mb-6 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                <EyeIcon />
              </div>
              <h3 className="text-2xl font-bold text-teal-primary mb-3">Our Vision</h3>
              <p className="text-gray-500 leading-relaxed">
                To be the most trusted and loved veterinary clinic in the community — a place where cutting-edge
                medicine meets genuine warmth, and where every visit strengthens the bond between
                pets and the people who love them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Philosophy Section ── */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #0F4C5C 0%, #0A3742 50%, #0F4C5C 100%)',
          }}
        />
        {/* overlay pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-coral/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white/80 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <PawIcon className="w-4 h-4" /> Our Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            &ldquo;We don&apos;t just treat animals.
            <br />
            <span className="text-coral">We heal families.&rdquo;</span>
          </h2>
          <p className="mt-8 text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Every diagnosis, every treatment, every gentle touch is guided by a single principle:
            your pet is someone&apos;s whole world, and we honour that bond with everything we do.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            {['Compassion First', 'Evidence-Based Care', 'Transparent Pricing', 'Lifelong Wellness'].map((v, i) => (
              <span
                key={i}
                className="bg-white/10 backdrop-blur border border-white/10 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-transform duration-300 hover:scale-110 hover:bg-white/20 cursor-default"
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Horizontal Timeline ── */}
 <section className="bg-cream py-24 px-6 relative">
  <div className="max-w-6xl mx-auto text-center mb-20">
    <span className="inline-block bg-teal-primary/10 text-teal-primary text-sm font-semibold px-4 py-1 rounded-full mb-4">
      Our Journey
    </span>
    <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-primary">
      Milestones That Define Us
    </h2>
    <p className="mt-3 text-gray-500 max-w-lg mx-auto">
      A timeline of growth, innovation, and commitment to your pets.
    </p>
  </div>

  <div className="relative max-w-5xl mx-auto">

    {/* Vertical Line */}
    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-primary/40 via-teal-primary to-coral/40 transform -translate-x-1/2 rounded-full" />

    <div className="space-y-20">
      {milestones.map((m, i) => {
        const isLeft = i % 2 === 0

        return (
          <div
            key={i}
            className={`relative flex items-center ${
              isLeft ? "justify-start" : "justify-end"
            }`}
            onMouseEnter={() => setHoveredMilestone(i)}
            onMouseLeave={() => setHoveredMilestone(null)}
          >
            {/* Card */}
            <div
              className={`w-full md:w-[45%] bg-white rounded-2xl p-6 shadow-xl shadow-gray-200/50 transition-all duration-500 ${
                hoveredMilestone === i
                  ? "scale-105 -translate-y-2"
                  : ""
              }`}
            >
              <span className="inline-block bg-teal-primary/10 text-teal-primary text-xs font-bold px-3 py-1 rounded-full mb-3">
                {m.year}
              </span>
              <h4 className="text-lg font-bold text-teal-primary">
                {m.title}
              </h4>
              <p className="mt-2 text-gray-500 text-sm leading-relaxed">
                {m.desc}
              </p>
            </div>

            {/* Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <div
                className={`w-6 h-6 rounded-full border-4 border-white shadow-lg transition-all duration-300 ${
                  hoveredMilestone === i ? "scale-125" : ""
                }`}
                style={{
                  backgroundColor:
                    i % 2 === 0 ? "#0F4C5C" : "#FF6B6B",
                }}
              />
            </div>
          </div>
        )
      })}
    </div>
  </div>
</section>

      {/* ── CTA Banner ── */}
      <section className="py-24 px-6">
        <div
          className="max-w-5xl mx-auto rounded-3xl p-12 sm:p-16 text-center relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #0F4C5C 0%, #17697E 60%, #1E8A9E 100%)',
          }}
        >
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-coral/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Ready to Experience<br className="hidden sm:block" /> the Difference?
            </h2>
            <p className="mt-4 text-white/70 max-w-lg mx-auto">
              Join the thousands of families who trust S.S Pet Clinic for compassionate, premium veterinary care.
            </p>
            <a
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 bg-coral text-white font-bold text-lg px-10 py-4 rounded-2xl shadow-xl shadow-coral/30 transition-transform duration-300 hover:scale-110"
            >
              Book Your Visit <span>→</span>
            </a>
          </div>
        </div>
      </section>



    </div>
  )
}
