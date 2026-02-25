# 🏮 Zen Design Manifesto & Master Prompt

Este documento é a alma técnica e filosófica da **Série Zen**. Ele foi criado para permitir que a estética de "conteúdo sobre cromo" (high-impact minimalism) seja transportada para qualquer projeto, ferramenta de design ou gerador de código.

---

## 1. O Prompt Mestre (Portable Blueprint)

Copie e cole este prompt em ferramentas como ChatGPT, Claude, V0 ou Cursor para gerar novas interfaces seguindo este conceito:

> **"Aja como um Senior Product Designer. Crie uma interface UI com estética 'Zen-Modern' de alto impacto. Princípios: 1. Conteúdo sobre Cromo (foco total na tipografia e dados). 2. Paleta minimalista (Pure White backgrounds, Dark-9/Gray-9 texts). 3. Hierarquia Massiva (Títulos em Bold/900 com letter-spacing de -0.04em, contrastando com Labels sutilmente em Small Caps/LTS 1.5px). 4. Big Type Metrics: use fontes gigantes (64px+) para os valores de dados principais. 5. Inputs Minimalistas: use o estilo 'unstyled' com apenas uma borda inferior (border-bottom). 6. Palco Unificado: use containers largos (XL) com padding vertical generoso (80px), criando um palco central limpo e calmo."**

---

## 2. A Filosofia Zen

### Content over Chrome

No Zen, a interface não compete com a informação. Botões, bordas e sombras são reduzidos ao mínimo absoluto. Se um elemento não ajuda na leitura do dado, ele é removido.

### The Stage (O Palco)

Cada visualização é tratada como um palco. O cabeçalho é o "anúncio" (Subtítulo leve + Título Pesado). O conteúdo é a "performance". O uso de `ZenLayout` garante que essa fundação seja idêntica em todas as apps.

---

## 3. Especificações Técnicas (Design Tokens)

### Tipografia

- **Títulos (H1/H2)**: Peso 900, Tamanho 48-72px, Espaçamento -0.04em.
- **Subtítulos/Labels**: Peso 800, Tamanho 10-12px, Uppercase, Espaçamento 1.5px, Cor Gray.4.
- **Métricas**: Peso 900, Tamanho 64-120px, Line-height 1.

### Componentes

- **Inputs**: Sem bordas laterais ou superiores. Apenas `border-bottom: 1px solid gray-1`.
- **Badges**: Use o estilo `variant="dot"` ou `light` com cores cinzas para manter a sutileza.
- **Drawers**: Use gavetas laterais (Right Drawer) para esconder funcionalidades complexas (históricos, configurações), mantendo o centro da tela vazio e limpo.

---

## 4. Como Usar

1. **Para Criar Novas Views**: Use o `ZenLayout`. Ele centraliza o cabeçalho e define o ritmo do palco.
2. **Para Refinar Dados**: Aplique as `Big Type Metrics`. Transforme números simples em declarações de design.
3. **Para Novos Projetos**: Use o **Prompt Mestre** da Seção 1 para alinhar a IA na criação de componentes iniciais.

_O Zen Series não é sobre o que você coloca, é sobre o que você decide não colocar._
