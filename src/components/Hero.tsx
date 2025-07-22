import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 hero-gradient opacity-80"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-white to-accent-glow bg-clip-text text-transparent">
              Fahad Ali
            </span>
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-8 font-light">
            Frontend Developer | ReactJS Enthusiast
          </p>

          <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Creating modern, responsive web applications with clean code and innovative solutions.
            Specialized in React, JavaScript, and building seamless user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-primary font-semibold rounded-lg shadow-hover transition-smooth hover:shadow-glow hover:scale-105"
            >
              Get In Touch
            </button>

            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg transition-smooth hover:bg-white hover:text-primary hover:scale-105"
            >
              <div className="ml-3">View My Work</div>
            </button>
          </div>
        </div>

        {/* Floating Animation */}
        <div className="absolute bottom-4 left-1/4 sm:left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white ml-3 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;