# Implementação de SEO Técnico (React + Bun/Elysia)

Esta referência detalha como implementar os elementos técnicos de SEO usando a stack RiLiGar.

---

## 1. Estrutura de Arquivos SEO

```
project/
├── frontend/ (React/Vite)
│   ├── public/
│   │   ├── robots.txt       # Diretivas fixas
│   │   ├── sitemap.xml      # Sitemap estático (se não for dinâmico)
│   │   ├── og-image.png     # Imagem padrão de compartilhamento
│   │   └── favicon.ico      # Ícone do navegador
│   └── index.html           # Meta tags base
└── backend/ (Bun/Elysia)
    └── src/
        └── routes/
            └── seo.js       # Endpoints para sitemap dinâmico
```

---

## 2. Metadados Globais (index.html)

No projeto React/Vite, o `index.html` fornece o baseline:

```html
<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="UTF-8" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
        />

        <title>Nome da Marca — Tagline Curta e Assertiva</title>
        <meta
            name="description"
            content="Descrição de 155 caracteres que inclui a palavra-chave principal e uma chamada para ação clara."
        />

        <!-- OpenGraph (Redes Sociais) -->
        <meta
            property="og:type"
            content="website"
        />
        <meta
            property="og:url"
            content="https://suadominio.com/"
        />
        <meta
            property="og:title"
            content="Nome da Marca — Tagline"
        />
        <meta
            property="og:description"
            content="Descrição expandida para redes sociais."
        />
        <meta
            property="og:image"
            content="https://suadominio.com/og-image.png"
        />
        <meta
            property="og:site_name"
            content="Nome da Marca"
        />

        <!-- Twitter -->
        <meta
            name="twitter:card"
            content="summary_large_image"
        />
        <meta
            name="twitter:title"
            content="Nome da Marca — Tagline"
        />
        <meta
            name="twitter:description"
            content="Descrição para o Twitter."
        />
        <meta
            name="twitter:image"
            content="https://suadominio.com/og-image.png"
        />

        <!-- Canonical URL -->
        <link
            rel="canonical"
            href="https://suadominio.com/"
        />
    </head>
    <body>
        <div id="root"></div>
        <script
            type="module"
            src="/src/main.jsx"
        ></script>
    </body>
</html>
```

---

## 3. Sitemap Dinâmico com Elysia

Se houver posts de blog ou produtos, o backend deve gerar o XML:

```javascript
// backend/src/services/seo.js
import { db } from '../database'

export const generateSitemap = async baseUrl => {
    const posts = await db.query.posts.findMany({
        where: (posts, { eq }) => eq(posts.published, true),
    })

    const urls = [
        { loc: `${baseUrl}/`, priority: '1.0' },
        { loc: `${baseUrl}/pricing`, priority: '0.8' },
        { loc: `${baseUrl}/about`, priority: '0.7' },
    ]

    posts.forEach(post => {
        urls.push({
            loc: `${baseUrl}/blog/${post.slug}`,
            lastmod: post.updatedAt.toISOString().split('T')[0],
            priority: '0.6',
        })
    })

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
        .map(
            u => `
    <url>
        <loc>${u.loc}</loc>
        ${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}
        <priority>${u.priority}</priority>
    </url>`
        )
        .join('')}
</urlset>`

    return xml
}

// backend/src/routes/seo.js
import { Elysia } from 'elysia'
import { generateSitemap } from '../services/seo'

export const seoRoutes = new Elysia().get('/sitemap.xml', async ({ set }) => {
    const baseUrl = process.env.SITE_URL || 'https://example.com'
    const xml = await generateSitemap(baseUrl)

    set.headers['Content-Type'] = 'application/xml'
    return xml
})
```

---

## 4. Robots.txt (Frontend `public/robots.txt`)

```text
User-agent: *
Allow: /

# Evitar que crawlers indexem logs ou áreas administrativas
Disallow: /api/
Disallow: /dashboard/
Disallow: /admin/
Disallow: /settings/

# Bloquear bots de treinamento de IA (Opcional, mas recomendado para RiLiGar)
User-agent: GPTBot
Disallow: /
User-agent: ChatGPT-User
Disallow: /
User-agent: CCBot
Disallow: /
User-agent: anthropic-ai
Disallow: /
User-agent: Google-Extended
Disallow: /

Sitemap: https://suadominio.com/sitemap.xml
```

---

## 5. Middleware de Autenticação

Certifique-se de que as rotas de SEO estão liberadas:

```javascript
// Exemplo no backend/Elysia se houver middleware global
const isPublicRoute = path => {
    const publics = ['/sitemap.xml', '/robots.txt', '/.well-known/']
    return publics.some(p => path.startsWith(p))
}
```

---

## 6. Otimização de Imagens para SEO

- **Formato:** Use `.webp` para imagens de conteúdo.
- **Lazy Loading:** `loading="lazy"` em todas as imagens fora da dobra inicial.
- **Alt Text:** Sempre inclua `alt="descrição da imagem"` para acessibilidade e crawlers.
- **OG Image:** Deve ter 1200x630px, preferencialmente formato `.png` ou `.jpg`.
