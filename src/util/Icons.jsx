import React from 'react'

/* ─── Inline SVG icons (matching Home.jsx style) ─── */
const PawIcon = ({ className = 'w-6 h-6' }) => (
<svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
fill="currentColor" viewBox="0 0 24 24" >
<path d="M15 5c0-1.65-1.35-3-3-3S9 3.35 9 5s1.35 3 3 3 3-1.35 3-3m-4 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m8 0c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3m0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1M8 8c0-1.65-1.35-3-3-3S2 6.35 2 8s1.35 3 3 3 3-1.35 3-3M4 8c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m1.22 13.14c.81.53 1.74.8 2.68.8.67 0 1.33-.14 1.97-.41l.98-.43c.74-.32 1.59-.32 2.32 0l.98.43c1.52.67 3.25.52 4.64-.39a4.88 4.88 0 0 0 2.22-4.1c0-2.25-1.53-4.2-3.71-4.75-.51-.13-.97-.39-1.35-.76l-.48-.48c-1.91-1.91-5.02-1.91-6.92 0l-.48.48c-.37.37-.84.63-1.35.76-2.18.55-3.71 2.5-3.71 4.75 0 1.66.83 3.19 2.22 4.1Zm1.98-6.91c.86-.22 1.65-.66 2.27-1.29l.48-.48c.56-.56 1.31-.85 2.05-.85s1.48.28 2.05.85l.48.48c.63.63 1.41 1.07 2.28 1.29A2.89 2.89 0 0 1 19 17.04c0 1-.48 1.88-1.31 2.42s-1.83.63-2.75.23l-.98-.43a4.9 4.9 0 0 0-3.93 0l-.98.43c-.91.4-1.91.32-2.75-.23s-1.31-1.43-1.31-2.42c0-1.33.9-2.49 2.2-2.81Z"></path>
</svg>
)
const HeartIcon = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
)
const EyeIcon = ({ className = 'w-8 h-8' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)
const TargetIcon = ({ className = 'w-8 h-8' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
  </svg>
)
const PhoneIcon = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" />
  </svg>
)
const MapPinIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
  </svg>
)
const MailIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
)

const ClockIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
  </svg>
)

const EnvelopeIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
)

const StethoscopeIcon = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.8 2.3A.3.3 0 105 2H4a2 2 0 00-2 2v5a6 6 0 0012 0V4a2 2 0 00-2-2h-1a.2.2 0 10.3.3"/>
    <path d="M8 15v1a6 6 0 006 6 6 6 0 006-6v-4"/>
    <circle cx="20" cy="10" r="2"/>
  </svg>
)
const ScissorsIcon = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/>
  </svg>
)
const SyringeIcon = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2l4 4"/><path d="M17 7l3-3"/><path d="M19 9l-8.7 8.7c-.4.4-.8.7-1.3.9l-4 1.4 1.4-4c.2-.5.5-.9.9-1.3L16 6"/><path d="M10 14l-2-2"/>
  </svg>
)

const ShieldIcon = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z"/>
  </svg>
)
const StarIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/>
  </svg>
)

const CheckIcon  = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const BubbleIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
)

const ServiceIcon = ({ className = 'w-5 h-5' }) => (
<svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
fill="currentColor" viewBox="0 0 24 24" >
<path d="m21.32 12.05-2.23-.74c-.81-.27-1.69-.11-2.35.42l-3.4 2.72-1.17-2.34A2 2 0 0 0 10.38 11H4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h9.62c1.17 0 2.28-.51 3.04-1.4l5.1-5.95c.22-.25.29-.6.2-.92s-.33-.58-.65-.68Zm-6.18 6.25c-.38.44-.93.7-1.52.7H4v-6h6.38l1 2H7v2h6c.23 0 .45-.08.63-.22l4.36-3.49c.13-.11.31-.14.47-.08l.81.27z"></path><path d="M13.28 10.69a.99.99 0 0 0 1.44 0l3.4-3.57C18.69 6.55 19 5.8 19 5s-.31-1.55-.88-2.12S16.8 2 16 2c-.06 0-1 .02-2 .7-1-.68-1.85-.74-2-.7-.8 0-1.56.31-2.12.88C9.31 3.45 9 4.2 9 5s.31 1.56.86 2.1l3.41 3.59Zm-1.98-6.4c.19-.19.44-.29.68-.29.03 0 .65.04 1.31.71.39.39 1.02.39 1.41 0 .67-.67 1.29-.71 1.29-.71a.99.99 0 0 1 1 1c0 .27-.1.52-.31.72l-2.69 2.83-2.71-2.84c-.19-.19-.29-.44-.29-.71s.1-.52.29-.71Z"></path>
</svg>
)

const GetInTouchIcon = ({ className = 'w-5 h-5' }) => (
<svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
fill="currentColor" viewBox="0 0 24 24" >
    <path d="M20.24 4.76c-2.3-2.29-5.87-2.35-8.24-.19-2.37-2.16-5.93-2.09-8.24.2-2.36 2.37-2.36 6.07 0 8.43l7.53 7.52c.2.19.45.29.71.29s.51-.1.71-.29l7.53-7.52c2.36-2.36 2.36-6.06 0-8.43ZM12 18.59l-6.82-6.81a3.92 3.92 0 0 1 0-5.6C5.97 5.39 6.98 5 7.99 5s2.02.39 2.8 1.18l.5.5-2.38 2.39c-.51.52-.51 1.36 0 1.88.49.49 1.13.73 1.77.73s1.28-.24 1.77-.73l1.64-1.64 3.59 3.59-1.04 1.04-2.3-2.3-.71.71 2.3 2.3-.79.79-2.3-2.3-.71.71 2.3 2.3-.79.79-2.29-2.29-.71.71 2.29 2.29-.94.94Zm6.82-6.81-.42.42-3.59-3.59 1.24-1.24-.71-.71-3.59 3.59c-.58.58-1.54.58-2.12 0a.33.33 0 0 1 0-.47l3.42-3.44.16-.16c1.57-1.57 4.04-1.57 5.62 0 1.57 1.58 1.57 4.04 0 5.6Z"></path>
</svg>
)   

const BoltIcon = ({ className = 'w-5 h-5' }) => (
<svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
fill="coral" viewBox="0 0 24 24" >
<path d="M20 9h-8V2c0-.45-.3-.85-.74-.97s-.9.07-1.12.46l-7 12.01c-.18.31-.18.69 0 1s.51.5.87.5h8v7c0 .45.3.85.74.97.09.02.17.03.26.03.35 0 .68-.18.86-.5l7-12c.18-.31.18-.69 0-1S20.36 9 20 9"></path>
</svg>
)
export { PawIcon, HeartIcon, EyeIcon, TargetIcon, PhoneIcon, MapPinIcon, MailIcon, ClockIcon, EnvelopeIcon, StethoscopeIcon, ScissorsIcon, SyringeIcon, ShieldIcon, StarIcon, CheckIcon, BubbleIcon, ServiceIcon, GetInTouchIcon, BoltIcon }