"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />
      </div>

      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 8,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 10,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container relative mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6"
          >
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
                Innovative Software Solutions
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Transforming Ideas into <span className="text-primary">Digital Reality</span>
            </motion.h1>

            <motion.p
              className="text-lg text-muted-foreground max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              We build cutting-edge software solutions that help businesses thrive in the digital age. From web and
              mobile apps to custom software development.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Button size="lg" className="w-full sm:w-auto px-8">
                Get Started
              </Button>
              <Link href="#services" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto px-8">
                  Our Services
                </Button>
              </Link>
            </motion.div>

            <motion.div
              className="pt-8 flex items-center space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=40&width=40`}
                      alt={`Client ${i}`}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">100+</span> satisfied clients
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative"
          >
            <div className="relative z-9 rounded-2xl overflow-hidden shadow-2xl border border-border">
              <Image
                src="image3.jpg"
                alt="Software Development"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-xl blur-xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-xl blur-xl" />

            {/* Stats card */}
            <motion.div
              className="absolute -bottom-8 -left-8 md:-left-16 bg-background rounded-xl p-4 shadow-lg border border-border"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">98%</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Client Satisfaction</p>
                  <p className="text-xs text-muted-foreground">Based on 500+ reviews</p>
                </div>
              </div>
            </motion.div>

            {/* Experience card */}
            <motion.div
              className="absolute -top-8 -right-8 md:-right-16 bg-background rounded-xl p-4 shadow-lg border border-border"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">10+</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Years Experience</p>
                  <p className="text-xs text-muted-foreground">In software development</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

