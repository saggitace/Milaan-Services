"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false)

  const handleWhatsAppClick = () => {
    const phoneNumber = "917370038276" // Replace with actual WhatsApp number
    const message = encodeURIComponent(
      "Hi! I'm interested in learning more about Milaan Infotech's digital services. Can you help me?",
    )
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleWhatsAppClick}
          className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          size="icon"
        >
          <MessageCircle className="h-6 w-6 text-white" />
          <span className="sr-only">Chat on WhatsApp</span>
        </Button>
      </div>

      {/* Optional: WhatsApp Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border">
          <div className="flex items-center justify-between p-4 bg-green-500 text-white rounded-t-lg">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5" />
              <span className="font-medium">Chat with us</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-white hover:bg-green-600"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Hi there! 👋 How can we help you today?</p>
            <Button onClick={handleWhatsAppClick} className="w-full bg-green-500 hover:bg-green-600">
              Start Chat on WhatsApp
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
