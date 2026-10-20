import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'

const badges = [
  { label: 'ATS Score', value: '98%', top: '4%', left: '-16%', delay: 0.7 },
  { label: 'Keywords Matched', value: '24/26', top: '42%', left: '88%', delay: 1.0 },
  { label: 'Format', value: 'Pass', top: '80%', left: '-14%', delay: 1.3 },
]

/**
 * Signature element: a glassmorphic resume card with a sweeping
 * "ATS scan" beam and floating spec-sheet style metric badges —
 * a nod to luxury-automotive HUD clusters, applied to resume scanning.
 */
export default function ResumeMockup() {
  return (
    <div className="relative w-[260px] sm:w-[300px] md:w-[340px] aspect-[3/4] mx-auto">
      {/* glow / smoke behind the card */}
      <div className="absolute -inset-10 bg-primary/20 blur-[80px] rounded-full" aria-hidden="true" />
      <div className="absolute -inset-16 bg-secondary/10 blur-[100px] rounded-full" aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative h-full rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-glowSoft overflow-hidden"
      >
        <div className="p-5 sm:p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary shrink-0" />
            <div className="space-y-1.5 flex-1">
              <div className="h-2.5 w-2/3 rounded-full bg-white/30" />
              <div className="h-2 w-1/3 rounded-full bg-white/15" />
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <div className="h-1.5 w-full rounded-full bg-white/10" />
            <div className="h-1.5 w-5/6 rounded-full bg-white/10" />
            <div className="h-1.5 w-3/4 rounded-full bg-white/10" />
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="space-y-1.5">
                <div className="h-1.5 w-1/2 rounded-full bg-primary/40" />
                <div className="h-1.5 w-full rounded-full bg-white/10" />
                <div className="h-1.5 w-2/3 rounded-full bg-white/10" />
              </div>
            ))}
          </div>
        </div>

        {/* sweeping ATS scan beam */}
        <motion.div
          className="absolute left-0 right-0 h-24 bg-gradient-to-b from-transparent via-primary/25 to-transparent"
          animate={{ y: ['-30%', '430%'] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 ring-1 ring-inset ring-primary/10 rounded-2xl" />
      </motion.div>

      {/* floating ATS metric badges */}
      {badges.map((b, i) => (
        <motion.div
          key={b.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: b.delay, duration: 0.6 }}
          className="absolute hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-black/60 backdrop-blur-md shadow-glow"
          style={{ top: b.top, left: b.left }}
        >
          <motion.span
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }}
          >
            <FiCheckCircle className="text-primary" size={16} />
          </motion.span>
          <div className="leading-tight">
            <p className="text-[10px] uppercase tracking-wider text-muted font-mono">{b.label}</p>
            <p className="text-sm font-semibold text-white">{b.value}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
