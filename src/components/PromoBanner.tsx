import { useState } from 'react'
import { Copy, CheckCheck } from 'lucide-react'
import { toast } from 'sonner'

const PromoBanner = () => {
  const [copied1, setCopied1] = useState(false)
  const [copied2, setCopied2] = useState(false)

  const copyCode = (code: string, setCopied: (v: boolean) => void) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
        toast.success(`Code ${code} copied`)
      })
      .catch(() => {
        toast.error('Unable to copy code')
      })
  }

  return (
    <div className="bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-amber-500/20 border-b border-amber-500/30">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm">
          <span className="text-amber-400 font-medium uppercase tracking-wider">Limited Time</span>

          <div className="flex items-center gap-2">
            <span className="text-white font-semibold">40% OFF + BOGO*</span>
            <button
              onClick={() => copyCode('BOGO40', setCopied1)}
              className="flex items-center gap-1 px-2 py-0.5 bg-amber-500/20 rounded text-amber-400 hover:bg-amber-500/30 transition-colors"
            >
              CODE: <span className="font-mono font-bold">BOGO40</span>
              {copied1 ? <CheckCheck className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
            </button>
          </div>

          <span className="hidden md:block text-zinc-600">|</span>

          <div className="flex items-center gap-2">
            <span className="text-white font-semibold">50% OFF for New Customers</span>
            <button
              onClick={() => copyCode('FIRSTLIBERTY', setCopied2)}
              className="flex items-center gap-1 px-2 py-0.5 bg-amber-500/20 rounded text-amber-400 hover:bg-amber-500/30 transition-colors"
            >
              CODE: <span className="font-mono font-bold">FIRSTLIBERTY</span>
              {copied2 ? <CheckCheck className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PromoBanner
