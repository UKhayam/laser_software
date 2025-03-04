"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Our Location",
      details: "123 Business Avenue, Tech City, 10001",
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Phone Number",
      details: "+1 (555) 123-4567",
    },
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email Address",
      details: "info@lasersoftware.com",
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: "Working Hours",
      details: "Mon-Fri: 9AM - 6PM",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind or want to learn more about our services? Contact us today and let's discuss how we
            can help.
          </p>
        </motion.div>

        {/* Contact form grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
          {/* Contact info card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <Card className="border-border shadow-lg h-full">
              <CardHeader className="space-y-1 md:space-y-2">
                <CardTitle className="text-xl md:text-2xl">Contact Information</CardTitle>
                <CardDescription className="text-sm md:text-base">
                  Reach out to us through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="mt-1 bg-primary/10 p-2 rounded-full">{item.icon}</div>
                      <div>
                        <h3 className="font-medium">{item.title}</h3>
                        <p className="text-muted-foreground">{item.details}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-10">
                  <h3 className="font-medium mb-4">Connect With Us</h3>
                  <div className="flex gap-4">
                    {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                      <a
                        key={social}
                        href={`#${social}`}
                        className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                        aria-label={`Visit our ${social} page`}
                      >
                        <span className="sr-only">{social}</span>
                        {/* Placeholder for social icons */}
                        <div className="w-5 h-5 bg-primary rounded-sm" />
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact form card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <Card className="border-border shadow-lg">
              <CardHeader className="space-y-1 md:space-y-2">
                <CardTitle className="text-xl md:text-2xl">Send Us a Message</CardTitle>
                <CardDescription className="text-sm md:text-base">
                  Fill out the form below and we'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    className="flex flex-col items-center justify-center text-center py-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. We'll respond to your inquiry within 24 hours.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="John Doe" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="john@example.com" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="Project Inquiry" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Tell us about your project..." rows={5} required />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

