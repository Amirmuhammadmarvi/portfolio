import { data } from '../data'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'
import styles from './Education.module.css'

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <SectionHeader num="05" label="Background" title="Education" />

      <div className={styles.eduGrid}>
        {data.education.map((e, i) => (
          <Reveal key={i} delay={i * 100}>
            <div className={styles.eduCard}>
              <div className={styles.eduPeriod}>{e.period}</div>
              <h3 className={styles.eduDegree}>{e.degree}</h3>
              <div className={styles.eduSchool}>{e.school}</div>
              <div className={styles.eduLocation}>📍 {e.location}</div>
              <p className={styles.eduNote}>{e.note}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <h3 className={styles.subTitle}>Certifications & Self-Learning</h3>
      </Reveal>

      <div className={styles.certGrid}>
        {data.certifications.map((c, i) => (
          <Reveal key={i} delay={i * 60}>
            <div className={styles.certCard}>
              <span className={styles.certIcon}>{c.icon}</span>
              <div>
                <div className={styles.certName}>{c.name}</div>
                <div className={styles.certSub}>{c.sub}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
