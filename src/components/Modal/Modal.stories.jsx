import { useState } from 'react'
import Modal from './Modal'
import Button from '../Button/Button'

export default {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    onClose: { action: 'closed' },
    maxWidth: { control: 'text' },
  },
}

export const Default = {
  args: {
    isOpen: true,
    title: 'Confirmação',
    children: 'Tem certeza que deseja abandonar a masmorra? Todo o progresso será perdido.',
    maxWidth: '500px',
  },
}

export const WithoutTitle = {
  args: {
    isOpen: true,
    children: 'Modal sem título. Útil para conteúdo personalizado.',
  },
}

export const Narrow = {
  args: {
    isOpen: true,
    title: 'Alerta',
    children: 'Item coletado: Poção de Cura.',
    maxWidth: '360px',
  },
}

export const Interactive = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Abrir Modal</Button>
        <Modal isOpen={open} onClose={() => setOpen(false)} title="Inventário">
          <p style={{ color: 'var(--color-text-light)', margin: 0 }}>
            Conteúdo do modal. Pressione Esc ou clique fora para fechar.
          </p>
        </Modal>
      </div>
    )
  },
}
