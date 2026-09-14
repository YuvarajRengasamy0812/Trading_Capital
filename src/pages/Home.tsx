import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  TrendingUp, Check, ArrowRight, Users, Wallet, 
  Star, BarChart3, Shield, Sparkles,
  CreditCard, Bitcoin, Landmark, Building2,
  ChevronRight, Award, Rocket, 
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import ChallengeSelector from '@/components/ChallengeSelector'

gsap.registerPlugin(ScrollTrigger)

const HERO_PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  delay: Math.random() * 5,
  duration: 3 + Math.random() * 4,
  size: 2 + Math.random() * 4,
}))

// Neon Text Effect Component - Brand Colors
const NeonText = ({ children, color = 'cyan', className = '' }: { children: React.ReactNode, color?: 'cyan' | 'purple' | 'green' | 'pink', className?: string }) => {
  const colorClasses = {
    cyan: 'text-[#22c55e] drop-shadow-[0_0_10px_rgba(34,197,94,0.8)] drop-shadow-[0_0_20px_rgba(34,197,94,0.5)]',
    purple: 'text-[#16a34a] drop-shadow-[0_0_10px_rgba(22,163,74,0.8)] drop-shadow-[0_0_20px_rgba(22,163,74,0.5)]',
    green: 'text-[#16a34a] drop-shadow-[0_0_10px_rgba(22,163,74,0.8)] drop-shadow-[0_0_20px_rgba(22,163,74,0.5)]',
    pink: 'text-[#22c55e] drop-shadow-[0_0_10px_rgba(34,197,94,0.8)] drop-shadow-[0_0_20px_rgba(34,197,94,0.5)]'
  }
  return <span className={`${colorClasses[color]} ${className}`}>{children}</span>
}

// Animated Background Grid
const AnimatedGrid = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(22,163,74,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
  </div>
)

// Floating Particles
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {HERO_PARTICLES.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-[#22c55e]/30 animate-pulse"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`
          }}
        />
      ))}
    </div>
  )
}

// Glowing Orb
const GlowingOrb = ({ color, className }: { color: string, className: string }) => (
  <div className={`absolute rounded-full blur-[100px] opacity-30 animate-pulse ${className}`} 
    style={{ background: color }} />
)

// Hero Section
const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-badge', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, delay: 0.2 })
      gsap.fromTo('.hero-title-line', { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, delay: 0.4 })
      gsap.fromTo('.hero-subtitle', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, delay: 0.8 })
      gsap.fromTo('.hero-cta', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, delay: 1 })
      gsap.fromTo('.hero-phone', { y: 50, opacity: 0, scale: 0.9, rotateY: -15 }, { y: 0, opacity: 1, scale: 1, rotateY: 0, duration: 1.2, delay: 0.5 })
      gsap.fromTo('.hero-stat', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 1.2 })
      gsap.fromTo('.hero-glow', { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 2, delay: 0.3 })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-black overflow-hidden pt-10">
      <AnimatedGrid />
      <FloatingParticles />
      
      {/* Background Glows */}
      <GlowingOrb color="radial-gradient(circle, rgba(34,197,94,0.35), transparent)" className="hero-glow top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px]" />
      <GlowingOrb color="radial-gradient(circle, rgba(22,163,74,0.28), transparent)" className="top-1/3 right-0 w-[600px] h-[600px]" />
      <GlowingOrb color="radial-gradient(circle, rgba(34,197,94,0.2), transparent)" className="bottom-0 left-0 w-[500px] h-[500px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Trust Badges */}
            <div className="hero-badge flex flex-wrap items-center gap-3 mb-8">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/80 border border-zinc-800 rounded-full">
                <Users className="w-4 h-4 text-amber-400" />
                <span className="text-zinc-300 text-sm"><span className="text-white font-bold">50,000+</span> TRADERS</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/80 border border-zinc-800 rounded-full">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="text-zinc-300 text-sm"><span className="text-white font-bold">4.9</span> RATING</span>
              </div>
            </div>

            {/* Title with Neon Effect */}
            <div className="mb-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tighter">
                <div className="hero-title-line text-white mb-2">TRADE</div>
                <div className="hero-title-line mb-2">
                  <NeonText color="cyan" className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl">WITHOUT</NeonText>
                </div>
                <div className="hero-title-line">
                  <NeonText color="purple" className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl">LIMITS</NeonText>
                </div>
              </h1>
            </div>

            {/* Animated Subtitle */}
            <div className="hero-subtitle flex flex-wrap items-center gap-4 mb-8">
              {[
                { icon: BarChart3, text: 'MT5 Available', bg: 'bg-green-500/20', iconClass: 'text-green-400' },
                { icon: Wallet, text: 'Get Paid 100% on Demand', bg: 'bg-[#22c55e]/20', iconClass: 'text-[#22c55e]' },
                { icon: TrendingUp, text: 'Up to $2M Capital', bg: 'bg-[#16a34a]/20', iconClass: 'text-[#16a34a]' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-3 py-2 bg-zinc-900/60 border border-zinc-800 rounded-lg hover:border-[#22c55e]/50 transition-colors">
                  <div className={`w-8 h-8 rounded ${item.bg} flex items-center justify-center`}>
                    <item.icon className={`w-4 h-4 ${item.iconClass}`} />
                  </div>
                  <span className="text-zinc-300 text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hero-cta flex flex-wrap items-center gap-4 mb-12">
              <Link to="/challenges">
                <Button size="lg" className="bg-gradient-to-r from-[#22c55e] to-[#16a34a] hover:from-[#4ade80] hover:to-[#22c55e] text-black font-bold px-8 py-6 text-lg shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:shadow-[0_0_40px_rgba(34,197,94,0.6)] transition-all">
                  <Rocket className="mr-2 w-5 h-5" />
                  Get Funded
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-green-400 text-sm font-medium">Reward Guaranteed</span>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-8">
              <div className="hero-stat">
                <div className="text-3xl font-black">
                  <NeonText color="cyan">$25M+</NeonText>
                </div>
                <div className="text-sm text-zinc-500">Paid in rewards</div>
              </div>
              <div className="hero-stat">
                <div className="text-3xl font-black text-white">$2,500</div>
                <div className="text-sm text-zinc-500">Average Reward</div>
              </div>
              <div className="hero-stat">
                <div className="text-3xl font-black">
                  <NeonText color="green">24h</NeonText>
                </div>
                <div className="text-sm text-zinc-500">Payout Time</div>
              </div>
            </div>

            {/* Social Media */}
            <div className="hero-social">
              <p className="text-zinc-500 text-sm mb-3">Join our community</p>
              <div className="flex gap-3">
                {[
                  { icon: LinkedInIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/company/libertyfunded', color: 'hover:bg-blue-700 hover:text-white' },
                  { icon: FacebookIcon, label: 'Facebook', href: 'https://www.facebook.com/libertyfunded', color: 'hover:bg-blue-600 hover:text-white' },
                  { icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/libertyfunded', color: 'hover:bg-pink-500 hover:text-white' },
                  { icon: XIcon, label: 'X', href: 'https://x.com/libertyfunded', color: 'hover:bg-black hover:text-white hover:border-white' },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className={`w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 ${social.color} transition-all hover:scale-110`}
                    title={social.label}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Animated Phone Mockup */}
          <div className="hero-phone relative flex justify-center lg:justify-end perspective-1000">
            <div className="relative animate-float">
              {/* Glow Ring */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-[#22c55e]/20 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#16a34a]/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
              </div>
              
              <img 
                src="/phone-mockup.png" 
                alt="Trading App" 
                className="w-full max-w-[350px] lg:max-w-[400px] drop-shadow-2xl"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 px-3 py-1.5 bg-green-500/90 text-black text-xs font-bold rounded-full animate-bounce">
                +$12,450
              </div>
              <div className="absolute top-1/3 -left-8 px-3 py-1.5 bg-[#22c55e]/90 text-white text-xs font-bold rounded-full animate-pulse">
                Live Trading
              </div>
              <div className="absolute -bottom-4 right-8 px-3 py-1.5 bg-[#16a34a]/90 text-white text-xs font-bold rounded-full animate-pulse" style={{ animationDelay: '1s' }}>
                98% Success
              </div>
              
              {/* Glow */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#22c55e]/30 to-[#16a34a]/30 blur-[80px] rounded-full scale-75" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Challenge Preview Section - Version 22 Style with Card Layout
const ChallengePreview = () => {
  const sectionRef = useRef<HTMLElement>(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.challenge-header', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }})
      gsap.fromTo('.promo-banners', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, delay: 0.1, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }})
      gsap.fromTo('.challenge-tabs', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, delay: 0.2, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }})
      gsap.fromTo('.challenge-content', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, delay: 0.3, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }})
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
      <AnimatedGrid />
      <GlowingOrb color="radial-gradient(circle, rgba(34,197,94,0.2), transparent)" className="top-0 right-0 w-[800px] h-[800px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ChallengeSelector
          showHeader
          showRewardBadge
          title={
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
              CHOOSE YOUR CAPITAL.
              <br />
              <span className="text-[#22c55e] drop-shadow-[0_0_15px_rgba(34,197,94,0.8)]">SELECT YOUR PACKAGE.</span>
            </h2>
          }
          subtitle="Select the route and capital package that fits your trading style. All programs include clear targets, no moving goalposts, and transparent risk rules."
          showViewAll
          viewAllHref="/challenges"
        />
      </div>
    </section>
  )
}

// How It Works Section with Animation
const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hiw-header', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }})
      gsap.fromTo('.hiw-step', { y: 50, opacity: 0, scale: 0.9 }, { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.2, scrollTrigger: { trigger: '.hiw-steps', start: 'top 80%' }})
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const steps = [
    { icon: Wallet, title: 'Unlock Capital', desc: 'Get Funded with our Capital', color: 'pink', gradient: 'from-[#22c55e] to-[#4ade80]' },
    { icon: BarChart3, title: 'Trade', desc: 'Trade with your favorite Trading Platform', color: 'purple', gradient: 'from-[#16a34a] to-[#22c55e]' },
    { icon: TrendingUp, title: 'Earn', desc: 'Withdraw 100% of your profits', color: 'green', gradient: 'from-green-500 to-emerald-500' },
  ]

  return (
    <section ref={sectionRef} id="how-it-works" className="py-24 bg-zinc-950 relative overflow-hidden">
      <AnimatedGrid />
      <GlowingOrb color="radial-gradient(circle, rgba(22,163,74,0.18), transparent)" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="hiw-header text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            HOW IT <NeonText color="purple">WORKS</NeonText>
          </h2>
          <p className="text-zinc-400 text-lg">Trade with our simulated Capital and get paid real Rewards</p>
        </div>

        <div className="hiw-steps grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="hiw-step group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#22c55e]/0 via-[#22c55e]/10 to-[#22c55e]/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-[#22c55e]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${step.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-6xl font-black text-zinc-800 absolute top-4 right-4 group-hover:text-zinc-700 transition-colors">
                  0{i + 1}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-zinc-400">{step.desc}</p>
              </div>
              {i < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#22c55e]/50 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Payout Methods Section
const PayoutMethods = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.payout-header', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }})
      gsap.fromTo('.payout-card', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, scrollTrigger: { trigger: '.payout-grid', start: 'top 80%' }})
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const methods = [
    { name: 'Bank Transfer', icon: Landmark, color: 'from-blue-500 to-blue-600', desc: 'Wire & ACH' },
    { name: 'Crypto', icon: Bitcoin, color: 'from-orange-500 to-amber-500', desc: 'BTC, ETH, USDT' },
    { name: 'Visa/Master Card', icon: CreditCard, color: 'from-[#22c55e] to-[#16a34a]', desc: 'Instant' },
    { name: 'Local Transfer', icon: Building2, color: 'from-green-500 to-emerald-500', desc: 'Regional' },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
      <AnimatedGrid />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="payout-header text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            FAST & <NeonText color="green">SECURE</NeonText> PAYOUTS
          </h2>
          <p className="text-zinc-400 text-lg">Withdraw via bank transfer, crypto, and many local payment methods</p>
        </div>

        <div className="payout-grid grid grid-cols-2 lg:grid-cols-4 gap-6">
          {methods.map((method, i) => (
            <div key={i} className="payout-card group">
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center hover:border-[#22c55e]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{method.name}</h3>
                <p className="text-zinc-500 text-sm">{method.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Live Payouts Ticker
const LivePayouts = () => {
  const payouts = [
    { amount: '$9,401.23', name: 'Jose', time: '2m' },
    { amount: '$10,024.14', name: 'Matej', time: '5m' },
    { amount: '$40,152.00', name: 'Artur', time: '8m' },
    { amount: '$10,661.55', name: 'Jhonny', time: '12m' },
    { amount: '$9,945.49', name: 'Chibane', time: '15m' },
    { amount: '$13,044.00', name: 'John', time: '18m' },
    { amount: '$9,521.90', name: 'Shiva', time: '22m' },
    { amount: '$10,096.41', name: 'Siddhant', time: '25m' },
    { amount: '$11,335.50', name: 'Florin', time: '28m' },
    { amount: '$15,902.20', name: 'Tewodros', time: '32m' },
  ]

  return (
    <section className="py-16 bg-zinc-950 overflow-hidden relative">
      <AnimatedGrid />
      
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-4">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-green-400 text-sm font-medium">LIVE</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
          RECENT <NeonText color="green">PAYOUTS</NeonText>
        </h2>
        <p className="text-zinc-500">...and thousands more</p>
      </div>

      <div className="relative">
        <div className="flex animate-marquee">
          {[...payouts, ...payouts].map((payout, i) => (
            <div key={i} className="flex-shrink-0 mx-3">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-4 min-w-[180px] hover:border-green-500/30 transition-colors">
                <div className="text-green-400 font-bold text-lg">{payout.amount}</div>
                <div className="text-zinc-400 text-sm">{payout.name}</div>
                <div className="text-zinc-600 text-xs">{payout.time} ago</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Profit Calculator
const ProfitCalculator = () => {
  const accountSizes = [1000, 2500, 5000, 10000, 25000, 50000, 100000]
  const [sizeIndex, setSizeIndex] = useState(3)
  const [profitRate, setProfitRate] = useState(8)
  const accountSize = accountSizes[sizeIndex]
  const monthlyProfit = Math.round(accountSize * (profitRate / 100))

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <AnimatedGrid />
      <GlowingOrb color="radial-gradient(circle, rgba(34,197,94,0.2), transparent)" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            CALCULATE YOUR <NeonText color="green">PROFITS</NeonText>
          </h2>
          <p className="text-zinc-400 text-lg">How much can you make?</p>
        </div>

        <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <label className="text-zinc-400 text-sm mb-4 block font-medium">Account Size</label>
              <div className="text-4xl font-black text-white mb-4">${accountSize.toLocaleString()}</div>
              <Slider value={[sizeIndex]} onValueChange={(v) => setSizeIndex(v[0])} min={0} max={accountSizes.length - 1} step={1} />
              <div className="flex justify-between text-zinc-600 text-xs mt-2">
                <span>$1K</span><span>$100K</span>
              </div>
            </div>

            <div>
              <label className="text-zinc-400 text-sm mb-4 block font-medium">Profit Rate</label>
              <div className="text-4xl font-black text-[#22c55e] mb-4">{profitRate}%</div>
              <Slider value={[profitRate]} onValueChange={(v) => setProfitRate(v[0])} min={1} max={20} step={1} />
              <div className="flex justify-between text-zinc-600 text-xs mt-2">
                <span>1%</span><span>20%</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-medium">Up to 80% Profit Split</span>
            </div>
            <div className="text-5xl md:text-7xl font-black mb-2">
              <NeonText color="green">${monthlyProfit.toLocaleString()}</NeonText>
            </div>
            <div className="text-zinc-500 text-lg">/ Month</div>
            <Link to="/challenges">
              <Button className="mt-8 bg-gradient-to-r from-[#22c55e] to-[#4ade80] hover:from-[#4ade80] hover:to-[#86efac] text-white font-bold px-8 py-6 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                Start Earning
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// Why Choose Us Section
const WhyChooseUs = () => {
  const features = [
    '100% refundable fees', 'Up to 80% Profit Split', 'Unlimited Trading Period', 
    'First Reward on Demand', 'News Trading Allowed', '$5K to $200K packages',
    'Reward Guarantee', 'Receive in 2 Business Days', 'No Hidden Rules', 'Liberty Points'
  ]

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <AnimatedGrid />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            WHY TRADERS <NeonText color="pink">LOVE</NeonText> LIBERTY
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {features.map((feature, i) => (
            <div key={i} className="group flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 hover:border-[#22c55e]/50 hover:shadow-[0_0_20px_rgba(34,197,94,0.1)] transition-all">
              <Check className="w-5 h-5 text-[#22c55e] flex-shrink-0" />
              <span className="text-zinc-300 text-sm">{feature}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-zinc-500 text-sm mb-2">You're not liable for any losses.</p>
          <Link to="/faq" className="text-[#22c55e] hover:text-[#4ade80] text-sm inline-flex items-center gap-1">
            Check FAQ for details
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

// Testimonials Section
const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.testimonial-card', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }})
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const testimonials = [
    { quote: "One of the best firms. I'm liking their firm and their challenges! I received my funded account in 3 days after passing it.", author: 'Marie', rating: 5, role: 'Funded Trader' },
    { quote: "A game changer for traders. This is by far the best experience I've had with a prop firm. The platform is stable, support is always available.", author: 'Aadit', rating: 5, role: 'Pro Trader' },
    { quote: "The best prop firm to trade for the long term. The scaling program is mouth-watering. Best scaling program I saw so far.", author: 'Aniket', rating: 5, role: 'Elite Trader' },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
      <AnimatedGrid />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            LOVED. <NeonText color="purple">TRUSTED.</NeonText> UNITED.
          </h2>
          <p className="text-zinc-400 text-lg">Join the 50+ Thousand Traders who trust Liberty</p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
            <span className="text-white font-bold text-xl">4.9</span>
            <span className="text-zinc-500">Stars from 5k verified Reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Card key={i} className="testimonial-card bg-zinc-900 border-zinc-800 hover:border-[#22c55e]/30 transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-zinc-300 mb-6 text-lg leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#22c55e] to-[#16a34a] flex items-center justify-center text-white font-bold">
                    {t.author[0]}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{t.author}</p>
                    <p className="text-zinc-500 text-sm">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Social Media Icons
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const XIcon = () => (
  <svg viewBox="0 0 1200 1227" fill="currentColor" className="w-6 h-6">
    <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
  </svg>
)

// Join Our Community Section
const JoinCommunity = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.community-content', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }})
      gsap.fromTo('.social-icon', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }})
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const socialLinks = [
    { name: 'LinkedIn', icon: LinkedInIcon, href: 'https://www.linkedin.com/company/libertyfunded', color: 'hover:bg-blue-700 hover:text-white' },
    { name: 'Facebook', icon: FacebookIcon, href: 'https://www.facebook.com/libertyfunded', color: 'hover:bg-blue-600 hover:text-white' },
    { name: 'Instagram', icon: InstagramIcon, href: 'https://www.instagram.com/libertyfunded', color: 'hover:bg-pink-500 hover:text-white' },
    { name: 'Twitter', icon: XIcon, href: 'https://x.com/libertyfunded', color: 'hover:bg-black hover:text-white hover:border-white' },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
      <AnimatedGrid />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="community-content text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            JOIN OUR <NeonText color="pink">COMMUNITY</NeonText>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Connect with thousands of traders worldwide. Get updates, share strategies, and be part of the Liberty family.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map((social, i) => (
            <a
              key={i}
              href={social.href}
              className={`social-icon flex items-center gap-3 px-6 py-4 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 transition-all duration-300 hover:-translate-y-1 ${social.color} hover:border-transparent`}
              title={social.name}
            >
              <social.icon />
              <span className="font-medium">{social.name}</span>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-full">
            <Users className="w-4 h-4 text-[#22c55e]" />
            <span className="text-[#22c55e] text-sm font-medium">50,000+ Traders Connected</span>
          </div>
        </div>
      </div>
    </section>
  )
}

// FAQ Preview Section
const FAQPreview = () => {
  const faqs = [
    { q: 'What is Liberty Funded?', a: 'Liberty Funded is a proprietary trading firm that provides funded accounts to traders who pass our evaluation challenges.' },
    { q: 'How do the challenges work?', a: 'Traders choose a challenge type and account size, pay the one-time fee, and trade according to our rules.' },
    { q: 'What is the profit split?', a: 'The 2-Step, 1-Step, and Instant routes offer profit splits up to 80%.' },
    { q: 'How quickly can I get paid?', a: 'We process payouts within 24-48 hours of your request.' },
  ]

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <AnimatedGrid />
      
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            WE'RE HERE TO <NeonText color="pink">HELP</NeonText> 24/7
          </h2>
          <p className="text-zinc-400 text-lg">Check our FAQ for quick answers or contact us anytime</p>
        </div>

        <div className="space-y-4 mb-10">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-5 hover:border-[#22c55e]/30 transition-colors">
              <h3 className="text-white font-medium mb-2 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#22c55e]" />
                {faq.q}
              </h3>
              <p className="text-zinc-400 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/faq">
            <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800 hover:border-[#22c55e]/50 px-8 py-5">
              View All FAQs
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

// Home Page
const Home = () => {
  return (
    <>
      <HeroSection />
      <ChallengePreview />
      <HowItWorks />
      <PayoutMethods />
      <LivePayouts />
      <ProfitCalculator />
      <WhyChooseUs />
      <Testimonials />
      <JoinCommunity />
      <FAQPreview />
    </>
  )
}

export default Home
