# Apex Resume — Auth UI

A premium, dark-themed Login & Signup page for an ATS Resume Builder platform,
inspired by luxury-automotive landing pages. **Frontend UI only** — no backend,
no API calls, no real authentication logic.

## Stack

- React 18 (Vite)
- Tailwind CSS
- Framer Motion
- React Icons

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (defaults to `http://localhost:5173`).

Build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/
    AuthCard.jsx          # Glassmorphism card, Sign In / Sign Up tabs
    LoginForm.jsx          # Email, password, remember me, forgot password
    SignupForm.jsx         # Full name, email, password, confirm, terms
    SocialButtons.jsx      # Google / LinkedIn / GitHub (UI only)
    HeroSection.jsx        # Logo, tagline, features list, animations
    ResumeMockup.jsx        # Signature animated "ATS scan" illustration
    ParticleBackground.jsx  # Ambient floating particles + smoke gradient
  pages/
    AuthPage.jsx           # Split-screen layout (60% hero / 40% auth card)
  App.jsx
  main.jsx
  index.css
tailwind.config.js
vite.config.js
```

## Design tokens

| Token              | Value                     |
|---------------------|---------------------------|
| Background          | `#050505`                 |
| Primary accent       | `#00E5C3`                 |
| Secondary accent     | `#0EA5E9`                 |
| Card background      | `rgba(255,255,255,0.05)`  |
| Text primary         | White                     |
| Text secondary       | `#B0B0B0`                 |
| Display font          | Outfit                    |
| Body font            | Inter                     |
| Mono / label font     | JetBrains Mono             |

## Notes

- All forms call `e.preventDefault()` only — no requests are sent anywhere.
- Social buttons are UI-only with no click handlers wired to real providers.
- Fully responsive: hero stacks above the auth card on mobile/tablet.
- Respects `prefers-reduced-motion` and includes visible keyboard focus states.
