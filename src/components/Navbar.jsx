import React, { useState } from "react"
import { NavLink, Link } from "react-router-dom"

const PawIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a3 3 0 1 0 0 6 3 3 0 1 0 0-6m7 3a3 3 0 1 0 0 6 3 3 0 1 0 0-6M5 5a3 3 0 1 0 0 6 3 3 0 1 0 0-6m3.06 6.53c-.37.37-.84.63-1.35.76-2.18.55-3.71 2.5-3.71 4.75 0 1.66.83 3.19 2.22 4.1a4.89 4.89 0 0 0 4.64.39l.98-.43c.74-.32 1.58-.32 2.32 0l.98.43c1.52.66 3.25.52 4.64-.39a4.88 4.88 0 0 0 2.22-4.1c0-2.25-1.53-4.2-3.71-4.75-.51-.13-.97-.39-1.35-.76l-.48-.48c-.92-.92-2.15-1.43-3.46-1.43s-2.54.51-3.46 1.43z" />
  </svg>
)

const PhoneIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/>
  </svg>
)

const MapPinIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
  </svg>
)

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = ["Home", "Services", "About", "Testimonials", "Contact"]

  const navStyle =
    "relative py-1 transition-colors duration-200 hover:text-teal-primary"

  const activeStyle =
    "text-teal-primary after:w-full after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:bg-coral"

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="bg-teal-primary text-white p-2 rounded-xl transition-transform duration-300 group-hover:rotate-12">
              <PawIcon />
            </span>
            <span className="text-xl font-extrabold text-teal-primary">
              S.S Pet Clinic
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            {links.map((l) => (
              <li key={l}>
                <NavLink
                  to={l === "Home" ? "/" : `/${l.toLowerCase()}`}
                  className={({ isActive }) =>
                    `${navStyle} ${
                      isActive ? activeStyle : "after:w-0 after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:bg-coral after:transition-all after:duration-300 hover:after:w-full"
                    }`
                  }
                >
                  {l}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CALL BUTTON */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 bg-coral text-white text-sm font-semibold px-5 py-2.5 rounded-2xl shadow-lg shadow-coral/25 transition-transform duration-300 hover:scale-105"
          >
            <PhoneIcon /> Call Now
          </a>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-teal-primary"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-between p-6">

          {/* TOP */}
          <div>
            <div className="flex items-center justify-between mb-10">
              <span className="text-xl font-bold text-teal-primary">
                Menu
              </span>
              <button onClick={() => setOpen(false)}>✕</button>
            </div>

            <ul className="space-y-6 text-gray-700 font-medium">
              {links.map((l) => (
                <li key={l}>
                  <NavLink
                    onClick={() => setOpen(false)}
                    to={l === "Home" ? "/" : `/${l.toLowerCase()}`}
                    className={({ isActive }) =>
                      isActive
                        ? "text-teal-primary font-semibold"
                        : "hover:text-teal-primary"
                    }
                  >
                    {l}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* FOOTER */}
          <div className="border-t pt-6 text-sm text-gray-500">
            <p className="mb-3 flex"><PhoneIcon />  +1 (234) 567-890</p>
            <p className="mb-3 flex"><MapPinIcon /> 123 Pet Street</p>
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} S.S Pet Clinic
            </p>
          </div>
        </div>
      </div>
    </>
  )
}