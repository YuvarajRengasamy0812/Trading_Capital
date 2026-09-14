import { useState } from 'react'
import { ShoppingBag, Star, Truck, Shield, Gift, ArrowRight, Check, ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

// Neon Text Effect Component
const NeonText = ({ children, color = 'cyan', className = '' }: { children: React.ReactNode, color?: 'cyan' | 'purple' | 'green' | 'pink', className?: string }) => {
  const colorClasses = {
    cyan: 'text-[#22c55e] drop-shadow-[0_0_10px_rgba(34,197,94,0.8)] drop-shadow-[0_0_20px_rgba(34,197,94,0.5)]',
    purple: 'text-[#16a34a] drop-shadow-[0_0_10px_rgba(22,163,74,0.8)] drop-shadow-[0_0_20px_rgba(22,163,74,0.5)]',
    green: 'text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.8)] drop-shadow-[0_0_20px_rgba(74,222,128,0.5)]',
    pink: 'text-[#22c55e] drop-shadow-[0_0_10px_rgba(34,197,94,0.8)] drop-shadow-[0_0_20px_rgba(34,197,94,0.5)]'
  }
  return <span className={`${colorClasses[color]} ${className}`}>{children}</span>
}

const Merchandise = () => {
  const [cart, setCart] = useState<{id: number, qty: number}[]>([])
  const [addedToCart, setAddedToCart] = useState<number | null>(null)

  const addToCart = (id: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === id)
      if (existing) {
        return prev.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item)
      }
      return [...prev, { id, qty: 1 }]
    })
    setAddedToCart(id)
    setTimeout(() => setAddedToCart(null), 1500)
  }

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0)

  const products = [
    {
      id: 1,
      name: 'Liberty Funded T-Shirt',
      description: 'Premium cotton t-shirt with neon logo print',
      price: 29.99,
      originalPrice: 39.99,
      image: '/merch-tshirt.jpg',
      category: 'Apparel',
      rating: 4.9,
      reviews: 128,
      badge: 'Bestseller'
    },
    {
      id: 2,
      name: 'Liberty Funded Hoodie',
      description: 'Premium fleece hoodie for traders who hustle',
      price: 59.99,
      originalPrice: 79.99,
      image: '/merch-hoodie.jpg',
      category: 'Apparel',
      rating: 4.8,
      reviews: 96,
      badge: 'New'
    },
    {
      id: 3,
      name: 'Liberty Funded Cap',
      description: 'Embroidered snapback cap with logo',
      price: 24.99,
      originalPrice: 34.99,
      image: '/merch-cap.jpg',
      category: 'Accessories',
      rating: 4.7,
      reviews: 64,
      badge: null
    },
    {
      id: 4,
      name: 'Liberty Funded Mug',
      description: 'Ceramic mug for your trading sessions',
      price: 14.99,
      originalPrice: 19.99,
      image: '/merch-mug.jpg',
      category: 'Accessories',
      rating: 4.9,
      reviews: 215,
      badge: 'Popular'
    },
    {
      id: 5,
      name: 'Trading Desk Mat',
      description: 'XL mousepad with chart patterns and logo',
      price: 34.99,
      originalPrice: 49.99,
      image: '/merch-mousepad.jpg',
      category: 'Trading Gear',
      rating: 4.8,
      reviews: 87,
      badge: null
    },
    {
      id: 6,
      name: 'Liberty Funded Backpack',
      description: 'Premium backpack for traders on the move',
      price: 79.99,
      originalPrice: 99.99,
      image: '/merch-backpack.jpg',
      category: 'Accessories',
      rating: 4.9,
      reviews: 42,
      badge: 'Limited'
    }
  ]

  const benefits = [
    { icon: Truck, title: 'Free Shipping', desc: 'On orders over $50' },
    { icon: Shield, title: 'Quality Guarantee', desc: '30-day returns' },
    { icon: Gift, title: 'Trader Perks', desc: 'Exclusive discounts' },
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#22c55e]/10 via-transparent to-black" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-full mb-6">
                <ShoppingBag className="w-4 h-4 text-[#22c55e]" />
                <span className="text-[#22c55e] font-medium">Official Store</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
                WEAR THE <NeonText color="cyan">BRAND</NeonText>
              </h1>
              <p className="text-xl text-zinc-400 max-w-xl mb-8">
                Premium merchandise for traders who live the lifestyle. Quality gear for the funded elite.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-[#22c55e] hover:bg-[#4ade80] text-white font-bold px-8">
                  Shop Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full">
                  <ShoppingCart className="w-5 h-5 text-[#22c55e]" />
                  <span className="text-white">{cartCount} items</span>
                </div>
              </div>
            </div>

            {/* Featured Product */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#22c55e]/20 blur-[100px] rounded-full" />
              <img 
                src="/merch-hoodie.jpg" 
                alt="Featured Hoodie" 
                className="relative w-80 h-80 object-cover rounded-2xl border border-zinc-800"
              />
              <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-[#22c55e] text-white font-bold rounded-full">
                NEW DROP
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 px-6 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#22c55e]/20 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-[#22c55e]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{benefit.title}</h3>
                  <p className="text-zinc-500 text-sm">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              SHOP <NeonText color="purple">COLLECTION</NeonText>
            </h2>
            <p className="text-zinc-400">Premium gear for funded traders</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="bg-zinc-900 border-zinc-800 overflow-hidden group py-0 hover:border-[#22c55e]/50 transition-all">
                <div className="relative aspect-square overflow-hidden bg-zinc-950">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded-full ${
                      product.badge === 'Bestseller' ? 'bg-amber-500 text-black' :
                      product.badge === 'New' ? 'bg-[#22c55e] text-white' :
                      product.badge === 'Limited' ? 'bg-[#22c55e] text-white' :
                      'bg-green-500 text-black'
                    }`}>
                      {product.badge}
                    </span>
                  )}
                </div>
                <CardContent className="p-5">
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className="text-white text-sm">{product.rating}</span>
                    <span className="text-zinc-500 text-sm">({product.reviews})</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-1">{product.name}</h3>
                  <p className="text-zinc-500 text-sm mb-4">{product.description}</p>
                  
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold text-[#22c55e]">${product.price}</span>
                    <span className="text-sm text-zinc-500 line-through">${product.originalPrice}</span>
                    <span className="text-xs text-green-400">
                      SAVE {Math.round((1 - product.price/product.originalPrice) * 100)}%
                    </span>
                  </div>
                  
                  <Button 
                    onClick={() => addToCart(product.id)}
                    className={`w-full transition-all ${
                      addedToCart === product.id 
                        ? 'bg-green-500 hover:bg-green-500 text-white' 
                        : 'bg-zinc-800 hover:bg-[#22c55e] hover:text-white text-white'
                    }`}
                  >
                    {addedToCart === product.id ? (
                      <>
                        <Check className="mr-2 w-4 h-4" />
                        Added!
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="mr-2 w-4 h-4" />
                        Add to Cart
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            FUNDED TRADERS GET <NeonText color="green">25% OFF</NeonText>
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Verified funded account holders receive exclusive discounts on all merchandise. 
            Use your trader credentials at checkout.
          </p>
          <Button size="lg" variant="outline" className="border-[#22c55e] text-[#22c55e] hover:bg-[#22c55e]/10 px-8">
            Verify Your Account
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-white text-center mb-12">
            SHIPPING <NeonText color="cyan">INFO</NeonText>
          </h2>
          
          <div className="space-y-4">
            {[
              { q: 'How long does shipping take?', a: 'Standard shipping takes 5-7 business days. Express shipping (2-3 days) available at checkout.' },
              { q: 'Do you ship internationally?', a: 'Yes! We ship to 150+ countries worldwide. International shipping times vary by location.' },
              { q: 'What is your return policy?', a: 'We offer 30-day hassle-free returns on all unworn items with original tags attached.' },
              { q: 'How do I get the trader discount?', a: 'Funded traders can verify their account status to receive 25% off all merchandise.' },
            ].map((item, i) => (
              <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                <p className="text-zinc-500 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Merchandise
