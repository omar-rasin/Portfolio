"use client"

import type React from "react"

import { motion } from "framer-motion"

type Skill = {
  name: string
  icon: React.ReactNode
  category: "technical" | "soft" | "other"
  color: string
}

import {
  Code2Icon,
  BrainCircuitIcon,
  DatabaseIcon,
  ServerIcon,
  BarChartIcon,
  MessageSquareIcon,
  TrendingUpIcon,
  UsersIcon,
  ClubIcon as BasketballIcon,
  PencilRulerIcon,
} from "lucide-react"

export default function Skills() {
  const skills: Skill[] = [
    {
      name: "C",
      icon: <Code2Icon className="h-8 w-8" />,
      category: "technical",
      color: "bg-primary/10 text-primary hover:bg-primary/20",
    },
    {
      name: "C++",
      icon: <Code2Icon className="h-8 w-8" />,
      category: "technical",
      color: "bg-secondary/10 text-secondary hover:bg-secondary/20",
    },
    {
      name: "Java",
      icon: <Code2Icon className="h-8 w-8" />,
      category: "technical",
      color: "bg-accent/10 text-accent hover:bg-accent/20",
    },
    {
      name: "Python",
      icon: <Code2Icon className="h-8 w-8" />,
      category: "technical",
      color: "bg-primary/10 text-primary hover:bg-primary/20",
    },
    {
      name: "Data Structures & Algorithms",
      icon: <DatabaseIcon className="h-8 w-8" />,
      category: "technical",
      color: "bg-secondary/10 text-secondary hover:bg-secondary/20",
    },
    {
      name: "Object-Oriented Programming",
      icon: <ServerIcon className="h-8 w-8" />,
      category: "technical",
      color: "bg-accent/10 text-accent hover:bg-accent/20",
    },
    {
      name: "Machine Learning",
      icon: <BrainCircuitIcon className="h-8 w-8" />,
      category: "technical",
      color: "bg-primary/10 text-primary hover:bg-primary/20",
    },
    {
      name: "Problem Solving",
      icon: <PencilRulerIcon className="h-8 w-8" />,
      category: "soft",
      color: "bg-secondary/10 text-secondary hover:bg-secondary/20",
    },
    {
      name: "Critical Thinking",
      icon: <BarChartIcon className="h-8 w-8" />,
      category: "soft",
      color: "bg-accent/10 text-accent hover:bg-accent/20",
    },
    {
      name: "Debate & Public Speaking",
      icon: <MessageSquareIcon className="h-8 w-8" />,
      category: "soft",
      color: "bg-primary/10 text-primary hover:bg-primary/20",
    },
    {
      name: "Sales & Marketing",
      icon: <TrendingUpIcon className="h-8 w-8" />,
      category: "soft",
      color: "bg-secondary/10 text-secondary hover:bg-secondary/20",
    },
    {
      name: "Basketball (Division 1)",
      icon: <BasketballIcon className="h-8 w-8" />,
      category: "other",
      color: "bg-accent/10 text-accent hover:bg-accent/20",
    },
    {
      name: "Team Collaboration",
      icon: <UsersIcon className="h-8 w-8" />,
      category: "other",
      color: "bg-primary/10 text-primary hover:bg-primary/20",
    },
  ]

  const categories = [
    { id: "technical", name: "Technical Skills", color: "text-primary" },
    { id: "soft", name: "Soft Skills", color: "text-secondary" },
    { id: "other", name: "Other Skills", color: "text-accent" },
  ]

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Skills</h2>

          <div className="space-y-10">
            {categories.map((category) => (
              <div key={category.id}>
                <h3 className={`text-xl font-semibold mb-4 ${category.color}`}>{category.name}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {skills
                    .filter((skill) => skill.category === category.id)
                    .map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.05,
                        }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className={`rounded-lg p-4 flex flex-col items-center justify-center text-center transition-all duration-300 ${skill.color}`}
                      >
                        <div className="mb-2">{skill.icon}</div>
                        <span className="font-medium">{skill.name}</span>
                      </motion.div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

