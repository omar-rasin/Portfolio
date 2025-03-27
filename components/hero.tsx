"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Muhammad Omar Rasin"
  const [showCursor, setShowCursor] = useState(true)
  const [typingComplete, setTypingComplete] = useState(false)

  useEffect(() => {
    if (displayText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length + 1))
      }, 150)
      return () => clearTimeout(timeout)
    } else {
      setTypingComplete(true)
    }
  }, [displayText, fullText])

  // Blinking cursor effect
  useEffect(() => {
    if (typingComplete) {
      const interval = setInterval(() => {
        setShowCursor((prev) => !prev)
      }, 500)
      return () => clearInterval(interval)
    }
  }, [typingComplete])

  return (
    <section id="home" className="py-20 md:py-32">
      <div className="flex flex-col items-center justify-center text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">
            {displayText}
            <span className={`${showCursor ? "opacity-100" : "opacity-0"}`}>|</span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: typingComplete ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            Student & Aspiring Developer
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: typingComplete ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-x-4"
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              <a href="#contact">Get in Touch</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

