import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ScrollToTop from "../components/ScrollToTop"

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <main className="min-h-screen select-none">
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default Layout