# CRX Capital - Landing Page

Landing page profissional desenvolvida para a CRX Capital - Consultoria e Negócios, localizada em Blumenau/SC.

## 🚀 Tecnologias

- **React 19** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS** - Framework CSS utility-first
- **PostCSS** - Processador CSS

## 📋 Pré-requisitos

- Node.js 18+ 
- npm ou yarn

## 🛠️ Instalação

1. Clone o repositório ou navegue até a pasta do projeto
2. Instale as dependências:

```bash
npm install
```

## 🎨 Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

## 📦 Build para Produção

Para gerar a build de produção:

```bash
npm run build
```

Os arquivos otimizados estarão na pasta `dist/`

## 🎯 Estrutura do Projeto

```
crx-capital/
├── public/
│   └── images/          # Imagens estáticas (logo, fotos, etc.)
├── src/
│   ├── components/      # Componentes React
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── TrustBar.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Diferenciais.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── StructuredData.tsx
│   ├── assets/
│   │   └── images/      # Assets de imagens
│   ├── App.tsx          # Componente principal
│   ├── main.tsx         # Entry point
│   └── index.css        # Estilos globais e Tailwind
├── index.html
├── tailwind.config.js   # Configuração do Tailwind
├── postcss.config.js     # Configuração do PostCSS
└── vite.config.ts       # Configuração do Vite
```

## 🎨 Paleta de Cores

- **Azul Marinho (Navy)**: `#000080` - Cor primária, autoridade e estabilidade
- **Verde-Limão (Lime)**: `#32CD32` - Cor de destaque para CTAs e elementos interativos
- **Branco Gelo (Ice)**: `#F5F5F5` - Fundos limpos
- **Cinza Grafite (Graphite)**: `#333333` - Textos secundários

## 📝 Tipografia

- **Títulos**: Playfair Display (Serif) - Elegância e prestígio
- **Corpo**: Inter / Montserrat (Sans-Serif) - Legibilidade moderna

## 📱 Responsividade

O projeto é totalmente responsivo, seguindo a abordagem Mobile-First:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔍 SEO e AEO

- Meta tags otimizadas
- Dados estruturados JSON-LD (Schema.org)
- Otimização para Answer Engine Optimization (AEO)
- Foco em termos-chave locais (Blumenau/SC)

## 📞 Informações de Contato

- **Endereço**: Rua Carlos Rischbieter, 1745 - Boa Vista, Blumenau/SC
- **Telefones**: (47) 9 9145-5899 | (47) 9 9191-1209
- **E-mail**: contato@crxcapital.com.br

## 🖼️ Imagens Necessárias

Adicione as seguintes imagens na pasta `public/images/`:

1. `hero-team.jpg` - Imagem da equipe em reunião (1920x1080px recomendado)
2. `about-office.jpg` - Imagem do escritório ou equipe (800x800px recomendado)
3. `logo.png` - Logo da CRX Capital (formato PNG com fundo transparente)

## 🚀 Deploy

O projeto pode ser deployado em qualquer plataforma que suporte aplicações React/Vite:

- **Vercel** (recomendado)
- **Netlify**
- **GitHub Pages**
- **AWS Amplify**

## 📄 Licença

Este projeto é propriedade da CRX Capital.

---

Desenvolvido com ❤️ para CRX Capital
