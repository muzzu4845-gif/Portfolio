import { skillsData } from '../data/skills'

const colorMap = {
  cyan:  { bar: 'bg-cyan',  text: 'text-cyan',  border: 'hover:border-cyan/30',  glow: 'shadow-[0_0_10px_rgba(0,229,255,0.3)]'  },
  amber: { bar: 'bg-amber', text: 'text-amber', border: 'hover:border-amber/30', glow: 'shadow-[0_0_10px_rgba(255,179,71,0.3)]' },
  rose:  { bar: 'bg-rose',  text: 'text-rose',  border: 'hover:border-rose/30',  glow: 'shadow-[0_0_10px_rgba(255,77,109,0.3)]' },
  green: { bar: 'bg-green', text: 'text-green', border: 'hover:border-green/30', glow: 'shadow-[0_0_10px_rgba(0,255,159,0.3)]'  },
}

function Skills() {
  return (
    <section id="skills" className="relative py-32 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-[#080e1a]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-cyan text-sm font-mono tracking-widest uppercase mb-3">
            // what i know
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-[#e2eaff] mb-4">
            Skills & Technologies
          </h2>
          <p className="text-[#5a6e9a] text-lg max-w-xl mx-auto">
            Tools and technologies I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillsData.map((cat) => {
            const c = colorMap[cat.color]
            return (
              <div
                key={cat.category}
                className={`reveal bg-[#101828] border border-[rgba(0,229,255,0.08)] ${c.border} rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{cat.icon}</span>
                  <h3 className={`font-heading text-xl font-bold ${c.text}`}>
                    {cat.category}
                  </h3>
                </div>

                {/* Skill bars */}
                <div className="flex flex-col gap-5">
                  {cat.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[#e2eaff] text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className={`text-xs font-mono ${c.text}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-[5px] bg-[#162035] rounded-full overflow-hidden">
                        <div
                          className={`h-full ${c.bar} rounded-full transition-all duration-1000 ${c.glow}`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Tech badges row */}
        <div className="reveal mt-14">
          <p className="text-center text-[#5a6e9a] text-xs font-mono tracking-widest uppercase mb-6">
            Technologies I work with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'React.js', 'Redux', 'Tailwind CSS', 'JavaScript',
              'HTML5', 'CSS3', 'Node.js', 'Express.js',
              'MongoDB', 'Git', 'GitHub', 'Postman',
              'Vercel', 'Railway', 'JWT', 'REST API',
            ].map((tech) => (
              <span
                key={tech}
                className="bg-[#101828] border border-[rgba(0,229,255,0.1)] hover:border-cyan/40 hover:text-cyan text-[#5a6e9a] text-xs font-mono px-4 py-2 rounded-full transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills