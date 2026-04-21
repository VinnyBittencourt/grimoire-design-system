import { useEffect } from 'react'
import styles from './Modal.module.css'

export default function Modal({ isOpen, onClose, title, children, maxWidth = '500px' }) {
  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.content}
        style={{ maxWidth }}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <div className={styles.header}>
            <h2 className={styles.title}>{title}</h2>
            <button className={styles.close} onClick={onClose} aria-label="Fechar">×</button>
          </div>
        )}
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  )
}
