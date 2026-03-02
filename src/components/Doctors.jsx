import { useState } from "react"
import { HeartIcon } from "../util/Icons"

export default function Doctors() {
  const doctors = [
    {
      name: "Dr. Ananya Sharma",
      specialty: "Veterinary Surgeon",
      bio: "With over 12 years of surgical experience, Dr. Ananya specializes in soft tissue and emergency procedures, ensuring compassionate and precise care for every patient.",
      img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
    },
    {
      name: "Dr. Rahul Menon",
      specialty: "Pet Nutrition & Wellness",
      bio: "Focused on preventive healthcare and balanced nutrition plans, Dr. Rahul helps pets live longer, healthier, and more energetic lives.",
      img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
    },
    {
      name: "Dr. Priya Nair",
      specialty: "Dermatology Specialist",
      bio: "Dr. Priya treats complex skin and allergy conditions with modern diagnostics and a gentle, patient-first approach.",
      img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80",
    },
    {
      name: "Dr. Karthik Iyer",
      specialty: "Internal Medicine",
      bio: "Expert in diagnosing chronic illnesses and metabolic disorders, Dr. Karthik combines technology with empathy for holistic treatment.",
      img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80",
    },
  ]

  const [hovered, setHovered] = useState(null)

  return (
    <div className="min-h-screen bg-cream/60 font-['Inter','Outfit',sans-serif] px-6 py-24">
       <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block bg-teal-primary/10 text-teal-primary text-sm font-semibold px-4 py-1 rounded-full mb-4">
          Doctors
        </span>

        <h1 className="text-2xl sm:text-4xl font-black text-teal-primary">
          Meet Our Veterinary Experts
        </h1>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          A passionate team of experienced veterinary professionals dedicated to
          providing world-class care for your beloved companions.
        </p>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {doctors.map((doc, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="bg-white rounded-2xl shadow-lg p-8 transition-all duration-500 hover:scale-105 hover:-translate-y-3"
            >
              <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-6">
                <img
                  src={doc.img}
                  alt={doc.name}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hovered === i ? "scale-110" : "scale-100"
                  }`}
                />
              </div>

              <h3 className="text-lg font-bold text-teal-primary">
                {doc.name}
              </h3>
              <p className="text-sm text-coral font-semibold mt-1">
                {doc.specialty}
              </p>
              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                {doc.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}