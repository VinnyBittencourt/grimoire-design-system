import styles from './Button.module.css'

export default function Button({ children, variant = 'gold', size = 'md', onClick, disabled, type = 'button', className = '' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={[styles.btn, styles[variant], styles[size], className].filter(Boolean).join(' ')}
    >
      {children}
    </button>
  )
}
