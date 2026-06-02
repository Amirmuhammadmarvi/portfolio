import { useEffect, useRef, useState } from 'react'
import { data } from '../data'
import styles from './Hero.module.css'

function GlitchText({ text }) {
  return (
    <span className={styles.glitch} data-text={text}>
      {text}
    </span>
  )
}

function TypedRole() {
  const roles = ['Security Enthusiast', 'Penetration Tester', 'Network Engineer', 'Ethical Hacker']
  const [idx, setIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const target = roles[idx]
    let timeout
    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60)
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2500)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setIdx((idx + 1) % roles.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, idx])

  return (
    <span className={styles.typed}>
      <span className={styles.prompt}>root@fsociety:~$ </span>
      {displayed}<span className={styles.cursor}>█</span>
    </span>
  )
}

// Matrix rain canvas
function MatrixCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let w, h, cols, drops

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?'

    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
      cols = Math.floor(w / 20)
      drops = Array(cols).fill(1).map(() => Math.random() * -50)
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, w, h)

      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)]
        const x = i * 20

        // Lead char — bright white-green
        ctx.fillStyle = '#ccffcc'
        ctx.font = '13px "Share Tech Mono"'
        ctx.fillText(char, x, y * 20)

        // Trail
        ctx.fillStyle = Math.random() > 0.95 ? '#00ff41' : '#003300'
        ctx.fillText(chars[Math.floor(Math.random() * chars.length)], x, (y - 1) * 20)

        if (y * 20 > h && Math.random() > 0.975) drops[i] = 0
        drops[i] += 0.5
      })

      animId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return <canvas ref={canvasRef} className={styles.matrix} />
}

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <MatrixCanvas />
      <div className={styles.overlay} />

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          <span>// SYSTEM ONLINE — AVAILABLE FOR OPPORTUNITIES</span>
        </div>

        <div className={styles.nameBlock}>
          <span className={styles.nameLabel}>{'> IDENTIFIED:'}</span>
          <h1 className={styles.name}>
            <span className={styles.nameFirst}>{data.name.first}</span>
            <GlitchText text={data.name.last} />
          </h1>
        </div>

        <p className={styles.role}>
          <TypedRole />
        </p>

        <p className={styles.summary}>{data.summary}</p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.btnPrimary}
            onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
            <span className={styles.btnPrefix}>./</span>view_projects.sh
          </a>
          <a href="mailto:amirmuhammadmarvi@gmail.com" className={styles.btnSecondary}>
            <span className={styles.btnPrefix}>ssh</span> get_in_touch
          </a>
        </div>

        <div className={styles.stats}>
          {data.stats.map(s => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statVal}>{s.value}</span>
              <span className={styles.statLabel}>// {s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.scroll}>
        <div className={styles.scrollLine} />
        <span className={styles.scrollText}>scroll</span>
      </div>
    </section>
  )
}
