import { useMemo } from 'react'
import { motion } from 'framer-motion'

/**
 * Ambient floating particles + soft smoke gradient blobs.
 * Purely decorative, sits behind the hero content.
 */
export default function ParticleBackground({ count = 26 }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        size: Math.random() * 2.6 + 1,
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: Math.random() * 8 + 10,
        delay: Math.random() * 6,
        color: i % 3 === 0 ? '#00E5C3' : i % 3 === 1 ? '#0EA5E9' : '#ffffff',
      })),
    [count]
  )

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* soft smoke / gradient blobs */}
      <div className="absolute -top-32 -left-20 w-[420px] h-[420px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[480px] h-[480px] rounded-full bg-secondary/10 blur-[130px]" />

      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 5}px ${p.color}`,
          }}
          animate={{
            y: [0, -28, 0],
            opacity: [0.15, 0.75, 0.15],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
