import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DollarSign, Users, TrendingUp, Zap, CheckCircle2, Video } from "lucide-react"
import Link from "next/link"

export default function AffiliatePage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />

        {/* Neon grid effect */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(oklch(0.85 0.25 145 / 0.1) 1px, transparent 1px), linear-gradient(90deg, oklch(0.85 0.25 145 / 0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 neon-border">
            <DollarSign className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">$192,000 paid out to creators last month</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            <span className="text-foreground">Stoppr</span>
            <br />
            <span className="text-primary neon-glow">Creator Program</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Earn $1 per 1000 views by simply integrating our app into your content, any way you want!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg neon-border"
              asChild
            >
              <a href="mailto:creator@stoppr.xyz">
                <Zap className="mr-2 h-5 w-5" />
                Start Earning Now
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/20 hover:bg-primary/10 px-8 py-6 text-lg bg-transparent"
              asChild
            >
              <Link href="#examples">
                <Video className="mr-2 h-5 w-5" />
                More Information
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              How It <span className="text-primary neon-glow">Works</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Simple, transparent, and rewarding</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 neon-border">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">1. Join the Program</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sign up for free and get your unique creator link to share with your audience.
              </p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 neon-border">
                <Video className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">2. Create Content</h3>
              <p className="text-muted-foreground leading-relaxed">
                Integrate Stoppr into your videos, posts, or content in any creative way you want.
              </p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 neon-border">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">3. Earn Money</h3>
              <p className="text-muted-foreground leading-relaxed">
                Get paid $1 per 1000 views. Track your earnings in real-time through your dashboard.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Why Join <span className="text-primary neon-glow">Stoppr</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Benefits that make a difference</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Competitive $1 per 1000 views rate",
              "No minimum payout threshold",
              "Real-time earnings tracking",
              "Monthly payments via PayPal or bank transfer",
              "Dedicated creator support team",
              "Exclusive creator resources and templates",
              "Help people overcome addiction",
              "Join a community of positive creators",
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Examples */}
      <section id="examples" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-primary neon-glow">Creator</span> Examples
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Review these high performing videos from top creators
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card
                key={i}
                className="overflow-hidden bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all group"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <Video className="w-16 h-16 text-primary/40 group-hover:text-primary/60 transition-colors" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold mb-2">Creator Example {i}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    See how top creators integrate Stoppr into their content
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <TrendingUp className="w-4 h-4" />
                    <span>High performing content</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/10 bg-transparent">
              Find More Examples
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-12 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 neon-border">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start <span className="text-primary neon-glow">Earning?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of creators who are making a positive impact while earning money
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg neon-border"
              asChild
            >
              <a href="mailto:creator@stoppr.xyz">
                <Zap className="mr-2 h-5 w-5" />
                Apply Now
              </a>
            </Button>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
