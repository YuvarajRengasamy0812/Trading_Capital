const Terms = () => {
  return (
    <div className="min-h-screen bg-black py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-8">
          Terms & <span className="text-[#22c55e]">Conditions</span>
        </h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-zinc-400 text-lg mb-8">
            Last updated: January 1, 2026
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-zinc-400">
                Welcome to Liberty Funded. By accessing or using our services, you agree to be bound by these Terms and Conditions. 
                Please read them carefully before using our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Services</h2>
              <p className="text-zinc-400">
                Liberty Funded provides proprietary trading evaluation services. We offer simulated trading challenges 
                that allow traders to demonstrate their skills and potentially receive funded trading accounts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Eligibility</h2>
              <p className="text-zinc-400">
                To use our services, you must be at least 18 years old and legally capable of entering into binding contracts. 
                You must not be a resident of any country or region where our services are prohibited by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Challenge Rules</h2>
              <ul className="list-disc list-inside text-zinc-400 space-y-2">
                <li>All challenges are simulated trading evaluations</li>
                <li>Traders must adhere to the specified profit targets and risk limits</li>
                <li>Any form of manipulation, arbitrage, or abuse will result in disqualification</li>
                <li>Challenge fees are non-refundable except as specified in our refund policy</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Funded Accounts</h2>
              <p className="text-zinc-400">
                Upon successful completion of a challenge, traders may receive a funded account. 
                Funded accounts are subject to ongoing risk management rules and may be terminated 
                if these rules are violated.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Payouts</h2>
              <p className="text-zinc-400">
                Payouts are processed according to our payout schedule and are subject to verification. 
                We reserve the right to delay or withhold payouts in cases of suspected fraud or rule violations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Intellectual Property</h2>
              <p className="text-zinc-400">
                All content, trademarks, and intellectual property on our platform are owned by Liberty Funded. 
                You may not use our intellectual property without prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
              <p className="text-zinc-400">
                Liberty Funded is not liable for any losses incurred during trading activities. 
                Trading involves significant risk, and you should only trade with capital you can afford to lose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Changes to Terms</h2>
              <p className="text-zinc-400">
                We reserve the right to modify these terms at any time. Continued use of our services 
                after changes constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Contact</h2>
              <p className="text-zinc-400">
                For questions about these terms, please contact us at support@libertymarkets.org
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Terms
