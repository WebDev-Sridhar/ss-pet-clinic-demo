import { useState } from 'react'
import { PawIcon, HeartIcon, ClockIcon, StethoscopeIcon, ScissorsIcon, SyringeIcon, ShieldIcon, StarIcon, MapPinIcon, BoltIcon  } from "../util/Icons" 
import Doctors from '../components/Doctors'
import GalleryComponent from '../components/GalleryComponent'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Counter from '../components/Counter'
import TextAnimation from '../components/TextAnimation'
import FAQ from '../components/FAQ'
import { heroContent, stats, homeServices, homeTestimonials, ctaBanner } from '../data/homeData'
// ExampleSection.jsx

import { motion } from "framer-motion"
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  viewportOnce,
} from "../util/useScrollAnimation"


/* ─── icon lookup ─── */
const iconMap = {
  paw:         (cls) => <PawIcon className={cls} />,
  shield:      (cls) => <ShieldIcon className={cls} />,
  mapPin:      (cls) => <MapPinIcon className={cls} />,
  star:        (cls) => <StarIcon className={cls} />,
  stethoscope: ()    => <StethoscopeIcon />,
  scissors:    ()    => <ScissorsIcon />,
  syringe:     ()    => <SyringeIcon />,
}


/* ─────────────────────── COMPONENT ─────────────────────── */
export default function Home() {
  const [hoveredStat, setHoveredStat] = useState(null)
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-cream font-['Inter',_'Outfit',_sans-serif] overflow-x-hidden">


         <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}

        id="home"
        className="relative min-h-screen flex items-center px-6 pt-24"
        style={{
          background: 'linear-gradient(135deg, #0F4C5C 0%, #17697E 40%, #1E8A9E 70%, #0F4C5C 100%)',
        }}
      >
        {/* decorative blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-coral/10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-white/5 blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — copy */}
          <motion.div variants={fadeInUp} className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <PawIcon className="w-4 h-4" /> {heroContent.badge}
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight">
              <TextAnimation text={heroContent.headingLine1} />{' '}
              <span className="relative inline-block">
                <span className="relative z-10"><TextAnimation text={heroContent.headingLine2} /></span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-coral/40 rounded-full -rotate-1" />
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {heroContent.description}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              <Link
                to="/appointment"
                className="group relative inline-flex items-center gap-2 bg-coral text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-xl shadow-coral/30 transition-transform duration-300 hover:scale-110"
              >
                Book Appointment
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <a
                href="tel:+911234567890"
                className=" group inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white font-semibold text-lg px-8 py-4 rounded-2xl transition-transform duration-300 hover:scale-110 hover:bg-white/20"
              >
<span className="group-hover:scale-125 transition-transform duration-300">
  <BoltIcon className="badge-icon w-5 h-5 text-coral" />
</span>               
<span className="badge-text">Emergency Care</span>
              </a>
            </div>
          </motion.div>

          {/* Right — hero image */}
          <motion.div variants={fadeInLeft} className=" lg:block">
            <div className="group relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
              <img
                src={heroContent.heroImage}
                alt={heroContent.heroImageAlt}
                className="w-full h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-primary/30 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full" preserveAspectRatio="none">
            <path
              fill="#FFF8F0"
              d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,64C1200,75,1320,85,1380,90.7L1440,96L1440,120L0,120Z"
            />
          </svg>
        </div>
      </motion.section>

      {/* ── Statistics ── */}
             <section
 className="relative -mt-1 bg-cream py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={viewportOnce}
  // className="grid md:grid-cols-3 gap-6"
className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
                <motion.div
      key={i}
      variants={fadeInUp}
                className="group relative bg-white rounded-2xl p-8 text-center shadow-lg shadow-gray-200/60 cursor-default transition-transform duration-500"
                style={{
                  transform:
                    hoveredStat === i
                      ? 'perspective(600px) rotateY(6deg) rotateX(-4deg) scale(1.05)'
                      : 'perspective(600px) rotateY(0) rotateX(0) scale(1)',
                }}
                onMouseEnter={() => setHoveredStat(i)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-teal-primary/10 text-teal-primary mb-4 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  {iconMap[s.iconName]("w-8 h-8")}
                </div>
<p className="text-3xl lg:text-4xl font-extrabold text-teal-primary">
  {typeof s.value === "number" ? (
    Number.isInteger(s.value) ? (
      <Counter value={s.value} suffix=" +" />
    ) : (
      <Counter value={s.value} suffix=" ★" />
    )
  ) : (
    s.value
  )}
</p>                <p className="mt-1 text-sm font-medium text-gray-500">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Services ── */}
             <section className="bg-cream-dark py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.span       variants={fadeInUp}
         className="inline-block bg-teal-primary/10 text-teal-primary text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Our Services
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-primary">
            Exceptional Care, Every Visit
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            From routine wellness to emergency intervention — we cover every aspect of your pet's health.
          </p>

          <motion.div
            variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={viewportOnce}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeServices.map((s, i) => (
              <motion.div
              variants={fadeInUp}
                key={i}
                className="group bg-white rounded-xl overflow-hidden text-left shadow-md shadow-gray-200/50 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                {/* card image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-primary to-teal-light text-white mb-6 -mt-14 relative z-10 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                    {iconMap[s.iconName]()}
                  </div>
                  <h3 className="text-xl font-bold text-teal-primary">{s.title}</h3>
                  <p className="mt-2 text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 mt-5 text-coral font-semibold text-sm transition-transform duration-300 group-hover:translate-x-1"
                  >
                    Learn More <span>→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Doctors Section */}
      <Doctors />

      {/* Gallery Section */}
      <GalleryComponent />

      {/* ── Testimonials ── */}
      <section id="testimonials" className="bg-cream py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block bg-coral/10 text-coral text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-primary">
            Loved by Pet Parents
          </h2>
          <p className="mt-3 text-gray-500 max-w-lg mx-auto">
            Don't take our word for it — hear from the families we serve every day.
          </p>

          <motion.div 
            variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={viewportOnce}
          className="mt-14 grid md:grid-cols-2 gap-8">
            {homeTestimonials.map((t, i) => (
              <motion.div
              variants={fadeInUp}
                key={i}
                className="group relative bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl p-8 text-left shadow-lg shadow-gray-200/40 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
               
                <span className="absolute top-4 right-6 text-6xl leading-none text-teal-primary/10 font-serif select-none">
                  &ldquo;
                </span>
               
                <div className="mb-5">
                  <img
                    src={t.petImg}
                    alt={`${t.name}'s pet`}
                    className="w-16 h-16 rounded-full object-cover ring-3 ring-white shadow-md"
                  />
                </div>
           <div className="flex items-center gap-1 mb-4">
  {[...Array(5)].map((_, index) => {
    const full = index < Math.floor(t.rating);
    const half =
      index === Math.floor(t.rating) &&
      t.rating % 1 >= 0.5;

    return (
      <div key={index} className="relative w-5 h-5">
        {/* Empty Star (Base) */}
        <StarIcon className="w-5 h-5 text-amber-400 fill-none" />

        {/* Full Star */}
        {full && (
          <StarIcon className="absolute top-0 left-0 w-5 h-5 text-amber-400 fill-amber-400" />
        )}

        {/* Half Star */}
        {half && (
          <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
            <StarIcon className="w-5 h-5 text-amber-400 fill-amber-400" />
          </div>
        )}
      </div>
    );
  })}
</div>
                <p className="text-gray-600 text-sm leading-relaxed italic">{t.text}</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-primary to-teal-light flex items-center justify-center text-white font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-teal-primary text-sm">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
           <div className="mt-16">
          <button
            onClick={() => navigate("/testimonials")}
            className="inline-flex items-center gap-2 text-coral bg-transparent border border-coral font-bold text-lg px-10 py-4 rounded-2xl transition-transform duration-300 hover:scale-110"
          >
            See More →
          </button>
        </div>
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
              {ctaBanner.heading}<br className="hidden sm:block" /> {ctaBanner.headingLine2}
            </h2>
            <p className="mt-4 text-white/70 max-w-lg mx-auto">
              {ctaBanner.description}
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 bg-coral text-white font-bold text-lg px-10 py-4 rounded-2xl shadow-xl shadow-coral/30 transition-transform duration-300 hover:scale-110"
            >
              {ctaBanner.buttonText} <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
  
    </div>
  )
}
