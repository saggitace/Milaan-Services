"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    service: "",
    message: "",
  })

  // CHANGE: Added WhatsApp number constant - Update this with your actual WhatsApp number
  const WHATSAPP_NUMBER = "917370038276" // Format: country code + number without + or spaces

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // CHANGE: Modified handleSubmit to use Next.js API route for automatic email sending
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // Send form data to Next.js API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "We'll get back to you as soon as possible.",
        })
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          budget: "",
          service: "",
          message: "",
        })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
      })
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              Get in touch with our team to discuss how we can help your business grow.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Company name (optional)"
                          value={formData.company}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>What service are you interested in?</Label>
                      <Select value={formData.service} onValueChange={(value) => handleSelectChange("service", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="web-development">Web & App Development</SelectItem>
                          <SelectItem value="digital-marketing">SEO & Digital Marketing</SelectItem>
                          <SelectItem value="lead-generation">Lead Generation</SelectItem>
                          <SelectItem value="branding">Branding & Design</SelectItem>
                          <SelectItem value="integration">Integration & Tech Solutions</SelectItem>
                          <SelectItem value="growth-strategy">Business Growth Strategy</SelectItem>
                          <SelectItem value="election-consultaion">Election Consultation</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>What is your budget range?</Label>
                      <RadioGroup
                        value={formData.budget}
                        onValueChange={(value) => handleSelectChange("budget", value)}
                        className="grid sm:grid-cols-2 gap-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="under-25k" id="under-25k" />
                          <Label htmlFor="under-25k">Under ₹25,000</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="25k-50k" id="25k-50k" />
                          <Label htmlFor="25k-50k">₹25,000 - ₹50,000</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="50k-100k" id="50k-100k" />
                          <Label htmlFor="50k-100k">₹50,000 - ₹1,00,000</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="above-100k" id="above-100k" />
                          <Label htmlFor="above-100k">Above ₹1,00,000</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project or requirements..."
                        value={formData.message}
                        onChange={handleChange}
                        className="min-h-[120px]"
                        required
                      />
                    </div>

                    {/* CHANGE: Updated button text for seamless submission */}
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Office Address</h3>
                        <p className="text-muted-foreground">
                          Professor colony, Shivpuri
                          <br />
                          Patna, Bihar 800023
                          <br />
                          India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-muted-foreground">+91 73700 38276</p>
                        <p className="text-muted-foreground">+91 93554 77609</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-muted-foreground">singhankit27499@gmail.com</p>
                        {/* <p className="text-muted-foreground">singh.abhishek20013@gmail.com</p> */}
                        <p className="text-muted-foreground">servicesmilaan@gmail.com</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Business Hours</h3>
                      <div className="space-y-1 text-muted-foreground">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 10:00 AM - 2:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
                  <div className="grid grid-cols-4 gap-4">
                    <Button variant="outline" size="icon" className="h-12 w-12">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-facebook"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                      <span className="sr-only">Facebook</span>
                    </Button>
                    <Button variant="outline" size="icon" className="h-12 w-12">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-twitter"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                      <span className="sr-only">Twitter</span>
                    </Button>
                    <Button variant="outline" size="icon" className="h-12 w-12">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-instagram"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                      <span className="sr-only">Instagram</span>
                    </Button>
                    <Button variant="outline" size="icon" className="h-12 w-12">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-linkedin"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl font-bold mb-4">Find Us</h2>
            <p className="text-muted-foreground">
              Visit our office to meet our team and discuss your project in person.
            </p>
          </div>

          <div className="h-[400px] w-full rounded-lg overflow-hidden bg-background">
            {/* Placeholder for map */}
            <div className="h-full w-full flex items-center justify-center bg-muted">
              {/* <p className="text-muted-foreground">Interactive Map Would Be Embedded Here</p> */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d224.86052180509353!2d85.11021567828003!3d25.612612784482394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDM2JzQ1LjQiTiA4NcKwMDYnMzYuNCJF!5e0!3m2!1sen!2sin!4v1748714451703!5m2!1sen!2sin" width="700" height="450"  loading="lazy" ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}