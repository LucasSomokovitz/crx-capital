const About = () => {
  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">
              Sobre a CRX Capital
            </h2>
            <p className="text-lg text-graphite/80 leading-relaxed">
              A CRX Capital nasce da necessidade de preencher a lacuna entre a
              gestão operacional e a inteligência financeira de alto nível.
            </p>
            <p className="text-lg text-graphite/80 leading-relaxed">
              Com sede em <strong className="text-navy">Blumenau, Santa Catarina</strong>, 
              nos posicionamos como um polo de força econômica, oferecendo 
              consultoria estratégica que transforma desafios em oportunidades 
              de crescimento sustentável.
            </p>
            <p className="text-lg text-graphite/80 leading-relaxed">
              Nossa missão é maximizar o valor estratégico e a eficiência 
              financeira de empresas que buscam não apenas sobreviver, mas 
              prosperar em um mercado cada vez mais competitivo.
            </p>

            {/* Destaques */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-ice p-4 rounded-lg">
                <div className="text-3xl font-bold text-navy mb-1">10+</div>
                <div className="text-sm text-graphite/70">Anos de Experiência</div>
              </div>
              <div className="bg-ice p-4 rounded-lg">
                <div className="text-3xl font-bold text-lime mb-1">100%</div>
                <div className="text-sm text-graphite/70">Foco em Resultados</div>
              </div>
            </div>
          </div>

          {/* Imagem */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/about-office.jpg"
                alt="Escritório CRX Capital em Blumenau"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback se a imagem não existir
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = `
                    <div class="w-full h-full bg-gradient-to-br from-navy to-navy-dark flex items-center justify-center">
                      <div class="text-white text-center p-8">
                        <div class="text-6xl mb-4">🏢</div>
                        <div class="text-xl font-serif">CRX Capital</div>
                        <div class="text-sm mt-2 opacity-80">Blumenau, SC</div>
                      </div>
                    </div>
                  `;
                }}
              />
            </div>
            {/* Decoração */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-lime/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
