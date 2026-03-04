import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ScrollToTop from "../components/ScrollToTop"
import AiReceptionist from "../components/AiReceptionist"

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <main className="min-h-screen select-none">
        <Outlet />
      </main>

      <Footer />
        <AiReceptionist />
    </>
  )
}

export default Layout