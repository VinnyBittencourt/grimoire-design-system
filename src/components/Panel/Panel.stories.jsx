import Panel from './Panel'

export default {
  title: 'Components/Panel',
  component: Panel,
  tags: ['autodocs'],
}

export const Default = {
  args: {
    children: 'Conteúdo dentro do painel. Use Panel como superfície de layout.',
  },
}

export const WithContent = {
  render: () => (
    <Panel>
      <h2 style={{ margin: '0 0 12px', color: 'var(--color-gold-primary)', fontFamily: 'var(--font-heading)' }}>
        Ficha do Personagem
      </h2>
      <p style={{ margin: '0 0 8px', color: 'var(--color-text-light)' }}>
        <strong>Nome:</strong> Theodoric, o Cinzento
      </p>
      <p style={{ margin: '0 0 8px', color: 'var(--color-text-light)' }}>
        <strong>Classe:</strong> Mago · Nível 7
      </p>
      <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
        Especialização em transmutação e ilusão.
      </p>
    </Panel>
  ),
}

export const Nested = {
  render: () => (
    <Panel>
      <p style={{ color: 'var(--color-text-muted)', margin: '0 0 12px' }}>Painel externo</p>
      <Panel>
        <p style={{ color: 'var(--color-text-light)', margin: 0 }}>Painel interno aninhado</p>
      </Panel>
    </Panel>
  ),
}
