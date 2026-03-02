


import { useState } from "react"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "Dogs", "Cats", "Clinic", "Grooming", "Owners"]

  const images = [
    {
      category: "Dogs",
      src: "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=800&q=80",
    },
    {
      category: "Cats",
      src: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      category: "Clinic",
      src: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&q=80",
    },
    {
      category: "Grooming",
      src: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&q=80",
    },
    {
      category: "Owners",
      src: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&q=80",
    },
    {
      category: "Dogs",
      src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80",
    },
    {
      category: "Cats",
      src: "https://images.unsplash.com/photo-1532386236358-a33d8a9434e3?q=80&w=1087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      category: "Clinic",
      src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80",
    },
  ]

  const filteredImages =
    activeFilter === "All"
      ? images
      : images.filter((img) => img.category === activeFilter)

  return (
    <div className="min-h-screen bg-cream font-['Inter','Outfit',sans-serif] px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-black text-teal-primary text-center">
          Our Pet Moments
        </h1>
        <p className="mt-4 text-gray-500 text-center max-w-2xl mx-auto">
          A glimpse into the happy, healthy lives we help create every day.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {filters.map((filter, i) => (
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
        <div className="mt-16 columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer break-inside-avoid"
              onClick={() => setSelectedImage(img.src)}
            >
              <img
                src={img.src}
                alt="Gallery"
                className="w-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          ))}
        </div>
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