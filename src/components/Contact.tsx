import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'fahadali.hk@gmail.com',
      link: 'mailto:fahadali.hk@gmail.com'
    }
    ,
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/fahad-alikhan/'
    },
    {
      icon: '💻',
      label: 'GitHub',
      value: 'View my code',
      link: 'https://github.com/Fahadaliswati'
    },
    {
      icon: '📱',
      label: 'Phone / WhatsApp',
      value: '+92 311 8668902',
      link: 'https://wa.me/923118668902'
    }

  ];

  const quickActions = [
    {
      title: 'Schedule a Call',
      description: 'Let\'s discuss your project requirements',
      icon: '📞',
      action: 'Schedule'
    },
    {
      title: 'Download Resume',
      description: 'Get my detailed CV in PDF format',
      icon: '📄',
      action: 'Download'
    },
    {
      title: 'View Portfolio',
      description: 'Browse through my recent projects',
      icon: '🎨',
      action: 'Browse'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with amazing people.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="card-gradient rounded-2xl p-8 shadow-soft">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send me a message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth text-foreground placeholder-muted-foreground"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth text-foreground placeholder-muted-foreground"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth text-foreground placeholder-muted-foreground resize-none"
                    placeholder="Tell me about your project or what you'd like to discuss..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg shadow-hover transition-smooth hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-tech/10 border border-tech/20 rounded-lg">
                    <p className="text-tech text-center">✅ Message sent successfully! I'll get back to you soon.</p>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in">
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="card-gradient rounded-2xl p-8 shadow-soft">
                <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-secondary transition-smooth group"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:shadow-glow transition-smooth">
                        <span className="text-xl group-hover:scale-110 transition-smooth">{info.icon}</span>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="text-foreground font-medium group-hover:text-primary transition-smooth">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="card-gradient rounded-2xl p-8 shadow-soft">
                <h3 className="text-xl font-bold text-foreground mb-6">Quick Actions</h3>

                <div className="space-y-4">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      className="w-full p-4 text-left rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-smooth group"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl group-hover:scale-110 transition-smooth">{action.icon}</span>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-smooth">
                            {action.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">{action.description}</p>
                        </div>
                        <span className="text-primary opacity-0 group-hover:opacity-100 transition-smooth">→</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="card-gradient rounded-2xl p-6 shadow-soft text-center">
                <div className="flex items-center justify-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-tech rounded-full animate-pulse"></div>
                  <span className="text-tech font-semibold">Available for new projects</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Usually responds within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="card-gradient rounded-2xl p-8 shadow-soft max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Whether you need a new website, want to improve an existing application, or have a unique project in mind,
              I'm here to help bring your vision to life with clean, efficient code and modern design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg shadow-hover transition-smooth hover:scale-105">
                Start a Project
              </button>
              <button className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg transition-smooth hover:bg-primary hover:text-primary-foreground">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;