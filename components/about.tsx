"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center gradient-text">About Me</h2>
        <Card className="bg-card/50 backdrop-blur-sm border border-primary/20 card-hover">
          <CardContent className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg mb-4">
                  Hi! I'm Omar Rasin, a Grade 10 student at Sunnydale School, currently preparing for my O-Level exams.
                  My journey in technology is driven by an insatiable thirst for learning and an aspiration to be better
                  in every aspect of life. I'm passionate about exploring the vast world of computers and AI, and I
                  envision working towards a breakthrough in these fields in the future.
                </p>
                <p className="text-lg mb-4">
                  Apart from academics, I'm a Division 1 basketball player, which keeps me disciplined and focused on
                  performance and teamwork. I believe in the power of collaboration and often find that the best
                  innovations come when working with a team of like-minded individuals.
                </p>
                <p className="text-lg">
                  I'm constantly honing my skills, with plans to dive deeper into Data Structures and Algorithms (DSA),
                  web development, and machine learning in the near future. I aim to pursue my bachelor's degree at a
                  top college in the U.S., where I can continue to learn and grow as a developer and innovator. Every
                  project I work on is designed with the intention of creating a positive impact on those around me and
                  the broader community. I am committed to using my skills to build things that truly make a difference.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg">
                  <Image
                    src="/images/omar-profile.png"
                    alt="Omar Rasin"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

