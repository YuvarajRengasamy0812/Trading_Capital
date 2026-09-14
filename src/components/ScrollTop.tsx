import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

const ScrollTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 420)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Scroll to top"
      className={`fixed bottom-14 left-6 md:bottom-12 md:left-8 z-50 h-12 w-12 rounded-full border border-white/10 bg-gradient-brand text-white shadow-lg transition-all duration-300 ${
        visible
          ? 'opacity-100 translate-y-0 hover:scale-110 glow-primary'
          : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
    >
      <span className="sr-only">Scroll to top</span>
      <span className="absolute inset-0 rounded-full opacity-60 blur-md bg-gradient-to-br from-[#22c55e] to-[#16a34a]" />
      <span className="relative z-10 flex h-full w-full items-center justify-center">
        <ArrowUp className="h-5 w-5" />
      </span>
    </button>
  )
}

export default ScrollTop
