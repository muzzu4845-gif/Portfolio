const colorMap = {
  cyan:  { border: 'hover:border-cyan/40',  tag: 'bg-cyan/10 text-cyan',   glow: 'hover:shadow-[0_0_40px_rgba(0,229,255,0.15)]'  },
  amber: { border: 'hover:border-amber/40', tag: 'bg-amber/10 text-amber',  glow: 'hover:shadow-[0_0_40px_rgba(255,179,71,0.15)]'  },
  rose:  { border: 'hover:border-rose/40',  tag: 'bg-rose/10 text-rose',    glow: 'hover:shadow-[0_0_40px_rgba(255,77,109,0.15)]'   },
  green: { border: 'hover:border-green/40', tag: 'bg-green/10 text-green',  glow: 'hover:shadow-[0_0_40px_rgba(0,255,159,0.15)]'   },
}

function ProjectCard({ project }) {
  const { title, description, tags = [], github, live, icon, color = 'cyan', featured } = project
  const c = colorMap[color]

  return (
    <div
      className={`relative group bg-[#101828] border border-[rgba(0,229,255,0.1)] ${c.border} ${c.glow} rounded-2xl p-6 flex flex-col gap-4 transition-all duration-500 hover:-translate-y-2 ${featured ? 'md:col-span-2' : ''}`}
    >
      {featured && (
        <span className="absolute top-4 right-4 bg-amber/20 text-amber text-xs font-mono px-3 py-1 rounded-full border border-amber/30">
          🔥 Featured
        </span>
      )}

      <div className="flex items-center justify-between">
        <span className="text-4xl">{icon}</span>
        <div className="flex gap-3">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-[#5a6e9a] text-sm font-mono hover:text-cyan transition-colors duration-200">
              GitHub ↗
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer" className="text-[#5a6e9a] text-sm font-mono hover:text-amber transition-colors duration-200">
              Live ↗
            </a>
          )}
        </div>
      </div>

      <h3 className="font-heading text-xl font-bold text-[#e2eaff] group-hover:text-cyan transition-colors duration-300">
        {title}
      </h3>

      <p className="text-[#5a6e9a] text-sm leading-relaxed flex-grow">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className={`${c.tag} text-xs font-mono px-3 py-1 rounded-full`}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard
