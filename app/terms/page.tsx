import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border py-4 px-4 sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-primary neon-glow">Stoppr</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-balance">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: January 2025</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By downloading, installing, or using the Stoppr app ("Service"), you agree to be bound by these Terms of
                Service ("Terms"). If you do not agree to these Terms, please do not use our Service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">2. Description of Service</h2>
              <p className="text-muted-foreground leading-relaxed">
                Stoppr is a mobile application designed to help users overcome pornography addiction and build healthier
                habits. The Service includes features such as urge blocking, progress tracking, streak monitoring, and
                educational resources.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The Service is provided "as is" and is intended for personal, non-commercial use only. Stoppr is not a
                substitute for professional medical advice, diagnosis, or treatment.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">3. User Accounts</h2>
              <p className="text-muted-foreground leading-relaxed">
                To use certain features of the Service, you may be required to create an account. You agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>Be responsible for all activities under your account</li>
                <li>Not share your account with others</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. Acceptable Use</h2>
              <p className="text-muted-foreground leading-relaxed">You agree not to use the Service to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Transmit harmful or malicious code</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the Service</li>
                <li>Use the Service for any commercial purpose without permission</li>
                <li>Reverse engineer or attempt to extract source code</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">5. Subscription and Payments</h2>
              <p className="text-muted-foreground leading-relaxed">
                Certain features of the Service may require a paid subscription. By purchasing a subscription, you agree
                to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Pay all applicable fees as described in the app</li>
                <li>Automatic renewal unless cancelled before the renewal date</li>
                <li>Subscriptions are billed through the Apple App Store</li>
                <li>Refunds are subject to Apple's refund policy</li>
                <li>We reserve the right to change pricing with notice</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">6. Content Blocking Features</h2>
              <p className="text-muted-foreground leading-relaxed">
                Stoppr provides content blocking and filtering features. While we strive for effectiveness, we cannot
                guarantee that all inappropriate content will be blocked. You acknowledge that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>No blocking system is 100% effective</li>
                <li>You are responsible for your own actions and choices</li>
                <li>The Service is a tool to assist, not a complete solution</li>
                <li>We are not liable for any content that bypasses filters</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">7. User Data and Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your use of the Service is also governed by our Privacy Policy. We collect and use data as described in
                the Privacy Policy to provide and improve the Service. Your progress data, streaks, and usage patterns
                are stored securely and used only as described in our Privacy Policy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">8. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content, features, and functionality of the Service, including but not limited to text, graphics,
                logos, icons, images, audio clips, and software, are the exclusive property of Stoppr and are protected
                by copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">9. Disclaimer of Warranties</h2>
              <p className="text-muted-foreground leading-relaxed">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
                IMPLIED. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Stoppr is not a medical device or healthcare provider. The Service is not intended to diagnose, treat,
                cure, or prevent any disease or medical condition. Always seek the advice of qualified healthcare
                professionals.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">10. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, STOPPR SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED
                DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">11. Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify, defend, and hold harmless Stoppr and its officers, directors, employees, and
                agents from any claims, liabilities, damages, losses, and expenses arising out of or in any way
                connected with your access to or use of the Service, or your violation of these Terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">12. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to suspend or terminate your access to the Service at any time, with or without
                notice, for any reason, including violation of these Terms. Upon termination, your right to use the
                Service will immediately cease.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You may terminate your account at any time by deleting the app and discontinuing use of the Service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">13. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by
                updating the "Last updated" date and, where appropriate, through in-app notifications. Your continued
                use of the Service after changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">14. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the United States, without
                regard to its conflict of law provisions. Any disputes arising from these Terms or the Service shall be
                resolved in the appropriate courts.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">15. Severability</h2>
              <p className="text-muted-foreground leading-relaxed">
                If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited
                or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force
                and effect.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">16. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-card p-6 rounded-lg border border-border">
                <p className="text-foreground">Email: support@stoppr.xyz</p>
                <p className="text-foreground">Website: www.stoppr.xyz</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">17. Entire Agreement</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and Stoppr
                regarding the use of the Service and supersede all prior agreements and understandings.
              </p>
            </section>
          </div>

          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground text-center">
              By using Stoppr, you acknowledge that you have read, understood, and agree to be bound by these Terms of
              Service.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
