import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Appointment from './pages/Appointment'
import ScrollToTop from './components/ScrollToTop'
function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
