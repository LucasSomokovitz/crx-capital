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

1. Clone o repositório:
```bash
git clone https://github.com/LucasSomokovitz/crx-capital.git
cd crx-capital
```

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

## 🌐 Deploy no GitHub Pages

O projeto está configurado para funcionar no GitHub Pages. Após fazer o build:

1. Faça commit e push do código
2. Vá em **Settings** > **Pages** no repositório
3. Selecione a branch `main` e a pasta `dist`
4. O site estará disponível em: `https://lucassomokovitz.github.io/crx-capital/`

## 📁 Estrutura do Projeto

```
crx-capital/
├── public/
│   ├── Apresentação/     # Slides da apresentação (Slide1.PNG a Slide25.PNG)
│   └── images/           # Imagens estáticas (logos, etc.)
├── src/
│   ├── components/       # Componentes React
│   ├── App.tsx           # Componente principal
│   ├── main.tsx          # Entry point
│   └── index.css         # Estilos globais e Tailwind
├── index.html
├── vite.config.ts        # Configuração do Vite
└── package.json
```

## 🎨 Paleta de Cores

- **Azul Marinho (Navy)**: `#000080` - Cor primária
- **Verde (Lime)**: `#b6c939` - Cor de destaque
- **Branco Gelo (Ice)**: `#F5F5F5` - Fundos limpos
- **Cinza Grafite (Graphite)**: `#333333` - Textos secundários

## 📝 Licença

Este projeto é propriedade da CRX Capital.

---

Desenvolvido com ❤️ para CRX Capital
