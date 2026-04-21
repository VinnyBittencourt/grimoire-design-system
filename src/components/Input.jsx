import styles from './Input.module.css'

export default function Input({ label, id, value, onChange, placeholder, type = 'text', disabled, className = '' }) {
  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={[styles.input, className].filter(Boolean).join(' ')}
      />
    </div>
  )
}
