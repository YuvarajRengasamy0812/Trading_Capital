import { useState } from 'react'
import { Search, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General' },
    { id: 'challenges', label: 'Challenges' },
    { id: 'payouts', label: 'Payouts' },
    { id: 'trading', label: 'Trading Rules' },
    { id: 'scaling', label: 'Scaling' },
  ]

  const faqs = [
    // General
    { category: 'general', q: 'What is Trading Capital?', a: 'Trading Capital is a proprietary trading firm that provides funded accounts to traders who pass our evaluation challenges. We offer trading capital packages with profit splits up to 80%.' },
    { category: 'general', q: 'Is Trading Capital regulated?', a: 'Trading Capital operates as a proprietary trading firm providing simulated trading evaluations. We are not a broker and do not hold client funds for trading purposes.' },
    { category: 'general', q: 'Which countries can participate?', a: 'We accept traders from most countries worldwide. However, due to regulatory restrictions, we cannot accept traders from sanctioned countries or regions where our services are prohibited.' },
    { category: 'general', q: 'How do I get started?', a: 'Choose a challenge, select an account size, review the Trading Parameters, and continue through checkout. Your next steps appear inside the Trader Area.' },
    
    // Challenges
    { category: 'challenges', q: 'What challenge types do you offer?', a: 'Trading Capital offers two launch routes: 1-Step Challenge for a direct path and 2-Step Challenge for more room across two phases.' },
    { category: 'challenges', q: 'What is the profit target?', a: 'For 1-Step: 8%. For 2-Step: 8% in Phase 1 and 5% in Phase 2.' },
    { category: 'challenges', q: 'What happens if I fail a challenge?', a: 'If you hit the maximum loss limit, your challenge will be terminated. You can review the rules and choose another account when you are ready.' },
    { category: 'challenges', q: 'Which account sizes are available?', a: 'The approved launch account sizes are $10K, $25K, $50K and $100K.' },
    { category: 'challenges', q: 'How long do I have to complete a challenge?', a: 'There are no time limits on our challenges. You can take as long as you need to reach the profit target while staying within the risk parameters.' },
    
    // Payouts
    { category: 'payouts', q: 'How do payouts work?', a: 'Eligible funded traders operate on a 14-day payout cycle, subject to the applicable payout rules and account status.' },
    { category: 'payouts', q: 'What is the profit split?', a: 'The 1-Step and 2-Step routes use an 80% trader / 20% Trading Capital profit split.' },
    { category: 'payouts', q: 'What payout methods are available?', a: 'We offer multiple payout methods including Bank Transfer, Cryptocurrency (BTC, ETH, USDT), Visa/Master Card, and Local Transfer. Choose the method that works best for you.' },
    { category: 'payouts', q: 'Is there a minimum payout amount?', a: 'No, there is no minimum payout amount. You can request a payout of any size, even $1.' },
    { category: 'payouts', q: 'How often can I request payouts?', a: 'Payout eligibility follows the 14-day cycle and the applicable payout rules for your account status.' },
    
    // Trading Rules
    { category: 'trading', q: 'What platforms can I trade on?', a: 'We support MetaTrader 5 (MT5) and cTrader, two of the industry\'s leading trading platforms. Both offer advanced charting, automated trading, and mobile apps.' },
    { category: 'trading', q: 'Can I trade news events?', a: 'Yes. News trading is permitted, subject to Trading Capital prohibited-strategy and risk-management policies.' },
    { category: 'trading', q: 'Can I hold positions over the weekend?', a: 'Yes, weekend holding is allowed. You can keep your positions open over the weekend without any penalties.' },
    { category: 'trading', q: 'What instruments can I trade?', a: 'You can trade Forex, Indices, Commodities, and Cryptocurrencies. We offer competitive spreads and deep liquidity on all instruments.' },
    { category: 'trading', q: 'Can I use EAs and trading bots?', a: 'Yes, you can use Expert Advisors (EAs) and trading bots. However, we prohibit any form of arbitrage, latency exploitation, or manipulative trading strategies.' },
    { category: 'trading', q: 'What is the daily drawdown limit?', a: 'Daily drawdown is 3% for 1-Step and 5% for 2-Step.' },
    
    // Scaling
    { category: 'scaling', q: 'How does scaling work?', a: 'The scaling section is reserved for launch, but final numeric mechanics remain configurable pending risk and operations sign-off.' },
    { category: 'scaling', q: 'When will scaling details be final?', a: 'Scaling rules will be published once the final mechanics are approved. The platform is designed to support future progression.' },
  ]

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
    const matchesSearch = faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.a.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-[#0D0F12]">
      {/* Hero with Image */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/faq-hero.jpg"
            alt="Trading Capital support"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0F12]/40 via-black/60 to-[#0D0F12]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            HOW CAN WE <span className="text-[#C6FF00]">HELP?</span>
          </h1>
          <p className="text-xl text-zinc-400 mb-8">
            Find answers to frequently asked questions about Trading Capital
          </p>

          {/* Search */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-4 pl-12 pr-4 text-white placeholder-zinc-500 focus:outline-none focus:border-[#C6FF00]/50"
            />
          </div>
        </div>
      </section>

      {/* Categories & FAQ */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#C6FF00] text-black'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {filteredFaqs.map((faq, i) => (
              <AccordionItem 
                key={i} 
                value={`item-${i}`} 
                className="bg-zinc-900 border border-zinc-800 rounded-xl px-6 data-[state=open]:border-[#C6FF00]/50"
              >
                <AccordionTrigger className="text-left text-white font-medium hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-zinc-500">No questions found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA with Image */}
      <section className="py-24 px-6 bg-zinc-950 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/tc-architecture-green.png"
            alt="Trading Dashboard" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/80 to-zinc-950" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="bg-zinc-900/80 backdrop-blur-sm border border-[#C6FF00]/20 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-black text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-zinc-400 text-lg mb-8">
              Our support team is available 24/7 to help you with any questions
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:support@tradingcapital.com">
                <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
                  <Mail className="mr-2 w-5 h-5" />
                  Email Support
                </Button>
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-zinc-800">
              <p className="text-zinc-500 text-sm">
                Average response time: <span className="text-[#C6FF00]">Under 2 hours</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ
