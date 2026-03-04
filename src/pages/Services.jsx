import {ServiceIcon, CheckIcon} from '../util/Icons'
import FAQ from '../components/FAQ'
import { services } from '../data/services'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeInUp, fadeInRight, fadeInLeft, staggerContainer, viewportOnce} from '../util/useScrollAnimation'


/* ────────────────────── COMPONENT ────────────────────── */
export default function Services() {
  return (
    <div className="min-h-screen bg-cream font-['Inter',_'Outfit',_sans-serif] overflow-x-hidden">


      {/* ── Hero Banner ── */}
          <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
        className="relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center text-center px-6 "
        style={{
          background: 'linear-gradient(135deg, #0F4C5C 0%, #17697E 40%, #1E8A9E 70%, #0F4C5C 100%)',
        }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-coral/10 blur-3xl pointer-events-none" />

        <motion.div variants={fadeInUp} className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <ServiceIcon className="w-4 h-4" /> What We Offer
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
            World-Class Care,{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Every Service</span>
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-coral/40 rounded-full -rotate-1" />
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-xl mx-auto leading-relaxed">
            From preventive wellness to life-saving emergencies — discover the full spectrum of care your pet deserves.
          </p>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full" preserveAspectRatio="none">
            <path fill="#FFF8F0" d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,64C1200,75,1320,85,1380,90.7L1440,96L1440,120L0,120Z" />
          </svg>
        </div>
      </motion.section>

      {/* ── Service Sections ── */}
     <section className="bg-cream py-20 px-6">
  <div className="max-w-6xl mx-auto flex flex-col gap-20">
    {services.map((s, i) => {
      const isReversed = i % 2 !== 0

      return (
        <motion.div
          key={i}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className={`group flex flex-col ${
            isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
          } gap-10 items-center`}
        >
          {/* Image */}
          <motion.div
            variants={isReversed ? fadeInLeft : fadeInRight}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-gray-200/60">
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                decoding="async"
                className="w-full h-72 sm:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-primary/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeInUp}
            className="w-full lg:w-1/2"
          >
            <span className="inline-block bg-teal-primary/10 text-teal-primary text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
              {s.tagline}
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-primary leading-tight">
              {s.title}
            </h2>

            <p className="mt-4 text-gray-500 leading-relaxed">
              {s.desc}
            </p>
             <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {s.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-teal-primary/10 text-teal-primary shrink-0">
                          <CheckIcon className="w-3 h-3" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
             <Link
  to="/appointment"
  state={{ service: s.title }}
  className="inline-flex items-center gap-2 mt-8 bg-coral text-white font-bold px-7 py-3 rounded-2xl shadow-lg shadow-coral/25 transition-transform duration-300 hover:scale-105"
>
  Book This Service →
</Link>
          </motion.div>
        </motion.div>
      )
    })}
  </div>
</section>
      <FAQ/>

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
              Not Sure What Your Pet Needs?
            </h2>
            <p className="mt-4 text-white/70 max-w-lg mx-auto">
              Our experienced veterinarians will guide you. Book a consultation and we&apos;ll create a personalised care plan.
            </p>
            <Link
              to={'/appointment'}
              className="mt-8 inline-flex items-center gap-2 bg-coral text-white font-bold text-lg px-10 py-4 rounded-2xl shadow-xl shadow-coral/30 transition-transform duration-300 hover:scale-110"
            >
              Schedule a Consultation <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>


    </div>
  )
}
