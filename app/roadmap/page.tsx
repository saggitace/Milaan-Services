import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContactCTA from "@/components/contact-cta"

export default function RoadmapPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Roadmap for Business Growth</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Our proven step-by-step approach to transform your business and drive sustainable growth.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Start Your Journey</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Roadmap Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Approach to Digital Transformation</h2>
              <p className="text-muted-foreground">
                At Milaan Infotech, we follow a structured approach to help businesses transform digitally and achieve
                sustainable growth. Our roadmap is designed to address your unique challenges and leverage opportunities
                specific to your business.
              </p>
              <p className="text-muted-foreground">
                Each step in our roadmap is carefully planned and executed to ensure maximum impact and return on
                investment. We work closely with you throughout the journey, keeping you informed and involved at every
                stage.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">5</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Key Phases</h3>
                  <p className="text-muted-foreground">A comprehensive approach to digital success</p>
                </div>
              </div>
            </div>
            <div className="relative h-[350px] md:h-[450px]">
              <Image
                src="/images/roadmap-process.jpg"
                alt="Digital Transformation Roadmap"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Roadmap */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Growth Roadmap</h2>
            <p className="text-lg text-muted-foreground">
              A detailed look at each phase of our business growth roadmap.
            </p>
          </div>

          <div className="relative">
            {/* Vertical line for desktop */}
            <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border hidden md:block -translate-x-1/2" />

            <div className="space-y-16 relative">
              {/* Phase 1 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="md:text-right space-y-4 relative">
                  <div className="hidden md:block absolute right-0 top-6 w-6 h-6 rounded-full bg-primary -translate-y-1/2 translate-x-1/2 z-10" />
                  <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary mb-2">
                    <span>Phase 1</span>
                  </div>
                  <h3 className="text-2xl font-bold">Discovery & Analysis</h3>
                  <p className="text-muted-foreground">
                    We begin by understanding your business, goals, target audience, and current digital presence to
                    identify opportunities and challenges.
                  </p>
                </div>
                <div className="mt-6 md:mt-0 relative">
                  <div className="md:hidden absolute left-0 top-0 w-6 h-6 rounded-full bg-primary -translate-x-1/2" />
                  <div className="bg-background rounded-lg p-6 ml-8 md:ml-0 shadow-sm">
                    <h4 className="font-bold mb-4">Key Activities:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Business Goals Assessment</span>
                          <p className="text-sm text-muted-foreground">
                            Understanding your short and long-term business objectives.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Competitor Analysis</span>
                          <p className="text-sm text-muted-foreground">
                            Evaluating your competitors' digital strategies and identifying gaps.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Digital Audit</span>
                          <p className="text-sm text-muted-foreground">
                            Assessing your current website, social media, and digital marketing efforts.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Market Opportunity Identification</span>
                          <p className="text-sm text-muted-foreground">
                            Identifying untapped opportunities in your market.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="md:order-2 space-y-4 relative">
                  <div className="hidden md:block absolute left-0 top-6 w-6 h-6 rounded-full bg-primary -translate-y-1/2 -translate-x-1/2 z-10" />
                  <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary mb-2">
                    <span>Phase 2</span>
                  </div>
                  <h3 className="text-2xl font-bold">Strategy Development</h3>
                  <p className="text-muted-foreground">
                    Based on our findings, we create a customized digital strategy aligned with your business objectives
                    and market opportunities.
                  </p>
                </div>
                <div className="mt-6 md:mt-0 md:order-1 relative">
                  <div className="md:hidden absolute left-0 top-0 w-6 h-6 rounded-full bg-primary -translate-x-1/2" />
                  <div className="bg-background rounded-lg p-6 ml-8 md:ml-0 shadow-sm">
                    <h4 className="font-bold mb-4">Key Activities:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Custom Roadmap Creation</span>
                          <p className="text-sm text-muted-foreground">
                            Developing a tailored digital strategy with clear milestones.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Technology Selection</span>
                          <p className="text-sm text-muted-foreground">
                            Choosing the right technologies and platforms for your business needs.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Marketing Channel Strategy</span>
                          <p className="text-sm text-muted-foreground">
                            Identifying the most effective channels to reach your target audience.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Budget and Timeline Planning</span>
                          <p className="text-sm text-muted-foreground">
                            Creating realistic budgets and timelines for implementation.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="md:text-right space-y-4 relative">
                  <div className="hidden md:block absolute right-0 top-6 w-6 h-6 rounded-full bg-primary -translate-y-1/2 translate-x-1/2 z-10" />
                  <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary mb-2">
                    <span>Phase 3</span>
                  </div>
                  <h3 className="text-2xl font-bold">Implementation</h3>
                  <p className="text-muted-foreground">
                    Our expert team executes the strategy, developing solutions and implementing marketing campaigns to
                    achieve your business goals.
                  </p>
                </div>
                <div className="mt-6 md:mt-0 relative">
                  <div className="md:hidden absolute left-0 top-0 w-6 h-6 rounded-full bg-primary -translate-x-1/2" />
                  <div className="bg-background rounded-lg p-6 ml-8 md:ml-0 shadow-sm">
                    <h4 className="font-bold mb-4">Key Activities:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Website/App Development</span>
                          <p className="text-sm text-muted-foreground">
                            Building or redesigning your digital platforms for optimal performance.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Digital Marketing Campaign Launch</span>
                          <p className="text-sm text-muted-foreground">
                            Executing SEO, PPC, social media, and other marketing initiatives.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Content Creation and Optimization</span>
                          <p className="text-sm text-muted-foreground">
                            Developing engaging content that resonates with your target audience.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">System Integration</span>
                          <p className="text-sm text-muted-foreground">
                            Connecting your digital platforms with existing business systems.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="md:order-2 space-y-4 relative">
                  <div className="hidden md:block absolute left-0 top-6 w-6 h-6 rounded-full bg-primary -translate-y-1/2 -translate-x-1/2 z-10" />
                  <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary mb-2">
                    <span>Phase 4</span>
                  </div>
                  <h3 className="text-2xl font-bold">Monitoring & Optimization</h3>
                  <p className="text-muted-foreground">
                    We continuously track performance, analyze data, and make data-driven improvements to maximize
                    results and ROI.
                  </p>
                </div>
                <div className="mt-6 md:mt-0 md:order-1 relative">
                  <div className="md:hidden absolute left-0 top-0 w-6 h-6 rounded-full bg-primary -translate-x-1/2" />
                  <div className="bg-background rounded-lg p-6 ml-8 md:ml-0 shadow-sm">
                    <h4 className="font-bold mb-4">Key Activities:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Performance Analytics</span>
                          <p className="text-sm text-muted-foreground">
                            Tracking key metrics and KPIs to measure success.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Conversion Rate Optimization</span>
                          <p className="text-sm text-muted-foreground">
                            Improving user experience to increase conversions.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">A/B Testing</span>
                          <p className="text-sm text-muted-foreground">
                            Testing different approaches to identify what works best.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Strategy Refinement</span>
                          <p className="text-sm text-muted-foreground">
                            Adjusting tactics based on performance data and market changes.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase 5 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="md:text-right space-y-4 relative">
                  <div className="hidden md:block absolute right-0 top-6 w-6 h-6 rounded-full bg-primary -translate-y-1/2 translate-x-1/2 z-10" />
                  <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary mb-2">
                    <span>Phase 5</span>
                  </div>
                  <h3 className="text-2xl font-bold">Growth & Scaling</h3>
                  <p className="text-muted-foreground">
                    As your business grows, we help you scale your digital presence and explore new opportunities for
                    expansion and innovation.
                  </p>
                </div>
                <div className="mt-6 md:mt-0 relative">
                  <div className="md:hidden absolute left-0 top-0 w-6 h-6 rounded-full bg-primary -translate-x-1/2" />
                  <div className="bg-background rounded-lg p-6 ml-8 md:ml-0 shadow-sm">
                    <h4 className="font-bold mb-4">Key Activities:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Expansion Planning</span>
                          <p className="text-sm text-muted-foreground">
                            Identifying new markets, products, or services for growth.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">New Market Penetration</span>
                          <p className="text-sm text-muted-foreground">
                            Strategies to enter new markets or reach new customer segments.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Advanced Technology Integration</span>
                          <p className="text-sm text-muted-foreground">
                            Implementing cutting-edge technologies to stay ahead of competitors.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Long-term Growth Strategy</span>
                          <p className="text-sm text-muted-foreground">
                            Developing sustainable growth plans for continued success.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of Our Roadmap Approach</h2>
            <p className="text-lg text-muted-foreground">
              Why our structured approach delivers superior results for your business.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-muted rounded-lg p-6">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <ArrowRight className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Strategic Focus</h3>
              <p className="text-muted-foreground">
                Our roadmap ensures that all digital initiatives are aligned with your business goals and contribute to
                your overall strategy.
              </p>
            </div>

            <div className="bg-muted rounded-lg p-6">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <ArrowRight className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Measurable Results</h3>
              <p className="text-muted-foreground">
                Clear KPIs and regular reporting allow you to track progress and see the tangible impact of your digital
                investments.
              </p>
            </div>

            <div className="bg-muted rounded-lg p-6">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <ArrowRight className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Adaptability</h3>
              <p className="text-muted-foreground">
                Our approach is flexible and can be adjusted based on performance data, market changes, and evolving
                business needs.
              </p>
            </div>

            <div className="bg-muted rounded-lg p-6">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <ArrowRight className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Efficient Resource Allocation</h3>
              <p className="text-muted-foreground">
                By focusing on the most impactful initiatives, we help you maximize ROI and avoid wasting resources on
                ineffective strategies.
              </p>
            </div>

            <div className="bg-muted rounded-lg p-6">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <ArrowRight className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Competitive Advantage</h3>
              <p className="text-muted-foreground">
                Our comprehensive approach helps you stay ahead of competitors and capitalize on market opportunities
                faster.
              </p>
            </div>

            <div className="bg-muted rounded-lg p-6">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <ArrowRight className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainable Growth</h3>
              <p className="text-muted-foreground">
                Our roadmap is designed for long-term success, not just quick wins, ensuring sustainable business growth
                over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ContactCTA />
    </>
  )
}
