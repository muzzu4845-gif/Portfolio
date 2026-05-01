import { useState } from 'react'
import useScroll from '../hooks/useScroll'
import Button from './Button'
import { NAV_LINKS, SITE_NAME } from '../utils/constants'

function Navbar() {
  const scrollY = useScroll()
  const isScrolled = scrollY > 50
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[rgba(5,8,17,0.85)] backdrop-blur-xl border-b border-[rgba(0,229,255,0.1)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <span className="font-heading text-2xl font-extrabold tracking-tight">
          <span className="text-cyan text-glow">{SITE_NAME[0]}</span>
          <span className="text-[#e2eaff]">{SITE_NAME.slice(1)}</span>
          <span className="text-amber">.</span>
        </span>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleNav(link.href)}
                className="text-[#5a6e9a] text-sm font-mono uppercase tracking-widest hover:text-cyan transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Button
            size="sm"
            onClick={() => handleNav('#contact')}
          >
            Hire Me ✦
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-[2px] bg-cyan transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-[2px] bg-cyan transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-cyan transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[rgba(5,8,17,0.95)] backdrop-blur-xl border-t border-[rgba(0,229,255,0.1)] px-6 py-6 flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className="text-[#5a6e9a] text-sm font-mono uppercase tracking-widest hover:text-cyan transition-colors duration-200 text-left cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <Button size="sm" onClick={() => handleNav('#contact')}>
            Hire Me ✦
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar