import { useState } from "react"
import { galleryFilters, galleryImages } from '../data/gallery'
import { motion } from "framer-motion"
import { scaleIn, staggerFast, viewportOnce } from "../util/useScrollAnimation"
import { GalleryIcon } from "../util/Icons"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredImages =
    activeFilter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter)

  return (
    <div className="min-h-screen bg-cream font-['Inter','Outfit',sans-serif] px-6 py-24">
      <div className="max-w-7xl mx-auto text-center">
              <span className="inline-flex items-center gap-2  bg-teal-primary/10 text-teal-primary text-sm font-semibold px-4 py-1 rounded-full mb-4">
                <GalleryIcon  className="w-4 h-4" /> Gallery
          </span>
        <h1 className="text-4xl sm:text-5xl font-black text-teal-primary text-center">
          Our Pet Moments
        </h1>
        <p className="mt-4 text-gray-500 text-center max-w-2xl mx-auto">
          A glimpse into the happy, healthy lives we help create every day.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {galleryFilters.map((filter, i) => (
            <button
              key={i}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-coral text-white shadow-md"
                  : "bg-white text-teal-primary shadow hover:scale-105"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
      <motion.div
  variants={staggerFast}
  initial="hidden"
  whileInView="visible"
  viewport={viewportOnce} className="mt-16 columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((img, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer break-inside-avoid"
              onClick={() => setSelectedImage(img.src)}
            >
              <img
                src={img.src}
                alt="Gallery"
                className="w-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal Preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <img
              src={selectedImage}
              alt="Preview"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  )
}