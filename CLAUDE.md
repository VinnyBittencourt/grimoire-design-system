# Grimoire Design System — Contexto para o Claude

## O que é

Biblioteca de componentes React com tema medieval-fantasia (dark wood + gold), inspirada em D&D 3.5. É para uso próprio, mas está disponível publicamente no GitHub. Sem TypeScript — JavaScript puro com JSX.

## Stack

- React 19 + Vite 8 (build em modo library: ES + UMD)
- CSS Modules para estilos de componente
- CSS custom properties (tokens) para o design system
- Storybook 10 para documentação interativa

## Estrutura

```
src/
  components/
    Button/   Button.jsx · Button.module.css · Button.stories.jsx
    Card/     Card.jsx · Card.module.css · Card.stories.jsx
    Input/    Input.jsx · Input.module.css · Input.stories.jsx
    Modal/    Modal.jsx · Modal.module.css · Modal.stories.jsx
    Panel/    Panel.jsx · Panel.module.css · Panel.stories.jsx
  assets/
    fonts/    Cinzel (headings) · Inter (body)
    icons/    equipmentIcons.jsx · escolaIcons.jsx
  tokens/     tokens.css  ← todas as CSS custom properties
  index.js    ← barrel de exports
  style.css   ← importa tokens + estilos globais
.storybook/
  main.js
  preview.js  ← importa src/style.css e define fundo dark como padrão
```

## Componentes existentes

| Componente | Props principais |
|------------|-----------------|
| `Button` | `variant` (gold/ghost/danger), `size` (sm/md/lg), `disabled`, `onClick`, `type` |
| `Card` | `onClick` (ativa hover clicável), `className`, `style` |
| `Input` | `label`, `id`, `value`, `onChange`, `placeholder`, `type`, `disabled` |
| `Modal` | `isOpen`, `onClose`, `title`, `maxWidth` (default `500px`) |
| `Panel` | `className`, `style` — superfície de layout com gradiente wood |

## Design tokens (src/tokens/tokens.css)

- **Cores gold:** `--color-gold-primary` (#c9a84c), `--color-gold-light`, `--color-gold-dark`
- **Cores wood:** `--color-wood-darkest` (#1a1208, bg da página), `--color-wood-dark`, `--color-wood-medium`
- **Texto:** `--color-text-light` (#f0e6c8), `--color-text-muted` (#9b8a6a)
- **Status:** `--color-danger`, `--color-success`
- **Espaçamento:** `--space-1` a `--space-8` (4px a 32px)
- **Tipografia:** `--font-heading` (Cinzel, uppercase), `--font-body` (Inter)
- **Radius:** `--radius-sm`, `--radius-md`, `--radius-lg`

## Padrões do projeto

- Novos componentes vão em `src/components/NomeComponente/` com 3 arquivos: `.jsx`, `.module.css`, `.stories.jsx`
- Adicionar export no `src/index.js` ao criar novo componente
- Stories usam CSF3 com `tags: ['autodocs']` para documentação automática
- Estilos sempre via CSS Modules + tokens CSS; nunca valores hardcoded

## Versionamento

Publicado via GitHub (não no npm registry). Usa git tags + semver.

```bash
npm version patch   # correção de bug  → 0.1.0 → 0.1.1
npm version minor   # novo componente  → 0.1.0 → 0.2.0
npm version major   # breaking change  → 0.1.0 → 1.0.0
git push && git push --tags
```

Após o push, criar um Release no GitHub apontando para a tag com o changelog.

## Scripts

```bash
npm run storybook       # documentação interativa em localhost:6006
npm run build           # build da lib para dist/
npm run dev             # vite dev server
```
