const Privacy = () => {
  return (
    <div className="min-h-screen bg-[#0D0F12] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-8">
          Privacy <span className="text-[#C6FF00]">Policy</span>
        </h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-zinc-400 text-lg mb-8">
            Last updated: January 1, 2026
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-zinc-400">
                Trading Capital ("we", "our", or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you use our website and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              <p className="text-zinc-400 mb-4">We may collect the following types of information:</p>
              <ul className="list-disc list-inside text-zinc-400 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, and payment information</li>
                <li><strong>Account Information:</strong> Username, password, and account preferences</li>
                <li><strong>Trading Data:</strong> Trading history, performance metrics, and challenge results</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, and cookies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p className="text-zinc-400 mb-4">We use your information for the following purposes:</p>
              <ul className="list-disc list-inside text-zinc-400 space-y-2">
                <li>To provide and maintain our services</li>
                <li>To process your transactions and send payouts</li>
                <li>To communicate with you about your account and our services</li>
                <li>To improve our platform and develop new features</li>
                <li>To comply with legal obligations</li>
                <li>To detect and prevent fraud and abuse</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing</h2>
              <p className="text-zinc-400">
                We do not sell your personal information to third parties. We may share your information with:
              </p>
              <ul className="list-disc list-inside text-zinc-400 space-y-2 mt-4">
                <li>Service providers who assist in operating our platform</li>
                <li>Payment processors for transaction processing</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners with your consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
              <p className="text-zinc-400">
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
                over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
              <p className="text-zinc-400 mb-4">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc list-inside text-zinc-400 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Request restriction of processing</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Cookies</h2>
              <p className="text-zinc-400">
                We use cookies and similar tracking technologies to enhance your experience on our platform. 
                You can control cookies through your browser settings. Disabling cookies may affect the 
                functionality of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Third-Party Links</h2>
              <p className="text-zinc-400">
                Our platform may contain links to third-party websites. We are not responsible for the 
                privacy practices or content of these websites. We encourage you to review the privacy 
                policies of any third-party sites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Children's Privacy</h2>
              <p className="text-zinc-400">
                Our services are not intended for individuals under the age of 18. We do not knowingly 
                collect personal information from children. If you believe we have collected information 
                from a child, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Policy</h2>
              <p className="text-zinc-400">
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
              <p className="text-zinc-400">
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                <a href="mailto:privacy@tradingcapital.com" className="text-[#C6FF00] hover:text-[#DFFF66]">
                  privacy@tradingcapital.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Privacy
