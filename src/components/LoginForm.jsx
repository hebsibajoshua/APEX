import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi'
import SocialButtons from './SocialButtons.jsx'

/**
 * UI-only login form. No backend, no API calls, no real auth logic —
 * onSubmit simply prevents the default page reload.
 */
export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [remember, setRemember] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
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
        <a href="#" className="text-primary hover:text-secondary transition-colors">
          Forgot password?
        </a>
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0,229,195,0.45)' }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-3.5 rounded-xl font-semibold text-sm text-black bg-gradient-to-r from-primary to-secondary shadow-glow transition-shadow"
      >
        Login to Dashboard
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
