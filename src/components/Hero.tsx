import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    '/images/slide1.png',
    // Adicione mais slides aqui quando tiver
  ];

  useEffect(() => {
    if (slides.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000); // Muda a cada 5 segundos

      return () => clearInterval(interval);
    }
  }, [slides.length]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-navy text-white pt-20 overflow-hidden"
    >
      {/* Slideshow Background */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${slide})`,
              backgroundPosition: 'center',
            }}
          ></div>
        ))}
        {/* Película fumê preta 60% opacidade */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-20 container mx-auto px-4 md:px-8 lg:px-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-balance leading-tight">
            PAGINA EM REESTRUTURAÇÃO
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed">
          CONSULTORIA EM DESENVOLVIMENTO E GESTÃO DE PROJETOS   
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center hidden">
            <button
              onClick={() => scrollToSection('contato')}
              className="btn-primary text-lg px-10 py-5 min-w-[280px] sm:min-w-0"
            >
              Fale com um Especialista
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="btn-secondary text-lg px-10 py-5 min-w-[280px] sm:min-w-0 bg-white/10 border-white/30 text-white hover:bg-white hover:text-navy"
            >
              Conheça Nossos Serviços
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg
          className="w-6 h-6 text-white/70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
