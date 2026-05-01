import { ABOUT_DATA, SOCIAL_LINKS } from '../utils/constants'

function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT — Avatar */}
          <div className="reveal flex justify-center">
            <div className="relative">

              {/* Rotating ring */}
              <div className="absolute inset-0 rounded-3xl border border-cyan/20 animate-spin-slow" />
              <div className="absolute -inset-3 rounded-3xl border border-amber/10 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '12s' }} />

              {/* Avatar box */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl bg-gradient-to-br from-[#101828] to-[#0d1525] border border-[rgba(0,229,255,0.15)] flex items-center justify-center animate-float box-glow">
                <span className="text-9xl">👨‍💻</span>

                {/* Corner accents */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan/60 rounded-tl-sm" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyan/60 rounded-tr-sm" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-cyan/60 rounded-bl-sm" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-cyan/60 rounded-br-sm" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#101828] border border-[rgba(0,229,255,0.2)] rounded-2xl px-4 py-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
                <span className="text-green text-xs font-mono">Open to Work</span>
              </div>

              {/* Experience badge */}
              <div className="absolute -top-4 -left-4 bg-[#101828] border border-[rgba(255,179,71,0.2)] rounded-2xl px-4 py-3">
                <span className="text-amber text-xs font-mono">1+ Year Exp.</span>
              </div>
            </div>
          </div>

          {/* RIGHT — Content */}
          <div className="reveal">
            <p className="text-cyan text-sm font-mono tracking-widest uppercase mb-3">
              // about me
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-[#e2eaff] leading-tight mb-6">
              {ABOUT_DATA.heading}
            </h2>

            {ABOUT_DATA.paragraphs.map((p, i) => (
              <p key={i} className="text-[#5a6e9a] text-base leading-relaxed mb-4">
                {p}
              </p>
            ))}

            {/* Social row */}
            <div className="flex gap-4 mt-6 mb-10">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5a6e9a] text-sm font-mono border border-[rgba(0,229,255,0.1)] px-4 py-2 rounded-lg hover:text-cyan hover:border-cyan/40 transition-all duration-200"
                >
                  {s.label} ↗
                </a>
              ))}
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {ABOUT_DATA.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#101828] border border-[rgba(0,229,255,0.1)] hover:border-cyan/30 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="block font-heading text-3xl font-extrabold gradient-text mb-1">
                    {stat.value}
                  </span>
                  <span className="text-[#5a6e9a] text-sm font-mono">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
