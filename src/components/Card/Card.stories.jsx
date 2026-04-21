import Card from './Card'

export default {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
}

export const Default = {
  args: {
    children: 'Conteúdo do card. Pode conter qualquer elemento React.',
  },
}

export const Clickable = {
  args: {
    children: 'Este card é clicável. Passe o mouse para ver o efeito de hover.',
    onClick: () => {},
  },
}

export const WithContent = {
  render: () => (
    <Card>
      <h3 style={{ margin: '0 0 8px', color: 'var(--color-gold-primary)', fontFamily: 'var(--font-heading)' }}>
        Espada Longa +2
      </h3>
      <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
        Dano: 1d8+2 cortante · Peso: 3kg · Valor: 350gp
      </p>
    </Card>
  ),
}
