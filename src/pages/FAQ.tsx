import { useState } from 'react'
import { Search, MessageCircle, Mail } from 'lucide-react'
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
    { category: 'general', q: 'What is Liberty Funded?', a: 'Liberty Funded is a proprietary trading firm that provides funded accounts to traders who pass our evaluation challenges. We offer trading capital packages with profit splits up to 80%.' },
    { category: 'general', q: 'Is Liberty Funded regulated?', a: 'Liberty Funded operates as a proprietary trading firm providing simulated trading evaluations. We are not a broker and do not hold client funds for trading purposes.' },
    { category: 'general', q: 'Which countries can participate?', a: 'We accept traders from most countries worldwide. However, due to regulatory restrictions, we cannot accept traders from sanctioned countries or regions where our services are prohibited.' },
    { category: 'general', q: 'How do I get started?', a: 'Simply choose a challenge type and account size, complete the purchase, and start trading. Once you pass the evaluation, you will receive your funded account within 24-48 hours.' },
    
    // Challenges
    { category: 'challenges', q: 'What challenge types do you offer?', a: 'We offer three challenge types: 2-Step Challenge (most popular), 1-Step Challenge (faster path), and Instant Funding (skip the evaluation).' },
    { category: 'challenges', q: 'What is the profit target?', a: 'For 2-Step: 7% in Phase 1 and 5% in Phase 2. For 1-Step: 8% in Phase 1 and N/A for Phase 2. Instant Funding uses an 8% Phase 1 target with N/A for Phase 2.' },
    { category: 'challenges', q: 'What happens if I fail a challenge?', a: 'If you hit the maximum loss limit, your challenge will be terminated. You can purchase a new challenge at any time. We often run promotions with significant discounts for retakes.' },
    { category: 'challenges', q: 'Is the challenge fee refundable?', a: 'Yes! Your challenge fee is 100% refundable on your first payout. This means you get your money back when you receive your first profit share.' },
    { category: 'challenges', q: 'How long do I have to complete a challenge?', a: 'There are no time limits on our challenges. You can take as long as you need to reach the profit target while staying within the risk parameters.' },
    
    // Payouts
    { category: 'payouts', q: 'How do payouts work?', a: 'Once you have a funded account, you can request a payout at any time. We process payouts within 24-48 hours. Your first payout is available after 14 days of trading.' },
    { category: 'payouts', q: 'What is the profit split?', a: 'The 2-Step, 1-Step, and Instant routes offer profit splits up to 80%.' },
    { category: 'payouts', q: 'What payout methods are available?', a: 'We offer multiple payout methods including Bank Transfer, Cryptocurrency (BTC, ETH, USDT), Visa/Master Card, and Local Transfer. Choose the method that works best for you.' },
    { category: 'payouts', q: 'Is there a minimum payout amount?', a: 'No, there is no minimum payout amount. You can request a payout of any size, even $1.' },
    { category: 'payouts', q: 'How often can I request payouts?', a: 'You can request payouts as frequently as you like. With our On Demand feature, there are no restrictions on payout frequency.' },
    
    // Trading Rules
    { category: 'trading', q: 'What platforms can I trade on?', a: 'We support MetaTrader 5 (MT5) and cTrader, two of the industry\'s leading trading platforms. Both offer advanced charting, automated trading, and mobile apps.' },
    { category: 'trading', q: 'Can I trade news events?', a: 'Yes! News trading is fully allowed on all our challenge types. Trade during high-impact news events without restrictions.' },
    { category: 'trading', q: 'Can I hold positions over the weekend?', a: 'Yes, weekend holding is allowed. You can keep your positions open over the weekend without any penalties.' },
    { category: 'trading', q: 'What instruments can I trade?', a: 'You can trade Forex, Indices, Commodities, and Cryptocurrencies. We offer competitive spreads and deep liquidity on all instruments.' },
    { category: 'trading', q: 'Can I use EAs and trading bots?', a: 'Yes, you can use Expert Advisors (EAs) and trading bots. However, we prohibit any form of arbitrage, latency exploitation, or manipulative trading strategies.' },
    { category: 'trading', q: 'What is the daily loss limit?', a: 'Daily loss limits vary by challenge: 5% for 2-Step, 4% for 1-Step, and 4% for Instant Funding. This is calculated based on your starting balance each day.' },
    
    // Scaling
    { category: 'scaling', q: 'How does the scaling plan work?', a: 'Meet our scaling criteria (25% account growth) and grow your account by 25% each time. Scale from $50K all the way to $2M with increased profit splits.' },
    { category: 'scaling', q: 'What are the scaling requirements?', a: 'To scale, you need to achieve 25% growth on your funded account while maintaining consistent trading and following all risk rules. There is no time limit to achieve this.' },
    { category: 'scaling', q: 'How many times can I scale?', a: 'You can scale unlimited times until you reach the maximum account size of $2,000,000. Each successful scale increases your account by 25%.' },
    { category: 'scaling', q: 'Does scaling affect my profit split?', a: 'Yes! As you scale up, your profit split increases. At the highest tier, you can earn up to 100% of your profits.' },
  ]

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
    const matchesSearch = faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.a.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-black">
      {/* Hero with Image */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/faq-hero.jpg" 
            alt="FAQ Support" 
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            HOW CAN WE <span className="text-[#22c55e]">HELP?</span>
          </h1>
          <p className="text-xl text-zinc-400 mb-8">
            Find answers to frequently asked questions about Liberty Funded
          </p>

          {/* Search */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-4 pl-12 pr-4 text-white placeholder-zinc-500 focus:outline-none focus:border-[#22c55e]/50"
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
                    ? 'bg-[#22c55e] text-white'
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
                className="bg-zinc-900 border border-zinc-800 rounded-xl px-6 data-[state=open]:border-[#22c55e]/50"
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
            src="/trading-dashboard.jpg" 
            alt="Trading Dashboard" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/80 to-zinc-950" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="bg-zinc-900/80 backdrop-blur-sm border border-[#22c55e]/20 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-black text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-zinc-400 text-lg mb-8">
              Our support team is available 24/7 to help you with any questions
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-[#22c55e] hover:bg-[#4ade80] text-white font-bold">
                <MessageCircle className="mr-2 w-5 h-5" />
                Live Chat
              </Button>
              <a href="mailto:support@libertymarkets.org">
                <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
                  <Mail className="mr-2 w-5 h-5" />
                  Email Support
                </Button>
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-zinc-800">
              <p className="text-zinc-500 text-sm">
                Average response time: <span className="text-[#22c55e]">Under 2 hours</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ
