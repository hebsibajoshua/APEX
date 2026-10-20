import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi'
import SocialButtons from './SocialButtons.jsx'

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [remember, setRemember] = useState(false)
  const [form, setForm] = useState({ email: '', password: '' })
  const [feedback, setFeedback] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (feedback.message) setFeedback({ type: '', message: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const email = form.email.trim()
    const password = form.password

    if (!email || !password) {
      setFeedback({ type: 'error', message: 'Please enter both your email and password.' })
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFeedback({ type: 'error', message: 'Please enter a valid email address.' })
      return
    }

    if (password.length < 8) {
      setFeedback({ type: 'error', message: 'Password must be at least 8 characters long.' })
      return
    }

    setIsSubmitting(true)
    setFeedback({ type: '', message: '' })

    window.setTimeout(() => {
      setIsSubmitting(false)
      setFeedback({
        type: 'success',
        message: remember
          ? 'Signed in successfully. Your device will remember this session.'
          : 'Signed in successfully. Demo mode is active.'
      })
      setForm({ email: '', password: '' })
    }, 700)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="login-email" className="block text-xs font-medium text-muted mb-2 tracking-wide uppercase">
          Email Address
        </label>
        <div className="relative">
          <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={16} aria-hidden="true" />
          <input
            id="login-email"
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
        <label htmlFor="login-password" className="block text-xs font-medium text-muted mb-2 tracking-wide uppercase">
          Password
        </label>
        <div className="relative">
          <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={16} aria-hidden="true" />
          <input
            id="login-password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
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

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-muted cursor-pointer select-none">
          <input
            type="checkbox"
            checked={remember}
            onChange={() => setRemember((r) => !r)}
            className="w-4 h-4 rounded border-white/20 bg-black/30 accent-primary cursor-pointer"
          />
          Remember me
        </label>
        <button
          type="button"
          className="text-primary hover:text-secondary transition-colors"
          onClick={() => setFeedback({ type: 'info', message: 'Password reset is available in the real app backend.' })}
        >
          Forgot password?
        </button>
      </div>

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
        whileHover={{ scale: isSubmitting ? 1 : 1.02, boxShadow: '0 0 30px rgba(0,229,195,0.45)' }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        className="w-full py-3.5 rounded-xl font-semibold text-sm text-black bg-gradient-to-r from-primary to-secondary shadow-glow transition-shadow disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? 'Signing in...' : 'Login to Dashboard'}
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
