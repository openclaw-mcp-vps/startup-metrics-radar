import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Startup Metrics Radar — Early Warning System for Metric Drops',
  description: 'Monitor key startup metrics across Stripe, Google Analytics, and Mixpanel. Get intelligent alerts when metrics deviate from expected patterns before it is too late.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2be231c7-2f25-4bbc-9deb-02fd374cad6b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
