import { Mail, Phone } from 'lucide-react'

const TopBar = () => {
  return (
    <div className="sticky top-0 z-50 bg-[#0D0F12]/90 backdrop-blur border-b border-white/10">
      <div className="mx-auto h-10 max-w-7xl px-3 sm:px-4">
        <div className="flex h-10 items-center justify-center gap-3 overflow-hidden whitespace-nowrap text-[11px] text-zinc-300 sm:gap-6 sm:text-sm">
          <a
            href="mailto:support@tradingcapital.com"
            className="flex min-w-0 items-center gap-1.5 transition-colors hover:text-white sm:gap-2"
          >
            <Mail className="h-3.5 w-3.5 flex-shrink-0 text-[#C6FF00] sm:h-4 sm:w-4" />
            <span className="truncate font-medium">support@tradingcapital.com</span>
          </a>
          <div className="hidden sm:block text-zinc-600">|</div>
          <a
            href="tel:+97100000000"
            className="flex flex-shrink-0 items-center gap-1.5 transition-colors hover:text-white sm:gap-2"
          >
            <Phone className="h-3.5 w-3.5 text-[#C6FF00] sm:h-4 sm:w-4" />
            <span className="font-medium">+971 00000000</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default TopBar
