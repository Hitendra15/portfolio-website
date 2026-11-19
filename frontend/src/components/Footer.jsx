import { ArrowUpRight, Github, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteData } from '../data/siteData'

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="container-shell flex flex-col justify-between gap-6 py-8 sm:flex-row sm:items-center">
        <div>
          <Link to="/" className="font-display text-base font-extrabold tracking-tight text-slate-950">Hitendra Marathe<span className="text-blue-600">.</span></Link>
          <p className="mt-1 text-xs text-slate-500">Python Backend Developer · Pune, India</p>
        </div>
        <div className="flex items-center gap-5 text-xs font-semibold text-slate-500">
          <a href={siteData.github} target="_blank" rel="noreferrer" className="hover:text-blue-700"><Github size={18} /></a>
          <a href={siteData.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-700"><Linkedin size={18} /></a>
          <Link to="/" className="inline-flex items-center gap-1 hover:text-blue-700">Back to home <ArrowUpRight size={14} /></Link>
        </div>
        <p className="text-xs text-slate-400">© {new Date().getFullYear()} Hitendra Marathe. All rights reserved.</p>
      </div>
    </footer>
  )
}