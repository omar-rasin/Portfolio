"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { GithubIcon, LinkedinIcon, MailIcon, SendIcon, PhoneIcon, InstagramIcon } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setFormSubmitted(true)
    setFormData({ name: "", email: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false)
    }, 5000)
  }

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-hover">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">Contact Information</h3>
                <p className="text-muted-foreground mb-6">
                  Feel free to reach out to me through the form or via my contact details. I'm always open to discussing
                  new projects, opportunities, or just having a chat.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <MailIcon className="h-5 w-5 text-primary" />
                    <a href="mailto:omarasinyt@gmail.com" className="hover:text-primary transition-colors">
                      omarasinyt@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <PhoneIcon className="h-5 w-5 text-secondary" />
                    <a href="tel:+8801714393276" className="hover:text-secondary transition-colors">
                      +880 1714 393276
                    </a>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-primary text-primary hover:bg-primary/10"
                      asChild
                    >
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <GithubIcon className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-secondary text-secondary hover:bg-secondary/10"
                      asChild
                    >
                      <a
                        href="https://www.linkedin.com/in/omar-rasin-973492231"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <LinkedinIcon className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-accent text-accent hover:bg-accent/10"
                      asChild
                    >
                      <a
                        href="https://www.instagram.com/omarrrw_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                      >
                        <InstagramIcon className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-primary/20 focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-primary/20 focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="border-primary/20 focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <SendIcon className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                  {formSubmitted && (
                    <p className="text-green-500 text-center mt-2">
                      Thank you! Your message has been sent successfully.
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

