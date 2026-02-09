const StructuredData = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'CRX Capital',
    description:
      'Consultoria especializada em Blumenau/SC para empresas que buscam solidez, governança e expansão de capital.',
    url: 'https://www.crxcapital.com.br',
    logo: 'https://www.crxcapital.com.br/logo.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Carlos Rischbieter, 1745',
      addressLocality: 'Blumenau',
      addressRegion: 'SC',
      postalCode: '89012-200',
      addressCountry: 'BR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+55-47-99145-5899',
      contactType: 'customer service',
      email: 'contato@crxcapital.com.br',
      areaServed: 'BR',
      availableLanguage: 'Portuguese',
    },
    areaServed: {
      '@type': 'State',
      name: 'Santa Catarina',
    },
    serviceType: [
      'Consultoria Estratégica',
      'Gestão de Capital',
      'Fusões e Aquisições',
      'Inovação e Processos',
    ],
    foundingDate: '2024',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
