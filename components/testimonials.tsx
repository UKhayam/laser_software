"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      content:
        "Laser Software Solutions transformed our business with their exceptional web development services. Their team delivered a high-performance website that exceeded our expectations and significantly improved our online presence.",
      author: "Jennifer Adams",
      position: "CEO, TechVision Inc.",
      image: "/teams/icon.svg",
      rating: 5,
      company: "TechVision Inc.",
    },
    {
      id: 2,
      content:
        "Working with Laser Software was a game-changer for our mobile app. Their development team was professional, responsive, and delivered a product that our users love. The attention to detail and quality of work was outstanding.",
      author: "Michael Torres",
      position: "Product Manager, Innovate Apps",
      image: "/teams/icon.svg",
      rating: 5,
      company: "Innovate Apps",
    },
    {
      id: 3,
      content:
        "The custom software solution developed by Laser Software has streamlined our operations and increased efficiency by 40%. Their team took the time to understand our unique challenges and delivered a tailored solution that perfectly addresses our needs.",
      author: "Samantha Lee",
      position: "Operations Director, Global Logistics",
      image: "/teams/icon.svg",
      rating: 5,
      company: "Global Logistics",
    },
    {
      id: 4,
      content:
        "Their social media marketing strategy completely revitalized our brand's online presence. We've seen a 200% increase in engagement and a significant boost in conversions. The team at Laser Software truly understands digital marketing.",
      author: "Robert Johnson",
      position: "Marketing Director, Retail Innovations",
      image: "/teams/icon.svg",
      rating: 4,
      company: "Retail Innovations",
    },
  ]

  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = useCallback(() => {
    setCurrent((current) => (current === testimonials.length - 1 ? 0 : current + 1))
  }, [testimonials.length])

  const prev = useCallback(() => {
    setCurrent((current) => (current === 0 ? testimonials.length - 1 : current - 1))
  }, [testimonials.length])

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, next])

  return (
    <section id="testimonials" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what our clients have to say about our services and solutions.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Background decorative elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl" />

          {/* Large quote icon */}
          <div className="absolute -top-6 -left-6 text-primary/10">
            <Quote className="h-24 w-24" />
          </div>

          {/* Testimonial slider */}
          <div className="relative" onMouseEnter={() => setAutoplay(false)} onMouseLeave={() => setAutoplay(true)}>
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <Card className="border border-border bg-card/50 backdrop-blur-sm shadow-lg">
                  <CardContent className="p-8 md:p-10">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start">
                      <div className="shrink-0">
                        <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-background">
                          <Image
                            src={testimonials[current].image || "/placeholder.svg"}
                            alt={testimonials[current].author}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <div className="flex justify-center md:justify-start mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < testimonials[current].rating ? "fill-primary text-primary" : "fill-muted text-muted"
                              }`}
                            />
                          ))}
                        </div>
                        <blockquote className="text-lg md:text-xl italic mb-6">
                          "{testimonials[current].content}"
                        </blockquote>
                        <div>
                          <p className="font-semibold text-lg">{testimonials[current].author}</p>
                          <p className="text-primary">{testimonials[current].position}</p>
                          <p className="text-muted-foreground text-sm">{testimonials[current].company}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex justify-center mt-8 gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                aria-label="Previous testimonial"
                className="rounded-full"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      current === index ? "bg-primary scale-125" : "bg-muted"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                aria-label="Next testimonial"
                className="rounded-full"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

