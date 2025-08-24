import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Users, Award, Clock, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContactCTA from "@/components/contact-cta"
import ProjectStatistics from "@/components/project-statistics"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">About Milaan Infotech</h1>
              <p className="text-xl text-muted-foreground">
                Your trusted partner for digital transformation and business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/images/milaan-logo.jpg"
                alt="Milaan Infotech Team"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[350px] md:h-[450px]">
              <Image
                src="/images/our-story.jpg"
                alt="Our Story"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-muted-foreground">
                Founded in 2015, Milaan Infotech began with a simple mission: to help businesses leverage the power of
                digital technology to grow and succeed. What started as a small team of passionate tech enthusiasts has
                grown into a full-service digital transformation agency.
              </p>
              <p className="text-muted-foreground">
                Over the years, we've helped hundreds of businesses across various industries establish their digital
                presence, optimize their operations, and achieve sustainable growth. Our client-centric approach and
                commitment to delivering measurable results have earned us a reputation as a trusted digital partner.
              </p>
              <p className="text-muted-foreground">
                Today, we continue to evolve and innovate, staying ahead of the rapidly changing digital landscape to
                provide our clients with cutting-edge solutions that drive real business impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do at Milaan Infotech.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-background rounded-lg p-6 text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Client-Centric</h3>
              <p className="text-muted-foreground">
                We put our clients' needs first, focusing on delivering solutions that address their unique challenges
                and goals.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in everything we do, from the quality of our work to the service we provide to
                our clients.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We embrace change and continuously seek new and better ways to solve problems and create value for our
                clients.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Results-Driven</h3>
              <p className="text-muted-foreground">
                We focus on delivering measurable results that contribute to our clients' business success and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Statistics Section */}
      <ProjectStatistics />

      {/* Why Choose Us Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Milaan Infotech</h2>
            <p className="text-lg text-muted-foreground">What sets us apart from other digital agencies.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold">Expertise & Experience</h3>
                    <p className="text-muted-foreground">
                      Our team brings years of experience and deep expertise across various digital disciplines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold">Customized Solutions</h3>
                    <p className="text-muted-foreground">
                      We don't believe in one-size-fits-all. Every solution we deliver is tailored to your specific
                      needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold">End-to-End Services</h3>
                    <p className="text-muted-foreground">
                      From strategy to implementation to ongoing support, we provide comprehensive digital services.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold">Results-Focused Approach</h3>
                    <p className="text-muted-foreground">
                      We measure our success by the tangible results and ROI we deliver for our clients.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold">Transparent Communication</h3>
                    <p className="text-muted-foreground">
                      We believe in open, honest communication and keeping you informed every step of the way.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold">Long-Term Partnership</h3>
                    <p className="text-muted-foreground">
                      We're not just a service provider; we're a long-term partner invested in your success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ContactCTA />
    </>
  )
}
