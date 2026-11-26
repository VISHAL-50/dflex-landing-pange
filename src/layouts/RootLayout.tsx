import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import MobileCtaBar from '../components/MobileCtaBar'
import Navbar from '../components/Navbar'
import ScrollToHash from '../components/ScrollToHash'

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
