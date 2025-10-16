import { Card } from "@/components/ui/card"

const steps = [
  {
    number: "01",
    title: "Download & Setup",
    description:
      "Install Stoppr from the App Store and complete a quick 2-minute onboarding to personalize your recovery plan.",
  },
  {
    number: "02",
    title: "Track Your Progress",
    description: "Log your daily progress, celebrate milestones, and watch your streak grow as you build momentum.",
  },
  {
    number: "03",
    title: "Block Urges",
    description:
      "Use the panic button and blocking tools when urges strike. Access instant coping strategies and support.",
  },
  {
    number: "04",
    title: "Rewire Your Brain",
    description: "Follow science-backed exercises to reset your dopamine system and build lasting healthy habits.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            How <span className="text-primary neon-glow">Stoppr</span> Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A simple, proven 4-step process to help you break free and stay free.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 text-[120px] font-bold text-primary/5 leading-none group-hover:text-primary/10 transition-colors">
                {step.number}
              </div>
              <div className="relative space-y-4">
                <div className="text-primary font-mono text-sm font-semibold">STEP {step.number}</div>
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
