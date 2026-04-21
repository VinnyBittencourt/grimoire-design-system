# Grimoire Design System

Biblioteca de componentes React com tema medieval-fantasia (dark wood + gold), inspirada em D&D 3.5.

## Instalação

Instale diretamente do GitHub — não está publicado no npm registry.

```bash
# Versão mais recente
npm install github:SEU_USUARIO/grimoire-design-system

# Versão específica
npm install github:SEU_USUARIO/grimoire-design-system#v0.2.0
```

Importe o CSS global uma vez na raiz do seu projeto:

```js
import 'grimoire-design-system/style.css'
```

## Atualizando a versão

Para ver as versões disponíveis, confira as [releases do repositório](https://github.com/SEU_USUARIO/grimoire-design-system/releases).

```bash
# Atualizar para o latest
npm install github:SEU_USUARIO/grimoire-design-system

# Trocar para uma versão específica
npm install github:SEU_USUARIO/grimoire-design-system#v0.3.0
```

> As versões seguem [Semantic Versioning](https://semver.org/lang/pt-BR/): `patch` para correções, `minor` para novos componentes, `major` para mudanças que quebram compatibilidade.

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
