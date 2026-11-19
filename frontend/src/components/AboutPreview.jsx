import { ArrowUpRight, BriefcaseBusiness, GraduationCap } from 'lucide-react'
import SectionHeading from './SectionHeading'

export default function AboutPreview() {
  return (
    <section id="about" className="section-pad">
      <div className="container-shell grid items-center gap-14 md:grid-cols-[.9fr_1.1fr]">
        <div className="relative">
          <div className="absolute -left-5 -top-5 h-28 w-28 rounded-full bg-blue-100" />
          <div className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_-40px_rgba(15,23,42,.35)]">
            <p className="text-xs font-extrabold uppercase tracking-[.18em] text-blue-700">My approach</p>
            <p className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-[-.04em] text-slate-950">Good software is more than code. It's solving the right problem.</p>
            <div className="mt-8 space-y-5">
              <div className="flex gap-3"><span className="mt-1 rounded-lg bg-blue-50 p-2 text-blue-700"><BriefcaseBusiness size={18} /></span><div><p className="text-sm font-extrabold text-slate-900">Professional experience</p><p className="mt-1 text-xs leading-5 text-slate-500">Experience across PHP and Python-based business applications.</p></div></div>
              <div className="flex gap-3"><span className="mt-1 rounded-lg bg-blue-50 p-2 text-blue-700"><GraduationCap size={18} /></span><div><p className="text-sm font-extrabold text-slate-900">MCA · 2023</p><p className="mt-1 text-xs leading-5 text-slate-500">KK Wagh College of Engineering and Education Research.</p></div></div>
            </div>
          </div>
        </div>
        <div>
          <SectionHeading eyebrow="A little about me" title="A backend developer who cares about the bigger picture." description="I’m Hitendra Marathe, a software developer based in Pune, India. My experience spans PHP development and Python backend engineering, with a focus on building useful business applications and well-structured backend systems." />
          <p className="mt-5 text-sm leading-7 text-slate-600">I enjoy understanding how a business works, translating its requirements into clear application workflows, and building software that is easier to maintain as it grows.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="button-primary">Get in touch <ArrowUpRight size={16} /></a>
            <a href="/resume.pdf" className="button-secondary" download>Download resume</a>
          </div>
          <p className="mt-3 text-xs text-slate-400">Add your approved PDF as <code className="rounded bg-slate-100 px-1.5 py-0.5">frontend/public/resume.pdf</code> before publishing.</p>
        </div>
      </div>
    </section>
  )
}