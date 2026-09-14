import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Toaster } from 'sonner'
import PromoBanner from '@/components/PromoBanner'
import TopBar from '@/components/TopBar'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
// import ScrollTop from '@/components/ScrollTop'

const Layout = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-black text-white">
      <PromoBanner />
      <TopBar />
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
      {/* <ScrollTop /> */}
      <Toaster position="top-center" richColors />
    </div>
  )
}

export default Layout
