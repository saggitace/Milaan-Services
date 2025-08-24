import AnimateOnScroll from "@/components/animate-on-scroll"
import AnimatedCounter from "@/components/animated-counter"
import StaggeredChildren from "@/components/staggered-children"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Globe, LineChart, Palette, Lightbulb, Rocket, Users } from "lucide-react"

const serviceStats = [
  {
    icon: Code,
    title: "Web & App Development",
    projects: 150,
    clients: 85,
    satisfaction: 98,
    avgDelivery: 45,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Globe,
    title: "SEO & Digital Marketing",
    projects: 200,
    clients: 120,
    satisfaction: 96,
    avgDelivery: 30,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: LineChart,
    title: "Lead Generation",
    projects: 180,
    clients: 95,
    satisfaction: 97,
    avgDelivery: 21,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Palette,
    title: "Branding & Design",
    projects: 120,
    clients: 75,
    satisfaction: 99,
    avgDelivery: 14,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    icon: Lightbulb,
    title: "Tech Solutions",
    projects: 90,
    clients: 60,
    satisfaction: 95,
    avgDelivery: 60,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: Rocket,
    title: "Growth Strategy",
    projects: 110,
    clients: 70,
    satisfaction: 98,
    avgDelivery: 90,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    icon: Users,
    title: "Political Campaign Management",
    projects: 75,
    clients: 45,
    satisfaction: 96,
    avgDelivery: 120,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
  },
]

export default function ProjectStatistics() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <AnimateOnScroll animation="fade-up" className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Project Delivery Excellence</h2>
          <p className="text-lg text-muted-foreground">
            Track record of successful project deliveries across all our service categories with exceptional client
            satisfaction.
          </p>
        </AnimateOnScroll>

        <StaggeredChildren animation="fade-up" staggerDelay={100} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceStats.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <div className={`h-12 w-12 rounded-lg ${service.bgColor} flex items-center justify-center mb-4`}>
                    <IconComponent className={`h-6 w-6 ${service.color}`} />
                  </div>
                  <h3 className="text-lg font-bold mb-4">{service.title}</h3>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Projects Completed</span>
                      <span className="font-bold text-lg">
                        <AnimatedCounter end={service.projects} suffix="+" />
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Happy Clients</span>
                      <span className="font-bold text-lg">
                        <AnimatedCounter end={service.clients} suffix="+" />
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Satisfaction Rate</span>
                      <span className="font-bold text-lg text-green-600">
                        <AnimatedCounter end={service.satisfaction} suffix="%" />
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Avg. Delivery (Days)</span>
                      <span className="font-bold text-lg text-blue-600">
                        <AnimatedCounter end={service.avgDelivery} />
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </StaggeredChildren>

        {/* Overall Statistics */}
        <AnimateOnScroll animation="fade-up" delay={600} className="mt-16">
          <div className="bg-primary text-primary-foreground rounded-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Overall Company Statistics</h3>
              <p className="text-primary-foreground/90">Our cumulative achievements across all services</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  <AnimatedCounter end={925} suffix="+" />
                </div>
                <div className="text-sm text-primary-foreground/90">Total Projects</div>
              </div>

              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  <AnimatedCounter end={550} suffix="+" />
                </div>
                <div className="text-sm text-primary-foreground/90">Happy Clients</div>
              </div>

              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  <AnimatedCounter end={97} suffix="%" />
                </div>
                <div className="text-sm text-primary-foreground/90">Success Rate</div>
              </div>

              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  <AnimatedCounter end={5} suffix=" Years" />
                </div>
                <div className="text-sm text-primary-foreground/90">Experience</div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
