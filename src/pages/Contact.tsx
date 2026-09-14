import { useState } from 'react'
import { Mail, Clock, MapPin, Send, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

// Social Media Icons as SVG components
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      desc: 'Send us an email for detailed inquiries',
      action: 'support@tradingcapital.com',
      href: 'mailto:support@tradingcapital.com',
      detail: 'Response in 2 hours',
      color: 'purple'
    },
    {
      icon: Clock,
      title: 'Support Hours',
      desc: 'We are here to help around the clock',
      action: '24/7 Support',
      detail: 'All time zones',
      color: 'green'
    },
  ]

  const socialLinks = [
    { name: 'LinkedIn', icon: LinkedInIcon, href: 'https://www.linkedin.com/company/tradingcapital', color: 'hover:bg-blue-700 hover:text-white' },
    { name: 'Facebook', icon: FacebookIcon, href: 'https://www.facebook.com/tradingcapital', color: 'hover:bg-blue-600 hover:text-white' },
    { name: 'Instagram', icon: InstagramIcon, href: 'https://www.instagram.com/tradingcapital', color: 'hover:bg-pink-500 hover:text-white' },
    { name: 'X', icon: XIcon, href: 'https://x.com/tradingcapital', color: 'hover:bg-[#0D0F12] hover:text-white hover:border-white' },
  ]

  return (
    <div className="min-h-screen bg-[#0D0F12]">
      {/* Hero with Image */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/faq-hero.jpg" 
            alt="Contact Support" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0F12]/40 via-black/60 to-[#0D0F12]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            GET IN <span className="text-[#C6FF00]">TOUCH</span>
          </h1>
          <p className="text-xl text-zinc-400">
            Have a question? We are here to help 24/7
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {contactMethods.map((method, i) => (
              <Card key={i} className="bg-zinc-900 border-zinc-800 hover:border-[#C6FF00]/30 transition-all">
                <CardContent className="p-6 text-center">
                  <div className={`w-14 h-14 rounded-xl bg-[#C6FF00]/20 flex items-center justify-center mx-auto mb-4`}>
                    <method.icon className={`w-7 h-7 text-[#C6FF00]`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                  <p className="text-zinc-500 text-sm mb-4">{method.desc}</p>
                  {method.href ? (
                    <a
                      href={method.href}
                      className="text-[#C6FF00] font-medium hover:text-[#DFFF66] transition-colors"
                    >
                      {method.action}
                    </a>
                  ) : (
                    <div className="text-[#C6FF00] font-medium">{method.action}</div>
                  )}
                  <div className="text-zinc-600 text-sm mt-1">{method.detail}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-12 px-6 bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Connect With Us</h2>
          <p className="text-zinc-400 mb-8">Follow us on social media for updates, tips, and community</p>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className={`w-14 h-14 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 ${social.color} transition-all hover:scale-110 hover:shadow-lg`}
                title={social.name}
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form with Image */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/trading-dashboard.jpg" 
            alt="Trading Dashboard" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0F12] via-black/98 to-[#0D0F12]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              
              {submitted ? (
                <div className="bg-[#C6FF00]/10 border border-[#C6FF00]/30 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#C6FF00]/20 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-[#C6FF00]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-zinc-400">We will get back to you within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-zinc-400 text-sm mb-2">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#C6FF00]/50"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-zinc-400 text-sm mb-2">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#C6FF00]/50"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-zinc-400 text-sm mb-2">Subject</label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#C6FF00]/50"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="challenge">Challenge Question</option>
                      <option value="payout">Payout Issue</option>
                      <option value="technical">Technical Support</option>
                      <option value="affiliate">Affiliate Program</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-zinc-400 text-sm mb-2">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#C6FF00]/50 resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-[#C6FF00] hover:bg-[#DFFF66] text-black font-bold py-6">
                    <Send className="mr-2 w-5 h-5" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Info</h2>
              
              <div className="space-y-6">
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Mail className="w-5 h-5 text-[#C6FF00]" />
                    <span className="text-white font-medium">Email</span>
                  </div>
                  <p className="text-zinc-400 text-sm">
                    <a
                      href="mailto:support@tradingcapital.com"
                      className="hover:text-[#C6FF00] transition-colors"
                    >
                      support@tradingcapital.com
                    </a>
                  </p>
                  <p className="text-zinc-400 text-sm">
                    <a
                      href="mailto:affiliates@tradingcapital."
                      className="hover:text-[#C6FF00] transition-colors"
                    >
                      affiliates@tradingcapital.
                    </a>
                  </p>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-5 h-5 text-[#C6FF00]" />
                    <span className="text-white font-medium">Response Time</span>
                  </div>
                  <p className="text-zinc-400 text-sm">Average: Under 2 hours</p>
                  <p className="text-zinc-400 text-sm">Maximum: 24 hours</p>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-[#C6FF00]" />
                    <span className="text-white font-medium">Location</span>
                  </div>
                  <p className="text-zinc-400 text-sm">Serving traders worldwide</p>
                  <p className="text-zinc-400 text-sm">150+ countries supported</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
