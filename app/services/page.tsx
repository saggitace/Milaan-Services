import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Code, Globe, LineChart, Palette, Lightbulb, Rocket, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ContactCTA from "@/components/contact-cta"

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive digital solutions to help your business grow and succeed in the digital landscape.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <Tabs defaultValue="web-development" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 h-auto mb-8">
              <TabsTrigger value="web-development" className="py-3">
                Web Development
              </TabsTrigger>
              <TabsTrigger value="digital-marketing" className="py-3">
                Digital Marketing
              </TabsTrigger>
              <TabsTrigger value="lead-generation" className="py-3">
                Lead Generation
              </TabsTrigger>
              <TabsTrigger value="branding" className="py-3">
                Branding & Design
              </TabsTrigger>
              <TabsTrigger value="integration" className="py-3">
                Tech Solutions
              </TabsTrigger>
              <TabsTrigger value="growth-strategy" className="py-3">
                Growth Strategy
              </TabsTrigger>
              <TabsTrigger value="political-management" className="py-3">
                Political Management
              </TabsTrigger>
            </TabsList>

            <TabsContent value="web-development" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Web & App Development</h2>
                  <p className="text-muted-foreground">
                    Custom websites and applications built with cutting-edge technologies to deliver exceptional user
                    experiences and drive business results.
                  </p>
                  <div className="space-y-3 mt-6">
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Responsive Website Development</h3>
                        <p className="text-sm text-muted-foreground">
                          Mobile-friendly websites that look great and perform well on all devices.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">E-commerce Solutions</h3>
                        <p className="text-sm text-muted-foreground">
                          Robust online stores with secure payment gateways and inventory management.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Mobile App Development</h3>
                        <p className="text-sm text-muted-foreground">
                          Native and cross-platform mobile applications for iOS and Android.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Web Application Development</h3>
                        <p className="text-sm text-muted-foreground">
                          Custom web applications to streamline business processes and enhance productivity.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative h-[350px] md:h-[450px]">
                  <Image
                    src="/images/web-development.jpg"
                    alt="Web Development"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="digital-marketing" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 relative h-[350px] md:h-[450px]">
                  <Image
                    src="/images/digital-marketing.jpg"
                    alt="Digital Marketing"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="order-1 md:order-2 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">SEO & Digital Marketing</h2>
                  <p className="text-muted-foreground">
                    Boost your online visibility and drive targeted traffic with our comprehensive digital marketing
                    strategies.
                  </p>
                  <div className="space-y-3 mt-6">
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Search Engine Optimization (SEO)</h3>
                        <p className="text-sm text-muted-foreground">
                          Improve your search engine rankings and drive organic traffic to your website.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Pay-Per-Click (PPC) Advertising</h3>
                        <p className="text-sm text-muted-foreground">
                          Targeted ad campaigns on Google, Bing, and social media platforms to drive immediate traffic.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Social Media Marketing</h3>
                        <p className="text-sm text-muted-foreground">
                          Build your brand presence and engage with your audience on social media platforms.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Content Marketing</h3>
                        <p className="text-sm text-muted-foreground">
                          Create valuable content that attracts, engages, and converts your target audience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="lead-generation" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <LineChart className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Lead Generation</h2>
                  <p className="text-muted-foreground">
                    Convert visitors into customers with our proven lead generation and conversion optimization
                    techniques.
                  </p>
                  <div className="space-y-3 mt-6">
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Landing Page Optimization</h3>
                        <p className="text-sm text-muted-foreground">
                          High-converting landing pages designed to capture leads and drive conversions.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Email Marketing</h3>
                        <p className="text-sm text-muted-foreground">
                          Targeted email campaigns to nurture leads and drive repeat business.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Conversion Rate Optimization</h3>
                        <p className="text-sm text-muted-foreground">
                          Data-driven strategies to improve your website's conversion rate.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Marketing Automation</h3>
                        <p className="text-sm text-muted-foreground">
                          Streamline your marketing processes and nurture leads with automation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative h-[350px] md:h-[450px]">
                  <Image
                    src="/images/lead-generation.jpg"
                    alt="Lead Generation"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="branding" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 relative h-[350px] md:h-[450px]">
                  <Image
                    src="/images/branding-design.jpg"
                    alt="Branding & Design"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="order-1 md:order-2 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Palette className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Branding & Design</h2>
                  <p className="text-muted-foreground">
                    Create a memorable brand identity with our professional design services, from logos to complete
                    brand guidelines.
                  </p>
                  <div className="space-y-3 mt-6">
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Logo Design</h3>
                        <p className="text-sm text-muted-foreground">
                          Distinctive and memorable logos that represent your brand's values and personality.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Brand Identity Development</h3>
                        <p className="text-sm text-muted-foreground">
                          Comprehensive brand guidelines including color palettes, typography, and visual elements.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">UI/UX Design</h3>
                        <p className="text-sm text-muted-foreground">
                          User-centered design that enhances user experience and drives engagement.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Marketing Collateral Design</h3>
                        <p className="text-sm text-muted-foreground">
                          Professional design for brochures, business cards, social media graphics, and more.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="integration" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Integration & Tech Solutions</h2>
                  <p className="text-muted-foreground">
                    Streamline your business operations with custom integrations and innovative technology solutions.
                  </p>
                  <div className="space-y-3 mt-6">
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">API Development & Integration</h3>
                        <p className="text-sm text-muted-foreground">
                          Connect your systems and applications for seamless data flow and process automation.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">CRM Implementation</h3>
                        <p className="text-sm text-muted-foreground">
                          Set up and customize CRM systems to manage customer relationships effectively.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">E-commerce Integration</h3>
                        <p className="text-sm text-muted-foreground">
                          Integrate payment gateways, shipping providers, and inventory management systems.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Custom Software Solutions</h3>
                        <p className="text-sm text-muted-foreground">
                          Tailor-made software solutions to address your specific business challenges.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative h-[350px] md:h-[450px]">
                  <Image
                    src="/images/tech-solutions.jpg"
                    alt="Tech Solutions"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="growth-strategy" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 relative h-[350px] md:h-[450px]">
                  <Image
                    src="/images/growth-strategy.jpg"
                    alt="Growth Strategy"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="order-1 md:order-2 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Business Growth Strategy</h2>
                  <p className="text-muted-foreground">
                    Develop a comprehensive digital strategy to accelerate your business growth and stay ahead of
                    competitors.
                  </p>
                  <div className="space-y-3 mt-6">
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Digital Transformation Consulting</h3>
                        <p className="text-sm text-muted-foreground">
                          Strategic guidance to help your business adapt and thrive in the digital age.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Market Research & Analysis</h3>
                        <p className="text-sm text-muted-foreground">
                          In-depth research to identify market opportunities and competitive advantages.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Growth Hacking</h3>
                        <p className="text-sm text-muted-foreground">
                          Innovative strategies to accelerate growth and maximize ROI.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Business Process Optimization</h3>
                        <p className="text-sm text-muted-foreground">
                          Streamline your operations to improve efficiency and reduce costs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="political-management" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Political Campaign Management</h2>
                  <p className="text-muted-foreground">
                    Comprehensive political campaign services to help candidates and parties connect with voters
                    effectively and win elections through strategic digital and ground campaigns.
                  </p>
                  <div className="space-y-3 mt-6">
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Digital Campaigning</h3>
                        <p className="text-sm text-muted-foreground">
                          Social media campaigns to reach voters directly with targeted messaging and content.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Ground Campaigning</h3>
                        <p className="text-sm text-muted-foreground">
                          Door-to-door outreach and grassroots campaign management for maximum voter engagement.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Election Support Services</h3>
                        <p className="text-sm text-muted-foreground">
                          LED video vans, voter slips, campaign materials, and booth management services.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Constituency Profiling & Media Coordination</h3>
                        <p className="text-sm text-muted-foreground">
                          Ward analysis, voter profiling, press management, and cultural activities coordination.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative h-[350px] md:h-[450px]">
                  <Image
                    src="/images/political-services-1.png"
                    alt="Political Campaign Management"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Service Packages - keeping the existing pricing structure */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Service Packages</h2>
            <p className="text-lg text-muted-foreground">
              Tailored pricing packages for each service category to meet your specific needs and budget.
            </p>
          </div>

          <Tabs defaultValue="web-development" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 h-auto mb-8">
              <TabsTrigger value="web-development" className="py-3">
                Web Development
              </TabsTrigger>
              <TabsTrigger value="digital-marketing" className="py-3">
                Digital Marketing
              </TabsTrigger>
              <TabsTrigger value="lead-generation" className="py-3">
                Lead Generation
              </TabsTrigger>
              <TabsTrigger value="branding" className="py-3">
                Branding
              </TabsTrigger>
              <TabsTrigger value="integration" className="py-3">
                Tech Solutions
              </TabsTrigger>
              <TabsTrigger value="growth-strategy" className="py-3">
                Growth Strategy
              </TabsTrigger>
              <TabsTrigger value="political-management" className="py-3">
                Political Campaigns
              </TabsTrigger>
            </TabsList>

            {/* Web Development Pricing */}
            <TabsContent value="web-development" className="mt-6">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="relative">
                  <CardHeader>
                    <CardTitle>Basic Website</CardTitle>
                    <CardDescription>Perfect for small businesses and startups</CardDescription>
                    <div className="mt-4 text-3xl font-bold">
                      ₹25,000<span className="text-sm font-normal text-muted-foreground"> - ₹50,000</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>5-10 page responsive website</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Mobile-friendly design</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Contact forms & basic SEO</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>1 year free hosting & domain</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6" asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="relative border-primary">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                  <CardHeader>
                    <CardTitle>E-commerce Website</CardTitle>
                    <CardDescription>Complete online store solution</CardDescription>
                    <div className="mt-4 text-3xl font-bold">
                      ₹75,000<span className="text-sm font-normal text-muted-foreground"> - ₹1,50,000</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Full e-commerce functionality</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Payment gateway integration</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Inventory management system</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Admin panel & analytics</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Mobile app (optional)</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6" asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="relative">
                  <CardHeader>
                    <CardTitle>Custom Web Application</CardTitle>
                    <CardDescription>Enterprise-level web solutions</CardDescription>
                    <div className="mt-4 text-3xl font-bold">
                      ₹2,00,000<span className="text-sm font-normal text-muted-foreground">+</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Custom functionality development</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Database design & optimization</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>API development & integration</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Advanced security features</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Dedicated project manager</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6" asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Digital Marketing Pricing */}
            <TabsContent value="digital-marketing" className="mt-6">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="relative">
                  <CardHeader>
                    <CardTitle>Starter SEO</CardTitle>
                    <CardDescription>Basic SEO for small businesses</CardDescription>
                    <div className="mt-4 text-3xl font-bold">
                      ₹15,000<span className="text-sm font-normal text-muted-foreground">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Keyword research & optimization</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>On-page SEO (up to 10 pages)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Google My Business setup</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Monthly performance report</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6" asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="relative border-primary">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                  <CardHeader>
                    <CardTitle>Complete Digital Marketing</CardTitle>
                    <CardDescription>SEO + Social Media + PPC campaigns</CardDescription>
                    <div className="mt-4 text-3xl font-bold">
                      ₹35,000<span className="text-sm font-normal text-muted-foreground">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Advanced SEO & link building</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Social media management (3 platforms)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Google Ads & Facebook Ads</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Content creation (8 posts/month)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Bi-weekly performance reports</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6" asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="relative">
                  <CardHeader>
                    <CardTitle>Enterprise Marketing</CardTitle>
                    <CardDescription>Full-scale digital marketing solution</CardDescription>
                    <div className="mt-4 text-3xl font-bold">
                      ₹75,000<span className="text-sm font-normal text-muted-foreground">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Complete SEO & technical optimization</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Multi-platform social media</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Advanced PPC campaigns</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Email marketing automation</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Dedicated account manager</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6" asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Lead Generation Pricing */}
            <TabsContent value="lead-generation" className="mt-6">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="relative">
                  <CardHeader>
                    <CardTitle>Basic Lead Generation</CardTitle>
                    <CardDescription>Essential lead capture setup</CardDescription>
                    <div className="mt-4 text-3xl font-bold">
                      ₹20,000<span className="text-sm font-normal text-muted-foreground">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Landing page optimization</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Lead capture forms setup</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Basic email automation</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Monthly lead reports</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6" asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="relative border-primary">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                  <CardHeader>
                    <CardTitle>Advanced Lead Generation</CardTitle>
                    <CardDescription>Complete lead nurturing system</CardDescription>
                    <div className="mt-4 text-3xl font-bold">
                      ₹45,000<span className="text-sm font-normal text-muted-foreground">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Multi-channel lead generation</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>CRM integration & management</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Email marketing campaigns</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Lead scoring & qualification</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Conversion rate optimization</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6" asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="relative">
                  <CardHeader>
                    <CardTitle>Enterprise Lead Generation</CardTitle>
                    <CardDescription>Full-scale lead generation system</CardDescription>
                    <div className="mt-4 text-3xl font-bold">
                      ₹80,000<span className="text-sm font-normal text-muted-foreground">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Advanced automation workflows</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Predictive lead analytics</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Multi-touch attribution</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Custom integrations</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Dedicated lead generation specialist</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6" asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Branding Pricing */}
            <TabsContent value="branding" className="mt-6">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="relative">
                  <CardHeader>
                    <CardTitle>Logo & Basic Branding</CardTitle>
                    <CardDescription>Essential brand identity package</CardDescription>
                    <div className="mt-4 text-3xl font-bold">
                      ₹15,000<span className="text-sm font-normal text-muted-foreground"> - ₹25,000</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Logo design (3 concepts)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Business card design</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Letterhead design</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Basic brand guidelines</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6" asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="relative border-primary">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                  <CardHeader>
                    <CardTitle>Complete Brand Identity</CardTitle>
                    <CardDescription>Comprehensive branding solution</CardDescription>
                    <div className="mt-4 text-3xl font-bold">
                      ₹50,000<span className="text-sm font-normal text-muted-foreground"> - ₹75,000</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Complete logo suite & variations</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Brand guidelines document</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Marketing collateral design</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Social media templates</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Packaging design (if applicable)</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6" asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="relative">
                  <CardHeader>
                    <CardTitle>Enterprise Branding</CardTitle>
                    <CardDescription>Complete brand ecosystem</CardDescription>
                    <div className="mt-4 text-3xl font-bold">
                      ₹1,50,000<span className="text-sm font-normal text-muted-foreground">+</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Brand strategy & positioning</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Complete visual identity system</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Brand implementation across all touchpoints</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Brand training & workshops</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Ongoing brand management</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6" asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Tech Solutions Pricing */}
            <TabsContent value="integration" className="mt-6">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="relative">
                  <CardHeader>
                    <CardTitle>Basic Integration</CardTitle>
                    <CardDescription>Simple API integrations</CardDescription>
                    <div className="mt-4 text-3xl font-bold">
                      ₹30,000<span className="text-sm font-normal text-muted-foreground"> - ₹50,000</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Payment gateway integration</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Basic CRM setup</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Email service integration</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Basic documentation</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6" asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="relative border-primary">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                  <CardHeader>
                    <CardTitle>Advanced Integration</CardTitle>
                    <CardDescription>Complex system integrations</CardDescription>
                    <div className="mt-4 text-3xl font-bold">
                      ₹1,00,000<span className="text-sm font-normal text-muted-foreground"> - ₹2,00,000</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Multi-system integrations</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Custom API development</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Database optimization</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Workflow automation</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Testing & deployment</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6" asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="relative">
                  <CardHeader>
                    <CardTitle>Enterprise Solutions</CardTitle>
                    <CardDescription>Custom enterprise software</CardDescription>
                    <div className="mt-4 text-3xl font-bold">
                      ₹5,00,000<span className="text-sm font-normal text-muted-foreground">+</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Custom software development</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Enterprise architecture design</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Scalability & performance optimization</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Security implementation</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Ongoing maintenance & support</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6" asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Growth Strategy Pricing */}
            <TabsContent value="growth-strategy" className="mt-6">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="relative">
                  <CardHeader>
                    <CardTitle>Business Consultation</CardTitle>
                    <CardDescription>Strategic business guidance</CardDescription>
                    <div className="mt-4 text-3xl font-bold">
                      ₹25,000<span className="text-sm font-normal text-muted-foreground">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Business analysis & audit</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Growth strategy development</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Monthly strategy sessions</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Performance tracking</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6" asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="relative border-primary">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                  <CardHeader>
                    <CardTitle>Growth Acceleration</CardTitle>
                    <CardDescription>Complete growth strategy implementation</CardDescription>
                    <div className="mt-4 text-3xl font-bold">
                      ₹60,000<span className="text-sm font-normal text-muted-foreground">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Comprehensive market research</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Digital transformation roadmap</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Process optimization</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Growth hacking strategies</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Bi-weekly strategy reviews</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6" asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="relative">
                  <CardHeader>
                    <CardTitle>Enterprise Growth</CardTitle>
                    <CardDescription>Full-scale business transformation</CardDescription>
                    <div className="mt-4 text-3xl font-bold">
                      ₹1,50,000<span className="text-sm font-normal text-muted-foreground">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Complete business transformation</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Multi-channel growth strategies</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Advanced analytics & insights</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Team training & development</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Dedicated growth strategist</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6" asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Political Management Pricing */}
            <TabsContent value="political-management" className="mt-6">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="relative">
                  <CardHeader>
                    <CardTitle>Local Campaign</CardTitle>
                    <CardDescription>Municipal/Local election campaigns</CardDescription>
                    <div className="mt-4 text-3xl font-bold">
                      ₹2,00,000<span className="text-sm font-normal text-muted-foreground"> - ₹5,00,000</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Digital campaign management</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Basic ground campaigning</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Voter slip printing (5,000 slips)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Basic campaign materials</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6" asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="relative border-primary">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                  <CardHeader>
                    <CardTitle>Assembly Campaign</CardTitle>
                    <CardDescription>State assembly election campaigns</CardDescription>
                    <div className="mt-4 text-3xl font-bold">
                      ₹10,00,000<span className="text-sm font-normal text-muted-foreground"> - ₹25,00,000</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Complete digital & ground campaigns</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>LED video van (30 days)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Constituency profiling & analysis</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Media coordination & PR</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Cultural activities & events</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6" asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="relative">
                  <CardHeader>
                    <CardTitle>Parliamentary Campaign</CardTitle>
                    <CardDescription>Lok Sabha election campaigns</CardDescription>
                    <div className="mt-4 text-3xl font-bold">
                      ₹50,00,000<span className="text-sm font-normal text-muted-foreground">+</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Multi-constituency campaign management</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Advanced digital strategies</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Multiple LED video vans</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Comprehensive media management</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Dedicated campaign team</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6" asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              All packages are customizable based on your specific requirements and budget.
            </p>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Us for Custom Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ContactCTA />
    </>
  )
}
