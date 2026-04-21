import styles from './Panel.module.css'

export default function Panel({ children, className = '', style }) {
  return (
    <div className={[styles.panel, className].filter(Boolean).join(' ')} style={style}>
      {children}
    </div>
  )
}
