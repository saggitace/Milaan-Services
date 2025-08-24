"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggleButton } from "@/components/theme-toggle-button"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Roadmap", href: "/roadmap" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <span className="text-2xl font-bold text-primary transition-all duration-300 group-hover:scale-110">
                Milaan
              </span>
              <span className="text-2xl font-medium transition-all duration-300 group-hover:text-primary">
                Infotech
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary relative hover-underline ${
                  pathname === item.href ? "text-primary" : "text-foreground/80"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggleButton />
            {/* <Button asChild className="hidden md:inline-flex transition-all duration-300 hover:scale-105">
              <Link href="/contact">Get Started</Link>
            </Button> */}

            <button
              className="md:hidden transition-transform duration-300 hover:rotate-180"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu with animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-custom py-4 space-y-2">
          {navigation.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block py-2 text-base font-medium transition-colors hover:text-primary ${
                pathname === item.href ? "text-primary" : "text-foreground/80"
              }`}
              onClick={() => setIsOpen(false)}
              style={{
                transitionDelay: `${index * 50}ms`,
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateX(0)" : "translateX(-20px)",
                transition: "opacity 300ms, transform 300ms",
              }}
            >
              {item.name}
            </Link>
          ))}
          <Button asChild className="w-full mt-4 transition-all duration-300 hover:scale-105">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
