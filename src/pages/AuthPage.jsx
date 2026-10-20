import HeroSection from '../components/HeroSection.jsx'
import AuthCard from '../components/AuthCard.jsx'

/**
 * Split-screen auth layout:
 * - Left 60%: cinematic hero (logo, tagline, features, animated resume mockup)
 * - Right 40%: glassmorphism Sign In / Sign Up card
 * Stacks vertically on mobile (hero on top, form below).
 */
export default function AuthPage() {
  return (
    <div className="min-h-screen w-full bg-base text-white flex flex-col lg:flex-row">
      <div className="w-full lg:w-[60%]">
        <HeroSection />
      </div>

      <div className="relative w-full lg:w-[40%] flex items-center justify-center px-4 sm:px-8 py-12 lg:py-10">
        <div
          className="absolute inset-0 lg:hidden"
          style={{ background: 'radial-gradient(ellipse at center, rgba(0,229,195,0.06), transparent 60%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 w-full">
          <AuthCard />
        </div>
      </div>
    </div>
  )
}
