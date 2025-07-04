const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Python"],
      color: "primary"
    },
    {
      title: "Frameworks & Libraries",
      icon: "⚛️",
      skills: ["ReactJS", "Redux Toolkit", "React Router", "Material UI (MUI)", "React Hook Form", "Axios"],
      color: "accent"
    },

    {
      title: "Styling & Design",
      icon: "🎨",
      skills: ["Tailwind CSS", "Bootstrap", "Responsive Design", "Figma to HTML/CSS", "CSS Grid & Flexbox"],
      color: "tech"
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: ["Git & GitHub", "Postman", "VS Code", "npm/yarn", "REST APIs"],
      color: "primary"
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: ["MySQL", "MongoDB", "Firebase", "Local Storage", "Session Storage"],
      color: "accent"
    },
    {
      title: "Soft Skills",
      icon: "🤝",
      skills: ["Problem Solving", "Team Collaboration", "Time Management", "Code Review", "Documentation"],
      color: "tech"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'border-primary text-primary hover:bg-primary hover:text-primary-foreground';
      case 'accent':
        return 'border-accent text-accent hover:bg-accent hover:text-accent-foreground';
      case 'tech':
        return 'border-tech text-tech hover:bg-tech hover:text-tech-foreground';
      default:
        return 'border-primary text-primary hover:bg-primary hover:text-primary-foreground';
    }
  };

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and methodologies that I use to create exceptional web experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="card-gradient rounded-2xl p-6 shadow-soft hover:shadow-hover transition-smooth animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className={`inline-block px-3 py-2 rounded-lg border-2 text-sm font-medium transition-smooth mr-2 mb-2 ${getColorClasses(category.color)}`}
                  >
                    {skill}
                  </div>
                ))}
              </div>

              {/* Progress indicator */}
              <div className="mt-6 pt-4 border-t border-border">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Proficiency</span>
                  <span className="text-foreground font-medium">
                    {category.title === "Programming Languages" || category.title === "Frameworks & Libraries" ? "Advanced" : "Intermediate"}
                  </span>
                </div>
                <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-smooth ${category.title === "Programming Languages" || category.title === "Frameworks & Libraries"
                      ? 'bg-primary w-[90%]'
                      : 'bg-accent w-[75%]'
                      }`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-card rounded-full px-6 py-3 shadow-soft">
            <span className="w-2 h-2 bg-tech rounded-full animate-pulse"></span>
            <span className="text-muted-foreground text-sm">Continuously learning and adapting to new technologies</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;