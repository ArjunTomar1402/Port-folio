import { ExternalLink, Github, Database, Shield, Zap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Projects() {
  const projects = [
    {
      title: "Task Manager API",
      description:
        "A comprehensive REST API for task management with user authentication, role-based access control, and real-time notifications.",
      icon: <Users className="h-8 w-8 text-emerald-600" />,
      technologies: ["Spring Boot", "PostgreSQL", "JWT", "Docker", "Swagger"],
      features: [
        "JWT-based authentication",
        "Role-based authorization",
        "CRUD operations for tasks",
        "User management system",
        "API documentation with Swagger",
      ],
      githubUrl: "https://github.com/yourusername/task-manager-api",
      liveUrl: "https://task-manager-api.render.com",
      swaggerUrl: "https://task-manager-api.render.com/swagger-ui.html",
    },
    {
      title: "E-Commerce Backend",
      description: "Scalable e-commerce backend with inventory management, order processing, and payment integration.",
      icon: <Database className="h-8 w-8 text-emerald-600" />,
      technologies: ["Spring Boot", "MySQL", "Redis", "Stripe API", "Docker"],
      features: [
        "Product catalog management",
        "Shopping cart functionality",
        "Order processing system",
        "Payment gateway integration",
        "Inventory tracking",
      ],
      githubUrl: "https://github.com/yourusername/ecommerce-backend",
      liveUrl: "https://ecommerce-api.railway.app",
      swaggerUrl: "https://ecommerce-api.railway.app/api-docs",
    },
    {
      title: "Authentication Service",
      description:
        "Microservice for user authentication and authorization with OAuth2, JWT tokens, and role management.",
      icon: <Shield className="h-8 w-8 text-emerald-600" />,
      technologies: ["Spring Boot", "Spring Security", "OAuth2", "PostgreSQL", "Docker"],
      features: [
        "OAuth2 implementation",
        "JWT token management",
        "Role-based access control",
        "Password encryption",
        "Session management",
      ],
      githubUrl: "https://github.com/yourusername/auth-service",
      liveUrl: "https://auth-service.fly.dev",
      swaggerUrl: "https://auth-service.fly.dev/swagger-ui.html",
    },
    {
      title: "Real-time Chat API",
      description:
        "WebSocket-based chat application backend with message persistence, user presence, and room management.",
      icon: <Zap className="h-8 w-8 text-emerald-600" />,
      technologies: ["Spring Boot", "WebSocket", "MongoDB", "Redis", "Docker"],
      features: [
        "Real-time messaging",
        "User presence tracking",
        "Chat room management",
        "Message history",
        "File sharing support",
      ],
      githubUrl: "https://github.com/yourusername/chat-api",
      liveUrl: "https://chat-api.render.com",
      swaggerUrl: "https://chat-api.render.com/api-docs",
    },
  ]

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
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
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
                  <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
                    <a href={project.swaggerUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Swagger Docs
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="bg-white text-gray-900 border-gray-300 hover:bg-gray-50" asChild>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
