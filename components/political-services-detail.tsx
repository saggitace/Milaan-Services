"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, Megaphone, MapPin, Camera, Shirt } from "lucide-react"

export default function PoliticalServicesDetail() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Political Campaign Solutions</h2>
          <p className="text-lg text-muted-foreground">
            From digital campaigns to ground operations, we provide end-to-end political campaign management services to
            help you connect with voters and win elections.
          </p>
        </div>

        {/* Service Images */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src="/images/political-services-1.png"
              alt="Political Campaign Services Overview"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src="/images/political-services-2.png"
              alt="Political Campaign Tools and Materials"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Detailed Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                <Megaphone className="h-6 w-6 text-blue-500" />
              </div>
              <CardTitle>Digital Campaigning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Reach voters directly through strategic social media campaigns and digital outreach.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Social media campaign management</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Targeted voter messaging</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Digital content creation</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-green-500" />
              </div>
              <CardTitle>Ground Campaigning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Door-to-door outreach and grassroots campaign management for maximum voter engagement.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Door-to-door campaigns</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Community outreach programs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Volunteer coordination</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                <Camera className="h-6 w-6 text-purple-500" />
              </div>
              <CardTitle>Election Support Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Complete election support including LED video vans, voter slips, and campaign materials.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">LED video van services</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Voter slip printing & distribution</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Campaign material production</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-orange-500" />
              </div>
              <CardTitle>Constituency Profiling</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Detailed ward and voter analysis to understand constituency demographics and preferences.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Ward-wise voter analysis</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Demographic profiling</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Voting pattern analysis</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
                <Camera className="h-6 w-6 text-red-500" />
              </div>
              <CardTitle>Media Coordination</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Professional press management, interviews, and news coverage coordination.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Press conference management</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Interview coordination</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">News coverage management</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-pink-500/10 flex items-center justify-center mb-4">
                <Shirt className="h-6 w-6 text-pink-500" />
              </div>
              <CardTitle>Campaign Materials & Events</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Complete branding solutions and cultural activities to create memorable campaign experiences.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">T-shirts, flags, and cutouts</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Cultural programs & street plays</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Booth agent training & materials</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Win Your Election?</h3>
            <p className="mb-6">
              Join the winning team! Contact us today to discuss your political campaign strategy and get started with
              our comprehensive election management services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => (window.location.href = "tel:+919876543210")}
                className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Call Now: +91 98765 43210
              </button>
              <button
                onClick={() => {
                  const message = encodeURIComponent(
                    "Hi! I'm interested in your Political Campaign Management services. Can we discuss my requirements?",
                  )
                  window.open(`https://wa.me/919876543210?text=${message}`, "_blank")
                }}
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
              >
                WhatsApp Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
