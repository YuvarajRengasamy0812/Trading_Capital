import { useState } from 'react'
import { Users, DollarSign, TrendingUp, Gift, ArrowRight, Check, BarChart3, Headphones, Megaphone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'

const Affiliate = () => {
  const [referrals, setReferrals] = useState(10)

  const tiers = [
    { name: 'Bronze', min: 1, max: 25, referrals: '1-25', rate: 0.1, color: 'from-amber-600 to-amber-700', icon: Users },
    { name: 'Silver', min: 26, max: 50, referrals: '26-50', rate: 0.15, color: 'from-slate-400 to-slate-500', icon: TrendingUp },
    { name: 'Gold', min: 51, max: 99, referrals: '51-99', rate: 0.2, color: 'from-yellow-400 to-yellow-500', icon: DollarSign },
    { name: 'Platinum', min: 100, max: Infinity, referrals: '100+', rate: 0.25, color: 'from-[#22c55e] to-[#16a34a]', icon: Gift },
  ]

  const benefits = [
    { icon: DollarSign, title: 'Lifetime Commissions', desc: 'Earn on every purchase your referrals make, forever' },
    { icon: BarChart3, title: 'Real-Time Dashboard', desc: 'Track your earnings, clicks, and conversions in real-time' },
    { icon: Megaphone, title: 'Marketing Materials', desc: 'Access banners, images, and content to promote Liberty' },
    { icon: Headphones, title: 'Dedicated Support', desc: 'Get priority support from our affiliate team' },
    { icon: Gift, title: 'Bonus Rewards', desc: 'Unlock exclusive bonuses at each tier level' },
    { icon: TrendingUp, title: 'No Cap on Earnings', desc: 'The more you refer, the more you earn - unlimited potential' },
  ]

  const currentTier = tiers.find((tier) => referrals >= tier.min && referrals <= tier.max) ?? tiers[0]
  const earningsPerReferral = currentTier.rate * 100
  const estimatedEarnings = referrals * earningsPerReferral

  return (
    <div className="min-h-screen bg-black">
      {/* Hero with Image */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/partnership.jpg" 
            alt="Partnership" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-full mb-6">
                <Users className="w-4 h-4 text-[#22c55e]" />
                <span className="text-[#22c55e] font-medium">Partner Program</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                EARN UP TO <span className="text-[#22c55e]">25%</span>
                <br />
                COMMISSION
              </h1>
              
              <p className="text-xl text-zinc-400 mb-8">
                Join Liberty Funded's affiliate program and earn lifetime commissions on every trader you refer. 
                The more you refer, the higher your commission rate.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="https://secure.libertymarkets.org/prop/register">
                  <Button size="lg" className="bg-[#22c55e] hover:bg-[#4ade80] text-white font-bold px-8">
                    Become an Affiliate
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
                <a href="/contact">
                  <Button size="lg" variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
                    Learn More
                  </Button>
                </a>
              </div>
            </div>

            {/* Calculator */}
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-6">Estimate Your Earnings</h3>
                
                <div className="mb-8">
                  <label className="text-zinc-400 text-sm mb-4 block">Monthly Referrals</label>
                  <div className="text-4xl font-bold text-white mb-4">{referrals}</div>
                  <Slider value={[referrals]} onValueChange={(v) => setReferrals(v[0])} min={1} max={100} step={1} />
                  <div className="flex justify-between text-zinc-600 text-xs mt-2">
                    <span>1</span><span>100</span>
                  </div>
                </div>

                <div className="bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-xl p-6 text-center">
                  <div className="text-zinc-400 text-sm mb-2">Estimated Monthly Earnings</div>
                  <div className="text-4xl md:text-5xl font-black text-[#22c55e]">${estimatedEarnings.toLocaleString()}</div>
                  <div className="text-zinc-500 text-sm mt-2">
                    {currentTier.name} tier • ${earningsPerReferral} per referral at {currentTier.rate * 100}% commission
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Commission Tiers */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Commission <span className="text-[#22c55e]">Tiers</span>
            </h2>
            <p className="text-zinc-400 text-lg">Climb the ranks and increase your earnings</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, i) => (
              <Card key={i} className="bg-zinc-900 border-zinc-800 overflow-hidden group hover:border-[#22c55e]/50 transition-all">
                <div className={`h-2 bg-gradient-to-r ${tier.color}`} />
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${tier.color} flex items-center justify-center mb-4`}>
                    <tier.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{tier.name}</h3>
                  <p className="text-zinc-500 text-sm mb-4">{tier.referrals} Referrals</p>
                  <div className="text-4xl font-black text-white">{tier.rate * 100}%</div>
                  <p className="text-zinc-500 text-sm">Commission</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits with Image */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/wealth-visual.jpg" 
            alt="Wealth Visualization" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Why Partner With <span className="text-[#22c55e]">Liberty</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-4 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:border-[#22c55e]/30 transition-all">
                <div className="w-12 h-12 rounded-lg bg-[#22c55e]/20 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-[#22c55e]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-zinc-400 text-sm">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works with Image */}
      <section className="py-24 px-6 bg-zinc-950 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/scaling-journey.jpg" 
            alt="Scaling Journey" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/80 to-zinc-950" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              How It <span className="text-[#22c55e]">Works</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Sign Up', desc: 'Create your free affiliate account in minutes' },
              { step: '02', title: 'Share Your Link', desc: 'Share your unique referral link with your audience' },
              { step: '03', title: 'Earn Commissions', desc: 'Get paid for every trader who signs up and purchases' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#16a34a] to-[#22c55e] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#16a34a]/20">
                  <span className="text-2xl font-black text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with Image */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/achievement-trophy.jpg" 
            alt="Achievement Trophy" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <Card className="bg-zinc-900/80 backdrop-blur-sm border-[#22c55e]/30">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Ready to Start Earning?
              </h2>
              <p className="text-zinc-300 text-lg mb-8">
                Join thousands of affiliates already earning with Liberty Funded
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="https://secure.libertymarkets.org/prop/register">
                  <Button size="lg" className="bg-[#22c55e] hover:bg-[#4ade80] text-white font-bold px-8">
                    Become an Affiliate
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>

              <div className="flex items-center justify-center gap-2 text-zinc-400">
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-sm">Free to join • Instant approval • Weekly payouts</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-white text-center mb-12">Affiliate FAQ</h2>
          
          <div className="space-y-4">
            {[
              { q: 'How much can I earn?', a: 'There is no cap on earnings. The more traders you refer, the more you earn. Top affiliates make over $50,000 per month.' },
              { q: 'When do I get paid?', a: 'Affiliate commissions are paid weekly, every Monday. You can withdraw via bank transfer, crypto, or Visa/Master Card.' },
              { q: 'How long do cookies last?', a: 'Our tracking cookies last for 90 days. If someone clicks your link and purchases within 90 days, you get credited.' },
              { q: 'Can I promote on social media?', a: 'Yes! You can promote Liberty Funded on any platform including YouTube, Instagram, Twitter, TikTok, and trading forums.' },
            ].map((faq, i) => (
              <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                <p className="text-zinc-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Affiliate
