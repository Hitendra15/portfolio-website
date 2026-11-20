import { ArrowUpRight, Github } from 'lucide-react'
import { siteData } from '../data/siteData'
import { useApiData } from '../hooks/useApiData'
import { fetchFeaturedProjects } from '../services/portfolioApi'
import SectionHeading from './SectionHeading'

const colors = [
  'bg-blue-50 text-blue-700',
  'bg-violet-50 text-violet-700',
  'bg-emerald-50 text-emerald-700',
]

export default function FeaturedProjects() {
  const { data: projects, loading } = useApiData(
    fetchFeaturedProjects,
    siteData.projects,
    'featured projects',
  )

  return (
    <section id="projects" className="section-pad bg-slate-50">
      <div className="container-shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Selected work"
            title="A few things I've been building."
            description="A selection of backend projects that demonstrate my approach to APIs, application workflows and practical problem-solving."
          />

          <a
            href={siteData.github}
            target="_blank"
            rel="noreferrer"
            className="link-arrow mb-1 shrink-0"
          >
            More on GitHub <Github size={16} />
          </a>
        </div>

        {loading ? (
          <p className="mt-12 text-sm text-slate-500">
            Loading projects...
          </p>
        ) : projects.length === 0 ? (
          <p className="mt-12 text-sm text-slate-500">
            No projects have been added yet.
          </p>
        ) : (
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article key={project.name} className="project-card">
                <div
                  className={`flex aspect-[16/10] items-center justify-center rounded-xl ${
                    colors[index % colors.length]
                  }`}
                >
                  <span className="font-display text-7xl font-extrabold tracking-[-.08em] opacity-70">
                    {project.mark}
                  </span>
                </div>

                <p className="mt-6 text-[11px] font-extrabold uppercase tracking-[.16em] text-blue-700">
                  {project.category}
                </p>

                <h3 className="mt-2 font-display text-xl font-extrabold tracking-tight text-slate-950">
                  {project.name}
                </h3>

                <p className="mt-3 min-h-[96px] text-sm leading-6 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-slate-200 px-2 py-1 text-[10px] font-bold text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.href !== '#' && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-slate-900 transition hover:text-blue-700"
                  >
                    {project.label}
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}