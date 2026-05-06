export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Startup Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Early Warning System for{' '}
          <span className="text-[#58a6ff]">Startup Metric Drops</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect Stripe, Google Analytics, and Mixpanel. Get intelligent alerts via email or Slack the moment your metrics deviate — before small dips become big problems.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Start Monitoring — $49/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[['Stripe', 'Revenue & MRR'], ['Google Analytics', 'Traffic & Conversions'], ['Mixpanel', 'Retention & Events']].map(([tool, metric]) => (
            <div key={tool} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-[#58a6ff] font-semibold text-sm mb-1">{tool}</div>
              <div className="text-[#8b949e] text-xs">{metric}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$49</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Connect Stripe, GA & Mixpanel',
              'Anomaly detection via statistical analysis',
              'Email & Slack alerts',
              'Unlimited metric monitors',
              'Daily & weekly digest reports',
              'Cancel anytime',
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does anomaly detection work?',
              a: 'We use statistical analysis (z-score and rolling averages) on your historical metric data to establish a baseline. When a metric deviates significantly from that baseline, you get an alert immediately.',
            },
            {
              q: 'Which integrations are supported?',
              a: 'Currently Stripe (MRR, churn, new subscriptions), Google Analytics (sessions, conversions, bounce rate), and Mixpanel (retention, event counts, funnels). More integrations are on the roadmap.',
            },
            {
              q: 'Can I cancel anytime?',
              a: 'Yes. There are no long-term contracts. Cancel your subscription at any time from your billing portal and you will not be charged again.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-[#8b949e] text-xs">
        © {new Date().getFullYear()} Startup Metrics Radar. All rights reserved.
      </footer>
    </main>
  )
}
