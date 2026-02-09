const TrustBar = () => {
  return (
    <section className="bg-ice py-8 border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          {/* Badge de Desenvolvimento */}
          <div className="flex items-center gap-3">
            <div className="bg-lime/20 text-lime-dark px-4 py-2 rounded-full text-sm font-semibold border border-lime/30">
              🚀 Em Desenvolvimento
            </div>
            <span className="text-graphite/70 text-sm">Lançamento 2026</span>
          </div>

          {/* Separador */}
          <div className="hidden md:block w-px h-8 bg-gray-300"></div>

          {/* Mensagem de Autoridade */}
          <p className="text-center md:text-left text-graphite/80 font-medium">
            Unindo expertise de mercado e inovação estratégica em Santa
            Catarina
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
