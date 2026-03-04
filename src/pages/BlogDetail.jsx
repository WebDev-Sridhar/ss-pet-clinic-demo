import React from "react"
import { useParams, Link } from "react-router-dom"
import blogs from "../data/Blog"

export default function BlogDetail() {
  const { id } = useParams()

  const blog = blogs.find((b) => b.id === parseInt(id))

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold text-teal-primary">
          Blog Not Found
        </h2>
      </div>
    )
  }

  return (
    <section className="bg-cream min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Back */}
        <Link
          to="/blog"
          className="text-coral font-semibold hover:underline"
        >
          ← Back to Blog
        </Link>

        {/* Image */}
        <div className="mt-6 rounded-2xl overflow-hidden shadow-lg">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Content */}
        <div className="mt-10">
          <span className="text-sm font-semibold text-coral uppercase">
            {blog.category}
          </span>

          <h1 className="mt-3 text-3xl font-extrabold text-teal-primary">
            {blog.title}
          </h1>

          <p className="mt-2 text-gray-400 text-sm">
            {blog.date}
          </p>

          <div className="mt-8 text-gray-600 leading-relaxed space-y-6 whitespace-pre-line">
            {blog.content}
          </div>
        </div>
      </div>
    </section>
  )
}