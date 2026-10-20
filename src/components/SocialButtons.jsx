import { motion } from 'framer-motion'
import { FcGoogle } from 'react-icons/fc'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const providers = [
  { id: 'google', label: 'Google', icon: <FcGoogle size={18} /> },
  { id: 'linkedin', label: 'LinkedIn', icon: <FaLinkedin size={18} className="text-[#0A66C2]" /> },
  { id: 'github', label: 'GitHub', icon: <FaGithub size={18} className="text-white" /> },
]

/**
 * UI-only social auth buttons. No real auth wired up — this is a
 * frontend-only deliverable.
 */
export default function SocialButtons() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {providers.map((p) => (
        <motion.button
          key={p.id}
          type="button"
          whileHover={{ scale: 1.05, borderColor: 'rgba(0,229,195,0.5)', boxShadow: '0 0 20px rgba(0,229,195,0.18)' }}
          whileTap={{ scale: 0.95 }}
          aria-label={`Continue with ${p.label}`}
          className="flex items-center justify-center py-2.5 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
        >
          {p.icon}
        </motion.button>
      ))}
    </div>
  )
}
