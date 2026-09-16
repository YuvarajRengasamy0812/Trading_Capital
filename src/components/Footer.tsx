import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const TRADER_AREA_URL = '/login'
const CHOOSE_ACCOUNT_URL = '/challenges'

// const WhatsAppIcon = () => (
//   <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
//     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
//   </svg>
// )

// const TelegramIcon = () => (
//   <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
//     <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
//   </svg>
// )

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

// const DiscordIcon = () => (
//   <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
//     <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
//   </svg>
// )

const XIcon = () => (
  <svg viewBox="0 0 1200 1227" fill="currentColor" className="w-5 h-5">
    <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
  </svg>
)

// const YouTubeIcon = () => (
//   <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
//     <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
//   </svg>
// )

const Footer = () => {
  const quickLinks = [
    { label: 'FAQ', path: '/faq' },
    { label: 'Programs', path: '/challenges' },
    { label: 'Affiliate Program', path: '/affiliate' },
    { label: 'Trader Area', path: TRADER_AREA_URL },
    { label: 'Choose Your Account', path: CHOOSE_ACCOUNT_URL },
    { label: 'Terms & Conditions', path: '/terms' },
  ]

  const links = {
    Trading: [
      { label: 'Home', path: '/' },
      { label: 'Programs', path: '/challenges' },
      { label: 'How It Works', path: '/#how-it-works' },
      { label: 'FAQ', path: '/faq' },
    ],
    Company: [
      { label: 'About Us', path: '/about' },
      { label: 'Affiliate', path: '/affiliate' },
      { label: 'Contact', path: '/contact' },
    ],
    Legal: [
      { label: 'Terms & Conditions', path: '/terms' },
      { label: 'Privacy Policy', path: '/privacy' },
      { label: 'Risk Disclosure', path: '/terms' },
    ],
  }

  const socialLinks = [
    { name: 'LinkedIn', icon: LinkedInIcon, href: 'https://www.linkedin.com/company/tradingcapital', color: 'hover:bg-[#C6FF00] hover:text-black hover:border-[#C6FF00]' },
    { name: 'Facebook', icon: FacebookIcon, href: 'https://www.facebook.com/tradingcapital', color: 'hover:bg-[#C6FF00] hover:text-black hover:border-[#C6FF00]' },
    { name: 'Instagram', icon: InstagramIcon, href: 'https://www.instagram.com/tradingcapital', color: 'hover:bg-[#C6FF00] hover:text-black hover:border-[#C6FF00]' },
    { name: 'X', icon: XIcon, href: 'https://x.com/tradingcapital', color: 'hover:bg-[#C6FF00] hover:text-black hover:border-[#C6FF00]' },
  ]

  const renderFooterLink = (item: { label: string; path: string }) => {
    const className = "text-zinc-500 hover:text-[#C6FF00] transition-colors text-sm"

    if (item.path.startsWith('http')) {
      return (
        <a href={item.path} className={className}>
          {item.label}
        </a>
      )
    }

    return (
      <Link to={item.path} className={className}>
        {item.label}
      </Link>
    )
  }

  return (
    <footer className="bg-[#0D0F12] border-t border-zinc-900">
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            YOUR STRATEGY. <span className="text-[#C6FF00]">OUR CAPITAL.</span>
            <br />
            CHOOSE YOUR ACCOUNT
          </h2>
          <a href={CHOOSE_ACCOUNT_URL}>
            <Button
              size="lg"
              className="bg-[#C6FF00] hover:bg-[#DFFF66] text-black font-bold px-10 py-7 text-lg glow-primary"
            >
              Choose Your Account
            </Button>
          </a>
        </div>
      </div>

      <div className="border-t border-zinc-900 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-12 mb-12">
            <div>
              <Link to="/" className="flex items-center mb-4">
                <img src="/trading-capital-stacked-white-lime.png" alt="Trading Capital" className="h-20 w-auto" />
              </Link>
              <p className="text-zinc-500 text-sm">Trade without limits. Scale without fear.</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    {renderFooterLink(item)}
                  </li>
                ))}
              </ul>
            </div>

            {Object.entries(links).map(([category, items]) => (
              <div key={category}>
                <h4 className="text-white font-semibold mb-4">{category}</h4>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item.label}>
                      {renderFooterLink(item)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#C6FF00] text-sm font-medium tracking-wide">
              Trade Without Limits. Scale Without Fear.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 ${social.color} transition-all hover:scale-110 hover:shadow-lg`}
                  title={social.name}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-zinc-900">
            <div className="max-w-6xl mx-auto">
              <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-[#C6FF00] via-[#C6FF00] to-[#C6FF00] shadow-[0_0_30px_rgba(198,255,0,0.3),0_0_60px_rgba(198,255,0,0.15)]">
                <div className="rounded-2xl bg-zinc-950/95 backdrop-blur-sm px-8 py-10 md:px-12 md:py-12">
                  <div className="text-zinc-500 text-xs leading-relaxed space-y-4 text-center">
                    <p>
                      <span className="text-zinc-300 font-semibold">Trading Capital</span> is a proprietary trading
                      evaluation firm dedicated to identifying skilled traders through structured funding challenges.
                      Our programs are designed to assess trading performance, discipline, and risk management under
                      predefined rules within a simulated trading environment.
                    </p>

                    <p className="text-[#C6FF00] font-bold text-sm">
                      Trading involves significant risk and may not be suitable for everyone. Trading Capital programs, account structures and services are subject to the applicable Terms & Conditions, Trading Rules and jurisdictional restrictions.
                    </p>

                    <p>
                      Our website may contain links or redirections to third-party websites for additional services or
                      information. Trading Capital does not endorse or recommend any products or services offered
                      by third parties and shall not be held responsible for the content, policies, or services
                      provided by such external websites.
                    </p>

                    <div>
                      <p className="text-white font-bold text-base mb-3">Risk Disclaimer</p>
                      <p>
                        Trading financial products on margin carries a high level of risk and may not be suitable for
                        all investors. It is possible to lose more than your initial investment. You should carefully
                        consider whether trading is appropriate for you based on your financial condition, knowledge,
                        and experience. The information on this website is provided for informational purposes only
                        and should not be interpreted as financial, legal, or investment advice.
                      </p>
                      <p className="mt-2">
                        Trading in forex, commodities, stocks, options, futures, or other derivatives involves
                        substantial risk and may result in the loss of part or all of your invested capital. You should
                        not invest money that you cannot afford to lose. Trading of financial instruments may be
                        restricted or prohibited in certain jurisdictions. It is the responsibility of users to ensure
                        that their use of our services complies with all applicable laws and regulations in their
                        country of residence.
                      </p>
                      <p className="mt-2">
                        Before engaging in any trading activities, you are strongly advised to seek independent
                        financial, legal, and tax advice. Nothing contained on this website shall be construed as a
                        solicitation or offer to buy or sell any financial instrument where such activity would be
                        unlawful.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center text-zinc-600 text-xs">
                <p>&copy; 2026 Trading Capital. All rights reserved.</p>
                <p className="mt-1">Structured funding challenges for disciplined traders worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
