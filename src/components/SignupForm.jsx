import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi'
import SocialButtons from './SocialButtons.jsx'

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' })
  const [feedback, setFeedback] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (feedback.message) setFeedback({ type: '', message: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const { name, email, password, confirmPassword } = form

    if (!name.trim() || !email.trim() || !password || !confirmPassword) {
      setFeedback({ type: 'error', message: 'Please complete all fields before creating your account.' })
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setFeedback({ type: 'error', message: 'Please enter a valid email address.' })
      return
    }

    if (password.length < 8) {
      setFeedback({ type: 'error', message: 'Password must be at least 8 characters long.' })
      return
    }

    if (password !== confirmPassword) {
      setFeedback({ type: 'error', message: 'Passwords do not match. Please try again.' })
      return
    }

    if (!agreed) {
      setFeedback({ type: 'error', message: 'You must accept the terms and conditions to continue.' })
      return
    }

    setIsSubmitting(true)
    setFeedback({ type: '', message: '' })

    window.setTimeout(() => {
      setIsSubmitting(false)
      setFeedback({
        type: 'success',
        message: `Welcome aboard, ${name.trim()}! Your demo account has been created.`
      })
      setForm({ name: '', email: '', password: '', confirmPassword: '' })
      setAgreed(false)
    }, 700)
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
            value={form.name}
            onChange={handleChange}
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
            value={form.email}
            onChange={handleChange}
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
            value={form.password}
            onChange={handleChange}
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
            value={form.confirmPassword}
            onChange={handleChange}
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
          <button
            type="button"
            className="text-primary hover:text-secondary transition-colors"
            onClick={() => setFeedback({ type: 'info', message: 'Terms and conditions are shown in the full product flow.' })}
          >
            Terms &amp; Conditions
          </button>
        </span>
      </label>

      {feedback.message && (
        <div
          aria-live="polite"
          className={`rounded-xl border px-3 py-2 text-sm ${
            feedback.type === 'error'
              ? 'border-red-500/40 bg-red-500/10 text-red-200'
              : feedback.type === 'success'
                ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-200'
                : 'border-blue-500/40 bg-blue-500/10 text-blue-200'
          }`}
        >
          {feedback.message}
        </div>
      )}

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: isSubmitting ? 1 : 1.02, boxShadow: '0 0 30px rgba(14,165,233,0.45)' }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        className="w-full py-3.5 rounded-xl font-semibold text-sm text-black bg-gradient-to-r from-secondary to-primary shadow-glowBlue transition-shadow disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? 'Creating account...' : 'Create Account'}
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
