const About = () => {
  const highlights = [
    "Frontend development with ReactJS",
    "REST API integration",
    "Reusable component architecture",
    "Responsive design implementation",
    "Version control with Git",
    "State management with Redux"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                I'm a passionate Frontend Developer with 1.5 years of hands-on experience in building
                modern web applications. My journey in web development began with a strong foundation
                in computer science and has evolved into specializing in ReactJS and modern JavaScript frameworks.
              </p>

              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                I excel at transforming creative designs into responsive, user-friendly interfaces while
                maintaining clean, scalable code. My experience includes working with REST APIs,
                implementing state management solutions, and creating reusable component libraries
                that enhance development efficiency.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Key Strengths:</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm always eager to learn new technologies and take on challenging projects that
                push the boundaries of what's possible on the web. Let's work together to bring
                your digital vision to life!
              </p>
            </div>
          </div>

          {/* Stats Card */}
          <div className="animate-scale-in">
            <div className="card-gradient rounded-2xl p-8 shadow-soft hover:shadow-hover transition-smooth">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1.5+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">Years Experience</div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">100%</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">API Integration Efficiency</div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-tech mb-2">Advanced</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">State Management </div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">Client Satisfaction</div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground text-sm">Available for new opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;