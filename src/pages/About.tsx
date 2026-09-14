import { TrendingUp, Target, Users, Award, Globe, Shield, Zap, Heart } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const About = () => {
  const stats = [
    { value: 'TC', label: 'Brand Base' },
    { value: '3', label: 'Program Routes' },
    { value: '4', label: 'Account Sizes' },
    { value: '80/20', label: 'Profit Split' },
  ]

  const values = [
    { icon: Target, title: 'Transparency', desc: 'Clear rules, no hidden fees, straightforward pricing' },
    { icon: Shield, title: 'Trust', desc: 'Your success is our success. We are committed to fair trading conditions' },
    { icon: Zap, title: 'Innovation', desc: 'Constantly improving our platform and services for traders' },
    { icon: Heart, title: 'Community', desc: 'Building a supportive community of successful traders worldwide' },
  ]

  // const milestones = [
  //   { year: '2020', title: 'Founded', desc: 'Trading Capital was established with a mission to democratize prop trading' },
  //   { year: '2021', title: '10K Traders', desc: 'Reached our first 10,000 funded traders milestone' },
  //   { year: '2022', title: 'Global Expansion', desc: 'Expanded to 100+ countries with multilingual support' },
  //   { year: '2023', title: '$10M Paid', desc: 'Surpassed $10 million in trader payouts' },
  // ]

  return (
    <div className="min-h-screen bg-[#0D0F12]">
      {/* Hero with Image */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/about-trading-hero.png" 
            alt="Trading Capital workspace" 
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0F12]/30 via-[#0D0F12]/55 to-[#0D0F12]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C6FF00]/10 border border-[#C6FF00]/30 rounded-full mb-6">
            <Globe className="w-4 h-4 text-[#C6FF00]" />
            <span className="text-[#C6FF00] font-medium">About Us</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            BUILT BY TRADERS,
            <br />
            <span className="text-[#C6FF00]">FOR TRADERS</span>
          </h1>
          
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Trading Capital is a proprietary trading evaluation firm dedicated to identifying
            skilled traders through structured funding challenges in a simulated trading environment.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-[#C6FF00] mb-2">{stat.value}</div>
                <div className="text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                Our <span className="text-[#C6FF00]">Story</span>
              </h2>
              <div className="space-y-4 text-zinc-400">
                <p>
                  Trading Capital was born from a simple idea: skill should not be limited by
                  personal capital. We supply the capital side of the equation when a trader
                  can demonstrate strategy, discipline, risk management and consistency.
                </p>
                <p>
                  Our mission is to give ambitious traders access to the capital, structure
                  and environment they need to scale their performance.
                </p>
                <p>
                  Our product is built around four pillars: capital, discipline, clarity and
                  progression. Every program is designed to make targets, limits and next
                  steps easy to understand.
                </p>
              </div>
            </div>
            
            {/* Growth Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#C6FF00]/20 to-[#C6FF00]/20 rounded-2xl blur-2xl" />
              <img 
                src="/profit-growth.jpg" 
                alt="Profit Growth" 
                className="relative rounded-2xl border border-zinc-800 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-12">
            Our <span className="text-[#C6FF00]">Values</span>
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, i) => (
              <Card key={i} className="bg-zinc-900 border-zinc-800 hover:border-[#C6FF00]/30 transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-[#C6FF00]/20 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-[#C6FF00]" />
                  </div>
                  <h3 className="text-white font-bold mb-2">{value.title}</h3>
                  <p className="text-zinc-500 text-sm">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      {/* <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-16">
            Our <span className="text-[#C6FF00]">Journey</span>
          </h2>
          
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-800 md:-translate-x-1/2" />
            
            <div className="space-y-12">
              {milestones.map((milestone, i) => (
                <div key={i} className={`relative flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="hidden md:block flex-1" />
                  
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#C6FF00] rounded-full border-4 border-[#0D0F12] md:-translate-x-1/2 z-10" />
                  
                  <div className="flex-1 ml-12 md:ml-0">
                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-[#C6FF00]/30 transition-all">
                      <div className="text-[#C6FF00] font-bold text-lg mb-1">{milestone.year}</div>
                      <h3 className="text-white font-bold text-xl mb-2">{milestone.title}</h3>
                      <p className="text-zinc-500">{milestone.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* What Makes Us Different with Image */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/achievement-trophy.jpg" 
            alt="Achievement" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0F12]/60 via-black/80 to-[#0D0F12]" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-16">
            What Makes Us <span className="text-[#C6FF00]">Different</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Award, 
                title: '80 / 20 Profit Split',
                desc: 'Trading Capital standard funded profit split is 80% to the trader and 20% to Trading Capital.'
              },
              { 
                icon: Shield, 
                title: 'Clear Risk Parameters',
                desc: 'Rules, targets and drawdowns are visible before a trader starts a program.'
              },
              { 
                icon: Users, 
                title: 'Progression First',
                desc: 'Prove yourself, reach the funded stage and create a route to scale.'
              },
              { 
                icon: Zap, 
                title: 'Trading Flexibility',
                desc: 'News, overnight, weekend and legitimate EA trading are permitted subject to prohibited-strategy rules.'
              },
              { 
                icon: TrendingUp, 
                title: 'Configurable Scaling',
                desc: 'Scaling is reserved in the product model and will use final approved mechanics.'
              },
              { 
                icon: Heart, 
                title: '24/7 Support', 
                desc: 'Our dedicated support team is available around the clock to help you succeed.' 
              },
            ].map((item, i) => (
              <div key={i} className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:border-[#C6FF00]/30 transition-all">
                <div className="w-12 h-12 rounded-lg bg-[#C6FF00]/20 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#C6FF00]" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-zinc-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team with Image */}
      <section className="py-24 px-6 bg-zinc-950 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/trading-floor.jpg" 
            alt="Trading Floor" 
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/95 to-zinc-950" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Join the <span className="text-[#C6FF00]">Movement</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
            We are always looking for talented individuals to join our team. 
            If you are passionate about trading and fintech, we would love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:careers@tradingcapital." className="inline-flex items-center gap-2 px-6 py-3 bg-[#C6FF00] hover:bg-[#DFFF66] text-black font-bold rounded-lg transition-colors">
              View Open Positions
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
