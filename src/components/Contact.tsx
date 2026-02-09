import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    mensagem: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode integrar com um serviço de email ou API
    console.log('Formulário enviado:', formData);
    alert('Obrigado pelo contato! Entraremos em contato em breve.');
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      empresa: '',
      mensagem: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      if (numbers.length <= 10) {
        return numbers.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
      }
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    return value;
  };

  return (
    <section id="contato" className="section-padding bg-navy text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Fale com a Nossa Equipe
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Estamos prontos para ajudar seu negócio a alcançar novos patamares
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6">
                Informações de Contato
              </h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                Entre em contato conosco através dos canais abaixo ou preencha
                o formulário ao lado.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-lime/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-lime"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Endereço</h4>
                  <p className="text-white/80">
                    Rua Carlos Rischbieter, 1745<br />
                    Boa Vista, Blumenau - SC<br />
                    CEP 89012-200
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-lime/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-lime"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Telefones</h4>
                  <p className="text-white/80">
                    <a
                      href="https://wa.me/5547991455899"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime transition-colors"
                    >
                      (47) 9 9145-5899
                    </a>
                    <br />
                    <a
                      href="https://wa.me/5547991911209"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime transition-colors"
                    >
                      (47) 9 9191-1209
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-lime/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-lime"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">E-mail</h4>
                  <p className="text-white/80">
                    <a
                      href="mailto:contato@crxcapital.com.br"
                      className="hover:text-lime transition-colors"
                    >
                      contato@crxcapital.com.br
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="mt-8 rounded-lg overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.5!2d-49.0664!3d-26.9194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU1JzA5LjgiUyA0OcKwMDMnNTkuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="250"
                style={{ border: 0, filter: 'grayscale(20%) brightness(0.8)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização CRX Capital"
              ></iframe>
            </div>
          </div>

          {/* Formulário */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="nome"
                  className="block text-sm font-semibold mb-2"
                >
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2"
                >
                  E-mail Corporativo *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="telefone"
                  className="block text-sm font-semibold mb-2"
                >
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  required
                  value={formData.telefone}
                  onChange={(e) => {
                    const formatted = formatPhone(e.target.value);
                    setFormData({ ...formData, telefone: formatted });
                  }}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent"
                  placeholder="(47) 9 9999-9999"
                />
              </div>

              <div>
                <label
                  htmlFor="empresa"
                  className="block text-sm font-semibold mb-2"
                >
                  Empresa
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent"
                  placeholder="Nome da sua empresa"
                />
              </div>

              <div>
                <label
                  htmlFor="mensagem"
                  className="block text-sm font-semibold mb-2"
                >
                  Como podemos ajudar? *
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  rows={5}
                  value={formData.mensagem}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent resize-none"
                  placeholder="Conte-nos sobre sua necessidade..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full bg-lime hover:bg-lime-light text-navy font-bold py-4 text-lg"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
