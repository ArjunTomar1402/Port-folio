import { Code, Database, Server, Shield } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate Java backend developer with expertise in building enterprise-grade applications using modern
            frameworks and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Backend Development Expertise</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I specialize in developing robust, scalable backend systems using Java and Spring Boot. My experience
              spans from designing RESTful APIs to implementing complex business logic, database optimization, and
              ensuring application security.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I'm passionate about clean code, test-driven development, and following industry best practices. I enjoy
              solving complex problems and building systems that can handle high traffic and scale efficiently.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">1+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">5+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <Code className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Clean Code</h4>
              <p className="text-sm text-gray-600">
                Writing maintainable, well-documented code following SOLID principles
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <Database className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Database Design</h4>
              <p className="text-sm text-gray-600">Designing efficient database schemas and optimizing queries</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <Server className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">API Development</h4>
              <p className="text-sm text-gray-600">Building RESTful APIs with proper documentation and testing</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <Shield className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Security</h4>
              <p className="text-sm text-gray-600">
                Implementing authentication, authorization, and security best practices
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
