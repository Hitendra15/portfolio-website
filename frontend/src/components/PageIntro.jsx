import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PageIntro({ eyebrow, title, description, action = true }) {
  return <section className="page-intro"><div className="container-shell"><p className="text-xs font-extrabold uppercase tracking-[.2em] text-blue-700">{eyebrow}</p><h1 className="mt-4 max-w-4xl font-display text-4xl font-extrabold leading-[1.12] tracking-[-.05em] text-slate-950 sm:text-5xl lg:text-6xl">{title}</h1><p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">{description}</p>{action && <Link to="/contact" className="button-primary mt-8">Let's discuss a project <ArrowUpRight size={16} /></Link>}</div></section>
}
