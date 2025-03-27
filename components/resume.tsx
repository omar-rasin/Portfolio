"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileTextIcon, BriefcaseIcon, GraduationCapIcon, TrophyIcon, CodeIcon, HeartIcon } from "lucide-react"
import { useRef } from "react"

export default function Resume() {
  const resumeRef = useRef<HTMLDivElement>(null)

  const handleViewResume = () => {
    const printStyles = `
      <style>
        body { font-family: Arial, sans-serif; color: #000; background: #fff; }
        h1, h2, h3, h4 { margin-top: 20px; }
        h1 { font-size: 24px; text-align: center; }
        h2 { font-size: 20px; border-bottom: 1px solid #ddd; padding-bottom: 5px; }
        h3 { font-size: 18px; }
        h4 { font-size: 16px; }
        p { margin: 8px 0; }
        .section { margin-bottom: 20px; }
        .item { margin-bottom: 15px; }
        .header { display: flex; justify-content: space-between; }
        .title { font-weight: bold; }
        .subtitle { color: #555; }
        .date { color: #777; font-size: 14px; }
        .description { margin-top: 5px; }
        .print-button { 
          position: fixed; 
          top: 20px; 
          right: 20px; 
          padding: 8px 16px; 
          background: #6366f1; 
          color: white; 
          border: none; 
          border-radius: 4px; 
          cursor: pointer;
          font-weight: bold;
        }
        .print-button:hover {
          background: #4f46e5;
        }
        @media print {
          .print-button { display: none; }
        }
      </style>
    `

    const viewWindow = window.open("", "_blank")
    if (viewWindow) {
      viewWindow.document.write(`
        <html>
          <head>
            <title>Muhammad Omar Rasin - Resume</title>
            ${printStyles}
          </head>
          <body>
            <button class="print-button" onclick="window.print()">Print Resume</button>
            <h1>Muhammad Omar Rasin</h1>
            <p style="text-align: center;">Dhaka, Bangladesh · omarasinyt@gmail.com · +8801714393276</p>
            
            <div class="section">
              <h2>Education</h2>
              <div class="item">
                <div class="header">
                  <span class="title">Sunnydale, Bashundhara, Dhaka</span>
                  <span class="date">February 2024 - June 2027</span>
                </div>
                <div class="subtitle">Highschool, O Levels and A Levels in Science</div>
                <div class="description">GPA: 4.0</div>
              </div>
              <div class="item">
                <div class="header">
                  <span class="title">Scholastica, Uttara, Dhaka</span>
                  <span class="date">February 2011 - January 2024</span>
                </div>
                <div class="subtitle">Elementary and Middle School in Science</div>
                <div class="description">GPA: 4.0</div>
              </div>
            </div>
            
            <div class="section">
              <h2>Work and Experience</h2>
              <div class="item">
                <div class="header">
                  <span class="title">Founder and CEO, Zyro Apparels</span>
                  <span class="date">April 2025 - Present</span>
                </div>
                <div class="description">Head of Production and Quality Control</div>
              </div>
              <div class="item">
                <div class="header">
                  <span class="title">Assistant Sub-Editor, The Daily Star</span>
                  <span class="date">November 2024 - Present</span>
                </div>
                <div class="description">Writing and editing articles</div>
              </div>
              <div class="item">
                <div class="header">
                  <span class="title">Social Media Coordinator, Amra 93 Foundation</span>
                  <span class="date">February 2025 - Present</span>
                </div>
                <div class="description">Handling and Managing Social Media Accounts</div>
              </div>
              <div class="item">
                <div class="header">
                  <span class="title">Social Media and Events Assistant, UNFPA</span>
                  <span class="date">April 2024 - January 2025</span>
                </div>
                <div class="description">Handling Events calendar and Media Pages</div>
              </div>
              <div class="item">
                <div class="header">
                  <span class="title">Assistant Researcher, UNDP Sustainable Energy Hub</span>
                  <span class="date">May 2024 - August 2024</span>
                </div>
                <div class="description">Conducting Research in Sustainable Energy</div>
              </div>
            </div>
            
            <div class="section">
              <h2>Skills</h2>
              <div class="item">
                <div class="title">Computer Literacy</div>
                <div class="description">C, C++, Java, Python, DSA, OOP, ML</div>
              </div>
              <div class="item">
                <div class="title">Basketball</div>
                <div class="description">Division 1</div>
              </div>
              <div class="item">
                <div class="title">Problem Solving</div>
                <div class="description">Built AI-powered solutions to tackle real-world challenges</div>
              </div>
              <div class="item">
                <div class="title">Critical Thinking</div>
                <div class="description">Analyzed data and scenarios for effective decision-making</div>
              </div>
              <div class="item">
                <div class="title">Debate and Public Speaking</div>
                <div class="description">Strong argumentation and persuasive communication skills</div>
              </div>
              <div class="item">
                <div class="title">Selling</div>
                <div class="description">Effectively driving sales to grow Zyro's customer base</div>
              </div>
            </div>
            
            <div class="section">
              <h2>Projects</h2>
              <div class="item">
                <div class="title">Eco Sort (JavaScript, CSS, Machine Learning, Image detection Models)</div>
                <div class="description">AI-powered waste sorter for efficient recycling.</div>
                <div class="description">https://github.com/omar-rasin/EcoSort</div>
              </div>
              <div class="item">
                <div class="title">Aqua Grow (C++, Arduino, NodeMCU)</div>
                <div class="description">IOT smart plant irrigation system</div>
              </div>
              <div class="item">
                <div class="title">Slam Dunk (C)</div>
                <div class="description">Basketball club management system</div>
                <div class="description">https://github.com/omar-rasin/slam-dunk</div>
              </div>
            </div>
            
            <div class="section">
              <h2>Awards</h2>
              <div class="item">
                <div class="header">
                  <span class="title">Debate Champion, World Scholars Cup</span>
                  <span class="date">July 2024</span>
                </div>
                <div class="description">17th out of 600 Debaters at the Sweden Global Round of WSC</div>
              </div>
              <div class="item">
                <div class="header">
                  <span class="title">Regional Champion, Bangladesh Informatics Olympiad</span>
                  <span class="date">February 2025</span>
                </div>
                <div class="description">Secured Champion title at the Regional Round of BDOI</div>
              </div>
              <div class="item">
                <div class="header">
                  <span class="title">Regional Runners-up, Bangladesh Mathematical Olympiad</span>
                  <span class="date">January 2025</span>
                </div>
                <div class="description">Achieved Runner's up position at the Regional Round of BDMO</div>
              </div>
              <div class="item">
                <div class="header">
                  <span class="title">Nationals Grand Champion, Bangladesh IQ Olympiad</span>
                  <span class="date">June 2023</span>
                </div>
                <div class="description">First Overall among 400 participants at the National Round of IQ Olympiad</div>
              </div>
              <div class="item">
                <div class="header">
                  <span class="title">International Champion, International IQ Olympiad</span>
                  <span class="date">March 2025</span>
                </div>
                <div class="description">Secured First Place at International IQ Olympiad</div>
              </div>
              <div class="item">
                <div class="header">
                  <span class="title">National's Runner's up, Aloha Bangladesh</span>
                  <span class="date">May 2018</span>
                </div>
                <div class="description">Runner's up at Aloha National Mental Math Competition</div>
              </div>
              <div class="item">
                <div class="header">
                  <span class="title">Gold Award, Commonwealth Essay Writing Competition</span>
                  <span class="date">October 2024</span>
                </div>
                <div class="description">Achieved Gold Medal at international Essay Writing Competition</div>
              </div>
            </div>
          </body>
        </html>
      `)

      viewWindow.document.close()
      viewWindow.focus()
    }
  }

  const education = [
    {
      degree: "Highschool, O Levels and A Levels in Science",
      institution: "Sunnydale",
      location: "Bashundhara, Dhaka",
      period: "February 2024 - June 2027",
      description: "GPA: 4.0",
    },
    {
      degree: "Elementary and Middle School in Science",
      institution: "Scholastica",
      location: "Uttara, Dhaka",
      period: "February 2011 - January 2024",
      description: "GPA: 4.0",
    },
  ]

  const experiences = [
    {
      title: "Founder and CEO",
      company: "Zyro Apparels",
      location: "Dhaka, Bangladesh",
      period: "April 2025 - Present",
      description: "Head of Production and Quality Control",
    },
    {
      title: "Assistant Sub-Editor",
      company: "The Daily Star",
      location: "Dhaka, Bangladesh",
      period: "November 2024 - Present",
      description: "Writing and editing articles",
    },
    {
      title: "Social Media Coordinator",
      company: "Amra 93 Foundation",
      location: "Dhaka, Bangladesh",
      period: "February 2025 - Present",
      description: "Handling and Managing Social Media Accounts",
    },
    {
      title: "Social Media and Events Assistant",
      company: "UNFPA",
      location: "Dhaka, Bangladesh",
      period: "April 2024 - January 2025",
      description: "Handling Events calendar and Media Pages",
    },
    {
      title: "Assistant Researcher",
      company: "UNDP Sustainable Energy Hub",
      location: "Dhaka, Bangladesh",
      period: "May 2024 - August 2024",
      description: "Conducting Research in Sustainable Energy",
    },
  ]

  const skills = [
    {
      category: "Computer Literacy",
      description: "C, C++, Java, Python, DSA, OOP, ML",
    },
    {
      category: "Basketball",
      description: "Division 1",
    },
    {
      category: "Problem Solving",
      description: "Built AI-powered solutions to tackle real-world challenges",
    },
    {
      category: "Critical Thinking",
      description: "Analyzed data and scenarios for effective decision-making",
    },
    {
      category: "Debate and Public Speaking",
      description: "Strong argumentation and persuasive communication skills",
    },
    {
      category: "Selling",
      description: "Effectively driving sales to grow Zyro's customer base",
    },
  ]

  const projects = [
    {
      title: "Eco Sort",
      tech: "JavaScript, CSS, Machine Learning, Image detection Models",
      description: "AI-powered waste sorter for efficient recycling",
      github: "https://github.com/omar-rasin/EcoSort",
    },
    {
      title: "Aqua Grow",
      tech: "C++, Arduino, NodeMCU",
      description: "IOT smart plant irrigation system",
    },
    {
      title: "Slam Dunk",
      tech: "C",
      description: "Basketball club management system",
      github: "https://github.com/omar-rasin/slam-dunk",
    },
  ]

  const awards = [
    {
      title: "Debate Champion",
      organization: "World Scholars Cup",
      description: "17th out of 600 Debaters at the Sweden Global Round of WSC",
      date: "July 2024",
    },
    {
      title: "Regional Champion",
      organization: "Bangladesh Informatics Olympiad",
      description: "Secured Champion title at the Regional Round of BDOI",
      date: "February 2025",
    },
    {
      title: "Regional Runners-up",
      organization: "Bangladesh Mathematical Olympiad",
      description: "Achieved Runner's up position at the Regional Round of BDMO",
      date: "January 2025",
    },
    {
      title: "Nationals Grand Champion",
      organization: "Bangladesh IQ Olympiad",
      description: "First Overall among 400 participants at the National Round of IQ Olympiad",
      date: "June 2023",
    },
    {
      title: "International Champion",
      organization: "International IQ Olympiad",
      description: "Secured First Place at International IQ Olympiad",
      date: "March 2025",
    },
    {
      title: "National's Runner's up",
      organization: "Aloha Bangladesh",
      description: "Runner's up at Aloha National Mental Math Competition",
      date: "May 2018",
    },
    {
      title: "Gold Award",
      organization: "Commonwealth Essay Writing Competition",
      description: "Achieved Gold Medal at international Essay Writing Competition",
      date: "October 2024",
    },
  ]

  return (
    <section id="resume" className="py-16">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold gradient-text">Resume</h2>
            <Button
              className="gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              onClick={handleViewResume}
            >
              <FileTextIcon className="h-4 w-4" />
              View Resume
            </Button>
          </div>

          <div id="resume-content" ref={resumeRef}>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <GraduationCapIcon className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold text-primary">Education</h3>
                </div>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="card-hover border-primary/10">
                        <CardContent className="p-6">
                          <h4 className="text-lg font-bold">{edu.degree}</h4>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-primary">{edu.institution}</span>
                            <span className="text-sm text-muted-foreground">{edu.period}</span>
                          </div>
                          <p className="text-muted-foreground mb-1">{edu.location}</p>
                          <p className="text-muted-foreground">{edu.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-6">
                  <BriefcaseIcon className="h-5 w-5 text-secondary" />
                  <h3 className="text-xl font-semibold text-secondary">Experience</h3>
                </div>
                <div className="space-y-4">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="card-hover border-secondary/10">
                        <CardContent className="p-6">
                          <h4 className="text-lg font-bold">{exp.title}</h4>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-secondary">{exp.company}</span>
                            <span className="text-sm text-muted-foreground">{exp.period}</span>
                          </div>
                          <p className="text-muted-foreground mb-1">{exp.location}</p>
                          <p className="text-muted-foreground">{exp.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <CodeIcon className="h-5 w-5 text-accent" />
                  <h3 className="text-xl font-semibold text-accent">Projects</h3>
                </div>
                <div className="space-y-4">
                  {projects.map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="card-hover border-accent/10">
                        <CardContent className="p-6">
                          <h4 className="text-lg font-bold">{project.title}</h4>
                          <div className="mb-2">
                            <span className="text-accent text-sm px-2 py-1 bg-accent/10 rounded-full">
                              {project.tech}
                            </span>
                          </div>
                          <p className="text-muted-foreground mb-2">{project.description}</p>
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-primary hover:underline"
                            >
                              {project.github}
                            </a>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-6">
                  <HeartIcon className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold text-primary">Skills</h3>
                </div>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="card-hover border-primary/10">
                        <CardContent className="p-6">
                          <h4 className="text-lg font-bold text-primary">{skill.category}</h4>
                          <p className="text-muted-foreground">{skill.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-6">
                <TrophyIcon className="h-5 w-5 text-secondary" />
                <h3 className="text-xl font-semibold text-secondary">Awards & Achievements</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {awards.map((award, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Card className="card-hover border-secondary/10 h-full">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <h4 className="text-base font-bold">{award.title}</h4>
                          {award.date && <span className="text-xs text-muted-foreground">{award.date}</span>}
                        </div>
                        <p className="text-secondary text-sm mb-1">{award.organization}</p>
                        {award.description && <p className="text-muted-foreground text-sm">{award.description}</p>}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

