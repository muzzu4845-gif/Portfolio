import { EXPERIENCE_DATA } from '../utils/constants'

function Experience() {
  return (
    <section id="experience" className="relative py-32 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-[#080e1a]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-cyan text-sm font-mono tracking-widest uppercase mb-3">
            // my journey
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-[#e2eaff] mb-4">
            Experience
          </h2>
          <p className="text-[#5a6e9a] text-lg max-w-xl mx-auto">
            Where I've worked and what I've built
          </p>
        </div>

        {/* Timeline */}
        <div className="relative reveal">

          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/40 via-amber/20 to-transparent" />

          {EXPERIENCE_DATA.map((exp, i) => (
            <div key={i} className="relative pl-16 mb-10">

              {/* Dot */}
              <div className="absolute left-[18px] top-6 w-4 h-4 rounded-full bg-cyan border-4 border-[#080e1a] shadow-[0_0_12px_rgba(0,229,255,0.6)]" />

              {/* Card */}
              <div className="bg-[#101828] border border-[rgba(0,229,255,0.1)] hover:border-cyan/30 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 group">

                {/* Top row */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <h3 className="font-heading text-xl font-bold text-[#e2eaff] group-hover:text-cyan transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <span className="bg-amber/10 text-amber text-xs font-mono px-3 py-1 rounded-full border border-amber/20 whitespace-nowrap">
                    {exp.date}
                  </span>
                </div>

                {/* Company */}
                <p className="text-cyan/70 text-sm font-mono mb-4">
                  📍 {exp.company}
                </p>

                {/* Description */}
                <p className="text-[#5a6e9a] text-sm leading-relaxed">
                  {exp.description}
                </p>

                {/* Tech used */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'].map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#162035] text-[#5a6e9a] text-xs font-mono px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Education */}
          <div className="relative pl-16">
            <div className="absolute left-[18px] top-6 w-4 h-4 rounded-full bg-amber border-4 border-[#080e1a] shadow-[0_0_12px_rgba(255,179,71,0.6)]" />

            <div className="bg-[#101828] border border-[rgba(255,179,71,0.1)] hover:border-amber/30 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <h3 className="font-heading text-xl font-bold text-[#e2eaff] group-hover:text-amber transition-colors duration-300">
                  B.E — Computer Science
                </h3>
                <span className="bg-cyan/10 text-cyan text-xs font-mono px-3 py-1 rounded-full border border-cyan/20 whitespace-nowrap">
                  2021 – 2024
                </span>
              </div>
              <p className="text-amber/70 text-sm font-mono mb-4">
                📍 ISLAMIAH (Autonomous) College, Tamil Nadu
              </p>
              <p className="text-[#5a6e9a] text-sm leading-relaxed">
                Completed Bachelor of Computer Science. Built strong foundations in DSA, OOP, DBMS, and Web Technologies.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience