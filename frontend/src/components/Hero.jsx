import { ArrowDown, ArrowRight, ArrowUpRight, CheckCircle2, Code2, Github, Linkedin } from 'lucide-react'
import { siteData } from '../data/siteData'

export default function Hero() {
  return (
    <section id="home" className="hero-grid overflow-hidden">
      <div className="container-shell grid items-center gap-14 py-20 md:grid-cols-[1.12fr_.88fr] md:py-28">
        <div className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-2 text-xs font-bold text-emerald-800">
            <span className="h-2 w-2 rounded-full bg-emerald-500 pulse-dot" /> Available for freelance opportunities
          </div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[.2em] text-blue-700">Hello, I'm Hitendra</p>
          <h1 className="max-w-3xl font-display text-5xl font-extrabold leading-[1.08] tracking-[-.055em] text-slate-950 sm:text-6xl lg:text-[68px]">
            I build reliable <span className="text-blue-700">backend</span> systems for ambitious ideas.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
            Python Backend Developer specialising in Django and Django REST Framework. I help teams turn complex requirements into dependable web applications and APIs.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="button-primary">Explore my work <ArrowUpRight size={17} /></a>
            <a href="#contact" className="button-secondary">Discuss a project <ArrowRight size={17} /></a>
          </div>
          <div className="mt-9 flex items-center gap-5 text-slate-500">
            <a href={siteData.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-slate-950"><Github size={20} /></a>
            <a href={siteData.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-blue-700"><Linkedin size={20} /></a>
            <span className="h-5 w-px bg-slate-200" />
            <span className="text-xs font-semibold tracking-wide">Pune, India · Working worldwide</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[430px]">
          <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-blue-100 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-indigo-100 blur-3xl" />
          <div className="relative rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_30px_90px_-35px_rgba(15,23,42,.28)]">
            <div className="overflow-hidden rounded-[1.5rem] bg-slate-50">
              <img src="/profile-placeholder.jpeg" alt="Placeholder for Hitendra Marathe's professional portrait" className="aspect-[4/4.6] w-full object-cover" />
            </div>
            <div className="flex items-center justify-between gap-3 px-3 py-4">
              <div>
                <p className="font-display text-base font-extrabold text-slate-950">Hitendra Marathe</p>
                <p className="mt-1 text-xs font-medium text-slate-500">Python Backend Developer</p>
              </div>
              <span className="rounded-xl bg-blue-50 p-3 text-blue-700"><Code2 size={22} /></span>
            </div>
          </div>
          <div className="absolute -left-8 top-16 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-800"><CheckCircle2 size={16} className="text-emerald-500" /> Backend-focused</div>
            <p className="mt-1 text-[11px] text-slate-500">Thoughtful, maintainable code</p>
          </div>
          <div className="absolute -right-6 bottom-24 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Core stack</p>
            <p className="mt-1 font-display text-sm font-extrabold text-slate-900">Python · Django · DRF</p>
          </div>
        </div>
      </div>
      <a href="#services" className="mx-auto mb-8 flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-[.18em] text-slate-400 hover:text-blue-700"><ArrowDown size={14} /> Scroll to explore</a>
    </section>
  )
}