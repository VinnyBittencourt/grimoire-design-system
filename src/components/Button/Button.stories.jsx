import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['gold', 'ghost', 'danger'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
}

export const Gold = {
  args: { children: 'Confirmar Ação', variant: 'gold', size: 'md' },
}

export const Ghost = {
  args: { children: 'Cancelar', variant: 'ghost', size: 'md' },
}

export const Danger = {
  args: { children: 'Excluir Personagem', variant: 'danger', size: 'md' },
}

export const Small = {
  args: { children: 'Pequeno', variant: 'gold', size: 'sm' },
}

export const Large = {
  args: { children: 'Grande', variant: 'gold', size: 'lg' },
}

export const Disabled = {
  args: { children: 'Desabilitado', variant: 'gold', disabled: true },
}
