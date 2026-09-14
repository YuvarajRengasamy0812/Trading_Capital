import { useState } from 'react'
import type { ReactNode } from 'react'
import { ArrowRight, Copy, Rocket, Shield, Target, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

type ChallengeSelectorProps = {
  showHeader?: boolean
  showRewardBadge?: boolean
  title?: ReactNode
  subtitle?: ReactNode
  buyHref?: string
  showViewAll?: boolean
  viewAllHref?: string
}

type PackageAccount =
  | {
      size: string
      phase1Price: number
      phase2Price: number
    }
  | {
      size: string
      price: number
    }

const ChallengeSelector = ({
  showHeader = true,
  showRewardBadge = false,
  title,
  subtitle,
  buyHref = 'https://secure.libertymarkets.org/prop/login',
  showViewAll = false,
  viewAllHref = '/challenges',
}: ChallengeSelectorProps) => {
  const [activeTab, setActiveTab] = useState<'2step' | '1step' | 'instant'>('2step')
  const copyCode = (code: string) => {
    navigator.clipboard
      .writeText(code)
      .then(() => toast.success(`Code ${code} copied`))
      .catch(() => toast.error('Unable to copy code'))
  }

  const challengeData = {
    '2step': {
      name: '2-Step Challenge',
      description: 'Our most popular challenge. Pass two phases to get funded.',
      badge: 'Most Popular',
      specs: {
        profitTarget1: '7%',
        profitTarget2: '5%',
        dailyLoss: '5%',
        maxLoss: '8%',
        minDays: '3',
        tradingPeriod: 'Unlimited',
        leverage: '1:100',
        profitSplit: 'Up to 80%'
      },
      accounts: [
        { size: '$5K', phase1Price: 10, phase2Price: 10 },
        { size: '$10K', phase1Price: 10, phase2Price: 25 },
        { size: '$25K', phase1Price: 10, phase2Price: 45 },
        { size: '$50K', phase1Price: 10, phase2Price: 75 },
        { size: '$100K', phase1Price: 10, phase2Price: 115 },
        { size: '$150K', phase1Price: 10, phase2Price: 165 },
        { size: '$200K', phase1Price: 10, phase2Price: 215 },
      ] satisfies PackageAccount[]
    },
    '1step': {
      name: '1-Step Challenge',
      description: 'Pass one phase and start trading immediately.',
      badge: null,
      specs: {
        profitTarget1: '8%',
        profitTarget2: 'N/A',
        dailyLoss: '4%',
        maxLoss: '8%',
        minDays: '3',
        tradingPeriod: 'Unlimited',
        leverage: '1:50',
        profitSplit: 'Up to 80%'
      },
      accounts: [
        { size: '$5K', price: 39 },
        { size: '$10K', price: 59 },
        { size: '$25K', price: 129 },
        { size: '$50K', price: 229 },
        { size: '$100K', price: 419 },
        { size: '$150K', price: 649 },
        { size: '$200K', price: 849 },
      ] satisfies PackageAccount[]
    },
    'instant': {
      name: 'Instant Funding',
      description: 'Direct funded route with 1:30 leverage and up to 80% split.',
      badge: 'New',
      specs: {
        profitTarget1: '8%',
        profitTarget2: 'N/A',
        dailyLoss: '4%',
        maxLoss: '8%',
        minDays: '3',
        tradingPeriod: 'Unlimited',
        leverage: '1:30',
        profitSplit: 'Up to 80%'
      },
      accounts: [
        { size: '$5K', price: 95 },
        { size: '$10K', price: 155 },
        { size: '$25K', price: 255 },
        { size: '$50K', price: 395 },
        { size: '$100K', price: 595 },
        { size: '$150K', price: 795 },
        { size: '$200K', price: 995 },
      ] satisfies PackageAccount[]
    }
  }

  const current = challengeData[activeTab]

  return (
    <>
      {showHeader && (
        <div className="challenge-header text-center mb-8">
          {showRewardBadge && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm font-medium">Reward Guaranteed</span>
            </div>
          )}
          {title}
          {subtitle && <p className="text-zinc-400 text-lg max-w-2xl mx-auto">{subtitle}</p>}
        </div>
      )}

      <div className="promo-banners flex flex-wrap justify-center gap-4 mb-8">
        <div className="bg-gradient-to-r from-amber-500/20 to-amber-600/10 border border-amber-500/30 rounded-xl px-6 py-4">
          <div className="text-amber-400 text-xs font-medium uppercase tracking-wider mb-1">Limited Time</div>
          <div className="text-white font-bold text-lg">40% OFF + BOGO*</div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-amber-400 text-sm font-mono">BOGO40</span>
            <button
              type="button"
              onClick={() => copyCode('BOGO40')}
              className="text-amber-400 hover:text-amber-300 transition-colors"
              aria-label="Copy BOGO40 code"
            >
              <Copy className="w-3 h-3" />
            </button>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#22c55e]/20 to-[#22c55e]/10 border border-[#22c55e]/30 rounded-xl px-6 py-4">
          <div className="text-[#22c55e] text-xs font-medium uppercase tracking-wider mb-1">New Customers</div>
          <div className="text-white font-bold text-lg">50% OFF First Account</div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[#22c55e] text-sm font-mono">FIRSTLIBERTY</span>
            <button
              type="button"
              onClick={() => copyCode('FIRSTLIBERTY')}
              className="text-[#22c55e] hover:text-[#4ade80] transition-colors"
              aria-label="Copy FIRSTLIBERTY code"
            >
              <Copy className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      <div className="challenge-tabs flex flex-wrap justify-center gap-3 mb-8">
        <button
          onClick={() => setActiveTab('2step')}
          className={`relative flex items-center gap-2 px-6 py-4 rounded-xl font-bold transition-all duration-300 ${
            activeTab === '2step'
              ? 'bg-[#22c55e] text-white'
              : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white'
          }`}
        >
          <Target className="w-5 h-5" />
          2-Step Challenge
          {activeTab === '2step' && (
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-[#22c55e] text-white text-[10px] font-bold rounded-full">
              Most Popular
            </span>
          )}
        </button>
        <button
          onClick={() => setActiveTab('1step')}
          className={`relative flex items-center gap-2 px-6 py-4 rounded-xl font-bold transition-all duration-300 ${
            activeTab === '1step'
              ? 'bg-[#22c55e] text-white'
              : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white'
          }`}
        >
          <Zap className="w-5 h-5" />
          1-Step Challenge
        </button>
        <button
          onClick={() => setActiveTab('instant')}
          className={`relative flex items-center gap-2 px-6 py-4 rounded-xl font-bold transition-all duration-300 ${
            activeTab === 'instant'
              ? 'bg-[#22c55e] text-white'
              : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white'
          }`}
        >
          <Rocket className="w-5 h-5" />
          Instant Funding
          <span className="absolute -top-2 right-2 px-2 py-0.5 bg-[#16a34a] text-white text-[10px] font-bold rounded-full">
            New
          </span>
        </button>
      </div>

      <div className="challenge-content grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4">
          <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 h-full">
            <h3 className="text-xl font-bold text-white mb-2">{current.name}</h3>
            <p className="text-zinc-500 text-sm mb-6">{current.description}</p>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-zinc-800">
                <span className="text-zinc-500 text-sm">Profit Target Phase 1</span>
                <span className="text-white font-semibold">{current.specs.profitTarget1}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-zinc-800">
                <span className="text-zinc-500 text-sm">Profit Target Phase 2</span>
                <span className="text-white font-semibold">{current.specs.profitTarget2}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-zinc-800">
                <span className="text-zinc-500 text-sm">Maximum Daily Loss</span>
                <span className="text-white font-semibold">{current.specs.dailyLoss}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-zinc-800">
                <span className="text-zinc-500 text-sm">Maximum Loss</span>
                <span className="text-white font-semibold">{current.specs.maxLoss}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-zinc-800">
                <span className="text-zinc-500 text-sm">Leverage</span>
                <span className="text-white font-semibold">{current.specs.leverage}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-zinc-800">
                <span className="text-zinc-500 text-sm">Minimum Trading Days</span>
                <span className="text-white font-semibold">{current.specs.minDays}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-zinc-800">
                <span className="text-zinc-500 text-sm">Trading Period</span>
                <span className="text-white font-semibold">{current.specs.tradingPeriod}</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-zinc-500 text-sm">Profit Split</span>
                <span className="text-[#22c55e] font-semibold">{current.specs.profitSplit}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="mb-4">
            <h4 className="text-white font-semibold">Choose Capital Package</h4>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {current.accounts.map((account, index) => (
              <div
                key={index}
                className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-5 hover:border-[#22c55e]/50 transition-all group"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-white font-bold text-lg">{account.size}</span>
                  <span className="text-zinc-600 text-xs bg-zinc-800 px-2 py-1 rounded">Capital</span>
                </div>
                {'phase1Price' in account ? (
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center justify-between rounded-lg bg-black/30 px-3 py-2">
                      <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">Phase 1</span>
                      <span className="text-[#22c55e] text-lg font-bold">${account.phase1Price}</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-black/30 px-3 py-2">
                      <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">Phase 2</span>
                      <span className="text-[#22c55e] text-lg font-bold">${account.phase2Price}</span>
                    </div>
                  </div>
                ) : (
                  <div className="mb-4">
                    <span className="text-[#22c55e] font-bold text-2xl">${account.price}</span>
                  </div>
                )}
                <a
                  href={buyHref}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-zinc-800 hover:bg-[#22c55e] text-zinc-400 hover:text-white font-semibold rounded-lg transition-all"
                >
                  Buy
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showViewAll && (
        <div className="text-center mt-10">
          <Link to={viewAllHref}>
            <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800 hover:border-[#22c55e]/50 px-8 py-5">
              View All Plans & Pricing
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      )}
    </>
  )
}

export default ChallengeSelector
