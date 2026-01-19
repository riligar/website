# Dados Estruturados (JSON-LD)

Dados estruturados ajudam os motores de busca a entender seu conteúdo e habilitam "rich snippets" nos resultados de pesquisa.

---

## Implementação

### Tag de Script

Em projetos React ou HTML puro, os dados estruturados são inseridos via uma tag `<script>` no `<head>` ou próximo ao conteúdo relevante.

```html
<script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "RiLiGar",
        "url": "https://riligar.com",
        "logo": "https://riligar.com/logo.png",
        "sameAs": ["https://twitter.com/riligar", "https://linkedin.com/company/riligar"]
    }
</script>
```

### Dinâmico com React

```javascript
// Exemplo de componente simples
export function JsonLd({ data }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    )
}
```

---

## Templates de Schema

### Organização (Homepage)

```javascript
const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Nome da Marca',
    url: 'https://seudominio.com',
    logo: 'https://seudominio.com/logo.png',
    description: 'Descrição breve da empresa.',
    foundingDate: '2025',
    sameAs: ['https://twitter.com/marca', 'https://linkedin.com/company/marca'],
}
```

### WebSite (Search Box)

```javascript
const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Nome da Marca',
    url: 'https://seudominio.com',
    potentialAction: {
        '@type': 'SearchAction',
        target: 'https://seudominio.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string',
    },
}
```

### SoftwareApplication (SaaS)

```javascript
const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'RiLiGar Autopilot',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
        '@type': 'Offer',
        price: '0.00',
        priceCurrency: 'USD',
    },
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        ratingCount: '150',
    },
}
```

### Article (Blog Posts)

```javascript
const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Título do Artigo',
    image: ['https://seudominio.com/blog/capa.jpg'],
    datePublished: '2025-01-20T08:00:00+00:00',
    dateModified: '2025-01-20T10:00:00+00:00',
    author: {
        '@type': 'Person',
        name: 'Autor Nome',
    },
}
```

---

## Ferramentas de Teste

1. **Google Rich Results Test**: [Acesse aqui](https://search.google.com/test/rich-results)
2. **Schema.org Validator**: [Acesse aqui](https://validator.schema.org/)
