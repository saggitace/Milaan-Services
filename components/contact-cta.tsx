import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ContactCTA() {
  return (
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden dark:bg-gradient-to-br dark:from-primary/80 dark:to-blue-900/90">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

        {/* Dark mode specific floating particles */}
        <div className="hidden dark:block">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white/20 rounded-full animate-float animation-delay-1000"></div>
          <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-white/30 rounded-full animate-float animation-delay-2000"></div>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Let's discuss how Milaan Infotech can help you achieve your business goals with our tailored digital
            solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="transition-all duration-300 hover:scale-105">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
              asChild
            >
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
