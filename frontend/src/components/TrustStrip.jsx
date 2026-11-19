import { Database, Layers3, Workflow, Zap } from 'lucide-react'

const items = [
  { icon: Layers3, label: 'Django & DRF' },
  { icon: Database, label: 'PostgreSQL & MySQL' },
  { icon: Workflow, label: 'Celery & Channels' },
  { icon: Zap, label: 'API-first thinking' },
]

export default function TrustStrip() {
  return (
    <section className="border-y border-slate-100 bg-slate-50/80">
      <div className="container-shell grid grid-cols-2 gap-5 py-7 sm:grid-cols-4">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center justify-center gap-2.5 text-sm font-bold text-slate-600">
            <Icon size={18} className="text-blue-700" /> {label}
          </div>
        ))}
      </div>
    </section>
  )
}