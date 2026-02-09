# 🚀 Guia de Deploy - CRX Capital

## Opções de Deploy

### 1. GitHub Pages (Automático)

O projeto já está configurado com GitHub Actions para deploy automático!

**Como funciona:**
1. Faça commit e push para a branch `main`
2. O GitHub Actions automaticamente:
   - Instala dependências
   - Faz o build
   - Publica na branch `gh-pages`
3. O site estará disponível em: `https://lucassomokovitz.github.io/crx-capital/`

**Para ativar:**
1. Vá em **Settings** > **Pages** no repositório
2. Selecione **Source**: `Deploy from a branch`
3. Selecione **Branch**: `gh-pages` e pasta `/ (root)`
4. Salve

### 2. GitHub Pages (Manual)

Se preferir fazer manualmente:

```bash
npm run build
npx gh-pages -d dist
```

### 3. Vercel (Recomendado - Mais Fácil)

1. Instale a CLI:
```bash
npm i -g vercel
```

2. No diretório do projeto:
```bash
vercel
```

3. Siga as instruções no terminal
4. Pronto! Seu site estará no ar

**Vantagens:**
- Deploy automático a cada push
- SSL gratuito
- CDN global
- Domínio personalizado gratuito

### 4. Netlify

1. Instale a CLI:
```bash
npm i -g netlify-cli
```

2. Build e deploy:
```bash
npm run build
netlify deploy --prod --dir=dist
```

**Vantagens:**
- Formulários gratuitos
- SSL automático
- Deploy contínuo

### 5. Hospedagem Tradicional (cPanel, FTP, etc)

1. Faça o build:
```bash
npm run build
```

2. **IMPORTANTE**: Antes de fazer o build, edite `vite.config.ts`:
```typescript
base: '/',  // Mude de '/crx-capital/' para '/'
```

3. Faça o build novamente:
```bash
npm run build
```

4. Envie o conteúdo da pasta `dist/` para o servidor via FTP/cPanel

## Configuração de Base Path

### Para GitHub Pages:
```typescript
// vite.config.ts
base: '/crx-capital/',
```

### Para Domínio Próprio / Hospedagem Normal:
```typescript
// vite.config.ts
base: '/',
```

## Checklist Pré-Deploy

- [ ] Testar build local: `npm run build && npm run preview`
- [ ] Verificar se todas as imagens estão carregando
- [ ] Testar em diferentes navegadores
- [ ] Verificar performance no PageSpeed Insights
- [ ] Configurar domínio personalizado (se necessário)
- [ ] Configurar SSL/HTTPS
- [ ] Adicionar Google Analytics (opcional)

## Suporte

Para problemas no deploy, consulte:
- [Documentação Vite](https://vite.dev/guide/static-deploy.html)
- [Documentação GitHub Pages](https://docs.github.com/en/pages)
- [Documentação Vercel](https://vercel.com/docs)
