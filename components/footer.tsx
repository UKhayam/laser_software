"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Our Team", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact Us", href: "#contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Web Development", href: "#" },
        { name: "App Development", href: "#" },
        { name: "Custom Software", href: "#" },
        { name: "Social Media Marketing", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Case Studies", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Privacy Policy", href: "#" },
      ],
    },
  ]

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="inline-block mb-6">
                <div className="text-2xl font-bold text-primary">
                  Laser<span className="text-foreground">Software</span>
                </div>
              </Link>
              <p className="text-muted-foreground mb-6 max-w-md">
                We build cutting-edge software solutions that help businesses thrive in the digital age. From web and
                mobile apps to custom software development.
              </p>
              {/* Newsletter signup */}
              <div className="flex flex-col space-y-2">
                <h3 className="font-medium mb-2">Subscribe to our newsletter</h3>
                <div className="flex gap-2 max-w-sm">
                  <Input placeholder="Enter your email" className="flex-1" />
                  <Button size="icon">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer links */}
          {footerLinks.map((column, columnIndex) => (
            <motion.div
              key={columnIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * columnIndex }}
              className="space-y-4 md:space-y-6"
            >
              <h3 className="font-medium text-base md:text-lg">{column.title}</h3>
              <ul className="space-y-2 md:space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Footer bottom */}
        <motion.div
          className="border-t border-border mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Laser Software Solutions. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

