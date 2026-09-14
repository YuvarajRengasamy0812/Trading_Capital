import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  TrendingUp, Check, ArrowRight, Users, Wallet, 
  Star, BarChart3, Shield,
  ChevronRight, Award, Rocket, 
} from 'lucide-react'
import { Button } from '@/components/ui/button'
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
    cyan: 'text-[#C6FF00] drop-shadow-[0_0_10px_rgba(198,255,0,0.8)] drop-shadow-[0_0_20px_rgba(198,255,0,0.5)]',
    purple: 'text-[#C6FF00] drop-shadow-[0_0_10px_rgba(198,255,0,0.8)] drop-shadow-[0_0_20px_rgba(198,255,0,0.5)]',
    green: 'text-[#C6FF00] drop-shadow-[0_0_10px_rgba(198,255,0,0.8)] drop-shadow-[0_0_20px_rgba(198,255,0,0.5)]',
    pink: 'text-[#C6FF00] drop-shadow-[0_0_10px_rgba(198,255,0,0.8)] drop-shadow-[0_0_20px_rgba(198,255,0,0.5)]'
  }
  return <span className={`${colorClasses[color]} ${className}`}>{children}</span>
}

// Animated Background Grid
const AnimatedGrid = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(198,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(198,255,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
    <div className="absolute inset-0 bg-gradient-to-b from-[#0D0F12] via-transparent to-[#0D0F12]" />
  </div>
)

// Floating Particles
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {HERO_PARTICLES.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-[#C6FF00]/30 animate-pulse"
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
    <section ref={sectionRef} className="relative min-h-screen bg-[#0D0F12] overflow-hidden pt-10">
      <AnimatedGrid />
      <FloatingParticles />
      
      {/* Background Glows */}
      <GlowingOrb color="radial-gradient(circle, rgba(198,255,0,0.35), transparent)" className="hero-glow top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px]" />
      <GlowingOrb color="radial-gradient(circle, rgba(198,255,0,0.28), transparent)" className="top-1/3 right-0 w-[600px] h-[600px]" />
      <GlowingOrb color="radial-gradient(circle, rgba(198,255,0,0.2), transparent)" className="bottom-0 left-0 w-[500px] h-[500px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Trust Badges */}
            <div className="hero-badge flex flex-wrap items-center gap-3 mb-8">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/80 border border-zinc-800 rounded-full">
                <Users className="w-4 h-4 text-amber-400" />
                <span className="text-zinc-300 text-sm">Structured funding challenges</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/80 border border-zinc-800 rounded-full">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="text-zinc-300 text-sm">Simulated evaluation rules</span>
              </div>
            </div>

            {/* Title with Neon Effect */}
            <div className="mb-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tighter">
                <div className="hero-title-line text-white mb-2">YOUR</div>
                <div className="hero-title-line mb-2">
                  <NeonText color="cyan" className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl">STRATEGY.</NeonText>
                </div>
                <div className="hero-title-line">
                  <NeonText color="purple" className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl">OUR CAPITAL.</NeonText>
                </div>
              </h1>
              <p className="hero-subtitle mt-6 max-w-2xl text-lg text-zinc-300">
                Prove your trading ability. Access greater capital. Build your path to scale.
              </p>
            </div>

            {/* Animated Subtitle */}
            <div className="hero-subtitle flex flex-wrap items-center gap-4 mb-8">
              {[
                { icon: BarChart3, text: 'Clear risk parameters', bg: 'bg-[#C6FF00]/20', iconClass: 'text-[#C6FF00]' },
                { icon: Wallet, text: '80 / 20 profit split', bg: 'bg-[#C6FF00]/20', iconClass: 'text-[#C6FF00]' },
                { icon: TrendingUp, text: '14-day payout cycle', bg: 'bg-[#C6FF00]/20', iconClass: 'text-[#C6FF00]' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-3 py-2 bg-zinc-900/60 border border-zinc-800 rounded-lg hover:border-[#C6FF00]/50 transition-colors">
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
                <Button size="lg" className="bg-gradient-to-r from-[#C6FF00] to-[#C6FF00] hover:from-[#DFFF66] hover:to-[#C6FF00] text-black font-bold px-8 py-6 text-lg shadow-[0_0_30px_rgba(198,255,0,0.4)] hover:shadow-[0_0_40px_rgba(198,255,0,0.6)] transition-all">
                  <Rocket className="mr-2 w-5 h-5" />
                  Choose Your Account
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#C6FF00]/10 border border-[#C6FF00]/30 rounded-full">
                <Shield className="w-5 h-5 text-[#C6FF00]" />
                <span className="text-[#C6FF00] text-sm font-medium">How It Works</span>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-8">
              <div className="hero-stat">
                <div className="text-3xl font-black">
                  <NeonText color="cyan">4</NeonText>
                </div>
                <div className="text-sm text-zinc-500">Account sizes</div>
              </div>
              <div className="hero-stat">
                <div className="text-3xl font-black text-white">3</div>
                <div className="text-sm text-zinc-500">Program routes</div>
              </div>
              <div className="hero-stat">
                <div className="text-3xl font-black">
                  <NeonText color="green">80%</NeonText>
                </div>
                <div className="text-sm text-zinc-500">Trader share</div>
              </div>
            </div>

            {/* Social Media */}
            <div className="hero-social">
              <p className="text-zinc-500 text-sm mb-3">Join our community</p>
              <div className="flex gap-3">
                {[
                  { icon: LinkedInIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/company/tradingcapital', color: 'hover:bg-blue-700 hover:text-white' },
                  { icon: FacebookIcon, label: 'Facebook', href: 'https://www.facebook.com/tradingcapital', color: 'hover:bg-blue-600 hover:text-white' },
                  { icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/tradingcapital', color: 'hover:bg-pink-500 hover:text-white' },
                  { icon: XIcon, label: 'X', href: 'https://x.com/tradingcapital', color: 'hover:bg-[#0D0F12] hover:text-white hover:border-white' },
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
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-[#C6FF00]/20 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#C6FF00]/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
              </div>
              
              <img 
                src="/phone-mockup.png" 
                alt="Trading App" 
                className="w-full max-w-[350px] lg:max-w-[400px] drop-shadow-2xl"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 px-3 py-1.5 bg-[#C6FF00]/90 text-black text-xs font-bold rounded-full animate-bounce">
                80 / 20 Split
              </div>
              <div className="absolute top-1/3 -left-8 px-3 py-1.5 bg-[#C6FF00]/90 text-black text-xs font-bold rounded-full animate-pulse">
                Risk Clarity
              </div>
              <div className="absolute -bottom-4 right-8 px-3 py-1.5 bg-[#C6FF00]/90 text-black text-xs font-bold rounded-full animate-pulse" style={{ animationDelay: '1s' }}>
                14-Day Cycle
              </div>
              
              {/* Glow */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#C6FF00]/30 to-[#C6FF00]/30 blur-[80px] rounded-full scale-75" />
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
    <section ref={sectionRef} className="py-24 bg-[#0D0F12] relative overflow-hidden">
      <AnimatedGrid />
      <GlowingOrb color="radial-gradient(circle, rgba(198,255,0,0.2), transparent)" className="top-0 right-0 w-[800px] h-[800px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ChallengeSelector
          showHeader
          showRewardBadge
          title={
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
              CHOOSE YOUR TRADING CAPITAL.
              <br />
              <span className="text-[#C6FF00] drop-shadow-[0_0_15px_rgba(198,255,0,0.8)]">CHOOSE THE ROUTE THAT FITS YOUR STRATEGY.</span>
            </h2>
          }
          subtitle="Select your program, choose your account size and start trading within clear, transparent parameters."
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
    { icon: Wallet, title: 'Choose', desc: 'Select the Trading Capital program and account size that fits your objectives.', color: 'pink', gradient: 'from-[#C6FF00] to-[#DFFF66]' },
    { icon: BarChart3, title: 'Trade', desc: "Trade your strategy while staying within the program's defined risk parameters.", color: 'purple', gradient: 'from-[#C6FF00] to-[#C6FF00]' },
    { icon: TrendingUp, title: 'Progress', desc: 'Meet your objectives, reach the funded stage and become eligible for payouts.', color: 'green', gradient: 'from-[#C6FF00] to-[#C6FF00]' },
  ]

  return (
    <section ref={sectionRef} id="how-it-works" className="py-24 bg-zinc-950 relative overflow-hidden">
      <AnimatedGrid />
      <GlowingOrb color="radial-gradient(circle, rgba(198,255,0,0.18), transparent)" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="hiw-header text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            HOW IT <NeonText color="purple">WORKS</NeonText>
          </h2>
          <p className="text-zinc-400 text-lg">From strategy to capital through clear, measurable steps.</p>
        </div>

        <div className="hiw-steps grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="hiw-step group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#C6FF00]/0 via-[#C6FF00]/10 to-[#C6FF00]/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-[#C6FF00]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(198,255,0,0.2)]">
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
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#C6FF00]/50 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Payout Methods Section
const TetherLogo = () => (
  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#26A17B] shadow-[0_0_24px_rgba(38,161,123,0.28)]">
    <span className="text-3xl font-black text-white">T</span>
  </div>
)

const BitcoinLogo = () => (
  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F7931A] shadow-[0_0_24px_rgba(247,147,26,0.28)]">
    <span className="text-3xl font-black text-white">₿</span>
  </div>
)

const NowPaymentsLogo = () => (
  <div className="flex h-16 w-32 items-center justify-center rounded-2xl bg-white px-3 shadow-[0_0_28px_rgba(96,165,250,0.2)]">
    <img
      src="/nowpayments-logo.png"
      alt="NOWPayments"
      className="h-10 w-full object-contain"
    />
  </div>
)

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
    { name: 'USDT', mark: <TetherLogo />, desc: 'Tether payments' },
    { name: 'Bitcoin', mark: <BitcoinLogo />, desc: 'BTC payments' },
    { name: 'NOWPayments', mark: <NowPaymentsLogo />, desc: 'Crypto checkout' },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-[#0D0F12] relative overflow-hidden">
      <AnimatedGrid />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="payout-header text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            FAST & <NeonText color="green">SECURE</NeonText> PAYOUTS
          </h2>
          <p className="text-zinc-400 text-lg">Deposit and Withdraw via crypto payment methods</p>
        </div>

        <div className="payout-grid grid gap-6 sm:grid-cols-3">
          {methods.map((method, i) => (
            <div key={i} className="payout-card group">
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center hover:border-[#C6FF00]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(198,255,0,0.15)]">
                <div className="mx-auto mb-4 flex justify-center transition-transform group-hover:scale-110">
                  {method.mark}
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
  return (
    <section className="py-16 bg-zinc-950 overflow-hidden relative">
      <AnimatedGrid />
      
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C6FF00]/10 border border-[#C6FF00]/30 rounded-full mb-4">
          <div className="w-2 h-2 bg-[#C6FF00] rounded-full animate-pulse" />
          <span className="text-[#C6FF00] text-sm font-medium">LIVE</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
          TRADER <NeonText color="green">PAYOUTS</NeonText>
        </h2>
        <p className="text-zinc-500">Keep more of what you earn when eligible for payout.</p>
      </div>

      <div className="relative">
        <div className="grid gap-4 px-6 md:grid-cols-2">
          <div className="mx-auto w-full max-w-sm rounded-xl border border-zinc-800 bg-zinc-900 px-6 py-5 text-center">
            <div className="text-[#C6FF00] font-black text-3xl">80%</div>
            <div className="text-zinc-300 font-semibold">Trader Profit Share</div>
            <p className="mt-2 text-sm text-zinc-500">When eligible for payout, traders keep 80% of approved profits.</p>
          </div>
          <div className="mx-auto w-full max-w-sm rounded-xl border border-zinc-800 bg-zinc-900 px-6 py-5 text-center">
            <div className="text-[#C6FF00] font-black text-3xl">14 Days</div>
            <div className="text-zinc-300 font-semibold">Payout Cycle</div>
            <p className="mt-2 text-sm text-zinc-500">Funded traders become eligible subject to account status and payout rules.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Why Choose Us Section
const WhyChooseUs = () => {
  const features = [
    'Clear rules', 'Transparent targets', 'Flexible trading conditions',
    'Structured progression', 'News trading allowed', 'Overnight holding allowed',
    'Weekend holding allowed', 'Legitimate EAs allowed', '14-day payout cycle', '80 / 20 split'
  ]

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <AnimatedGrid />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            WHY <NeonText color="pink">TRADING CAPITAL</NeonText>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {features.map((feature, i) => (
            <div key={i} className="group flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 hover:border-[#C6FF00]/50 hover:shadow-[0_0_20px_rgba(198,255,0,0.1)] transition-all">
              <Check className="w-5 h-5 text-[#C6FF00] flex-shrink-0" />
              <span className="text-zinc-300 text-sm">{feature}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-zinc-500 text-sm mb-2">Built for disciplined traders.</p>
          <Link to="/faq" className="text-[#C6FF00] hover:text-[#DFFF66] text-sm inline-flex items-center gap-1">
            Check FAQ for details
            <ChevronRight className="w-4 h-4" />
          </Link>
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
    { name: 'LinkedIn', icon: LinkedInIcon, href: 'https://www.linkedin.com/company/tradingcapital', color: 'hover:bg-blue-700 hover:text-white' },
    { name: 'Facebook', icon: FacebookIcon, href: 'https://www.facebook.com/tradingcapital', color: 'hover:bg-blue-600 hover:text-white' },
    { name: 'Instagram', icon: InstagramIcon, href: 'https://www.instagram.com/tradingcapital', color: 'hover:bg-pink-500 hover:text-white' },
    { name: 'Twitter', icon: XIcon, href: 'https://x.com/tradingcapital', color: 'hover:bg-[#0D0F12] hover:text-white hover:border-white' },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-[#0D0F12] relative overflow-hidden">
      <AnimatedGrid />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="community-content text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            JOIN OUR <NeonText color="pink">COMMUNITY</NeonText>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Get updates, product news and platform announcements from Trading Capital.
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C6FF00]/10 border border-[#C6FF00]/30 rounded-full">
            <Users className="w-4 h-4 text-[#C6FF00]" />
            <span className="text-[#C6FF00] text-sm font-medium">Structured funding challenges for disciplined traders worldwide.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

// FAQ Preview Section
const FAQPreview = () => {
  const faqs = [
    { q: 'What is Trading Capital?', a: 'Trading Capital is a proprietary trading evaluation firm that assesses performance, discipline, and risk management through structured funding challenges in a simulated trading environment.' },
    { q: 'Which program should I choose?', a: 'Choose 1-Step for the fastest evaluation route, 2-Step for a lower entry price and wider risk parameters, or Instant Funding to start without an evaluation phase.' },
    { q: 'What profit share do funded traders receive?', a: "Trading Capital's standard funded profit split is 80% to the trader and 20% to Trading Capital." },
    { q: 'How often can I receive payouts?', a: 'Eligible funded traders operate on a 14-day payout cycle, subject to the applicable payout rules and account status.' },
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
            <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-5 hover:border-[#C6FF00]/30 transition-colors">
              <h3 className="text-white font-medium mb-2 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#C6FF00]" />
                {faq.q}
              </h3>
              <p className="text-zinc-400 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/faq">
            <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800 hover:border-[#C6FF00]/50 px-8 py-5">
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
      
      <WhyChooseUs />
      <JoinCommunity />
      <FAQPreview />
    </>
  )
}

export default Home
