import styles from './Card.module.css'

export default function Card({ children, onClick, className = '', style }) {
  return (
    <div
      className={[styles.card, onClick ? styles.clickable : '', className].filter(Boolean).join(' ')}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  )
}
