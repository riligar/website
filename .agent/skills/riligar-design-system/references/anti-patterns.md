# Anti-Patterns: O que NÃO é RiLiGar

Para atingir a excelência, devemos eliminar vícios de design comum que deixam a interface com cara de "genérica".

| Erro Comum                  | Por que é ruim?                                         | A Solução RiLiGar                                   |
| :-------------------------- | :------------------------------------------------------ | :-------------------------------------------------- |
| **Sombras Drop (Pesadas)**  | Adiciona ruído visual e amadorismo.                     | `border: 1px solid #E5E7EB`.                        |
| **Azul "Bootstrap"**        | Cor saturada demais para a estética minimalista.        | Use `#000000` (Preto) ou um azul marinho `#11181C`. |
| **Pillings (Radius total)** | Lembra apps mobile infantis ou Google Material antigos. | `border-radius: 6px`. Retangular com quinas suaves. |
| **Inputs Gigantes**         | Quebram a densidade de informação útil.                 | `height: 32px`. Compacto e focado.                  |
| **Gradientes Lineares**     | Introduzem profundidade desnecessária.                  | Cores puras e sólidas (Flat).                       |
| **Divisores Escuros**       | Chamam mais atenção que o próprio conteúdo.             | Use `#F3F4F6` para divisores internos.              |

## Exemplo de Refatoração (Cérebro do Agente)

**❌ Antes (Design Comum):**

```html
<div style="box-shadow: 0 4px 6px rgba(0,0,0,0.1); border-radius: 20px; padding: 20px; background: blue;">
    <h1 style="color: white; font-weight: 800;">User Info</h1>
    <button style="border-radius: 50px; padding: 10px 20px;">Click Me</button>
</div>
```

**✅ Depois (RiLiGar Excellence):**

```html
<div style="border: 1px solid #E5E7EB; border-radius: 8px; padding: 16px; background: #FFF;">
    <h3 style="color: #11181C; font-weight: 600; font-size: 14px; margin-bottom: 8px;">User Info</h3>
    <button style="border-radius: 6px; height: 32px; padding: 0 12px; background: #000; color: #FFF; font-size: 12px;">Action</button>
</div>
```

---

_Lembre-se: O design RiLiGar é sobre **restrição**. Se você pode remover uma borda ou uma cor e o app ainda funciona, remova._
