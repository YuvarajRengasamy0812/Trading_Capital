import { TrendingUp, Target, Users, Award, Globe, Shield, Zap, Heart } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const About = () => {
  const stats = [
    { value: '50,000+', label: 'Active Traders' },
    { value: '$25M+', label: 'Paid in Rewards' },
    { value: '4.9/5', label: 'Trust Score' },
    { value: '150+', label: 'Countries' },
  ]

  const values = [
    { icon: Target, title: 'Transparency', desc: 'Clear rules, no hidden fees, straightforward pricing' },
    { icon: Shield, title: 'Trust', desc: 'Your success is our success. We are committed to fair trading conditions' },
    { icon: Zap, title: 'Innovation', desc: 'Constantly improving our platform and services for traders' },
    { icon: Heart, title: 'Community', desc: 'Building a supportive community of successful traders worldwide' },
  ]

  // const milestones = [
  //   { year: '2020', title: 'Founded', desc: 'Liberty Funded was established with a mission to democratize prop trading' },
  //   { year: '2021', title: '10K Traders', desc: 'Reached our first 10,000 funded traders milestone' },
  //   { year: '2022', title: 'Global Expansion', desc: 'Expanded to 100+ countries with multilingual support' },
  //   { year: '2023', title: '$10M Paid', desc: 'Surpassed $10 million in trader payouts' },
  //   { year: '2024', title: '50K Traders', desc: 'Celebrated 50,000+ active funded traders' },
  //   { year: '2025', title: 'Industry Leader', desc: 'Recognized as a top prop firm with 4.9/5 rating' },
  // ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero with Image */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/team.jpg" 
            alt="Our Team" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-full mb-6">
            <Globe className="w-4 h-4 text-[#22c55e]" />
            <span className="text-[#22c55e] font-medium">About Us</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            BUILT BY TRADERS,
            <br />
            <span className="text-[#22c55e]">FOR TRADERS</span>
          </h1>
          
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Liberty Funded was founded by a team of professional traders who understand 
            the challenges of trading with limited capital. Our mission is to provide 
            talented traders with the funding they need to succeed.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-[#22c55e] mb-2">{stat.value}</div>
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
                Our <span className="text-[#22c55e]">Story</span>
              </h2>
              <div className="space-y-4 text-zinc-400">
                <p>
                  Liberty Funded was born from a simple idea: talented traders should not be limited 
                  by their personal capital. We believe that with the right funding and support, 
                  any skilled trader can achieve financial freedom.
                </p>
                <p>
                  Founded in 2020 by a group of professional traders and fintech experts, 
                  Liberty Funded has grown from a small startup to one of the most trusted 
                  prop firms in the industry.
                </p>
                <p>
                  Our team consists of experienced traders who understand the markets, 
                  the psychology of trading, and what it takes to succeed. We have built 
                  our platform with the trader in mind, offering fair rules, fast payouts, 
                  and world-class support.
                </p>
              </div>
            </div>
            
            {/* Growth Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#22c55e]/20 to-[#16a34a]/20 rounded-2xl blur-2xl" />
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
            Our <span className="text-[#22c55e]">Values</span>
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, i) => (
              <Card key={i} className="bg-zinc-900 border-zinc-800 hover:border-[#22c55e]/30 transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-[#22c55e]/20 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-[#22c55e]" />
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
            Our <span className="text-[#22c55e]">Journey</span>
          </h2>
          
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-800 md:-translate-x-1/2" />
            
            <div className="space-y-12">
              {milestones.map((milestone, i) => (
                <div key={i} className={`relative flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="hidden md:block flex-1" />
                  
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#22c55e] rounded-full border-4 border-black md:-translate-x-1/2 z-10" />
                  
                  <div className="flex-1 ml-12 md:ml-0">
                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-[#22c55e]/30 transition-all">
                      <div className="text-[#22c55e] font-bold text-lg mb-1">{milestone.year}</div>
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-16">
            What Makes Us <span className="text-[#22c55e]">Different</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Award, 
                title: 'Industry-Leading Profit Split', 
                desc: 'Earn up to 100% of your profits with our scaling program. The highest profit splits in the industry.' 
              },
              { 
                icon: Shield, 
                title: 'Reward Guarantee', 
                desc: 'We guarantee your rewards. No delays, no excuses. Get paid on time, every time.' 
              },
              { 
                icon: Users, 
                title: 'Community First', 
                desc: 'Join a community of 50,000+ traders. Share ideas, learn, and grow together.' 
              },
              { 
                icon: Zap, 
                title: 'Lightning Fast Execution', 
                desc: 'Trade on institutional-grade infrastructure with sub-millisecond execution speeds.' 
              },
              { 
                icon: TrendingUp, 
                title: 'True Scaling', 
                desc: 'Scale from $50K to $2M with achievable targets. No gimmicks, just real growth.' 
              },
              { 
                icon: Heart, 
                title: '24/7 Support', 
                desc: 'Our dedicated support team is available around the clock to help you succeed.' 
              },
            ].map((item, i) => (
              <div key={i} className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:border-[#22c55e]/30 transition-all">
                <div className="w-12 h-12 rounded-lg bg-[#22c55e]/20 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#22c55e]" />
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
            Join the <span className="text-[#22c55e]">Movement</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
            We are always looking for talented individuals to join our team. 
            If you are passionate about trading and fintech, we would love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:careers@libertyfunded.com" className="inline-flex items-center gap-2 px-6 py-3 bg-[#22c55e] hover:bg-[#4ade80] text-white font-bold rounded-lg transition-colors">
              View Open Positions
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About