import { useState } from 'react'
import type { ReactNode } from 'react'
import { ArrowRight, Shield, Target, Zap } from 'lucide-react'
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

type ChallengeKey = '1step' | '2step'

type PackageAccount = {
  size: string
  price: number
  cta: string
}

const challengeData: Record<ChallengeKey, {
  name: string
  shortName: string
  positioning: string
  description: string
  badge: string
  icon: typeof Zap
  specs: {
    profitTarget: string
    dailyLoss: string
    maxLoss: string
    profitSplit: string
    payoutCycle: string
    leverage: string
    riskPerTrade: string
    exposure: string
  }
  accounts: PackageAccount[]
}> = {
  '1step': {
    name: '1-Step Challenge',
    shortName: '1-Step',
    positioning: 'One step. One target.',
    description: 'Reach 8%. Become a TC Trader.',
    badge: 'Direct Route',
    icon: Zap,
    specs: {
      profitTarget: '8%',
      dailyLoss: '3%',
      maxLoss: '6%',
      profitSplit: '80% Trader',
      payoutCycle: 'Every 14 days',
      leverage: 'Up to 1:30',
      riskPerTrade: '1%',
      exposure: '3%',
    },
    accounts: [
      { size: '$10K', price: 150, cta: 'Start 1-Step' },
      { size: '$25K', price: 300, cta: 'Start 1-Step' },
      { size: '$50K', price: 500, cta: 'Start 1-Step' },
      { size: '$100K', price: 1000, cta: 'Start 1-Step' },
    ],
  },
  '2step': {
    name: '2-Step Challenge',
    shortName: '2-Step',
    positioning: 'Two steps. More room.',
    description: 'Prove consistency across two phases.',
    badge: 'Best Value',
    icon: Target,
    specs: {
      profitTarget: '8% -> 5%',
      dailyLoss: '5%',
      maxLoss: '10%',
      profitSplit: '80% Trader',
      payoutCycle: 'Every 14 days',
      leverage: 'Up to 1:30',
      riskPerTrade: '1%',
      exposure: '3%',
    },
    accounts: [
      { size: '$10K', price: 100, cta: 'Start 2-Step' },
      { size: '$25K', price: 200, cta: 'Start 2-Step' },
      { size: '$50K', price: 300, cta: 'Start 2-Step' },
      { size: '$100K', price: 700, cta: 'Start 2-Step' },
    ],
  },
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
  const [activeTab, setActiveTab] = useState<ChallengeKey>('1step')
  const current = challengeData[activeTab]
  const CurrentIcon = current.icon

  return (
    <>
      {showHeader && (
        <div className="challenge-header text-center mb-8">
          {showRewardBadge && (
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C6FF00]/30 bg-[#C6FF00]/10 px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-[#C6FF00]" />
              <span className="text-[#C6FF00] text-sm font-medium">Trading Parameters</span>
            </div>
          )}
          {title}
          {subtitle && <p className="text-zinc-400 text-lg max-w-2xl mx-auto">{subtitle}</p>}
        </div>
      )}

      <div className="promo-banners grid gap-4 mb-8 md:grid-cols-2">
        {Object.entries(challengeData).map(([key, challenge]) => {
          const Icon = challenge.icon
          const active = activeTab === key

          return (
            <button
              key={key}
              onClick={() => setActiveTab(key as ChallengeKey)}
              className={`text-left rounded-lg border p-5 transition-all ${
                active
                  ? 'border-[#C6FF00] bg-[#C6FF00]/10 shadow-[0_0_28px_rgba(198,255,0,0.14)]'
                  : 'border-zinc-800 bg-zinc-900/80 hover:border-[#C6FF00]/40'
              }`}
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#C6FF00]/15">
                    <Icon className="h-5 w-5 text-[#C6FF00]" />
                  </span>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#C6FF00]">{challenge.badge}</div>
                    <h3 className="text-xl font-black uppercase text-white">{challenge.positioning}</h3>
                  </div>
                </div>
              </div>
              <p className="mb-4 text-sm text-zinc-400">{challenge.description}</p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <div className="text-zinc-500">Target</div>
                  <div className="font-bold text-white">{challenge.specs.profitTarget}</div>
                </div>
                <div>
                  <div className="text-zinc-500">Max Drawdown</div>
                  <div className="font-bold text-white">{challenge.specs.maxLoss}</div>
                </div>
              </div>
            </button>
          )
        })}
      </div>

      <div className="challenge-content grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="h-full rounded-lg border border-zinc-800 bg-zinc-900/85 p-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#C6FF00]/15">
                <CurrentIcon className="h-6 w-6 text-[#C6FF00]" />
              </span>
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.24em] text-[#C6FF00]">{current.badge}</div>
                <h3 className="text-xl font-bold text-white">{current.name}</h3>
              </div>
            </div>
            <p className="mb-6 text-sm text-zinc-400">{current.description}</p>

            <div className="space-y-3">
              {[
                ['Profit Target', current.specs.profitTarget],
                ['Daily Drawdown', current.specs.dailyLoss],
                ['Maximum Drawdown', current.specs.maxLoss],
                ['Profit Split', current.specs.profitSplit],
                ['Payout Cycle', current.specs.payoutCycle],
                ['Max Risk / Trade', current.specs.riskPerTrade],
                ['Max Total Exposure', current.specs.exposure],
                ['Leverage', current.specs.leverage],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between gap-4 border-b border-zinc-800 py-3 last:border-b-0">
                  <span className="text-sm text-zinc-500">{label}</span>
                  <span className="text-right text-sm font-semibold text-white">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <h4 className="text-lg font-bold text-white">Choose Capital Package</h4>
              <p className="text-sm text-zinc-500">Approved launch pricing for {current.shortName} accounts.</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {current.accounts.map((account) => (
              <div
                key={account.size}
                className="rounded-lg border border-zinc-800 bg-zinc-900/85 p-5 transition-all hover:border-[#C6FF00]/50"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <div className="text-2xl font-black text-white">{account.size}</div>
                    <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Capital</div>
                  </div>
                  <img src="/tc-icon-transparent.png" alt="TC" className="h-8 w-auto" />
                </div>
                <div className="mb-5">
                  <div className="text-sm text-zinc-500">Challenge fee</div>
                  <div className="text-3xl font-black text-[#C6FF00]">${account.price.toLocaleString()}</div>
                </div>
                <a
                  href={buyHref}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-800 py-3 text-sm font-bold uppercase text-zinc-300 transition-all hover:bg-[#C6FF00] hover:text-black"
                >
                  {account.cta}
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
              View Trading Parameters
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      )}
    </>
  )
}

export default ChallengeSelector
