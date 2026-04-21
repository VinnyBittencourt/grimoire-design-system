import { useState } from 'react'
import Input from './Input'

export default {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['text', 'password', 'email', 'number'] },
    disabled: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
}

export const Default = {
  args: {
    label: 'Nome do Personagem',
    id: 'character-name',
    placeholder: 'Ex: Aragorn',
  },
}

export const WithValue = {
  args: {
    label: 'Classe',
    id: 'class',
    value: 'Guerreiro',
    placeholder: 'Classe do personagem',
  },
}

export const Password = {
  args: {
    label: 'Senha',
    id: 'password',
    type: 'password',
    placeholder: '••••••••',
  },
}

export const Disabled = {
  args: {
    label: 'Raça (bloqueado)',
    id: 'race',
    value: 'Humano',
    disabled: true,
  },
}

export const WithoutLabel = {
  args: {
    id: 'search',
    placeholder: 'Buscar magia...',
  },
}

export const Interactive = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <Input
        label="Teste interativo"
        id="interactive"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Digite algo..."
      />
    )
  },
}
