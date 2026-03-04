// src/util/useScrollAnimation.js
// Reusable Framer Motion variant presets for scroll-based animations

/* ─── Fade-in from bottom ─── */
export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

/* ─── Fade-in from right (for left-side content) ─── */
export const fadeInRight = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

/* ─── Fade-in from left (for right-side content) ─── */
export const fadeInLeft = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

/* ─── Bubble / scale-in (gallery images) ─── */
export const scaleIn = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

/* ─── Stagger container ─── */
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

/* ─── Fast stagger (for gallery with many items) ─── */
export const staggerFast = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
}

/* ─── Default viewport config ─── */
export const viewportOnce = { once: true, amount: 0.2 }
