# Checklist de SEO Técnico (RiLiGar)

## Antes do Desenvolvimento

- [ ] Definir `SITE_URL` (com ou sem www) em todos os ambientes.
- [ ] Garantir que HTTPS é obrigatório.
- [ ] Planejar estrutura de URLs (Ex: `/blog/[slug]` vs `/p/[slug]`).

---

## Arquivos Essenciais

### Sitemap (`sitemap.xml`)

- [ ] Arquivo acessível via `/sitemap.xml`.
- [ ] Inclui todas as páginas públicas e indexáveis.
- [ ] Exclui páginas privadas/auth (`/dashboard`, `/admin`).
- [ ] `lastmod` reflete a data real de atualização do conteúdo.
- [ ] Prioridades fazem sentido (1.0 Home, 0.8 principais).
- [ ] Conteúdo dinâmico incluído via geração no backend (se aplicável).

### Robots.txt (`robots.txt`)

- [ ] Arquivo bloqueia indexação em ambientes de staging/dev.
- [ ] Permite crawlers em produção.
- [ ] Bloqueia caminhos sensíveis: `/api/`, `/dashboard/`, `/admin/`.
- [ ] Não bloqueia CSS/JS/Imagens necessários para renderização.
- [ ] Referencia a URL correta do sitemap.
- [ ] Política de bots de IA definida conforme necessidade.

### Metadados Base (`index.html`)

- [ ] `<title>` padrão configurado com a marca.
- [ ] Meta Descrição atraente (150-160 caracteres).
- [ ] OpenGraph configurado (`og:title`, `og:description`, `og:image`, `og:type`).
- [ ] Twitter Card configurado (`twitter:card`, `twitter:image`).
- [ ] URL Canônica definida dinamicamente ou estaticamente.

---

## Imagens e Ativos

- [ ] OG Image padrão em `public/og-image.png`.
- [ ] OG Image com dimensões exatas: 1200x630 pixels.
- [ ] Favicon presente em múltiplos formatos (`.ico`, `.png`).
- [ ] Apple Touch Icon presente para iOS.

---

## Performance (Core Web Vitals)

Os Core Web Vitals impactam diretamente o ranking:

### LCP (Largest Contentful Paint) < 2.5s

- [ ] Heros otimizados e sem lazy load (deve carregar rápido).
- [ ] Fontes críticas com `font-display: swap` ou preloading.
- [ ] Imagens pesadas em formato `.webp`.

### INP (Interaction to Next Paint) / FID < 200ms

- [ ] Bundle de JavaScript otimizado (sem excessos).
- [ ] Scripts de terceiros (Analytics, Pixels) carregados com `defer`.

### CLS (Cumulative Layout Shift) < 0.1

- [ ] Imagens têm `width` e `height` definidos no HTML/CSS.
- [ ] Espaços reservados para anúncios ou elementos dinâmicos.

---

## Dados Estruturados (JSON-LD)

- [ ] Schema `Organization` na Homepage.
- [ ] Schema `Article` em posts de blog.
- [ ] Schema `Product` em páginas de produto/serviço.
- [ ] Testado no [Google Rich Results Test](https://search.google.com/test/rich-results).

---

## Erros Comuns a Evitar

1. **Bloquear JS em robots.txt:** Impede os bots de "verem" o site React.
2. **Meta descrições duplicadas:** Cada página deve ter uma descrição única.
3. **Falta de URL Canônica:** Gera problema de conteúdo duplicado.
4. **Placeholder Text:** Nunca deixar "Lorem Ipsum" no ar.
5. **Esquecer de liberar o sitemap no auth:** Crawlers não conseguem ler o arquivo.
