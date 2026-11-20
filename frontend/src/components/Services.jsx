import { ArrowUpRight, Braces, LayoutDashboard, Server, Workflow } from 'lucide-react'
import { siteData } from '../data/siteData'
import { useApiData } from '../hooks/useApiData'
import { fetchServices } from '../services/portfolioApi'
import SectionHeading from './SectionHeading'

const icons = { server: Server, braces: Braces, layout: LayoutDashboard, workflow: Workflow }

export default function Services() {
  const { data: services } = useApiData(fetchServices, siteData.services, 'services')

  return (
    <section id="services" className="section-pad">
      <div className="container-shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="What I do" title="Practical engineering. Built around your goals." description="From a first API endpoint to a complete business application, I focus on solutions that are clear, dependable and maintainable." />
          <a href="#contact" className="link-arrow mb-1 shrink-0">Discuss your requirements <ArrowUpRight size={16} /></a>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = icons[service.icon] || Server
            return (
              <article key={service.number} className="service-card group">
                <div className="flex items-start justify-between">
                  <span className="rounded-2xl bg-blue-50 p-3.5 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white"><Icon size={23} /></span>
                  <span className="font-display text-xs font-extrabold tracking-widest text-slate-300">{service.number}</span>
                </div>
                <h3 className="mt-8 font-display text-lg font-extrabold tracking-tight text-slate-950">{service.title}</h3>
                <p className="mt-3 min-h-[104px] text-sm leading-6 text-slate-600">{service.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => <span key={tag} className="rounded-md bg-slate-100 px-2 py-1 text-[10px] font-bold text-slate-600">{tag}</span>)}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}