import { ArrowUpRight, Menu, X } from 'lucide-react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { siteData } from '../data/siteData'

export default function Header({ menuOpen, setMenuOpen }) {
  const location = useLocation()
  const active = (href) => href === '/' ? location.pathname === '/' : location.pathname.startsWith(href)
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-xl">
      <div className="container-shell flex min-h-[76px] items-center justify-between gap-4">
        <Link to="/" className="flex shrink-0 items-center gap-3" aria-label="Hitendra Marathe home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 font-display text-sm font-extrabold tracking-tight text-white">HM</span>
          <span className="font-display text-[15px] font-extrabold tracking-tight text-slate-950">Hitendra Marathe<span className="text-blue-600">.</span></span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {siteData.navigation.map((item) => <NavLink key={item.href} to={item.href} end={item.href === '/'} className={() => `text-[13px] font-bold transition ${active(item.href) ? 'text-blue-700' : 'text-slate-600 hover:text-blue-700'}`}>{item.label}</NavLink>)}
        </nav>
        <Link to="/contact" className="button-primary hidden lg:inline-flex">Let's talk <ArrowUpRight size={16} /></Link>
        <button className="rounded-lg border border-slate-200 p-2 text-slate-700 lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
      </div>
      {menuOpen && <nav className="border-t border-slate-100 bg-white px-6 py-5 lg:hidden" aria-label="Mobile navigation"><div className="container-shell flex flex-col gap-4">{siteData.navigation.map((item) => <NavLink key={item.href} to={item.href} end={item.href === '/'} className={() => `text-sm font-bold ${active(item.href) ? 'text-blue-700' : 'text-slate-700'}`}>{item.label}</NavLink>)}<Link to="/contact" className="button-primary mt-1 w-fit">Let's talk <ArrowUpRight size={16} /></Link></div></nav>}
    </header>
  )
}
