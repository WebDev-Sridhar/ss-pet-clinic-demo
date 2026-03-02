import { useNavigate } from "react-router-dom"

export default function GalleryComponent() {
  const navigate = useNavigate()

  const images = [
    "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=600&q=80", // dog
    "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&q=80", // cat
    "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&q=80", // vet clinic
    "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=600&q=80", // grooming
    "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&q=80", // owner + pet
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80", // dog portrait
  ]

  return (
    <section className="bg-cream py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <span className="inline-block bg-teal-primary/10 text-teal-primary text-sm font-semibold px-4 py-1 rounded-full mb-4">
          Gallery
        </span>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-primary">
          Happy Moments at Our Clinic
        </h2>

        <p className="mt-3 text-gray-500 max-w-xl mx-auto">
          A small glimpse of the love, care, and joy we share with pets and their families every day.
        </p>

        {/* Masonry Preview Grid */}
        <div className="mt-14 columns-2 sm:columns-3 lg:columns-4 gap-5 space-y-5">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl shadow-lg break-inside-avoid group cursor-pointer"
            >
              <img
                src={img}
                alt="Pet gallery preview"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-500" />
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-16">
          <button
            onClick={() => navigate("/gallery")}
            className="inline-flex items-center gap-2 text-coral bg-transparent border border-coral font-bold text-lg px-10 py-4 rounded-2xl transition-transform duration-300 hover:scale-110"
          >
            View Full Gallery →
          </button>
        </div>
      </div>
    </section>
  )
}