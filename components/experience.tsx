import { Calendar, MapPin, Building } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Utopiic Innovations Pvt. Ltd",
      location: "Faridabad, Haryana, India",
      period: "Sept 2022 - June 2023",
      description:
         "Spearheaded full-stack development of scalable web applications for a fast-growing startup. Built secure RESTful APIs with Spring Boot and integrated frontend components using modern JavaScript frameworks. Leveraged microservices architecture to enhance modularity, resilience, and deployment efficiency.",
      achievements: [
        "Reduced API response time by 40% by optimizing MySQL queries and implementing efficient data caching mechanisms",
        "Migrated legacy monolithic architecture to modular microservices, resulting in 50% faster deployment cycles",
        "Developed a secure, token-based authentication system ensuring end-to-end user privacy and data protection",
        "Improved application accessibility and responsiveness across devices through mobile-first design principles",
        "Refactored 5K+ lines of legacy Java codebase, enhancing scalability and system maintainability",
        "Collaborated cross-functionally with frontend and QA teams, increasing sprint velocity by 30%"
      ],
    },
    {
      title: "Service Executive",
      company: "AlfaTech",
      location: "New Delhi, India",
      period: "July 2022 - Sept 2022",
      description:
          "Provided technical support and operational oversight in an industrial hardware environment. Ensured quality assurance and customer satisfaction through machine calibration and real-time feedback analysis.",
      achievements: [
        "Maintained 100% accuracy in production logs and service records",
        "Calibrated and tested precision machinery to uphold manufacturing standards",
        "Analyzed customer feedback to proactively resolve recurring issues",
        "Reduced machine downtime by 20% through preventive maintenance measures"
      ],
    },
  ]

  const education = [
    {
      degree: "Bachelor of Science in Instrumentation (Hons.)",
      school: "BCAS, University of Delhi",
      location: "New Delhi, India",
      period: "2019 - 2022",
      details: ["Relevant Coursework: Embedded Systems, Digital Electronics, Microprocessors, Signals and Systems, Communication Systems, Engineering Mathematics",
  ]
    },
    {
    degree: "M.Sc. in Informatics",
    school: "IIC, University of Delhi South Campus",
    location: "New Delhi, India",
    period: "2023 - Present",
    details: "Relevant Coursework: Data Structures, Algorithms, Database Systems, Operating Systems, Applied Machine Learning, Web Technologies",
    }
  ]

  // const certifications = [
  //   "Oracle Certified Professional Java SE Developer",
  //   "AWS Certified Developer - Associate",
  //   "Spring Professional Certification",
  //   "Docker Certified Associate",
  // ]

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience & Education</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional journey and continuous learning in backend development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Work Experience */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Work Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">{exp.title}</h4>
                      <div className="flex items-center text-gray-600 mt-1">
                        <Building className="h-4 w-4 mr-2" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm mt-1">
                        <MapPin className="h-4 w-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{exp.description}</p>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start text-sm text-gray-600">
                          <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <div className="mb-12">
  <h3 className="text-2xl font-bold text-gray-900 mb-8">Education</h3>
  <div className="space-y-6">
    {education.map((edu, index) => (
      <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h4 className="text-lg font-semibold text-gray-900 mb-2">{edu.degree}</h4>
        <div className="flex items-center text-gray-600 mb-2">
            <Building className="h-4 w-4 mr-2" />
           {edu.school}
          </div>
         <div className="flex items-center text-gray-500 text-sm mb-3">
           <Calendar className="h-4 w-4 mr-2" />
           {edu.period}
          </div>
          <div className="flex items-center text-gray-500 text-sm mb-3">
            <MapPin className="h-4 w-4 mr-2" />
            {edu.location}
           </div>
          <p className="text-sm text-gray-600">{edu.details}</p>
            </div>
          ))}
        </div>
        </div>


            {/* <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Certifications</h3>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-700">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
