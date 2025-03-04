"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Github, Linkedin, Twitter } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Team() {
  const teamMembers = [
    {
      name: "Mr. Umar Khayyam",
      role: "Founder",
      image: "/teams/founder.jpg",
      bio: "Expert in software development, software engineering and business leadership.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Mr. Asad",
      role: "CTO",
      image: "/teams/icon.svg",
      bio: "Expert in React Native & Hybrid Mobile Apps Development.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Mr. Ali",
      role: "UI/UX Designer",
      image: "/teams/icon.svg",
      bio: "Creative designer with an eye for detail and a focus on user-centered experiences.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "David Kim",
      role: "Mobile Developer",
      image: "/teams/icon.svg",
      bio: "Specialist in native and cross-platform mobile application development.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Olivia Martinez",
      role: "Marketing Specialist",
      image: "/teams/icon.svg",
      bio: "Digital marketing expert with a focus on growth strategies and brand development.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
  ]

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground text-lg">
            Our talented professionals are passionate about creating innovative solutions that drive your business
            forward.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full border border-border hover:border-primary/20 transition-colors group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <div className="aspect-square w-full relative">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                      <div className="flex space-x-4">
                        <a
                          href={member.social.twitter}
                          className="bg-background/80 p-2 rounded-full hover:bg-primary/20 transition-colors"
                          aria-label={`${member.name}'s Twitter`}
                        >
                          <Twitter className="h-5 w-5" />
                        </a>
                        <a
                          href={member.social.linkedin}
                          className="bg-background/80 p-2 rounded-full hover:bg-primary/20 transition-colors"
                          aria-label={`${member.name}'s LinkedIn`}
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                        <a
                          href={member.social.github}
                          className="bg-background/80 p-2 rounded-full hover:bg-primary/20 transition-colors"
                          aria-label={`${member.name}'s GitHub`}
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

