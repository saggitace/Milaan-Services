import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted dark:bg-background/30">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-primary">Milaan</span>
              <span className="text-2xl font-medium">Infotech</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Your trusted digital transformation partner. We help businesses grow through innovative IT solutions and
              digital marketing strategies.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="text-muted-foreground hover:text-primary transition-colors">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#web-development"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Web & App Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services#digital-marketing"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  SEO & Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services#lead-generation"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Lead Generation
                </Link>
              </li>
              <li>
                <Link href="/services#branding" className="text-muted-foreground hover:text-primary transition-colors">
                  Branding & Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services#integration"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Integration & Tech Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services#political-management"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Political Campaign Management
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Professor colony, Shivpuri, patna, Bihar, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground">+91 73700 38276</span>
                <span className="text-muted-foreground">+91 93554 77609</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground">servicesmilaan@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>


        <div className="mt-12 pt-8 border-t border-border/40">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Milaan Infotech Pvt Ltd. All rights reserved.
            </p>
            {/* <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy-policy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Sitemap
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
