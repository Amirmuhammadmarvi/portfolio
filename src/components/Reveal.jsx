import { useInView } from '../hooks/useInView'
import styles from './Reveal.module.css'

export default function Reveal({ children, delay = 0, direction = 'up', className = '' }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${styles[direction]} ${inView ? styles.visible : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
