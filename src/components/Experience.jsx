import { data } from '../data'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeader num="04" label="Career" title="Experience" />

        <div className={styles.timeline}>
          {data.experience.map((exp, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className={styles.item}>
                <div className={styles.dot} />
                <div className={styles.content}>
                  <div className={styles.header}>
                    <div>
                      <h3 className={styles.role}>{exp.role}</h3>
                      <div className={styles.company}>
                        <span className={styles.at}>@</span>
                        {exp.company}
                        <span className={styles.loc}>— {exp.location}</span>
                      </div>
                    </div>
                    <span className={styles.period}>{exp.period}</span>
                  </div>
                  <ul className={styles.bullets}>
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className={styles.bullet}>
                        <span className={styles.bulletMark}>//</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
