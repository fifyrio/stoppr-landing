import { Button } from "@/components/ui/button"
import { Apple } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Neon glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-balance">
          Ready to <span className="text-primary neon-glow">take control</span>?
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Start your recovery journey today. Download Stoppr and join thousands who are reclaiming their lives.
        </p>
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
              Download Now - It's Free
            </a>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">Available on iOS • No credit card required • Start immediately</p>
      </div>
    </section>
  )
}
