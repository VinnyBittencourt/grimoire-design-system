# Grimoire Design System

Biblioteca de componentes React com tema medieval-fantasia (dark wood + gold), inspirada em D&D 3.5.

## Instalação

```bash
npm install github:SEU_USUARIO/grimoire-design-system
```

Importe o CSS global uma vez na raiz do seu projeto:

```js
import 'grimoire-design-system/style.css'
```

## Uso

```jsx
import { Button, Card, Input, Modal, Panel } from 'grimoire-design-system'

function App() {
  return (
    <Panel>
      <Card>
        <Input label="Nome do Personagem" id="name" placeholder="Ex: Aragorn" />
        <Button variant="gold" onClick={() => console.log('salvo')}>
          Salvar
        </Button>
      </Card>
    </Panel>
  )
}
```

## Componentes

| Componente | Props principais |
|------------|-----------------|
| `Button` | `variant` (gold / ghost / danger), `size` (sm / md / lg), `disabled` |
| `Card` | `onClick` (torna clicável com hover), `style`, `className` |
| `Input` | `label`, `id`, `value`, `onChange`, `placeholder`, `type`, `disabled` |
| `Modal` | `isOpen`, `onClose`, `title`, `maxWidth` |
| `Panel` | `style`, `className` |

## Documentação interativa (Storybook)

Clone o repositório e rode:

```bash
npm install
npm run storybook
```

Acesse `http://localhost:6006` para visualizar e interagir com cada componente.
