import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import Services from './components/Services'
import FeaturedProjects from './components/FeaturedProjects'
import AboutPreview from './components/AboutPreview'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ProjectsPage from './pages/ProjectsPage'
import ExperiencePage from './pages/ExperiencePage'
import ContactPage from './pages/ContactPage'

function HomePage() {
  return <><Hero /><TrustStrip /><Services /><FeaturedProjects /><AboutPreview /><ContactCTA /></>
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  useEffect(() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'instant' }) }, [location.pathname])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<div className="container-shell section-pad"><h1 className="font-display text-3xl font-extrabold">Page not found</h1><a className="link-arrow mt-5" href="/">Return home</a></div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
