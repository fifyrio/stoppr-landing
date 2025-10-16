import { Button } from "@/components/ui/button"
import { Apple } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated background gradient */}
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

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        <div className="flex justify-center mb-8">
          <Image
            src="/logo.png"
            alt="Stoppr Logo"
            width={120}
            height={120}
            className="w-24 h-24 md:w-32 md:h-32"
            priority
          />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 neon-border">
          <span className="text-primary text-sm font-medium">New: Advanced Urge Blocking</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
          <span className="text-foreground">Quit porn</span>
          <br />
          <span className="text-primary neon-glow">forever</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Join thousands reclaiming their focus, energy, and confidence by breaking free from porn addiction for life.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg neon-border"
            asChild
          >
            <a
              href="https://apps.apple.com/us/app/stoppr-quit-porn-now-rewire/id6754059932"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Apple className="mr-2 h-5 w-5" />
              Download for iPhone
            </a>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary neon-glow">50,000+</div>
            <div className="text-sm text-muted-foreground">Active Users</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary neon-glow">90%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
          <div className="col-span-2 md:col-span-1 space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary neon-glow">4.8★</div>
            <div className="text-sm text-muted-foreground">App Store Rating</div>
          </div>
        </div>
      </div>
    </section>
  )
}
