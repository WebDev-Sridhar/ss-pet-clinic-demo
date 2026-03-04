import React from "react"
import blogs from "../data/Blog"
import { Link } from "react-router-dom"
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, viewportOnce } from '../util/useScrollAnimation'
import { QuoteIcon } from '../util/Icons'

export default function Blog() {
  return (
    <section className="min-h-screen bg-cream font-['Inter',_'Outfit',_sans-serif] overflow-x-hidden">
              {/* Header */}

               <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
        className="relative md:min-h-[80vh] min-h-[60vh] flex items-center justify-center text-center px-6 "
        style={{
          background: 'linear-gradient(135deg, #0F4C5C 0%, #17697E 40%, #1E8A9E 70%, #0F4C5C 100%)',
        }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-coral/10 blur-3xl pointer-events-none" />

        <motion.div variants={fadeInUp} className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <QuoteIcon className="w-4 h-4" />Our Blog
          </span>
           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
            Pet Care{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Insights & Tips</span>
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-coral/40 rounded-full -rotate-1" />
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-xl mx-auto leading-relaxed">
                 Helpful articles and expert advice to keep your pets healthy and happy.
          </p>
 
     
        </motion.div>

        {/* wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full" preserveAspectRatio="none">
            <path fill="#FFF8F0" d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,64C1200,75,1320,85,1380,90.7L1440,96L1440,120L0,120Z" />
          </svg>
        </div>
      </motion.section>

      <div className="max-w-7xl mx-auto py-20 px-6">



        {/* Blog Grid */}
 <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
>
  {blogs.map((blog) => (
    <motion.div
      key={blog.id}
      variants={fadeInUp}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
    >
      <div className="overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          loading="lazy"
          decoding="async"
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500 will-change-transform"
        />
      </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs font-semibold text-coral uppercase">
                  {blog.category}
                </span>

                <h3 className="mt-2 text-lg font-bold text-teal-primary group-hover:text-coral transition-colors duration-300">
                  {blog.title}
                </h3>

                <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                  {blog.excerpt}
                </p>

                <div className="mt-5 flex items-center justify-between text-sm text-gray-400">
                  <span>{blog.date}</span>
              <Link
  to={`/blog/${blog.id}`}
  className="text-teal-primary font-semibold hover:text-coral transition-colors"
>
  Read More →
</Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}