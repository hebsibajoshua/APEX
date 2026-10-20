import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi'
import SocialButtons from './SocialButtons.jsx'

/**
 * UI-only signup form. No backend, no API calls, no real auth logic —
 * onSubmit simply prevents the default page reload.
 */
export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [agreed, setAgreed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="signup-name" className="block text-xs font-medium text-muted mb-2 tracking-wide uppercase">
          Full Name
        </label>
        <div className="relative">
          <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={16} aria-hidden="true" />
          <input
            id="signup-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Jordan Avery"
            className="w-full bg-black/30 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder:text-white/30 outline-none transition-all duration-300 focus:border-primary focus:shadow-glow focus:bg-black/40"
          />
        </div>
      </div>

      <div>
        <label htmlFor="signup-email" className="block text-xs font-medium text-muted mb-2 tracking-wide uppercase">
          Email
        </label>
        <div className="relative">
          <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={16} aria-hidden="true" />
          <input
            id="signup-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
            className="w-full bg-black/30 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder:text-white/30 outline-none transition-all duration-300 focus:border-primary focus:shadow-glow focus:bg-black/40"
          />
        </div>
      </div>

      <div>
        <label htmlFor="signup-password" className="block text-xs font-medium text-muted mb-2 tracking-wide uppercase">
          Password
        </label>
        <div className="relative">
          <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={16} aria-hidden="true" />
          <input
            id="signup-password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            autoComplete="new-password"
            required
            placeholder="••••••••"
            className="w-full bg-black/30 border border-white/10 rounded-xl py-3 pl-11 pr-11 text-sm text-white placeholder:text-white/30 outline-none transition-all duration-300 focus:border-primary focus:shadow-glow focus:bg-black/40"
          />
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-primary transition-colors"
          >
            {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
          </button>
        </div>
      </div>

      <div>
        <label htmlFor="signup-confirm" className="block text-xs font-medium text-muted mb-2 tracking-wide uppercase">
          Confirm Password
        </label>
        <div className="relative">
          <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={16} aria-hidden="true" />
          <input
            id="signup-confirm"
            name="confirmPassword"
            type={showConfirm ? 'text' : 'password'}
            autoComplete="new-password"
            required
            placeholder="••••••••"
            className="w-full bg-black/30 border border-white/10 rounded-xl py-3 pl-11 pr-11 text-sm text-white placeholder:text-white/30 outline-none transition-all duration-300 focus:border-primary focus:shadow-glow focus:bg-black/40"
          />
          <button
            type="button"
            onClick={() => setShowConfirm((s) => !s)}
            aria-label={showConfirm ? 'Hide confirm password' : 'Show confirm password'}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-primary transition-colors"
          >
            {showConfirm ? <FiEyeOff size={16} /> : <FiEye size={16} />}
          </button>
        </div>
      </div>

      <label className="flex items-start gap-2.5 text-sm text-muted cursor-pointer select-none">
        <input
          type="checkbox"
          checked={agreed}
          onChange={() => setAgreed((a) => !a)}
          required
          className="w-4 h-4 mt-0.5 rounded border-white/20 bg-black/30 accent-primary cursor-pointer"
        />
        <span>
          I agree to the{' '}
          <a href="#" className="text-primary hover:text-secondary transition-colors">
            Terms &amp; Conditions
          </a>
        </span>
      </label>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(14,165,233,0.45)' }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-3.5 rounded-xl font-semibold text-sm text-black bg-gradient-to-r from-secondary to-primary shadow-glowBlue transition-shadow"
      >
        Create Account
      </motion.button>

      <div className="flex items-center gap-3 py-2">
        <span className="flex-1 h-px bg-white/10" />
        <span className="text-[11px] tracking-wider uppercase text-white/30 font-mono">Or continue with</span>
        <span className="flex-1 h-px bg-white/10" />
      </div>

      <SocialButtons />
    </form>
  )
}
