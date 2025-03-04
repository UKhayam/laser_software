"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export default function Projects() {
  const categories = ["All", "Web", "Mobile", "Design", "Marketing"]
  const [activeCategory, setActiveCategory] = useState("All")
  const [showAll, setShowAll] = useState(false)

  // Update the category change handler
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setShowAll(false) // Reset the show all state when changing categories
  }

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with payment integration and inventory management.",
      image: "/placeholder.svg?height=600&width=800",
      category: "Web",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Fitness Tracking App",
      description: "Mobile application for tracking workouts, nutrition, and health metrics.",
      image: "/placeholder.svg?height=600&width=800",
      category: "Mobile",
      tags: ["React Native", "Firebase", "Redux"],
    },
    {
      title: "Corporate Website Redesign",
      description: "Complete redesign of a corporate website with improved UX and performance.",
      image: "/placeholder.svg?height=600&width=800",
      category: "Design",
      tags: ["UI/UX", "Figma", "Next.js"],
    },
    {
      title: "Social Media Campaign",
      description: "Strategic social media campaign that increased engagement by 200%.",
      image: "/placeholder.svg?height=600&width=800",
      category: "Marketing",
      tags: ["Strategy", "Content", "Analytics"],
    },
    {
      title: "Inventory Management System",
      description: "Custom inventory management system for a retail chain with 50+ locations.",
      image: "/placeholder.svg?height=600&width=800",
      category: "Web",
      tags: ["Vue.js", "Laravel", "MySQL"],
    },
    {
      title: "Real Estate App",
      description: "Mobile app for browsing and searching real estate listings with virtual tours.",
      image: "/placeholder.svg?height=600&width=800",
      category: "Mobile",
      tags: ["Flutter", "GraphQL", "AWS"],
    },
    {
      title: "Healthcare Management System",
      description: "Comprehensive healthcare management system for hospitals and clinics.",
      image: "/placeholder.svg?height=600&width=800",
      category: "Web",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Food Delivery App",
      description: "Mobile app for ordering food from local restaurants with real-time tracking.",
      image: "/placeholder.svg?height=600&width=800",
      category: "Mobile",
      tags: ["React Native", "Firebase", "Redux"],
    },
    {
      title: "Corporate Branding",
      description: "Complete brand identity design for a tech startup.",
      image: "/placeholder.svg?height=600&width=800",
      category: "Design",
      tags: ["Branding", "Logo Design", "Style Guide"],
    },
    {
      title: "E-learning Platform",
      description: "Online learning platform with courses, quizzes, and progress tracking.",
      image: "/placeholder.svg?height=600&width=800",
      category: "Web",
      tags: ["Vue.js", "Django", "PostgreSQL"],
    },
    {
      title: "Digital Marketing Campaign",
      description: "Comprehensive digital marketing strategy for a retail brand.",
      image: "/placeholder.svg?height=600&width=800",
      category: "Marketing",
      tags: ["Digital Marketing", "SEO", "Content Strategy"],
    },
    {
      title: "Brand Awareness Campaign",
      description: "Multi-channel marketing campaign that increased brand visibility.",
      image: "/placeholder.svg?height=600&width=800",
      category: "Marketing",
      tags: ["Branding", "Social Media", "Analytics"],
    },
    {
      title: "UI/UX Design System",
      description: "Complete design system for a SaaS platform.",
      image: "/placeholder.svg?height=600&width=800",
      category: "Design",
      tags: ["UI/UX", "Design System", "Figma"],
    },
    {
      title: "Mobile Game UI",
      description: "User interface design for a mobile gaming application.",
      image: "/placeholder.svg?height=600&width=800",
      category: "Design",
      tags: ["Game Design", "Mobile UI", "Animation"],
    },
  ]

  const toggleShowAll = () => {
    setShowAll((prev) => !prev)
  }

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
          <p className="text-muted-foreground text-lg">
            Take a look at some of our recent projects and see how we've helped our clients achieve their goals.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12 px-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => handleCategoryChange(category)}
              className="min-w-[90px] md:min-w-24 text-sm md:text-base"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-2 md:px-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {displayedProjects.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                },
              }}
              className="group"
            >
              <div className="overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:shadow-md">
                <div className="relative overflow-hidden aspect-video">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <Button variant="secondary" size="sm" className="gap-2">
                      View Project <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button size="lg" className="gap-2" onClick={toggleShowAll}>
            {showAll ? "Show Less" : "Show More"} {showAll ? null : <ArrowRight className="h-4 w-4" />}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

