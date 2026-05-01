import { SOCIAL_LINKS, SITE_NAME } from '../utils/constants'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#080e1a] border-t border-[rgba(0,229,255,0.1)]">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-center gap-6 text-center">

        {/* Logo */}
        <span className="font-heading text-2xl font-extrabold">
          <span className="text-cyan text-glow">{SITE_NAME[0]}</span>
          <span className="text-[#e2eaff]">{SITE_NAME.slice(1)}</span>
          <span className="text-amber">.</span>
        </span>

        {/* Tagline */}
        <p className="text-[#5a6e9a] text-sm font-mono">
          Building the web, one component at a time.
        </p>

        {/* Social Links */}
        <div className="flex gap-6">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5a6e9a] text-sm font-mono hover:text-cyan transition-colors duration-200 hover:underline underline-offset-4"
            >
              {s.label}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[rgba(0,229,255,0.08)]" />

        {/* Copyright */}
        <p className="text-[#2e3d5c] text-xs font-mono">
          © {year} <span className="text-cyan">{SITE_NAME} Ahmed</span>. Crafted with ❤️ using React + Tailwind.
        </p>

      </div>
    </footer>
  )
}

export default Footer
