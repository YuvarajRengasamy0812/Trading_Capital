import { useState } from 'react'
import type { ReactNode } from 'react'
import { ArrowRight, Rocket, Shield, Target, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

type ChallengeSelectorProps = {
  showHeader?: boolean
  showRewardBadge?: boolean
  title?: ReactNode
  subtitle?: ReactNode
  buyHref?: string
  showViewAll?: boolean
  viewAllHref?: string
}

type PackageAccount = {
  size: string
  price: number
}

const ChallengeSelector = ({
  showHeader = true,
  showRewardBadge = false,
  title,
  subtitle,
  buyHref = '/checkout',
  showViewAll = false,
  viewAllHref = '/challenges',
}: ChallengeSelectorProps) => {
  const [activeTab, setActiveTab] = useState<'1step' | '2step' | 'instant'>('1step')
  const challengeData = {
    '2step': {
      name: '2-Step Challenge',
      description: 'Two phases with wider risk parameters and a lower entry cost.',
      badge: 'Best Value',
      specs: {
        profitTarget1: '8%',
        profitTarget2: '5%',
        dailyLoss: '5%',
        maxLoss: '10%',
        minDays: '3 per phase',
        tradingPeriod: 'Unlimited',
        leverage: 'TBD / platform',
        profitSplit: '80 / 20',
        payoutCycle: '14 days'
      },
      accounts: [
        { size: '$10K', price: 100 },
        { size: '$25K', price: 200 },
        { size: '$50K', price: 300 },
        { size: '$100K', price: 700 },
      ] satisfies PackageAccount[]
    },
    '1step': {
      name: '1-Step Challenge',
      description: 'One evaluation phase for traders who want a faster route to the funded stage.',
      badge: 'Most Popular',
      specs: {
        profitTarget1: '8%',
        profitTarget2: 'N/A',
        dailyLoss: '3%',
        maxLoss: '6%',
        minDays: '3',
        tradingPeriod: 'Unlimited',
        leverage: 'TBD / platform',
        profitSplit: '80 / 20',
        payoutCycle: '14 days'
      },
      accounts: [
        { size: '$10K', price: 150 },
        { size: '$25K', price: 300 },
        { size: '$50K', price: 500 },
        { size: '$100K', price: 1000 },
      ] satisfies PackageAccount[]
    },
    'instant': {
      name: 'Instant Funding',
      description: 'Start immediately under Trading Capital direct-funded risk parameters.',
      badge: 'No Evaluation',
      specs: {
        profitTarget1: 'None',
        profitTarget2: 'N/A',
        dailyLoss: '3%',
        maxLoss: '6%',
        minDays: 'N/A / operational',
        tradingPeriod: 'N/A',
        leverage: 'Up to 1:30',
        profitSplit: '80 / 20',
        payoutCycle: '14 days'
      },
      accounts: [
        { size: '$10K', price: 500 },
        { size: '$25K', price: 1000 },
        { size: '$50K', price: 2500 },
        { size: '$100K', price: 5000 },
      ] satisfies PackageAccount[]
    }
  }

  const current = challengeData[activeTab]

  return (
    <>
      {showHeader && (
        <div className="challenge-header text-center mb-8">
          {showRewardBadge && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C6FF00]/10 border border-[#C6FF00]/30 rounded-full mb-6">
              <Shield className="w-4 h-4 text-[#C6FF00]" />
              <span className="text-[#C6FF00] text-sm font-medium">Clear Program Rules</span>
            </div>
          )}
          {title}
          {subtitle && <p className="text-zinc-400 text-lg max-w-2xl mx-auto">{subtitle}</p>}
        </div>
      )}

      <div className="promo-banners flex flex-wrap justify-center gap-4 mb-8">
        <div className="bg-gradient-to-r from-amber-500/20 to-amber-600/10 border border-amber-500/30 rounded-xl px-6 py-4">
          <div className="text-amber-400 text-xs font-medium uppercase tracking-wider mb-1">Launch Access</div>
          <div className="text-white font-bold text-lg">Choose your account route</div>
          <p className="mt-1 text-sm text-amber-100/70">$10K, $25K, $50K and $100K programs</p>
        </div>
        <div className="bg-gradient-to-r from-[#C6FF00]/20 to-[#C6FF00]/10 border border-[#C6FF00]/30 rounded-xl px-6 py-4">
          <div className="text-[#C6FF00] text-xs font-medium uppercase tracking-wider mb-1">Core Terms</div>
          <div className="text-white font-bold text-lg">80 / 20 split + 14-day cycle</div>
          <p className="mt-1 text-sm text-lime-100/70">Rules update from the selected program</p>
        </div>
      </div>

      <div className="challenge-tabs flex flex-wrap justify-center gap-3 mb-8">
        <button
          onClick={() => setActiveTab('2step')}
          className={`relative flex items-center gap-2 px-6 py-4 rounded-xl font-bold transition-all duration-300 ${
            activeTab === '2step'
              ? 'bg-[#C6FF00] text-black'
              : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white'
          }`}
        >
          <Target className="w-5 h-5" />
          2-Step Challenge
          {activeTab === '2step' && (
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-[#C6FF00] text-black text-[10px] font-bold rounded-full">
              Best Value
            </span>
          )}
        </button>
        <button
          onClick={() => setActiveTab('1step')}
          className={`relative flex items-center gap-2 px-6 py-4 rounded-xl font-bold transition-all duration-300 ${
            activeTab === '1step'
              ? 'bg-[#C6FF00] text-black'
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
              ? 'bg-[#C6FF00] text-black'
              : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white'
          }`}
        >
          <Rocket className="w-5 h-5" />
          Instant Funding
          <span className="absolute -top-2 right-2 px-2 py-0.5 bg-[#C6FF00] text-black text-[10px] font-bold rounded-full">
            No Evaluation
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
              <div className="flex justify-between items-center py-3 border-b border-zinc-800">
                <span className="text-zinc-500 text-sm">Profit Split</span>
                <span className="text-[#C6FF00] font-semibold">{current.specs.profitSplit}</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-zinc-500 text-sm">Payout Cycle</span>
                <span className="text-[#C6FF00] font-semibold">{current.specs.payoutCycle}</span>
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
                className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-5 hover:border-[#C6FF00]/50 transition-all group"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-white font-bold text-lg">{account.size}</span>
                  <span className="text-zinc-600 text-xs bg-zinc-800 px-2 py-1 rounded">Capital</span>
                </div>
                <div className="mb-4">
                  <span className="text-[#C6FF00] font-bold text-2xl">${account.price.toLocaleString()}</span>
                </div>
                <a
                  href={buyHref}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-zinc-800 hover:bg-[#C6FF00] text-zinc-400 hover:text-black font-semibold rounded-lg transition-all"
                >
                  {activeTab === 'instant' ? 'Get Instant Funding' : 'Start Challenge'}
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
            <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800 hover:border-[#C6FF00]/50 px-8 py-5">
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
