import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Michael R.",
    streak: "127 days",
    rating: 5,
    text: "Stoppr changed my life. The panic button feature has saved me countless times. I finally feel in control again.",
  },
  {
    name: "James T.",
    streak: "89 days",
    rating: 5,
    text: "The streak tracking keeps me motivated every single day. Seeing my progress visualized makes all the difference.",
  },
  {
    name: "David K.",
    streak: "203 days",
    rating: 5,
    text: "Best decision I ever made. The dopamine detox program actually works. My focus and energy are through the roof.",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 px-4 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Real Results from Real People</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join thousands who have successfully transformed their lives with Stoppr.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300">
              <div className="space-y-4">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed">{testimonial.text}</p>
                <div className="pt-4 border-t border-border">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-primary">{testimonial.streak} streak</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
