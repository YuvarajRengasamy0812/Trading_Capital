import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
  Menu,
  X,
  Home,
  Target,
  Users,
  HelpCircle,
  Info,
  Mail,
  ShoppingBag,
  LogIn,
  UserPlus,
  ShieldCheck,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const PROP_LOGIN_URL = 'https://secure.libertymarkets.org/prop/login'
const PROP_REGISTER_URL = 'https://secure.libertymarkets.org/prop/register'
const PROP_ADMIN_URL = 'https://secure.libertymarkets.org/prop/admin'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => location.pathname === path
  const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })

  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/challenges', label: 'Challenges', icon: Target },
    { path: '/affiliate', label: 'Affiliate', icon: Users },
    { path: '/merchandise', label: 'Merchandise', icon: ShoppingBag },
    { path: '/faq', label: 'FAQ', icon: HelpCircle },
    { path: '/about', label: 'About', icon: Info },
    { path: '/contact', label: 'Contact', icon: Mail },
  ]

  return (
    <nav
      className={`sticky top-10 z-40 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center">
            <img src="/liberty-markets-logo.webp" alt="Liberty Markets" className="h-10 w-auto sm:h-12 lg:h-14" />
          </Link>

          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={scrollToTop}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? 'bg-[#22c55e]/20 text-[#22c55e]'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden xl:flex items-center gap-4">
            <a href={PROP_ADMIN_URL} onClick={scrollToTop}>
              <Button variant="outline" className="border-white/10 text-zinc-300 hover:bg-zinc-900 hover:text-white">
                <ShieldCheck className="mr-2 h-4 w-4" />
                Admin
              </Button>
            </a>
            <a href={PROP_LOGIN_URL} onClick={scrollToTop}>
              <Button variant="outline" className="border-white/20 text-white hover:bg-zinc-900 hover:text-white">
                <LogIn className="mr-2 h-4 w-4" />
                Log In
              </Button>
            </a>
            <a href={PROP_REGISTER_URL} onClick={scrollToTop}>
              <Button className="bg-[#22c55e] hover:bg-[#4ade80] text-white font-semibold px-6 glow-primary">
                <UserPlus className="mr-2 h-4 w-4" />
                Sign Up
              </Button>
            </a>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="xl:hidden p-2 text-white">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="xl:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => {
                setMobileOpen(false)
                scrollToTop()
              }}
              className={`flex items-center gap-3 py-3 font-medium ${
                isActive(link.path) ? 'text-[#22c55e]' : 'text-zinc-400 hover:text-[#22c55e]'
              }`}
            >
              <link.icon className="w-5 h-5" />
              {link.label}
            </Link>
          ))}
          <div className="grid grid-cols-3 gap-3 mt-4">
            <a href={PROP_ADMIN_URL} onClick={scrollToTop}>
              <Button variant="outline" className="w-full border-white/10 px-2 text-zinc-300">
                Admin
              </Button>
            </a>
            <a href={PROP_LOGIN_URL} onClick={scrollToTop}>
              <Button variant="outline" className="w-full border-white/20 px-2 text-white">
                Log In
              </Button>
            </a>
            <a href={PROP_REGISTER_URL} onClick={scrollToTop}>
              <Button className="w-full bg-[#22c55e] px-2 text-white font-semibold">Sign Up</Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
