import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"

import Layout from "./layout/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Testimonials from "./pages/Testimonials"
import Contact from "./pages/Contact"
import Gallery from "./pages/Gallery"
import Appointment from "./pages/Appointment"
import BlogDetail from "./pages/BlogDetail"
import Loading from "./components/Loading"

const Blog = lazy(() => import("./pages/Blog"))

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Layout Wrapper */}
        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/appointment" element={<Appointment />} />

          <Route
            path="/blog"
            element={
              <Suspense fallback={<Loading />}>
                <Blog />
              </Suspense>
            }
          />

          <Route path="/blog/:id" element={<BlogDetail />} />

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App