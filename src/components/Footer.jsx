import React from 'react'
import { Link } from 'react-router-dom'


const PawIcon = ({ className = 'w-6 h-6' }) => (
  <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
fill="currentColor" viewBox="0 0 24 24" >
<path d="M12 2a3 3 0 1 0 0 6 3 3 0 1 0 0-6m7 3a3 3 0 1 0 0 6 3 3 0 1 0 0-6M5 5a3 3 0 1 0 0 6 3 3 0 1 0 0-6m3.06 6.53c-.37.37-.84.63-1.35.76-2.18.55-3.71 2.5-3.71 4.75 0 1.66.83 3.19 2.22 4.1a4.89 4.89 0 0 0 4.64.39l.98-.43c.74-.32 1.58-.32 2.32 0l.98.43c1.52.66 3.25.52 4.64-.39a4.88 4.88 0 0 0 2.22-4.1c0-2.25-1.53-4.2-3.71-4.75-.51-.13-.97-.39-1.35-.76l-.48-.48c-.92-.92-2.15-1.43-3.46-1.43s-2.54.51-3.46 1.43z"></path>
</svg>
)
const HeartIcon = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
)
const ClockIcon = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
  </svg>
)
const PhoneIcon = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/>
  </svg>
)
const StarIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/>
  </svg>
)
const ShieldIcon = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z"/>
  </svg>
)
const MapPinIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z"/>
  </svg>
)
const MailIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
)


/* ─── data ─── */
const stats = [
  { label: 'Happy Pets', value: '15,000+', icon: <PawIcon className="w-8 h-8" /> },
  { label: 'Years Experience', value: '25+', icon: <ShieldIcon className="w-8 h-8" /> },
  { label: '24/7 Support', value: 'Always', icon: <ClockIcon className="w-8 h-8" /> },
  { label: 'Rating', value: '4.9★', icon: <StarIcon className="w-8 h-8" /> },
]

const Footer = () => {
    return (
       <>
             {/* ── Footer ── */}
      <footer className="bg-teal-dark text-white pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/10 p-2 rounded-xl">
                <PawIcon className="w-6 h-6 text-coral" />
              </span>
              <span className="text-xl font-extrabold tracking-tight">S.S Pet Clinic</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Premium veterinary care rooted in compassion. Your pet&apos;s health and happiness is our mission.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/40 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {['Home', 'Services', 'About Us', 'Testimonials', 'Blog'].map((l) => (
                <li key={l}>
                  <Link to={l.toLowerCase() === 'home' ? '/' : `/${l.toLowerCase()}`} className="hover:text-coral transition-colors duration-200">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/40 mb-4">Working Hours</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex justify-between"><span>Mon – Fri</span><span className="text-white/90">8:00 AM – 9:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday</span><span className="text-white/90">9:00 AM – 6:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday</span><span className="text-white/90">10:00 AM – 4:00 PM</span></li>
              <li className="flex items-center gap-1 text-coral font-medium mt-2">
                <HeartIcon className="w-4 h-4" /> Emergency: 24/7
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/40 mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPinIcon className="w-5 h-5 mt-0.5 text-coral shrink-0" />
                <span>123 Caring Lane, Pet City,<br />India — 600001</span>
              </li>
              <li className="flex items-center gap-2">
                <PhoneIcon className="w-5 h-5 text-coral shrink-0" />
                <a href="tel:+911234567890" className="hover:text-coral transition-colors">+91 12345 67890</a>
              </li>
              <li className="flex items-center gap-2">
                <MailIcon className="w-5 h-5 text-coral shrink-0" />
                <a href="mailto:hello@sspetclinic.com" className="hover:text-coral transition-colors">hello@sspetclinic.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs text-white/40">
          &copy; {new Date().getFullYear()} S.S Pet Clinic. All rights reserved. Made with <HeartIcon className="w-3 h-3 inline text-coral" /> for pets everywhere.
        </div>
      </footer>
       </>
    )
}

export default Footer