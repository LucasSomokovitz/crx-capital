# 🚀 Guia de Deploy - CRX Capital

## Opções de Deploy Recomendadas

### 1. Vercel (Recomendado - Mais Fácil)

1. Instale a CLI da Vercel:
```bash
npm i -g vercel
```

2. No diretório do projeto, execute:
```bash
vercel
```

3. Siga as instruções no terminal
4. Pronto! Seu site estará no ar em segundos

**Vantagens:**
- Deploy automático a cada push no GitHub
- SSL gratuito
- CDN global
- Domínio personalizado gratuito

### 2. Netlify

1. Instale a CLI do Netlify:
```bash
npm i -g netlify-cli
```

2. Build do projeto:
```bash
npm run build
```

3. Deploy:
```bash
netlify deploy --prod --dir=dist
```

**Vantagens:**
- Formulários gratuitos (pode usar Netlify Forms)
- SSL automático
- Deploy contínuo

### 3. GitHub Pages

1. Instale o plugin do Vite:
```bash
npm install -D gh-pages
```

2. Adicione no `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Configure o `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/nome-do-repositorio/', // Se não for raiz
  // ... resto da config
})
```

4. Deploy:
```bash
npm run deploy
```

## Configurações Importantes

### Variáveis de Ambiente (se necessário)

Crie um arquivo `.env`:
```
VITE_API_URL=https://api.exemplo.com
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id
VITE_EMAILJS_PUBLIC_KEY=sua_public_key
```

### Otimizações de Build

O `vite.config.ts` já está configurado para:
- Minificação com Terser
- Remoção de console.log em produção
- Code splitting automático
- Build otimizado para produção

## Checklist Pré-Deploy

- [ ] Adicionar imagens reais em `public/images/`
- [ ] Configurar domínio personalizado
- [ ] Integrar formulário com serviço de email
- [ ] Adicionar Google Analytics (se necessário)
- [ ] Testar em diferentes dispositivos
- [ ] Verificar performance no PageSpeed Insights
- [ ] Configurar SSL/HTTPS
- [ ] Adicionar política de privacidade (LGPD)
- [ ] Configurar aviso de cookies (LGPD)

## Performance

Após o deploy, verifique:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

Meta: Score > 90 em todas as métricas

## Suporte

Para problemas no deploy, consulte:
- [Documentação Vite](https://vite.dev/guide/static-deploy.html)
- [Documentação Vercel](https://vercel.com/docs)
- [Documentação Netlify](https://docs.netlify.com/)
