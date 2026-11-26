import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToHash from '../components/ScrollToHash'
import MobileCtaBar from '../components/MobileCtaBar'

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-ink">
      <ScrollToHash />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  )
}
