const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "University",
      period: "2019 - 2023",
      status: "Completed",
      description: "Comprehensive study of software development principles, algorithms, data structures, and modern programming practices.",
      highlights: [
        "Software Development Life Cycle",
        "Database Design & Management",
        "Web Development Technologies",
        "Object-Oriented Programming",
        "Software Testing & Quality Assurance",
        "Project Management"
      ],
      grade: "Good Standing",
      type: "bachelor"
    },
    {
      degree: "Intermediate in Computer Science (FSc)",
      institution: "College",
      period: "2017 - 2019",
      status: "Completed",
      description: "Foundation in computer science fundamentals including programming basics, mathematics, and scientific methodology.",
      highlights: [
        "Programming Fundamentals",
        "Mathematics & Statistics",
        "Computer Architecture",
        "Basic Algorithms",
        "Physics & Chemistry",
        "English & Communication"
      ],
      grade: "First Division",
      type: "intermediate"
    },
    {
      degree: "Matriculation (Secondary School)",
      institution: "High School",
      period: "2015 - 2017",
      status: "Completed",
      description: "Secondary education with focus on science subjects and foundational knowledge across multiple disciplines.",
      highlights: [
        "Science Subjects (Physics, Chemistry, Biology)",
        "Mathematics",
        "English Language",
        "Computer Studies",
        "Social Studies",
        "Academic Excellence"
      ],
      grade: "First Division",
      type: "matriculation"
    }
  ];

  const certifications = [
    {
      title: "Frontend Web Development",
      provider: "Online Platform",
      year: "2023",
      skills: ["ReactJS", "JavaScript", "HTML/CSS"]
    },
    {
      title: "Git & Version Control",
      provider: "Professional Course",
      year: "2023",
      skills: ["Git", "GitHub", "Collaboration"]
    },
    {
      title: "REST API Integration",
      provider: "Technical Training",
      year: "2022",
      skills: ["APIs", "Axios", "HTTP Methods"]
    }
  ];

  const getEducationIcon = (type: string) => {
    switch (type) {
      case 'bachelor':
        return '🎓';
      case 'intermediate':
        return '📚';
      case 'matriculation':
        return '🏫';
      default:
        return '📖';
    }
  };

  const getGradeColor = (grade: string) => {
    if (grade.includes('Good') || grade.includes('First')) {
      return 'text-tech';
    }
    return 'text-primary';
  };

  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Education & Learning
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            My educational journey and continuous learning path that shaped my expertise in software development.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">Academic Timeline</h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-accent to-tech"></div>
            
            {educationData.map((edu, index) => (
              <div key={index} className="relative mb-12">
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full shadow-glow border-4 border-background"></div>
                
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:grid md:grid-cols-2 md:gap-8' : 'md:grid md:grid-cols-2 md:gap-8'}`}>
                  <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:order-2'} mb-6 md:mb-0`}>
                    <div className="card-gradient rounded-2xl p-6 shadow-soft hover:shadow-hover transition-smooth">
                      <div className={`flex items-start ${index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''} space-x-3`}>
                        <span className="text-3xl">{getEducationIcon(edu.type)}</span>
                        <div className={`${index % 2 === 0 ? 'md:mr-3' : 'md:ml-3'}`}>
                          <h3 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h3>
                          <p className="text-primary font-semibold mb-1">{edu.institution}</p>
                          <p className="text-accent font-medium mb-2">{edu.period}</p>
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getGradeColor(edu.grade)} bg-secondary`}>
                            {edu.grade}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8 md:order-1'}`}>
                    <div className="card-gradient rounded-2xl p-6 shadow-soft">
                      <p className="text-muted-foreground mb-4 leading-relaxed">{edu.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-foreground mb-3">Key Subjects & Skills:</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {edu.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                              <span className="text-muted-foreground text-sm">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-border">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Status</span>
                          <span className="text-sm font-medium text-tech">{edu.status}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">Professional Certifications</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="card-gradient rounded-xl p-6 shadow-soft hover:shadow-hover transition-smooth hover:scale-105"
              >
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary-foreground font-bold text-xl">📜</span>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{cert.title}</h4>
                  <p className="text-muted-foreground text-sm mb-1">{cert.provider}</p>
                  <span className="text-accent font-medium text-sm">{cert.year}</span>
                </div>

                <div className="border-t border-border pt-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-16 text-center">
          <div className="card-gradient rounded-2xl p-8 shadow-soft max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Continuous Learning</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Education is a lifelong journey. I believe in staying updated with the latest technologies, 
              best practices, and industry trends to deliver exceptional results and grow professionally.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <span className="text-muted-foreground text-sm">Currently exploring: Next.js, TypeScript Advanced Patterns, GraphQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;