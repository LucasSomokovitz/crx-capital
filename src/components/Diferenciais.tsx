const Diferenciais = () => {
  const diferenciais = [
    {
      title: 'Expertise Local',
      description:
        'Conhecimento profundo do mercado catarinense e das oportunidades regionais.',
    },
    {
      title: 'Abordagem Personalizada',
      description:
        'Cada cliente recebe uma estratégia customizada, alinhada aos seus objetivos específicos.',
    },
    {
      title: 'Transparência Total',
      description:
        'Comunicação clara e honesta em todas as etapas do processo de consultoria.',
    },
    {
      title: 'Resultados Mensuráveis',
      description:
        'Foco em métricas e KPIs que demonstram o impacto real das nossas soluções.',
    },
  ];

  return (
    <section id="diferenciais" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">
            Por que Escolher a CRX Capital?
          </h2>
          <p className="text-xl text-graphite/70 max-w-2xl mx-auto">
            Diferenciais que fazem a diferença no seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {diferenciais.map((diferencial, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-ice to-white border border-gray-100 card-hover"
            >
              <div className="w-16 h-16 bg-lime/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">✓</div>
              </div>
              <h3 className="text-xl font-serif font-bold text-navy mb-3">
                {diferencial.title}
              </h3>
              <p className="text-graphite/70 leading-relaxed">
                {diferencial.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;
