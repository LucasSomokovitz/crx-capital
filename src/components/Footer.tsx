const Footer = () => {
  return (
    <footer className="bg-navy text-white py-4">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-2 min-h-[60px]">
          {/* Logo - 25% maior e centralizada verticalmente */}
          <div className="flex items-center justify-center h-full">
            <img
              src="/images/logocrxcapitalbranco.png"
              alt="CRX Capital"
              className="h-[3.125rem] w-auto"
            />
          </div>

          {/* Contato - Lado a lado */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-white/70 text-sm">
            <span>Rua Carlos Rischbieter, 1745 - Boa Vista, Blumenau - SC</span>
            <span className="hidden md:inline">|</span>
            <span>
              <a
                href="tel:+5547991455899"
                className="hover:text-[#b6c939] transition-colors"
              >
                (47) 9 9145-5899
              </a>
              {' | '}
              <a
                href="tel:+5547991911209"
                className="hover:text-[#b6c939] transition-colors"
              >
                (47) 9 9191-1209
              </a>
            </span>
            <span className="hidden md:inline">|</span>
            <a
              href="mailto:contato@crxcapital.com.br"
              className="hover:text-[#b6c939] transition-colors"
            >
              contato@crxcapital.com.br
            </a>
          </div>
        </div>
        
        {/* Copyright abaixo */}
        <p className="text-white/50 text-xs text-center">
          © {new Date().getFullYear()} CRX Capital. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
