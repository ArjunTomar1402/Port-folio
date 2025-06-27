"use client"

import { Download, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const downloadResume = () => {
    // Replace with your actual resume URL
    const resumeUrl = "/CVAUS.pdf"
    const link = document.createElement("a")
    link.href = resumeUrl
    link.download = "CVAUS.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Java Backend
            <span className="block text-emerald-600">Developer</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Building scalable, secure, and high-performance backend systems with
            <span className="font-semibold text-gray-900"> Spring Boot</span>,
            <span className="font-semibold text-gray-900"> PostgreSQL</span>, and
            <span className="font-semibold text-gray-900"> Docker</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={downloadResume}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button
              variant="outline"
              onClick={scrollToAbout}
              className="bg-white text-gray-900 border-gray-300 hover:bg-gray-50 px-8 py-3 text-lg"
            >
              Learn More
            </Button>
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              "Java",
              "Spring Boot",
              "PostgreSQL",
              "Docker",
              "Maven",
              "JUnit",
              "Swagger",
              "Git",
              "Google Cloud",
              "REST APIs",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm border border-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce text-gray-400 hover:text-gray-600 transition-colors"
          >
            <ArrowDown className="h-8 w-8 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  )
}
