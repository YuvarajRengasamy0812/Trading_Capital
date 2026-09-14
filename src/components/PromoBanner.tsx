const PromoBanner = () => {
  return (
    <div className="bg-gradient-to-r from-[#C6FF00]/15 via-[#C6FF00]/10 to-[#C6FF00]/15 border-b border-[#C6FF00]/20">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm">
          <span className="text-[#C6FF00] font-medium uppercase tracking-wider">Your Strategy. Our Capital.</span>
          <span className="text-white font-semibold">1-Step, 2-Step and Instant Funding routes</span>
          <span className="hidden md:block text-zinc-600">|</span>
          <span className="text-zinc-300">80 / 20 split. 14-day payout cycle.</span>
        </div>
      </div>
    </div>
  )
}

export default PromoBanner
