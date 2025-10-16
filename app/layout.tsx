import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Stoppr: Quit Porn Now & Rewire - Block urges, track progress daily",
  description:
    "Break free from porn addiction with Stoppr. Track your streak, block urges, and rewire your brain. Join thousands on their recovery journey with our dopamine detox and self-control tools.",
  keywords: "quit porn, stop porn, nofap, streak, addiction recovery, dopamine detox, blocker, self control, habits",
  openGraph: {
    title: "Stoppr: Quit Porn Now & Rewire",
    description: "Block urges, track progress daily",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
