# Dicionário Visual (Visual-Code Dictionary)

Este documento traduz "Sensação Visual" em "Regras de Código". Use-o para eliminar a subjetividade.

## 1. Ritmo & Espaçamento (Layout Rhythms)

A densidade do RiLiGar é definida matematicamente. Não adivinhe, use estas medidas.

| Nível         | Medida  | Token Mantine        | Onde Usar                                                           |
| :------------ | :------ | :------------------- | :------------------------------------------------------------------ |
| **Micro**     | `4px`   | `gap="xs"` (half)    | Espaço entre Ícone e Texto.                                         |
| **Component** | `8px`   | `p="xs"`, `gap="xs"` | Padding interno de Botões, Inputs, Table Cells.                     |
| **Flow**      | `12px`  | `gap={12}`           | Espaço entre elementos de um formulário ou lista vertical de cards. |
| **Section**   | `16px`  | `p="md"`, `gap="md"` | Padding padrão de Cards, Modais e Sidebars.                         |
| **Layout**    | `24px+` | `p="lg"`, `gap="lg"` | Margens da página, separação de grandes blocos.                     |

## 2. Regra das 3 Camadas (Depth Stacking)

Para evitar o visual "chapado", use esta hierarquia estrita de cores e bordas.

### Layer 0: O Canvas (Fundo)

-   **Cor:** `bg="gray.0"` (`#F9FAFB` Light / Dark Auto-adapt).
-   **Uso:** O fundo de toda a aplicação. Nunca use branco puro (`#FFF`) no fundo da página.

### Layer 1: O Conteúdo (Cards/Surface)

-   **Cor:** `bg="white"` (Light) / `bg="gray.9"` (Dark).
-   **Borda:** `bd="1px solid gray.2"` (Essencial para recorte).
-   **Sombra:** `shadow="none"` (A borda faz o trabalho de separação).
-   **Radius:** `radius="lg"` (8px).

### Layer 2: O Feedback (Hover/Overlay)

-   **Hover:** `bg="gray.0"` (Interação sutil).
-   **Active:** `bg="gray.1"` (Seleção).
-   **Overlay:** `shadow="lg"` + `bd="gray.2"` (Apenas para Popovers e Modais).

## 3. Anatomia Atômica (Component Specifications)

Se você for criar um destes componentes, ele **DEVE** seguir estas medidas exatas.

### Sidebar Item (Linear Style)

-   **Altura:** `32px` ou `28px` (Ultra-denso).
-   **Padding:** `px="xs"` (8px horizontal).
-   **Radius:** `radius="md"` (6px).
-   **Fonte:** `size="sm"` (13px), `fw={500}`.
-   **Cor:** Default `c="dimmed"`, Active `c="text"`, Hover `bg="gray.1"`.

### Table Row (Notion Style)

-   **Altura:** `36px` (Conteúdo + Padding).
-   **Borda:** `borderBottom: '1px solid gray.1'` (Nota: gray.1, mais sutil que a borda do card).
-   **Header:** `c="dimmed"`, `fw={600}`, `fz="xs"` (12px), `textTransform="uppercase"`.
-   **Cell:** `fz="sm"` (13px ou 14px).

### Page Header

-   **Altura:** `48px` ou `56px`.
-   **Fundo:** `bg="gray.0"` (Transparente/Blur opcional).
-   **Borda:** `borderBottom: '1px solid gray.2'`.
-   **Conteúdo:** Título `h4` (`fw={600}`), Ações à direita.

## 4. Nuances de "Excellence"

1.  **Ícones:** Sempre use `stroke={1.5}`. Ícones mais grossos (2px) parecem "infantis" neste design system. Tamanho padrão `16px` ou `18px`.
2.  **Tracking:**
    -   Títulos (H1-H3): `letter-spacing: -0.02em` (Aperta o título, visual premium).
    -   Botões/Labels: `letter-spacing: -0.005em` (Leve toque de densidade).
3.  **Bordas:** Nunca use `#000` ou `#DDD`. Use sempre o token `gray.2` do tema, que é calibrado para ser visível mas não intrusivo.
