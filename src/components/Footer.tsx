const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: '🔗', url: 'https://github.com/Fahadaliswati' },
    { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/fahad-alikhan/' },
    { name: 'Email', icon: '📧', url: 'mailto:fahadali.hk@gmail.com' },
    { name: 'WhatsApp', icon: '📱', url: 'https://wa.me/923118668902' }

  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Fahad Ali
              </h3>
              <p className="text-muted-foreground mt-2">Frontend Developer | ReactJS Enthusiast</p>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              Passionate about creating modern, responsive web applications with clean code and innovative solutions.
              Let's build something amazing together!
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:scale-110 transition-smooth group"
                  title={link.name}
                >
                  <span className="text-lg group-hover:text-primary-foreground transition-smooth">
                    {link.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="text-primary">📧</span>
                <a
                  href="mailto:fahadali.hk0009@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                >
                  fahadali.hk0009@gmail.com
                </a>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-primary">📍</span>
                <span className="text-muted-foreground text-sm">Available Remote</span>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-primary">💼</span>
                <span className="text-muted-foreground text-sm">Open to opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Fahad Ali. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <span className="text-muted-foreground text-sm">Built with React + Vite</span>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center hover:shadow-glow transition-smooth hover:scale-110"
              title="Back to top"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-tech"></div>
      </div>
    </footer>
  );
};

export default Footer;