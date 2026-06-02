import { useState, useEffect } from 'react'
import styles from './Nav.module.css'

const links = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = links.map(l => document.getElementById(l.toLowerCase()))
      sections.forEach(sec => {
        if (sec && window.scrollY >= sec.offsetTop - 200) setActive(sec.id)
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (e, id) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <a href="#hero" className={styles.logo} onClick={e => handleLink(e, 'hero')}>
          <span className={styles.logoAccent}>AM</span>
          <span className={styles.logoDot}>.</span>
        </a>

        <ul className={styles.links}>
          {links.map(l => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className={`${styles.link} ${active === l.toLowerCase() ? styles.active : ''}`}
                onClick={e => handleLink(e, l.toLowerCase())}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <a href="mailto:amirmuhammadmarvi@gmail.com" className={styles.cta}>
          Hire Me
        </a>

        <button className={`${styles.burger} ${open ? styles.open : ''}`} onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      <div className={`${styles.mobile} ${open ? styles.mobileOpen : ''}`}>
        {links.map((l, i) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className={styles.mobileLink}
            style={{ transitionDelay: `${i * 50}ms` }}
            onClick={e => handleLink(e, l.toLowerCase())}
          >
            <span className={styles.mobileNum}>0{i + 1}</span>
            {l}
          </a>
        ))}
      </div>
    </>
  )
}
