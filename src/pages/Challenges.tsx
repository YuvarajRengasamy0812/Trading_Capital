import { Check, Shield } from 'lucide-react'
import ChallengeSelector from '@/components/ChallengeSelector'

// Neon Text Effect Component
const NeonText = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  return <span className={`text-[#22c55e] drop-shadow-[0_0_15px_rgba(34,197,94,0.8)] ${className}`}>{children}</span>
}

const Challenges = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/trading-floor.jpg" 
            alt="Trading Floor" 
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">Reward Guaranteed</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6">
            THE ULTIMATE TRADE FUNDING
            <br />
            <NeonText>CHALLENGE HERE!</NeonText>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Choose your challenge type and start your journey to becoming a funded trader.
          </p>
        </div>
      </section>

      {/* Challenge Section with Card Layout */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <ChallengeSelector showHeader={false} buyHref="https://secure.libertymarkets.org/prop/login" />
        </div>
      </section>

      {/* Payouts Section */}
      <section className="py-12 px-6 bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-8">
            <span className="text-green-400 drop-shadow-[0_0_15px_rgba(74,222,128,0.8)]">PAYOUTS</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="text-zinc-500 text-sm mb-2">First Reward</div>
              <div className="text-white font-bold text-lg">Monthly</div>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="text-zinc-500 text-sm mb-2">Option</div>
              <div className="text-white font-bold text-lg">Bi-weekly</div>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="text-zinc-500 text-sm mb-2">Option</div>
              <div className="text-white font-bold text-lg">Weekly</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/challenge-badges.jpg" 
            alt="Challenge Badges" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-12">
            What's Included in <span className="text-[#22c55e] drop-shadow-[0_0_15px_rgba(34,197,94,0.8)]">Every Challenge</span>
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: 'No Time Limit', desc: 'Trade at your own pace', icon: Check },
              { label: 'News Trading Allowed', desc: 'Trade during high impact news', icon: Check },
              { label: 'Weekend Holding', desc: 'Keep positions over weekends', icon: Check },
              { label: '100% Refundable', desc: 'Get your fee back on first payout', icon: Check },
              { label: 'MT5 Platform', desc: 'Industry standard trading platform', icon: Check },
              { label: '24/7 Support', desc: 'Round the clock assistance', icon: Check },
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-4 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:border-[#22c55e]/50 transition-all">
                <div className="w-10 h-10 rounded-lg bg-[#22c55e]/20 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-[#22c55e]" />
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
            src="/trading-dashboard.jpg" 
            alt="Trading Dashboard" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-12">
            Challenge <span className="text-[#22c55e] drop-shadow-[0_0_15px_rgba(34,197,94,0.8)]">Comparison</span>
          </h2>
          
          <div className="overflow-x-auto bg-zinc-900/80 backdrop-blur-sm rounded-2xl border border-zinc-800 p-6">
            <table className="w-full">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="text-left py-4 px-4 text-zinc-400 font-medium">Feature</th>
                  <th className="text-center py-4 px-4 text-[#22c55e] font-bold">2-Step</th>
                  <th className="text-center py-4 px-4 text-[#16a34a] font-bold">1-Step</th>
                  <th className="text-center py-4 px-4 text-green-400 font-bold">Instant</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Profit Target Phase 1', step2: '7%', step1: '8%', instant: '8%' },
                  { feature: 'Profit Target Phase 2', step2: '5%', step1: 'N/A', instant: 'N/A' },
                  { feature: 'Daily Loss Limit', step2: '5%', step1: '4%', instant: '4%' },
                  { feature: 'Max Loss', step2: '8%', step1: '8%', instant: '8%' },
                  { feature: 'Min Trading Days', step2: '3', step1: '3', instant: '3' },
                  { feature: 'Trading Period', step2: 'Unlimited', step1: 'Unlimited', instant: 'Unlimited' },
                  { feature: 'Leverage', step2: '1:100', step1: '1:50', instant: '1:30' },
                  { feature: 'Profit Split', step2: 'Up to 80%', step1: 'Up to 80%', instant: 'Up to 80%' },
                  { feature: 'Starting Price', step2: '$10 Phase 1', step1: '$39', instant: '$95' },
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
