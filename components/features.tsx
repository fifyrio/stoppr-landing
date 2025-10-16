import { Brain, Shield, TrendingUp, Zap, Target, Users } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Shield,
    title: "Urge Blocking",
    description: "Real-time panic button and content blocking tools to help you manage urges right when they arise.",
  },
  {
    icon: TrendingUp,
    title: "Streak Tracking",
    description:
      "Visualize your progress with daily streak counters and milestone celebrations that keep you motivated.",
  },
  {
    icon: Brain,
    title: "Dopamine Detox",
    description: "Science-backed approach to reset your brain's reward system and break the cycle of addiction.",
  },
  {
    icon: Zap,
    title: "Instant Support",
    description: "Access emergency resources and coping strategies whenever you need them, 24/7.",
  },
  {
    icon: Target,
    title: "Personalized Goals",
    description: "Set custom recovery plans tailored to your unique habits and goals for lasting change.",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Connect with others on the same journey in a safe, anonymous, and supportive environment.",
  },
]

export function Features() {
  return (
    <section className="py-24 px-4 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Begin Your Recovery Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Getting started with Stoppr is simple and direct. An intuitive approach guides you through building your
            personalized recovery plan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:neon-border group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
