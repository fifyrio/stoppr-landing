import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function FAQPage() {
  const faqs = [
    {
      question: "What is Stoppr and how does it work?",
      answer:
        "Stoppr is a comprehensive iOS app designed to help you quit porn addiction and build healthier habits. It combines urge blocking technology, daily progress tracking, streak monitoring, and science-backed recovery techniques to help you rewire your brain and achieve lasting change.",
    },
    {
      question: "How does the urge blocking feature work?",
      answer:
        "When you feel an urge, simply tap the block button in the app. Stoppr will guide you through proven techniques like breathing exercises, distraction activities, and mindfulness practices to help you overcome the urge in the moment. The app tracks these interventions to help you understand your patterns.",
    },
    {
      question: "What is a streak and why is it important?",
      answer:
        "A streak is the number of consecutive days you've maintained your recovery goals. Tracking streaks is psychologically powerful because it creates positive momentum and visual proof of your progress. Stoppr celebrates your milestones and helps you stay motivated through challenging times.",
    },
    {
      question: "Is my data private and secure?",
      answer:
        "Absolutely. We take your privacy extremely seriously. All your data is encrypted and stored securely. We never share your personal information with third parties. You can read our full Privacy Policy for complete details on how we protect your data.",
    },
    {
      question: "How much does Stoppr cost?",
      answer:
        "Stoppr offers a free version with core features including streak tracking and basic urge blocking. Premium features like advanced analytics, personalized coaching, and unlimited blocking techniques are available through our subscription plans. Check the App Store for current pricing.",
    },
    {
      question: "Can I use Stoppr anonymously?",
      answer:
        "Yes. You can use Stoppr without providing any personal information. We only require the minimum data necessary to provide you with the best recovery experience. Your journey is private and confidential.",
    },
    {
      question: "What makes Stoppr different from other recovery apps?",
      answer:
        "Stoppr combines real-time urge intervention, comprehensive progress tracking, and evidence-based recovery techniques in one seamless experience. Our focus on dopamine detox and neural rewiring is backed by neuroscience research, and our community-driven approach provides support when you need it most.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Everyone's journey is unique, but many users report feeling more in control within the first week. Neuroplasticity research suggests that significant brain rewiring can occur within 30-90 days of consistent practice. Stoppr helps you track these changes and celebrate every milestone.",
    },
    {
      question: "What if I relapse?",
      answer:
        "Relapse is a normal part of recovery, not a failure. Stoppr helps you learn from setbacks by tracking patterns and triggers. The app provides immediate support and encouragement to help you get back on track quickly. Every day is a new opportunity for progress.",
    },
    {
      question: "Does Stoppr work offline?",
      answer:
        "Yes. Core features like streak tracking and urge blocking work offline. Some features like community support and content updates require an internet connection, but you can always access your essential recovery tools anytime, anywhere.",
    },
    {
      question: "Is there a community or support group?",
      answer:
        "Yes. Stoppr includes access to a supportive community of people on similar journeys. You can share experiences, get encouragement, and learn from others while maintaining complete anonymity if you choose.",
    },
    {
      question: "Can I track multiple habits or goals?",
      answer:
        "While Stoppr is specifically designed for porn addiction recovery, the principles of habit formation and urge management can be applied to other areas. Premium users can customize their tracking to include related goals like reducing screen time or building positive habits.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary neon-glow">
            Stoppr
          </Link>
          <Link
            href="/"
            className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors neon-glow"
          >
            Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Frequently Asked <span className="text-primary neon-glow">Questions</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Everything you need to know about Stoppr and your recovery journey
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 pb-24">
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="text-lg font-semibold pr-8 text-balance">{faq.question}</h3>
                <ChevronDown className="w-5 h-5 text-primary flex-shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground leading-relaxed text-pretty">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Still have questions?</h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Download Stoppr and start your journey today. Our support team is here to help.
          </p>
          <a
            href="https://apps.apple.com/us/app/stoppr-quit-porn-now-rewire/id6754059932"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:bg-primary/90 transition-all neon-glow hover:scale-105"
          >
            Download on App Store
          </a>
        </div>
      </section>
    </div>
  )
}
