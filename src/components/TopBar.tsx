import { Mail, Phone } from 'lucide-react'

const TopBar = () => {
  return (
    <div className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-10">
        <div className="flex h-10 flex-wrap items-center justify-center gap-6 text-sm text-zinc-300">
          <a
            href="mailto:support@libertymarkets.org"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Mail className="h-4 w-4 text-[#22c55e]" />
            <span className="font-medium">support@libertymarkets.org</span>
          </a>
          <div className="hidden sm:block text-zinc-600">|</div>
          <a
            href="tel:+995322885403"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Phone className="h-4 w-4 text-[#16a34a]" />
            <span className="font-medium">+995 322885 403</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default TopBar
