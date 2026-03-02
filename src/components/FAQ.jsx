import React, { useState } from "react"

const faqs = [
  {
    question: "How do I book an appointment?",
    answer:
      "You can book an appointment online through our website or call us directly. Our team is available 24/7 to assist you."
  },
  {
    question: "Do you provide emergency services?",
    answer:
      "Yes, we offer 24/7 emergency veterinary services to ensure your pet receives immediate care when needed."
  },
  {
    question: "What types of pets do you treat?",
    answer:
      "We care for dogs, cats, and small animals including rabbits and birds. Contact us for specific inquiries."
  },
  {
    question: "Are vaccinations available?",
    answer:
      "Absolutely. We provide complete vaccination programs tailored to your pet’s age and health condition."
  },
  {
    question: "What are your operating hours?",
    answer:
      "Our clinic is open Monday to Saturday from 8 AM to 8 PM, and Sunday from 9 AM to 5 PM. Emergency services are available 24/7."
  },
  {
    question: "Do you offer grooming services?",
    answer:
      "Yes, we have a full-service grooming salon to keep your pet looking and feeling their best."
  }
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className=" py-24 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-teal-primary/10 text-teal-primary text-sm font-semibold px-4 py-1 rounded-full mb-4">
            FAQs
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-primary">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Everything you need to know about our services and pet care.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index

            return (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg shadow-gray-200/50 transition-all duration-300 ${
                  isActive ? "ring-2 ring-teal-primary/30" : ""
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center text-left p-6"
                >
                  <h3 className="text-lg font-semibold text-teal-primary">
                    {faq.question}
                  </h3>

                  <span
                    className={`text-2xl font-light text-coral transition-transform duration-300 ${
                      isActive ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isActive ? "max-h-40 px-6 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-500 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}