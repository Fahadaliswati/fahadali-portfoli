const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Codegenio",
      period: "2023 - Present",
      location: "Remote",
      type: "Full-time",
      description: "Leading frontend development initiatives and transforming design concepts into responsive web applications.",
      achievements: [
        "Transformed Figma designs into responsive and pixel-perfect web interfaces using HTML, CSS, SCSS, and Tailwind CSS.",
        "Integrated RESTful APIs into dynamic frontend applications for ERP and Real Estate systems.",
        "Developed and maintained a reusable component library to ensure consistency and efficiency across projects.",
        "Implemented secure authentication and role-based access using JWT and protected routes.",
        "Integrated Google Maps and Geofencing APIs for enhanced location-based features in real estate platforms.",
        "Collaborated with backend teams using Postman to test and consume APIs effectively.",
        "Managed global and local state using Redux Toolkit and Context API for scalable application architecture.",
        "Enhanced form handling and validation using React Hook Form and custom validation logic.",
        "Used GitHub for version control, code review, and collaboration in an Agile development environment.",
        "Contributed to Agile practices by participating in sprint meetings, daily standups, and team collaboration."
      ],

      technologies: ["ReactJS", "JavaScript", "HTML5", "CSS3", "Figma", "Git", "REST APIs", "Responsive Design"]
    }
  ];

  const responsibilities = [
    {
      icon: "🎨",
      title: "Design to Code",
      description: "Transform Figma designs into responsive, pixel-perfect web interfaces"
    },
    {
      icon: "🔗",
      title: "API Integration",
      description: "Seamlessly connect frontend applications with backend services"
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description: "Ensure optimal user experience across all devices and screen sizes"
    },
    {
      icon: "🔄",
      title: "Version Control",
      description: "Maintain clean code history and collaborate effectively using Git workflows"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Building innovative web solutions and contributing to impactful projects in the tech industry.
          </p>
        </div>

        {/* Main Experience */}
        <div className="mb-16">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary to-accent"></div>

              {/* Timeline dot */}
              <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full shadow-glow"></div>

              <div className="ml-12 md:ml-0 md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="md:text-right mb-8 md:mb-0">
                  <div className="card-gradient rounded-2xl p-6 shadow-soft hover:shadow-hover transition-smooth">
                    <div className="flex flex-col md:items-end">
                      <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full mb-2">
                        {exp.type}
                      </span>
                      <h3 className="text-2xl font-bold text-foreground mb-1">{exp.title}</h3>
                      <p className="text-lg text-primary font-semibold mb-1">{exp.company}</p>
                      <p className="text-muted-foreground text-sm mb-2">{exp.location}</p>
                      <span className="text-accent font-medium">{exp.period}</span>
                    </div>
                  </div>
                </div>

                <div className="md:ml-8">
                  <div className="card-gradient rounded-2xl p-6 shadow-soft">
                    <p className="text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-4">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <span className="w-2 h-2 bg-tech rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-muted-foreground text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-lg border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Responsibilities */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">Core Responsibilities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {responsibilities.map((resp, index) => (
              <div
                key={index}
                className="card-gradient rounded-xl p-6 text-center shadow-soft hover:shadow-hover transition-smooth hover:scale-105"
              >
                <div className="text-3xl mb-4">{resp.icon}</div>
                <h4 className="text-lg font-semibold text-foreground mb-3">{resp.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{resp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;