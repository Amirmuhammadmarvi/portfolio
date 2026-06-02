import { data } from '../data'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'
import styles from './About.module.css'

const contacts = [
  { icon: '📍', label: 'Location', value: data.location },
  { icon: '📧', label: 'Email', value: data.email, href: `mailto:${data.email}` },
  { icon: '📞', label: 'Phone', value: data.phone, href: `tel:${data.phone}` },
  { icon: '🐙', label: 'GitHub', value: 'amirmuhammadmarvi', href: data.github },
  { icon: '💼', label: 'LinkedIn', value: 'amir-mohammad-marwi', href: data.linkedin },
]

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <SectionHeader num="01" label="About Me" title="Who I Am" />

      <div className={styles.grid}>
        <div className={styles.left}>
          <Reveal>
            <p className={styles.p}>
              I'm a <strong>security-minded engineer</strong> with practical experience in network infrastructure, penetration testing, and vulnerability assessment. I enjoy finding weaknesses before attackers do, automating security controls, and building resilient systems by design.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className={styles.p}>
              Currently pursuing a <strong>Bachelor's in Data Analysis</strong> at the University of Messina while actively developing my cybersecurity portfolio with a focus on <strong>web application security</strong> and offensive security methodology.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <p className={styles.p}>
              I bring real-world networking experience from deploying and securing MikroTik and Cisco infrastructure in production environments, combined with hands-on offensive skills developed through personal labs and projects.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className={styles.langRow}>
              {data.languages.map(l => (
                <div key={l.name} className={styles.langCard}>
                  <span className={styles.langFlag}>{l.flag}</span>
                  <span className={styles.langName}>{l.name}</span>
                  <span className={styles.langLevel}>{l.level}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className={styles.right}>
          {contacts.map((c, i) => (
            <Reveal key={c.label} delay={i * 60}>
              <div className={styles.card}>
                <span className={styles.cardIcon}>{c.icon}</span>
                <div>
                  <div className={styles.cardLabel}>{c.label}</div>
                  {c.href
                    ? <a href={c.href} className={styles.cardValue} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{c.value}</a>
                    : <span className={styles.cardValue}>{c.value}</span>
                  }
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
