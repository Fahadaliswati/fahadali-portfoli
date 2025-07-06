import cgBackoffice from "../assets/cg-backoffice.png";
const Projects = () => {
  const projects = [
    {
      title: "ERP Application",
      category: "Enterprise Software",
      description: "A comprehensive Enterprise Resource Planning application built with modern React architecture, featuring secure authentication, state management, and dynamic form handling.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
      technologies: ["ReactJS", "Redux Toolkit", "JWT Authentication", "Axios", "React Hook Form", "SCSS"],
      features: [
        "JWT-based authentication system",
        "Redux Toolkit for state management",
        "Dynamic form validation with React Hook Form",
        "RESTful API integration with Axios",
        "Responsive dashboard design",
        "Role-based access control"
      ],
      highlights: {
        performance: "40% faster load times",
        security: "Bank-level security",
        users: "500+ active users"
      },
      status: "Production",
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Responsive Portfolio Website",
      category: "Personal Project",
      description: "A modern, fully responsive portfolio website showcasing frontend development skills with smooth animations and clean design principles.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
      technologies: ["ReactJS", "TypeScript", "Tailwind CSS", "Framer Motion", "React Router"],
      features: [
        "Mobile-first responsive design",
        "Smooth scroll animations",
        "Interactive UI components",
        "SEO optimized",
        "Performance optimized",
        "Cross-browser compatibility"
      ],
      highlights: {
        performance: "95+ Lighthouse score",
        responsive: "100% mobile friendly",
        animations: "Smooth transitions"
      },
      status: "Live",
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Backoffice Management System",
      category: "ERP Web Application",
      description: "A modular ERP-style dashboard tailored for internal business operations, supporting dynamic client and employee management, financial reporting, and payroll automation.",
      image: cgBackoffice,
      technologies: [
        "ReactJS",
        "Redux Toolkit",
        "React Hook Form",
        "Axios",
        "SCSS",
        "JWT Auth",
        "REST APIs"
      ],
      features: [
        "Client management module",
        "Employee directory with roles & permissions",
        "Multi-currency support",
        "Project tracking dashboard",
        "Day End Report generation",
        "Salary generation & monthly payments",
        "Tagging system for categorization",
        "Interactive Kanban-style task board",
        "Integrated calendar for scheduling"
      ],
      highlights: {
        automation: "Automated payroll and reporting system",
        usability: "Modular and scalable architecture",
        performance: "Optimized API interactions with Axios interceptors"
      },
      status: "Completed",
      demoLink: "#",
      codeLink: "#"
    }

  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production':
        return 'bg-tech text-tech-foreground';
      case 'Live':
        return 'bg-primary text-primary-foreground';
      case 'Development':
        return 'bg-accent text-accent-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise in modern web development technologies and best practices.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`lg:grid lg:grid-cols-2 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-reverse' : ''
                }`}
            >
              {/* Project Image */}
              <div className="mb-8 lg:mb-0 animate-slide-up">
                <div className="relative overflow-hidden rounded-2xl shadow-soft hover:shadow-hover transition-smooth group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 sm:h-80 object-cover transition-smooth group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="animate-fade-in">
                <div className="mb-4">
                  <span className="text-primary font-medium text-sm uppercase tracking-wide">
                    {project.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mt-2 mb-4">
                    {project.title}
                  </h3>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Key Features:</h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(project.highlights).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-card border border-border text-card-foreground text-sm rounded-lg transition-smooth hover:border-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <button className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg shadow-soft hover:shadow-hover transition-smooth hover:scale-105">
                    View Demo
                  </button>
                  <button className="px-6 py-3 border-2 border-primary text-primary font-medium rounded-lg transition-smooth hover:bg-primary hover:text-primary-foreground">
                    View Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <div className="card-gradient rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-foreground mb-4">More Projects Coming Soon</h3>
            <p className="text-muted-foreground mb-6">
              I'm constantly working on new projects and exploring cutting-edge technologies.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-lg shadow-hover transition-smooth hover:scale-105">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;