"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GithubIcon, ExternalLinkIcon } from "lucide-react"
import Image from "next/image"

type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  github?: string
  demo?: string
  color: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Eco Sort",
    description:
      "AI-powered waste sorter for efficient recycling. This project uses machine learning and image detection models to automatically sort waste for better recycling outcomes.",
    image: "/images/eco-sort-banner.jpeg",
    tags: ["JavaScript", "CSS", "Machine Learning", "Image Detection"],
    github: "https://github.com/omar-rasin/EcoSort",
    color: "from-primary/80 to-primary/20",
  },
  {
    id: 2,
    title: "Aqua Grow",
    description:
      "IOT smart plant irrigation system that helps monitor plant humidity, water levels, and automates watering based on environmental conditions.",
    image: "/images/aqua-grow-banner.jpeg",
    tags: ["C++", "Arduino", "NodeMCU", "IoT"],
    color: "from-secondary/80 to-secondary/20",
  },
  {
    id: 3,
    title: "Slam Dunk",
    description:
      "Basketball club management system designed to streamline team operations, player statistics, and event scheduling for basketball clubs.",
    image: "/images/slam-dunk-banner.jpeg",
    tags: ["C", "Database", "Management System"],
    github: "https://github.com/omar-rasin/slam-dunk",
    color: "from-accent/80 to-accent/20",
  },
]

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: project.id * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 border-0">
                  <div className={`relative overflow-hidden h-48 bg-gradient-to-r ${project.color}`}>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500"
                      style={{
                        transform: hoveredId === project.id ? "scale(1.05)" : "scale(1)",
                      }}
                    />
                  </div>
                  <CardContent className="p-6 bg-card border border-primary/10">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0 flex gap-2 bg-card border-t-0 border-x border-b border-primary/10">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2 border-primary/50 text-primary hover:bg-primary/10"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <GithubIcon className="h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button size="sm" className="gap-2 bg-primary hover:bg-primary/90" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLinkIcon className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

