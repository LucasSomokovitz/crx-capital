interface Service {
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: '📊',
    title: 'Consultoria Estratégica',
    description:
      'Planejamento de longo prazo e reestruturação de negócios para maximizar o potencial de crescimento e eficiência operacional.',
  },
  {
    icon: '💰',
    title: 'Gestão de Capital',
    description:
      'Otimização de fluxo de caixa e estrutura de capital, garantindo recursos estratégicos para expansão e investimentos.',
  },
  {
    icon: '🤝',
    title: 'Fusões e Aquisições (M&A)',
    description:
      'Assessoria completa em transações corporativas, desde a análise inicial até a conclusão de negócios estratégicos.',
  },
  {
    icon: '⚡',
    title: 'Inovação e Processos',
    description:
      'Implementação de metodologias ágeis na gestão financeira, transformando processos tradicionais em vantagens competitivas.',
  },
];

const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-ice">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">
            Ecossistema de Serviços
          </h2>
          <p className="text-xl text-graphite/70 max-w-2xl mx-auto">
            Soluções integradas para transformar desafios financeiros em
            oportunidades de crescimento
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg card-hover border border-gray-100"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-serif font-bold text-navy mb-3">
                {service.title}
              </h3>
              <p className="text-graphite/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
