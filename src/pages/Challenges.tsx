import { Check, Shield } from 'lucide-react'
import ChallengeSelector from '@/components/ChallengeSelector'

// Neon Text Effect Component
const NeonText = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  return <span className={`text-[#C6FF00] drop-shadow-[0_0_15px_rgba(198,255,0,0.8)] ${className}`}>{children}</span>
}

const Challenges = () => {
  return (
    <div className="min-h-screen bg-[#0D0F12]">
      {/* Hero */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/tc-internal-hero.png" 
            alt="Trading Floor" 
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0F12]/40 via-black/60 to-[#0D0F12]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C6FF00]/10 border border-[#C6FF00]/30 rounded-full mb-6">
            <Shield className="w-4 h-4 text-[#C6FF00]" />
            <span className="text-[#C6FF00] text-sm font-medium">Your Strategy. Our Capital.</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-5 leading-[0.95]">
            BECOME A
            <br />
            <span className="mt-3 inline-flex items-center justify-center gap-3">
              <img src="/tc-icon-transparent.png" alt="TC" className="h-12 w-auto object-contain sm:h-10 md:h-12 lg:h-12" />
              <NeonText>TRADER</NeonText>
            </span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Select your program, choose your account size and trade within clear, transparent parameters.
          </p>
        </div>
      </section>

      {/* Challenge Section with Card Layout */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <ChallengeSelector showHeader={false} buyHref="/checkout" />
        </div>
      </section>

      {/* Payouts Section */}
      <section className="py-12 px-6 bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-8">
            <span className="text-[#C6FF00] drop-shadow-[0_0_15px_rgba(74,222,128,0.8)]">PAYOUTS</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="text-zinc-500 text-sm mb-2">Trader Share</div>
              <div className="text-white font-bold text-lg">80%</div>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="text-zinc-500 text-sm mb-2">Cycle</div>
              <div className="text-white font-bold text-lg">14 Days</div>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="text-zinc-500 text-sm mb-2">Status</div>
              <div className="text-white font-bold text-lg">Eligibility Based</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/tc-architecture-green.png" 
            alt="Challenge Badges" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0F12]/60 via-black/80 to-[#0D0F12]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-12">
            What's Included in <span className="text-[#C6FF00] drop-shadow-[0_0_15px_rgba(198,255,0,0.8)]">Every Challenge</span>
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: 'No Time Limit', desc: 'Trade at your own pace', icon: Check },
              { label: 'News Trading Allowed', desc: 'Trade during high impact news', icon: Check },
              { label: 'Weekend Holding', desc: 'Keep positions over weekends', icon: Check },
              { label: 'Clear Rules', desc: 'Understand targets, drawdown and payout terms before you start', icon: Check },
              { label: 'Platform Ready', desc: 'Trading platform/provider remains configurable', icon: Check },
              { label: '24/7 Support', desc: 'Round the clock assistance', icon: Check },
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-4 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:border-[#C6FF00]/50 transition-all">
                <div className="w-10 h-10 rounded-lg bg-[#C6FF00]/20 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-[#C6FF00]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{feature.label}</h3>
                  <p className="text-zinc-400 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/tc-data-wall.png" 
            alt="Trading Dashboard" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0F12]/60 via-black/80 to-[#0D0F12]" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-12">
            Challenge <span className="text-[#C6FF00] drop-shadow-[0_0_15px_rgba(198,255,0,0.8)]">Comparison</span>
          </h2>
          
          <div className="overflow-x-auto bg-zinc-900/80 backdrop-blur-sm rounded-2xl border border-zinc-800 p-6">
            <table className="w-full">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="text-left py-4 px-4 text-zinc-400 font-medium">Feature</th>
                  <th className="text-center py-4 px-4 text-[#C6FF00] font-bold">2-Step</th>
                  <th className="text-center py-4 px-4 text-[#C6FF00] font-bold">1-Step</th>
                  <th className="text-center py-4 px-4 text-[#C6FF00] font-bold">Instant</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Profit Target Phase 1', step2: '8%', step1: '8%', instant: 'None' },
                  { feature: 'Profit Target Phase 2', step2: '5%', step1: 'N/A', instant: 'N/A' },
                  { feature: 'Daily Drawdown', step2: '5%', step1: '3%', instant: '3%' },
                  { feature: 'Maximum Drawdown', step2: '10%', step1: '6%', instant: '6%' },
                  { feature: 'Min Trading Days', step2: '3 per phase', step1: '3', instant: 'N/A' },
                  { feature: 'Trading Period', step2: 'Unlimited', step1: 'Unlimited', instant: 'N/A' },
                  { feature: 'Leverage', step2: 'TBD / platform', step1: 'TBD / platform', instant: 'Up to 1:30' },
                  { feature: 'Profit Split', step2: '80 / 20', step1: '80 / 20', instant: '80 / 20' },
                  { feature: 'Starting Price', step2: '$100', step1: '$150', instant: '$500' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-zinc-800/50">
                    <td className="py-4 px-4 text-zinc-300">{row.feature}</td>
                    <td className="py-4 px-4 text-center text-white">{row.step2}</td>
                    <td className="py-4 px-4 text-center text-white">{row.step1}</td>
                    <td className="py-4 px-4 text-center text-white">{row.instant}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Challenges
