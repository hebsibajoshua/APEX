import { motion } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'
import ParticleBackground from './ParticleBackground.jsx'
import ResumeMockup from './ResumeMockup.jsx'

const features = [
  'ATS Score Optimization',
  'Professional Templates',
  'AI Resume Suggestions',
  'One-Click PDF Export',
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function HeroSection() {
  return (
    <div
      className="relative w-full min-h-[640px] lg:min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at top left, rgba(0,229,195,0.08), transparent 50%), radial-gradient(ellipse at bottom right, rgba(14,165,233,0.10), transparent 50%), #050505',
      }}
    >
      <ParticleBackground />

      <div className="relative z-10 w-full grid lg:grid-cols-2 gap-10 lg:gap-12 items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-xl">
          {/* logo */}
          <motion.div variants={item} className="flex items-center gap-2.5 mb-7">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-glow">
              <span className="font-display font-bold text-base text-black">A</span>
            </div>
            <span className="font-display tracking-[0.22em] text-sm text-white/90">APEX RESUME</span>
          </motion.div>

          {/* eyebrow */}
          <motion.p variants={item} className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary/80 mb-4">
            Precision Engineered · ATS Calibrated
          </motion.p>

          {/* headline */}
          <motion.h1
            variants={item}
            className="font-display text-4xl sm:text-5xl lg:text-[3.3rem] leading-[1.08] font-semibold mb-6"
          >
            Build{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ATS-Friendly
            </span>{' '}
            Resumes That Get Interviews
          </motion.h1>

          {/* subtitle */}
          <motion.p variants={item} className="text-muted text-base sm:text-lg leading-relaxed mb-8 max-w-md">
            Create professional resumes, optimize for ATS systems, and land your dream job faster.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-3 mb-8">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary to-secondary px-5 py-3 text-sm font-semibold text-black shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Start for Free
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white/90 transition-colors hover:border-primary/40 hover:bg-white/[0.06]"
            >
              View Demo
            </button>
          </motion.div>

          <motion.div variants={item} className="mb-8 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-sm">
            <div className="flex -space-x-2">
              {['JD', 'AM', 'SK'].map((initial) => (
                <div
                  key={initial}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-black/40 bg-gradient-to-br from-primary to-secondary text-[10px] font-bold text-black"
                >
                  {initial}
                </div>
              ))}
            </div>
            <p className="text-sm text-white/80">
              Trusted by <span className="font-semibold text-white">12k+</span> job seekers
            </p>
          </motion.div>

          {/* features */}
          <motion.ul variants={item} className="space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm sm:text-base text-white/90">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/15 border border-primary/30 shrink-0">
                  <FiCheck className="text-primary" size={12} />
                </span>
                {f}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.9 }}
        >
          <ResumeMockup />
        </motion.div>
      </div>
    </div>
  )
}
