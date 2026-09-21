import { ArrowRight, BarChart3, Check, CircleDollarSign, HelpCircle, Shield, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
import ChallengeSelector from '@/components/ChallengeSelector'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const comparisonRows = [
  { label: 'Positioning', oneStep: 'One step. One target.', twoStep: 'Two steps. More room.' },
  { label: 'Profit Target', oneStep: '8%', twoStep: '8% -> 5%' },
  { label: 'Daily Drawdown', oneStep: '3%', twoStep: '5%' },
  { label: 'Maximum Drawdown', oneStep: '6%', twoStep: '10%' },
  { label: 'Profit Split', oneStep: '80% Trader', twoStep: '80% Trader' },
  { label: 'Payout Cycle', oneStep: 'Every 14 days', twoStep: 'Every 14 days' },
]

const riskRows = [
  { size: '$10,000', risk: '1%', positions: '3', exposure: '3%', leverage: 'Up to 1:30' },
  { size: '$25,000', risk: '1%', positions: '5', exposure: '3%', leverage: 'Up to 1:30' },
  { size: '$50,000', risk: '1%', positions: '5', exposure: '3%', leverage: 'Up to 1:30' },
  { size: '$100,000', risk: '1%', positions: '5', exposure: '3%', leverage: 'Up to 1:30' },
]

const journey = [
  { icon: Target, title: 'Choose Your Challenge', desc: 'Pick the evaluation that fits your trading style.' },
  { icon: BarChart3, title: 'Prove Your Strategy', desc: 'Hit the target. Stay within the Trading Parameters.' },
  { icon: Shield, title: 'Become a TC Trader', desc: 'Complete the evaluation and move to your TC Trader account.' },
  { icon: CircleDollarSign, title: 'Trade, Perform & Get Rewarded', desc: 'Keep 80% of eligible performance rewards every 14 days.' },
]

const faqs = [
  {
    q: 'Which challenge should I choose?',
    a: 'Choose 1-Step if you want the most direct route: one target and tighter drawdown. Choose 2-Step if you prefer two phases, a lower entry fee and wider drawdown parameters.',
  },
  {
    q: 'Are Trading Capital evaluations simulated?',
    a: 'Yes. Trading Capital challenges are simulated trading evaluations. Rewards, account access and payout eligibility are governed by the applicable terms and account status.',
  },
  {
    q: 'How is drawdown presented here?',
    a: 'Daily drawdown is the maximum daily loss limit for the selected challenge. Maximum drawdown is the overall account loss limit. Final reset time, timezone and balance/equity methodology should match the legal Trading Rules.',
  },
  {
    q: 'Can I trade news, weekends or EAs?',
    a: 'News trading, weekend holding and legitimate EAs are shown as permitted on the site, subject to prohibited-strategy, risk-management and platform rules.',
  },
  {
    q: 'When can a TC Trader request a payout?',
    a: 'Eligible TC Traders operate on a 14-day payout cycle, subject to verification, account status, payout method availability and the final payout policy.',
  },
]

const ProductCard = ({
  type,
  title,
  subtitle,
  body,
  facts,
  href,
}: {
  type: '1-Step' | '2-Step'
  title: string
  subtitle: string
  body: string
  facts: string[]
  href: string
}) => (
  <div className="rounded-lg border border-zinc-800 bg-zinc-950/75 p-6 backdrop-blur transition-all hover:border-[#C6FF00]/50">
    <div className="mb-5 flex items-center justify-between gap-4">
      <div>
        <div className="text-xs font-bold uppercase tracking-[0.24em] text-[#C6FF00]">{type} Challenge</div>
        <h2 className="mt-2 text-2xl font-black uppercase text-white">{title}</h2>
      </div>
      <img src="/tc-icon-transparent.png" alt="TC" className="h-12 w-auto" />
    </div>
    <p className="mb-2 text-xl font-bold text-white">{subtitle}</p>
    <p className="mb-6 text-sm text-zinc-400">{body}</p>
    <div className="mb-6 flex flex-wrap gap-2">
      {facts.map((fact) => (
        <span key={fact} className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs font-semibold text-zinc-300">
          {fact}
        </span>
      ))}
    </div>
    <a
      href={href}
      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#C6FF00] px-5 py-3 text-sm font-black uppercase text-black transition-colors hover:bg-[#DFFF66]"
    >
      Start {type}
      <ArrowRight className="h-4 w-4" />
    </a>
  </div>
)

const Challenges = () => {
  return (
    <div className="min-h-screen bg-[#0D0F12]">
      <section className="relative overflow-hidden px-6 py-20 md:py-24">
        <div className="absolute inset-0">
          <img
            src="/tc-data-wall.png"
            alt="Trading Capital data environment"
            className="h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0F12]/95 via-[#0D0F12]/78 to-[#0D0F12]/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0F12]/25 via-transparent to-[#0D0F12]" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C6FF00]/30 bg-[#C6FF00]/10 px-4 py-2">
              <Shield className="h-4 w-4 text-[#C6FF00]" />
              <span className="text-sm font-medium text-[#C6FF00]">Your Strategy. Our Capital.</span>
            </div>
            <h1 className="mb-5 text-4xl font-black uppercase leading-[0.95] text-white md:text-6xl">
              Choose Your Challenge
            </h1>
            <p className="max-w-2xl text-xl font-semibold text-white">
              Your Strategy. Our Capital.
            </p>
            <p className="mt-4 max-w-2xl text-zinc-400">
              Choose the evaluation that fits your trading style. Prove your strategy, trade with discipline and become a TC Trader.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/checkout">
                <Button className="bg-[#C6FF00] px-7 py-6 font-black uppercase text-black hover:bg-[#DFFF66]">
                  Become a TC Trader
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Link to="/faq">
                <Button variant="outline" className="border-zinc-700 px-7 py-6 text-white hover:bg-zinc-900">
                  Challenge FAQ
                  <HelpCircle className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <ProductCard
              type="1-Step"
              title="One Step. One Target."
              subtitle="Reach 8%. Become a TC Trader."
              body="One evaluation for traders who want a more direct route forward."
              facts={['8% Target', '3% Daily Drawdown', '6% Max Drawdown', '80% Split', '14-Day Cycle']}
              href="/checkout"
            />
            <ProductCard
              type="2-Step"
              title="Two Steps. More Room."
              subtitle="Prove consistency across two phases."
              body="Reach 8% in Phase 1 and 5% in Phase 2 while trading within wider drawdown parameters."
              facts={['8% -> 5% Targets', '5% Daily Drawdown', '10% Max Drawdown', '80% Split', '14-Day Cycle']}
              href="/checkout"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-black uppercase text-white md:text-5xl">
              Compare <span className="text-[#C6FF00]">The Routes</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-zinc-400">
              See the difference in seconds, then choose your account size.
            </p>
          </div>

          <div className="overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950/70">
            <table className="w-full min-w-[720px]">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="px-5 py-4 text-left text-sm font-semibold text-zinc-500">Trading Parameter</th>
                  <th className="px-5 py-4 text-left text-sm font-black text-[#C6FF00]">1-Step Challenge</th>
                  <th className="px-5 py-4 text-left text-sm font-black text-[#C6FF00]">2-Step Challenge</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="border-b border-zinc-800/70 last:border-0">
                    <td className="px-5 py-4 text-sm text-zinc-400">{row.label}</td>
                    <td className="px-5 py-4 text-sm font-semibold text-white">{row.oneStep}</td>
                    <td className="px-5 py-4 text-sm font-semibold text-white">{row.twoStep}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-16">
        <div className="absolute inset-0">
          <img
            src="/challenge-badges.jpg"
            alt="Trading Capital challenge detail"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0F12] via-[#0D0F12]/88 to-[#0D0F12]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <ChallengeSelector showHeader={false} buyHref="/checkout" />
        </div>
      </section>

      <section className="px-6 py-20 bg-zinc-950">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-black uppercase text-white md:text-5xl">
              Become a <span className="text-[#C6FF00]">TC Trader</span>
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {journey.map((step, index) => (
              <div key={step.title} className="rounded-lg border border-zinc-800 bg-zinc-900 p-6">
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#C6FF00]/15">
                    <step.icon className="h-6 w-6 text-[#C6FF00]" />
                  </span>
                  <span className="text-3xl font-black text-zinc-800">0{index + 1}</span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{step.title}</h3>
                <p className="text-sm text-zinc-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C6FF00]/30 bg-[#C6FF00]/10 px-4 py-2">
              <Check className="h-4 w-4 text-[#C6FF00]" />
              <span className="text-sm font-medium text-[#C6FF00]">Trading Parameters</span>
            </div>
            <h2 className="text-3xl font-black uppercase text-white md:text-5xl">Rules Before Checkout</h2>
            <p className="mt-4 text-zinc-400">
              Pricing, drawdown limits, risk limits and payout terms should be visible before a trader pays. The values below follow the supplied launch brief.
            </p>
            <div className="mt-6 rounded-lg border border-[#C6FF00]/25 bg-[#C6FF00]/10 p-5 text-sm text-zinc-300">
              Drawdown example: on a $100,000 1-Step account, a 3% daily drawdown means the daily loss limit is $3,000. A 6% maximum drawdown means the overall loss limit is $6,000. Final reset time and balance/equity calculation must match the legal Trading Rules.
            </div>
          </div>

          <div className="overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950/70">
            <table className="w-full min-w-[680px]">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="px-4 py-4 text-left text-sm font-semibold text-zinc-500">Account Size</th>
                  <th className="px-4 py-4 text-left text-sm font-semibold text-zinc-500">Max Risk / Trade</th>
                  <th className="px-4 py-4 text-left text-sm font-semibold text-zinc-500">Max Positions</th>
                  <th className="px-4 py-4 text-left text-sm font-semibold text-zinc-500">Max Exposure</th>
                  <th className="px-4 py-4 text-left text-sm font-semibold text-zinc-500">Leverage</th>
                </tr>
              </thead>
              <tbody>
                {riskRows.map((row) => (
                  <tr key={row.size} className="border-b border-zinc-800/70 last:border-0">
                    <td className="px-4 py-4 text-sm font-bold text-white">{row.size}</td>
                    <td className="px-4 py-4 text-sm text-zinc-300">{row.risk}</td>
                    <td className="px-4 py-4 text-sm text-zinc-300">{row.positions}</td>
                    <td className="px-4 py-4 text-sm text-zinc-300">{row.exposure}</td>
                    <td className="px-4 py-4 text-sm text-zinc-300">{row.leverage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-zinc-950">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-black uppercase text-white md:text-5xl">
              Clear Before You <span className="text-[#C6FF00]">Start</span>
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { title: 'Trading Model', desc: 'Challenges are simulated evaluations. Account access, rewards and restrictions follow the final terms.' },
              { title: 'Platforms & Instruments', desc: 'Available platforms, asset classes, leverage and instrument restrictions should be confirmed before checkout.' },
              { title: 'Fees & Refunds', desc: 'Challenge fees, refund eligibility and payout verification must match the published legal and checkout terms.' },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-zinc-800 bg-zinc-900 p-6">
                <h3 className="mb-2 text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-black uppercase text-white md:text-5xl">
              Challenge <span className="text-[#C6FF00]">FAQ</span>
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.q}
                value={`challenge-${index}`}
                className="rounded-lg border border-zinc-800 bg-zinc-900 px-6 data-[state=open]:border-[#C6FF00]/50"
              >
                <AccordionTrigger className="py-5 text-left font-semibold text-white hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-zinc-400">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  )
}

export default Challenges
