export function Skills() {
  const skillCategories = [
    {
      title: "Backend Technologies",
      skills: [
        { name: "Java", level: 95 },
        { name: "Spring Boot", level: 90 },
        { name: "Django", level: 85 },
        { name: "Node JS", level: 88 },
        { name: "Hibernate", level: 82 },
        { name: "Maven/Gradle", level: 85 },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", level: 88 },
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 75 },
        { name: "Redis", level: 70 },
        // { name: "H2 Database", level: 80 },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Docker", level: 85 },
        { name: "Git", level: 90 },
        // { name: "GitHub Actions", level: 80 },
        { name: "GoogleCloud/AWS", level: 80 },
        { name: "Postman", level: 88 },
        { name: "Swagger/OpenAPI", level: 85 },
      ],
    },
    {
      title: "Testing & Quality",
      skills: [
        { name: "JUnit", level: 88 },
        { name: "Mockito", level: 85 },
        { name: "Integration Testing", level: 82 },
        { name: "Test-Driven Development", level: 80 },
        { name: "SonarQube", level: 75 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive expertise in backend development technologies and modern development practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-emerald-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
