import React from 'react'
import { Link } from 'react-router-dom'
import { footerQuickLinks, footerWorkingHours, footerContact, socialLinks } from '../data/footer'


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
const PhoneIcon = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/>
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

const BoltIcon = ({ className }) => (
<svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
fill="currentColor" viewBox="0 0 24 24" 
className={className}>


<path d="M20 9h-8V2c0-.45-.3-.85-.74-.97s-.9.07-1.12.46l-7 12.01c-.18.31-.18.69 0 1s.51.5.87.5h8v7c0 .45.3.85.74.97.09.02.17.03.26.03.35 0 .68-.18.86-.5l7-12c.18-.31.18-.69 0-1S20.36 9 20 9"></path>
</svg>
)

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
            {/* Social Links */}
<div className="mt-6">
  <p className="text-sm font-semibold text-teal-primary mb-3 text-white ">
    Follow Us
  </p>

  <div className="flex items-center gap-4">
    {socialLinks.map((social, i) => (
      <a
        key={i}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-xl bg-teal-primary/80 text-white transition-all duration-300 hover:bg-coral hover:text-white hover:scale-110"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d={social.svgPath} />
        </svg>
      </a>
    ))}
  </div>
</div>
          </div>
          

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/40 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {footerQuickLinks.map((l) => (
                <li key={l}>
                  <Link to={l.toLowerCase() === 'home' ? '/' : `/${l.toLowerCase()}`} className="hover:text-coral transition-colors duration-200">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/40 mb-4">Working Hours</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {footerWorkingHours.map((h, i) => (
                <li key={i} className="flex justify-between"><span>{h.day}</span><span className="text-white/90">{h.time}</span></li>
              ))}
              <li className="flex items-center gap-1 text-coral font-medium mt-2">
                <BoltIcon className="w-4 h-4 badge-icon" /> <span>Emergency: 24/7</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/40 mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPinIcon className="w-5 h-5 mt-0.5 text-coral shrink-0" />
                <span>{footerContact.address.split(', India')[0]},<br />India{footerContact.address.split('India')[1]}</span>
              </li>
              <li className="flex items-center gap-2">
                <PhoneIcon className="w-5 h-5 text-coral shrink-0" />
                <a href={footerContact.phoneHref} className="hover:text-coral transition-colors">{footerContact.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <MailIcon className="w-5 h-5 text-coral shrink-0" />
                <a href={footerContact.emailHref} className="hover:text-coral transition-colors">{footerContact.email}</a>
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