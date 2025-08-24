"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MessageCircle } from "lucide-react"

export default function ConsultationBooking() {
  const handleCallClick = () => {
    window.location.href = "tel:+917370038276"
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = "917370038276"
    const message = encodeURIComponent(
      "Hi! I would like to book a FREE consultation with Milaan Infotech. Please let me know your available slots.",
    )
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="py-16 bg-slate-800 text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get a <span className="text-amber-500">FREE</span> Consultation Today
          </h2>
          <p className="text-lg text-gray-300">
            Committed to Your Success: Our Experts Are Here to Assist You. Connect with a Specialist for a Complimentary
            30-Minute Consultation and Get Your Queries Resolved.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Call Us Card */}
          <Card className="bg-white text-slate-800">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="relative w-24 h-24 mb-4">
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">New</div>
                <div className="w-full h-full flex items-center justify-center">
                  <Phone className="h-16 w-16 text-cyan-500" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-6">Call US</h3>
              <Button onClick={handleCallClick} className="bg-amber-700 hover:bg-amber-800 text-white w-full">
                Book An Appointment
              </Button>
            </CardContent>
          </Card>

          {/* WhatsApp Chat Card */}
          <Card className="bg-white text-slate-800">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="relative w-24 h-24 mb-4">
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">New</div>
                <div className="w-full h-full flex items-center justify-center">
                  <MessageCircle className="h-16 w-16 text-green-500" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-6">WHATSAPP CHAT</h3>
              <Button onClick={handleWhatsAppClick} className="bg-amber-700 hover:bg-amber-800 text-white w-full">
                Book An Appointment
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
