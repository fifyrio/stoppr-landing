import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/80 backdrop-blur-lg z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary neon-glow">
            Stoppr
          </Link>
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              At Stoppr, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you use our mobile application. Please read this privacy policy carefully.
              If you do not agree with the terms of this privacy policy, please do not access the application.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Information We Collect</h2>
            <h3 className="text-xl font-semibold text-foreground">Personal Data</h3>
            <p className="text-muted-foreground leading-relaxed">
              We may collect personally identifiable information that you voluntarily provide to us when you register on
              the application, express an interest in obtaining information about us or our products and services, or
              otherwise contact us. This information may include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Email address</li>
              <li>Username</li>
              <li>Usage data and app activity</li>
              <li>Device information</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6">Usage Data</h3>
            <p className="text-muted-foreground leading-relaxed">
              We automatically collect certain information when you visit, use, or navigate the application. This
              information includes your device type, operating system, unique device identifiers, app usage statistics,
              and other diagnostic data.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">We use the information we collect or receive to:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Provide, operate, and maintain our application</li>
              <li>Improve, personalize, and expand our application</li>
              <li>Understand and analyze how you use our application</li>
              <li>Track your progress and provide streak tracking features</li>
              <li>Send you notifications and updates related to your goals</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you for customer service and support</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We understand the sensitive nature of the data you entrust to us. We implement appropriate technical and
              organizational security measures designed to protect your personal information. However, please note that
              no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee
              absolute security.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Your progress data, streaks, and personal information are encrypted and stored securely. We do not share
              your personal recovery journey with third parties without your explicit consent.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We will retain your personal information only for as long as necessary to fulfill the purposes outlined in
              this Privacy Policy. We will retain and use your information to the extent necessary to comply with our
              legal obligations, resolve disputes, and enforce our policies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Your Privacy Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>The right to access – You have the right to request copies of your personal data</li>
              <li>The right to rectification – You have the right to request correction of inaccurate information</li>
              <li>The right to erasure – You have the right to request deletion of your personal data</li>
              <li>
                The right to restrict processing – You have the right to request restriction of processing your data
              </li>
              <li>The right to data portability – You have the right to request transfer of your data</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may use third-party service providers to help us operate our application and administer activities on
              our behalf. These third parties have access to your personal information only to perform specific tasks on
              our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our application is not intended for children under the age of 13. We do not knowingly collect personally
              identifiable information from children under 13. If you are a parent or guardian and believe your child
              has provided us with personal information, please contact us.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy
              Policy periodically for any changes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us through the app or visit our
              support page.
            </p>
          </section>
        </div>

        {/* CTA Section */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Your privacy is protected. Download Stoppr and take the first step towards freedom.
          </p>
          <Link href="/">
            <Button size="lg" className="gap-2">
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 mt-16">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 Stoppr. All rights reserved. Your journey to freedom starts here.</p>
        </div>
      </footer>
    </div>
  )
}
