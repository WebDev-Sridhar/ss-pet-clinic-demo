import {ServiceIcon, CheckIcon} from '../util/Icons'
import FAQ from '../components/FAQ'


/* ─── Services data ─── */
const services = [
  {
    title: 'Preventive Care',
    tagline: 'Stay Ahead of Illness',
    desc: 'Our comprehensive preventive care programme includes routine wellness exams, blood panels, parasite screening, and nutritional counselling. We catch problems early so your pet can live their healthiest, happiest life — for years to come.',
    features: ['Full-body wellness exams', 'Blood work & diagnostics', 'Nutritional guidance', 'Weight management plans'],
    img: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800&h=600&fit=crop&q=80',
  },
  {
    title: 'Vaccination',
    tagline: 'Shield Them From the Start',
    desc: 'We design personalised vaccination schedules based on your pet\'s age, breed, lifestyle, and risk profile. From core vaccines to travel-specific boosters, every shot is administered with care and precision in a stress-free environment.',
    features: ['Core & non-core vaccines', 'Puppy & kitten programmes', 'Annual booster schedules', 'Digital vaccination records'],
    img: 'https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Surgery',
    tagline: 'Precision. Safety. Recovery.',
    desc: 'Our state-of-the-art surgical suite is equipped with advanced monitoring and anaesthesia systems. From routine spay/neuter procedures to complex soft-tissue surgeries, our board-trained surgeons operate with the highest standards of care.',
    features: ['Spay & neuter procedures', 'Soft-tissue surgery', 'Advanced anaesthesia monitoring', 'Post-op recovery support'],
    img: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&h=600&fit=crop&q=80',
  },
  {
    title: 'Dental Care',
    tagline: 'Healthy Mouth, Happy Pet',
    desc: 'Dental disease affects over 80% of pets by age three. Our dental programme includes thorough cleanings, digital dental X-rays, extractions, and at-home care plans to keep your pet\'s smile bright and pain-free.',
    features: ['Ultrasonic scaling & polishing', 'Digital dental X-rays', 'Tooth extractions', 'At-home dental care kits'],
    img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=600&fit=crop&q=80',
  },
  {
    title: 'Emergency Services',
    tagline: 'Here When It Matters Most',
    desc: 'Emergencies don\'t wait — and neither do we. Our 24/7 emergency team is equipped with rapid diagnostics, critical-care monitoring, and life-saving interventions to give your pet the best possible outcome, day or night.',
    features: ['24/7 availability', 'Rapid triage & diagnostics', 'Critical-care monitoring', 'Oxygen therapy & IV support'],
    img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=600&fit=crop&q=80',
  },
  {
    title: 'Grooming',
    tagline: 'Look Good, Feel Great',
    desc: 'Our luxury grooming studio offers breed-specific haircuts, therapeutic baths, nail trimming, ear cleaning, and de-shedding treatments. Every session is tailored to your pet\'s coat type and temperament for a stress-free spa experience.',
    features: ['Breed-specific styling', 'Therapeutic spa baths', 'Nail trim & ear cleaning', 'De-shedding treatments'],
    img: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&h=600&fit=crop&q=80',
  },
]

/* ────────────────────── COMPONENT ────────────────────── */
export default function Services() {
  return (
    <div className="min-h-screen bg-cream font-['Inter',_'Outfit',_sans-serif] overflow-x-hidden">


      {/* ── Hero Banner ── */}
      <section
        className="relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center text-center px-6 "
        style={{
          background: 'linear-gradient(135deg, #0F4C5C 0%, #17697E 40%, #1E8A9E 70%, #0F4C5C 100%)',
        }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-coral/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
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
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full" preserveAspectRatio="none">
            <path fill="#FFF8F0" d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,64C1200,75,1320,85,1380,90.7L1440,96L1440,120L0,120Z" />
          </svg>
        </div>
      </section>

      {/* ── Service Sections ── */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-20">
          {services.map((s, i) => {
            const isReversed = i % 2 !== 0
            return (
              <div
                key={i}
                className={`group flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-gray-200/60">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-72 sm:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-primary/40 via-transparent to-transparent pointer-events-none" />
                    {/* floating badge */}
                    <div className={`absolute bottom-4 ${isReversed ? 'right-4' : 'left-4'} bg-coral text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg`}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
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
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 mt-8 bg-coral text-white font-bold px-7 py-3 rounded-2xl shadow-lg shadow-coral/25 transition-transform duration-300 hover:scale-105"
                  >
                    Book This Service <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                  </a>
                </div>
              </div>
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
            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-coral text-white font-bold text-lg px-10 py-4 rounded-2xl shadow-xl shadow-coral/30 transition-transform duration-300 hover:scale-110"
            >
              Schedule a Consultation <span>&rarr;</span>
            </a>
          </div>
        </div>
      </section>


    </div>
  )
}
