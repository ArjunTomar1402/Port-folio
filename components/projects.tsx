import { ExternalLink, Github, Database, Shield, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Projects() {
  const projects = [
    {
      title: "Course Search API",
      description:
        "A modular Spring Boot + Elasticsearch project for full-text course discovery, filtering, autocomplete, and fuzzy search.",
      icon: <Users className="h-8 w-8 text-emerald-600" />,
      technologies: ["Spring Boot", "Spring Data Elasticsearch", "Maven", "Docker", "Swagger"],
      features: [
        "Advanced search filters (age, price, dates)",
        "Fuzzy and autocomplete search with Elasticsearch",
        "API documentation with Swagger",
      ],
      githubUrl: "https://github.com/ArjunTomar1402/coursesearch",
      liveUrl: "",
      swaggerUrl: "",
    },
    {
      title: "AI OCR",
      description:
        "A lightweight OCR system built with Tesseract and OpenCV, deployed as a Streamlit app for extracting structured data from images and PDFs.",
      icon: <Database className="h-8 w-8 text-emerald-600" />,
      technologies: ["Python", "Tesseract OCR", "OpenCV", "Streamlit"],
      features: [
        "Noise reduction, thresholding, and deskewing",
        "PDF/image to text extraction",
        "Custom output formatting",
      ],
      githubUrl: "https://github.com/ArjunTomar1402/ai_ocr",
      liveUrl: "http://ai-ocr-v1.streamlit.app/",
      swaggerUrl: "",
    },
    {
      title: "Malware Detection ML",
      description:
        "A machine learning-based malware classification tool using PE file feature extraction and Streamlit for live inference.",
      icon: <Shield className="h-8 w-8 text-emerald-600" />,
      technologies: ["Python", "Scikit-learn", "XGBoost", "PEfile", "Streamlit"],
      features: [
        "Static feature extraction from PE files",
        "Multiple classifiers (XGBoost, RF, SVM)",
        "Real-time predictions with Streamlit UI",
      ],
      githubUrl: "https://github.com/ArjunTomar1402/Malware-Detection-ML",
      liveUrl: "https://mad-malware-detection-model.streamlit.app/",
      swaggerUrl: "",
    },
    // {
    //   title: "Real-time Chat API",
    //   description:
    //     "WebSocket-based chat application backend with message persistence, user presence, and room management.",
    //   icon: <Zap className="h-8 w-8 text-emerald-600" />,
    //   technologies: ["Spring Boot", "WebSocket", "MongoDB", "Redis", "Docker"],
    //   features: [
    //     "Real-time messaging",
    //     "User presence tracking",
    //     "Chat room management",
    //     "Message history",
    //     "File sharing support",
    //   ],
    //   githubUrl: "https://github.com/yourusername/chat-api",
    //   liveUrl: "https://chat-api.render.com",
    //   swaggerUrl: "https://chat-api.render.com/api-docs",
    // },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcase of backend systems and APIs built with Java, Spring Boot, and modern development practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  {project.icon}
                  <CardTitle>{project.title}</CardTitle>
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                {project.features.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.technologies.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-3">
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}

                  {project.liveUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live API
                      </a>
                    </Button>
                  )}

                  {project.swaggerUrl && (
                    <Button
                      size="sm"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white"
                      asChild
                    >
                      <a href={project.swaggerUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Swagger Docs
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
            asChild
          >
            <a href="https://github.com/ArjunTomar1402" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
