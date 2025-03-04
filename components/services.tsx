"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Globe, BarChart, Database, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with the latest technologies.",
      icon: <Globe className="h-10 w-10 text-primary" />,
    },
    {
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: <Smartphone className="h-10 w-10 text-primary" />,
    },
    {
      title: "Custom Software",
      description: "Tailored software solutions to meet your specific business needs.",
      icon: <Code className="h-10 w-10 text-primary" />,
    },
    {
      title: "Social Media Marketing",
      description: "Strategic social media campaigns to boost your online presence.",
      icon: <BarChart className="h-10 w-10 text-primary" />,
    },
    {
      title: "Database Solutions",
      description: "Efficient database design, development, and optimization services.",
      icon: <Database className="h-10 w-10 text-primary" />,
    },
    {
      title: "Performance Optimization",
      description: "Speed up your existing applications and improve user experience.",
      icon: <Zap className="h-10 w-10 text-primary" />,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg">
            We offer a wide range of software development services to help your business grow and succeed in the digital
            world.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border border-border hover:border-primary/50 transition-colors group p-2 md:p-4">
                <CardHeader className="space-y-4 md:space-y-6">
                  <div className="mb-2 md:mb-4 rounded-lg w-12 md:w-16 h-12 md:h-16 flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg md:text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm md:text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

