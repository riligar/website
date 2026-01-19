# Diretrizes de Design & Sistema Visual

> Baseado na análise de UI Minimalista/SaaS Premium (Notion)

## 1. Filosofia Visual: "Content-First"

A interface deve recuar para deixar o conteúdo brilhar. A estética é utilitária, limpa e focada na densidade de informação sem sacrificar a legibilidade.

- **Minimalismo:** Remover ornamentos desnecessários (sombras pesadas, gradientes complexos).
- **Estrutura:** O design depende de alinhamento preciso e espaço em branco (whitespace), não de caixas coloridas.

## 2. Tipografia

A tipografia é a principal ferramenta de estrutura da interface.
**Família:** Montserrat (Geométrica e Moderna).

| Função                 | Peso            | Cor                    | Tracking  |
| :--------------------- | :-------------- | :--------------------- | :-------- |
| **Corpo / Dados**      | Regular (400)   | `#11181C` (Primário)   | Normal    |
| **Cabeçalhos Tabela**  | Medium (500)    | `#687076` (Secundário) | Normal    |
| **Botões / Ações**     | Medium (500)    | Variável               | `-0.01em` |
| **Títulos (H1, H2)**   | Semi-Bold (600) | `#11181C` (Primário)   | `-0.02em` |
| **Labels / Metadados** | Regular (400)   | `#737373` (Terciário)  | Normal    |

**Hierarquia de Cores de Texto:**

1.  **Primária:** `#11181C` ou `#171717` (Quase preto, nunca `#000000`).
2.  **Secundária:** `#687076` (Cinza neutro para suporte).
3.  **Terciária:** `#B0B0B0` (Desabilitado ou placeholder).

## 3. Paleta de Cores & Superfícies

Uso estrito de monocromia com cores semânticas apenas quando necessário.

- **Fundos (Backgrounds):**
  - _App Base:_ `#FFFFFF` (Branco Puro).
  - _Sidebars / Headers:_ `#FAFAFA` ou `#F9FAFB` (Cinza ultra-sútil).
- **Bordas:**
  - _Padrão:_ `#E5E7EB` ou `#E2E8F0` (Sutil, 1px).
- **Acentos (Action Colors):**
  - _Brand/Primary:_ `#000000` (Preto Sólido) ou Azul Índigo Profundo.
  - _Feedback:_ Cores pastéis no fundo, texto saturado.
    - _Erro:_ Bg `#FEF2F2` / Text `#991B1B`.
    - _Sucesso:_ Bg `#F0FDF4` / Text `#166534`.

## 4. Componentes (UI Kit)

### Botões

- **Altura:** `32px` (Small/Dense) ou `36px` (Regular).
- **Border-Radius:** `6px` a `8px` (Suave, mas não "pill").
- **Estilos:**
  - _Primary:_ Fundo Preto, Texto Branco. Hover suave.
  - _Secondary/Ghost:_ Fundo Transparente, Texto Cinza. Hover com bg `#F3F4F6`.

### Tabelas & Listas

- **Estilo:** "Clean Rows".
- **Bordas:** Apenas linhas horizontais (`border-bottom`). Sem linhas verticais.
- **Hover:** Linhas destacam com cinza pálido (`#F9FAFB`) ao passar o mouse.
- **Padding:** Compacto (`py-2`, `px-4`) para alta densidade de dados.

### Inputs

- **Borda:** `1px solid #E5E5E5`.
- **Foco:** Ring duplo sutil (ex: `ring-2 ring-gray-200`) ou borda escurecida. Nunca glow neon forte.

## 5. Layout & Espaçamento

- **Respiro:** Margens generosas ao redor do container principal, mas densidade alta dentro dos componentes de dados.
- **Navegação:** Sidebar fixa para contexto global; Topbar simples para contexto local.

## 6. Micro-interações

- **Animações:** Rápidas e invisíveis (150ms - 200ms ease-out).
- **Sombras:** Usadas apenas para elevação (Modais, Dropdowns).
  - _Drop Shadow:_ Suave e difusa (`0 4px 20px rgba(0,0,0,0.05)`).

## 7. Diretrizes para Geração via LLM (Prompting Helper)

> Use estas instruções para garantir que a IA gere resultados fiéis ao design system.

### Keywords Essenciais (Contexto)

Sempre inclua estas palavras-chave no prompt de geração de UI:
`"Linear-style interface"`, `"Notion-like aesthetic"`, `"High density data"`, `"Clean minimalist SaaS"`, `"Monochrome color palette with subtle borders"`, `"Inter/Montserrat typography"`, `"1px border separation"`.

### Regras de Ouro (Constraints)

1.  **NUNCA** use sombras coloridas ou "glow" efeitos.
2.  **NUNCA** use fundos saturados para containers (apenas branco ou cinza muito claro).
3.  **EVITE** cartões (cards) com sombras pesadas para agrupar conteúdo. Use **linhas e bordas sutis** para separar seções.
4.  **Botões:** Evite botões grandes e chamativos. O botão primário deve ser discreto (preto/branco), e os secundários devem ser quase invisíveis até o hover.

### Estrutura de Prompt Recomendada

Ao pedir código ou design para uma IA, use este formato:

> "Crie uma interface [Tela/Componente] seguindo uma estética estritamente minimalista (estilo Notion). Use a fonte Montserrat. O layout deve ser denso, focado em dados, sem sobras desnecessárias. Use bordas de 1px (#E5E5E5) para separação em vez de cards flutuantes. Cores: Preto (#11181C) para texto principal, Cinza (#687076) para secundário. Fundo branco puro."

### Tratamento de Casos Especiais

- **Empty States:** Devem ser minimalistas. Um ícone de linha fina (stroke 1.5px) em cinza claro, um título em H3 e um botão de ação. Nada de ilustrações 3D coloridas.
- **Modais:** Devem ter um backdrop com blur (`backdrop-blur-sm`) e fundo branco sólido. Sem cabeçalhos coloridos.
- **Dashboards:** Devem privilegiar números grandes (Big Numbers) em monocromia, com rótulos pequenos abaixo. Gráficos devem ser limpos, sem grid lines pesadas.

---

## 🤖 Integração com Gemini CLI

Este repositório possui uma **Skill do Gemini CLI** configurada em [`riligar-design-system/SKILL.md`](../SKILL.md). Ao usar o Gemini CLI neste repositório, o agente aplicará automaticamente estas diretrizes a qualquer código ou design gerado.

Para saber como usar, veja o [README principal](../../README.md).
