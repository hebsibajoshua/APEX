import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LoginForm from './LoginForm.jsx'
import SignupForm from './SignupForm.jsx'

export default function AuthCard() {
  const [activeTab, setActiveTab] = useState('signin')

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-[450px] mx-auto rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-2xl shadow-glowSoft p-6 sm:p-8"
    >
      <div className="mb-6">
        <h2 className="font-display text-xl text-white mb-1">
          {activeTab === 'signin' ? 'Welcome back' : 'Create your account'}
        </h2>
        <p className="text-sm text-muted">
          {activeTab === 'signin'
            ? 'Sign in to continue building your resume.'
            : 'Start building interview-ready resumes today.'}
        </p>
      </div>

      {/* Tabs */}
      <div className="relative grid grid-cols-2 mb-7 rounded-full bg-black/30 border border-white/10 p-1">
        <motion.div
          className="absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-full bg-gradient-to-r from-primary to-secondary"
          animate={{ x: activeTab === 'signin' ? '0%' : '100%' }}
          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
        />
        <button
          type="button"
          onClick={() => setActiveTab('signin')}
          aria-pressed={activeTab === 'signin'}
          className={`relative z-10 py-2.5 text-sm font-medium rounded-full transition-colors ${
            activeTab === 'signin' ? 'text-black' : 'text-white/70 hover:text-white'
          }`}
        >
          Sign In
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('signup')}
          aria-pressed={activeTab === 'signup'}
          className={`relative z-10 py-2.5 text-sm font-medium rounded-full transition-colors ${
            activeTab === 'signup' ? 'text-black' : 'text-white/70 hover:text-white'
          }`}
        >
          Sign Up
        </button>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'signin' ? (
          <motion.div
            key="signin"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <LoginForm />
          </motion.div>
        ) : (
          <motion.div
            key="signup"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <SignupForm />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
