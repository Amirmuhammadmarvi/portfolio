import { useState } from 'react'
import { data } from '../data'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'
import styles from './Skills.module.css'

export default function Skills() {
  const [active, setActive] = useState(0)

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeader num="02" label="Expertise" title="Technical Skills" />

        <div className={styles.layout}>
          <Reveal className={styles.tabsReveal}>
            <div className={styles.tabs}>
              {data.skills.map((g, i) => (
                <button
                  key={g.category}
                  className={`${styles.tab} ${i === active ? styles.tabActive : ''}`}
                  onClick={() => setActive(i)}
                >
                  <span className={styles.tabIcon}>{g.icon}</span>
                  <span>{g.category}</span>
                  {i === active && <span className={styles.tabIndicator} />}
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100} className={styles.panelReveal}>
            <div className={styles.panel}>
              <div className={styles.panelHeader}>
                <span className={styles.panelIcon}>{data.skills[active].icon}</span>
                <span className={styles.panelTitle}>{data.skills[active].category}</span>
                <span className={styles.panelCount}>{data.skills[active].items.length} skills</span>
              </div>
              <div className={styles.tags}>
                {data.skills[active].items.map((item, i) => (
                  <span
                    key={item}
                    className={styles.tag}
                    style={{ animationDelay: `${i * 40}ms` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
