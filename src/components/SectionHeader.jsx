import Reveal from './Reveal'
import styles from './SectionHeader.module.css'

export default function SectionHeader({ num, label, title, subtitle }) {
  return (
    <div className={styles.header}>
      <Reveal>
        <div className={styles.label}>
          <span className={styles.num}>{num}</span>
          <span className={styles.line} />
          <span className={styles.text}>{label}</span>
        </div>
      </Reveal>
      <Reveal delay={100}>
        <h2 className={styles.title}>{title}</h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={150}>
          <p className={styles.subtitle}>{subtitle}</p>
        </Reveal>
      )}
    </div>
  )
}
