import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <span className={styles.logoAccent}>AM</span>
          <span className={styles.logoDot}>.</span>
        </div>
        <div className={styles.copy}>
          © 2025 <span>Amir Mohammad Marwi</span>. All rights reserved.
        </div>
        <a href="#hero" className={styles.top}
          onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          ↑ Top
        </a>
      </div>
    </footer>
  )
}
