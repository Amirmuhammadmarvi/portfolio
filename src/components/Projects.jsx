import { useState } from 'react'
import { data } from '../data'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'
import styles from './Projects.module.css'

export default function Projects() {
  const [expanded, setExpanded] = useState(null)

  return (
    <section id="projects" className={styles.section}>
      <SectionHeader num="03" label="Work" title="Featured Projects" subtitle="Hands-on security projects demonstrating offensive and defensive capabilities." />

      <div className={styles.grid}>
        {data.projects.map((p, i) => (
          <Reveal key={p.id} delay={i * 100}>
            <div className={`${styles.card} ${expanded === i ? styles.expanded : ''}`}>
              <div className={styles.cardTop}>
                <div className={styles.cardNum}>{p.id}</div>
                <div className={styles.cardMeta}>
                  <h3 className={styles.cardName}>{p.name}</h3>
                  <p className={styles.cardShort}>{p.short}</p>
                </div>
              </div>

              <p className={styles.cardDesc}>{p.description}</p>

              <div className={`${styles.highlights} ${expanded === i ? styles.highlightsOpen : ''}`}>
                {p.highlights.map((h, hi) => (
                  <div key={hi} className={styles.highlight}>
                    <span className={styles.highlightArrow}>▸</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className={styles.cardFooter}>
                <div className={styles.stack}>
                  {p.stack.map(s => (
                    <span key={s} className={styles.stackTag}>{s}</span>
                  ))}
                </div>
                <div className={styles.cardActions}>
                  <button
                    className={styles.toggleBtn}
                    onClick={() => setExpanded(expanded === i ? null : i)}
                  >
                    {expanded === i ? 'Less' : 'Details'}
                  </button>
                  <a href={p.link} target="_blank" rel="noreferrer" className={styles.linkBtn}>
                    GitHub
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
