import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Code, Globe, LineChart, Lightbulb, Palette, Rocket, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import TestimonialCard from "@/components/testimonial-card"
import ContactCTA from "@/components/contact-cta"
import ConsultationBooking from "@/components/consultation-booking"
import dynamic from "next/dynamic"

// Dynamic imports for heavy components
const AnimateOnScroll = dynamic(() => import("@/components/animate-on-scroll"), {
  loading: () => <div>{/* Static fallback */}</div>
})

const StaggeredChildren = dynamic(() => import("@/components/staggered-children"), {
  loading: () => <div>{/* Static fallback */}</div>
})

const AnimatedCounter = dynamic(() => import("@/components/animated-counter"), {
  loading: () => <span>100+</span> // Static fallback
})

const HoverCard = dynamic(() => import("@/components/hover-card"), {
  loading: () => <div>{/* Static fallback */}</div>
})

import ThreeJSHero from '@/components/three-js-hero-client'
import ThreeJSBackground from '@/components/three-js-background-client'

const ParallaxGreeting = dynamic(() => import("@/components/parallax-greeting"), {
  loading: () => <div className="h-96 bg-muted animate-pulse rounded-lg"></div>
})

// Blur placeholder for images
const BLUR_DATA_URL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk9dfKb1o//Z"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/50 dark:dark-gradient-bg">
        <ThreeJSHero />
        <div className="container-custom section-padding relative z-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary dark:border-primary/30">
                <span>Leading Digital Transformation Partner</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Transform Your Business with <span className="">Digital Innovation</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                We help businesses grow through innovative IT solutions and digital marketing strategies tailored to
                your unique needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="transition-all hover:scale-105">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="transition-all hover:bg-primary/10">
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[400px] w-full lg:h-[500px]">
                <Image
                  src="/images/hero-digital-transformation.jpg"
                  alt="Digital Transformation"
                  width={800}
                  height={500}
                  className="object-cover rounded-lg shadow-xl dark:opacity-90"
                  priority
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden md:block">
                <div className="bg-background rounded-lg shadow-lg p-4 w-48 dark:dark-card-glow">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="font-medium">
                      <AnimatedCounter end={100} suffix="+" /> Projects
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 hidden md:block">
                <div className="bg-background rounded-lg shadow-lg p-4 w-48 dark:dark-card-glow">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="font-medium">
                      <AnimatedCounter end={50} suffix="+" /> Happy Clients
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Greeting Section */}
      <ParallaxGreeting />

      {/* About Section */}
      <section className="section-padding relative">
        <ThreeJSBackground variant="particles" color="#8b5cf6" />
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Milaan Infotech</h2>
            <p className="text-lg text-muted-foreground">
              We are a team of passionate tech enthusiasts and marketing experts dedicated to helping businesses thrive
              in the digital landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[350px] md:h-[450px]">
              <Image
                src="/images/milaan-logo.jpg"
                alt="About Milaan Infotech"
                fill
                className="object-cover rounded-lg shadow-lg dark:opacity-90"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower businesses with cutting-edge technology solutions and digital marketing strategies that drive
                growth, enhance customer engagement, and maximize ROI.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Innovation-Driven</h4>
                    <p className="text-sm text-muted-foreground">
                      We stay ahead of the curve with the latest technologies and strategies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Client-Focused</h4>
                    <p className="text-sm text-muted-foreground">
                      Your success is our success. We prioritize your business goals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Results-Oriented</h4>
                    <p className="text-sm text-muted-foreground">
                      We measure our success by the tangible results we deliver.
                    </p>
                  </div>
                </div>
              </div>

              <Button asChild className="transition-all hover:scale-105">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Booking Section */}
      <ConsultationBooking />

      {/* Services Section */}
      <section className="section-padding bg-muted dark:bg-background/30 relative">
        <ThreeJSBackground variant="network" color="#06b6d4" />
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive digital solutions to help your business grow and succeed in the digital landscape.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <HoverCard hoverEffect="glow">
              <Card className="dark:dark-card-glow">
                <CardHeader className="pb-2">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 transition-transform group-hover:scale-110 dark:dark-highlight">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Web & App Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="min-h-[80px] dark:text-muted-foreground/90">
                    Custom websites and applications built with cutting-edge technologies to deliver exceptional user
                    experiences.
                  </CardDescription>
                  <Link
                    href="/services#web-development"
                    className="inline-flex items-center text-sm font-medium text-primary mt-4 hover:underline group"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            </HoverCard>

            <HoverCard hoverEffect="glow">
              <Card className="dark:dark-card-glow">
                <CardHeader className="pb-2">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 dark:dark-highlight">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>SEO & Digital Marketing</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="min-h-[80px] dark:text-muted-foreground/90">
                    Boost your online visibility and drive targeted traffic with our comprehensive digital marketing
                    strategies.
                  </CardDescription>
                  <Link
                    href="/services#digital-marketing"
                    className="inline-flex items-center text-sm font-medium text-primary mt-4 hover:underline group"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            </HoverCard>

            <HoverCard hoverEffect="glow">
              <Card className="dark:dark-card-glow">
                <CardHeader className="pb-2">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 dark:dark-highlight">
                    <LineChart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Lead Generation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="min-h-[80px] dark:text-muted-foreground/90">
                    Convert visitors into customers with our proven lead generation and conversion optimization
                    techniques.
                  </CardDescription>
                  <Link
                    href="/services#lead-generation"
                    className="inline-flex items-center text-sm font-medium text-primary mt-4 hover:underline group"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            </HoverCard>

            <HoverCard hoverEffect="glow">
              <Card className="dark:dark-card-glow">
                <CardHeader className="pb-2">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 dark:dark-highlight">
                    <Palette className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Branding & Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="min-h-[80px] dark:text-muted-foreground/90">
                    Create a memorable brand identity with our professional design services, from logos to complete
                    brand guidelines.
                  </CardDescription>
                  <Link
                    href="/services#branding"
                    className="inline-flex items-center text-sm font-medium text-primary mt-4 hover:underline group"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            </HoverCard>

            <HoverCard hoverEffect="glow">
              <Card className="dark:dark-card-glow">
                <CardHeader className="pb-2">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 dark:dark-highlight">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Integration & Tech Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="min-h-[80px] dark:text-muted-foreground/90">
                    Streamline your business operations with custom integrations and innovative technology solutions.
                  </CardDescription>
                  <Link
                    href="/services#integration"
                    className="inline-flex items-center text-sm font-medium text-primary mt-4 hover:underline group"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            </HoverCard>

            <HoverCard hoverEffect="glow">
              <Card className="dark:dark-card-glow">
                <CardHeader className="pb-2">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 dark:dark-highlight">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Business Growth Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="min-h-[80px] dark:text-muted-foreground/90">
                    Develop a comprehensive digital strategy to accelerate your business growth and stay ahead of
                    competitors.
                  </CardDescription>
                  <Link
                    href="/services#growth-strategy"
                    className="inline-flex items-center text-sm font-medium text-primary mt-4 hover:underline group"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            </HoverCard>

            <HoverCard hoverEffect="glow">
              <Card className="dark:dark-card-glow">
                <CardHeader className="pb-2">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 dark:dark-highlight">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Political Campaign Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="min-h-[80px] dark:text-muted-foreground/90">
                    Comprehensive political campaign services including digital campaigns, ground operations, and
                    election support to help candidates win elections.
                  </CardDescription>
                  <Link
                    href="/services#political-management"
                    className="inline-flex items-center text-sm font-medium text-primary mt-4 hover:underline group"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            </HoverCard>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild className="transition-all hover:scale-105">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <HoverCard hoverEffect="glow">
              <TestimonialCard
                quote="Milaan Infotech transformed our online presence completely. Their team delivered a stunning website and effective digital marketing strategy that increased our leads by 150%."
                author="Rajesh Sharma"
                position="CEO, TechSolutions India"
                rating={5}
              />
            </HoverCard>

            <HoverCard hoverEffect="glow">
              <TestimonialCard
                quote="Working with Milaan Infotech has been a game-changer for our business. Their SEO expertise helped us rank on the first page for our key terms, driving significant traffic and sales."
                author="Priya Patel"
                position="Marketing Director, Retail Giants"
                rating={5}
              />
            </HoverCard>

            <HoverCard hoverEffect="glow">
              <TestimonialCard
                quote="The team at Milaan Infotech truly understands digital marketing. They created a comprehensive strategy that helped us reach our target audience effectively and increase conversions."
                author="Amit Verma"
                position="Founder, StartUp Ventures"
                rating={4}
              />
            </HoverCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ContactCTA />
    </>
  )
}