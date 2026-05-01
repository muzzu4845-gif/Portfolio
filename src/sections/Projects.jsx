import ProjectCard from '../components/ProjectCard'
import { projectsData } from '../data/projects'

function Projects() {
  return (
    <section id="projects" className="relative py-32 overflow-hidden">

      {/* Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-rose/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-cyan text-sm font-mono tracking-widest uppercase mb-3">
            // my work
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-[#e2eaff] mb-4">
            Featured Projects
          </h2>
          <p className="text-[#5a6e9a] text-lg max-w-xl mx-auto">
            Real-world applications I've built from scratch
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 reveal">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal text-center mt-14">
          <p className="text-[#5a6e9a] text-sm font-mono mb-4">
            Want to see more?
          </p>
          <a
            href="https://github.com/muzzu4845-gif"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[rgba(0,229,255,0.2)] hover:border-cyan/50 text-[#5a6e9a] hover:text-cyan text-sm font-mono px-6 py-3 rounded-xl transition-all duration-300 hover:-translate-y-1"
          >
            View All on GitHub ↗
          </a>
        </div>

      </div>
    </section>
  )
}

export default Projects
