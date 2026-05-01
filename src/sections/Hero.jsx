import { useState, useEffect } from 'react'
import Button from '../components/Button'
import { HERO_DATA, SOCIAL_LINKS } from '../utils/constants'

const roles = [
  'Full Stack Developer',
  'MERN Stack Developer',
  'React.js Developer',
  'Node.js Developer',
]

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1))
      }, 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1))
      }, 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  const handleScroll = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber/5 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-rose/5 rounded-full blur-3xl animate-pulse delay-500" />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-cyan/40 rounded-full animate-float"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${4 + i}s`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[rgba(0,229,255,0.08)] border border-[rgba(0,229,255,0.2)] rounded-full px-4 py-2 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
          <span className="text-cyan text-xs font-mono tracking-widest uppercase">
            Available for Work
          </span>
        </div>

        {/* Main heading */}
        <h1 className="font-heading font-extrabold leading-tight tracking-tight mb-4 animate-slide-up">
          <span className="block text-[#5a6e9a] text-2xl md:text-3xl font-mono mb-2">
            {HERO_DATA.greeting}
          </span>
          <span className="block text-5xl md:text-7xl lg:text-8xl gradient-text">
            {HERO_DATA.name}
          </span>
        </h1>

        {/* Typing role */}
        <div className="flex items-center justify-center gap-2 mb-6 h-12">
          <span className="text-[#5a6e9a] text-xl md:text-2xl font-mono">&lt;</span>
          <span className="text-amber text-xl md:text-2xl font-mono font-semibold min-w-[280px] text-left">
            {displayed}
            <span className="text-cyan cursor-blink">|</span>
          </span>
          <span className="text-[#5a6e9a] text-xl md:text-2xl font-mono">/&gt;</span>
        </div>

        {/* Tagline */}
        <p className="text-[#5a6e9a] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in">
          {HERO_DATA.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <Button size="lg" onClick={() => handleScroll('#projects')}>
            View My Work ↓
          </Button>
          <Button size="lg" variant="outline" onClick={() => handleScroll('#contact')}>
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5a6e9a] text-sm font-mono hover:text-cyan transition-all duration-200 hover:underline underline-offset-4"
            >
              {s.label} ↗
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[#2e3d5c] text-xs font-mono tracking-widest uppercase">scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-cyan/40 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  )
}

export default Hero
