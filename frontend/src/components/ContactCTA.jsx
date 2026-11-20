import { useState } from 'react'
import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react'
import { siteData } from '../data/siteData'
import { sendContactMessage } from '../services/portfolioApi'

const emptyForm = { name: '', email: '', subject: '', message: '' }

function FieldError({ message }) {
  return message ? <span className="text-[11px] font-semibold text-red-600">{message}</span> : null
}

export default function ContactCTA() {
  const [form, setForm] = useState(emptyForm)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [feedback, setFeedback] = useState('')
  const [fieldErrors, setFieldErrors] = useState({})

  const update = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setFieldErrors((current) => ({ ...current, [name]: undefined }))
  }

  const submit = async (event) => {
    event.preventDefault()
    if (status === 'sending') return

    setStatus('sending')
    setFeedback('')
    setFieldErrors({})

    try {
      await sendContactMessage(form)
      setForm(emptyForm)
      setStatus('success')
      setFeedback("Thank you! Your message has been sent and I'll get back to you soon.")
    } catch (error) {
      setStatus('error')
      setFieldErrors(error.fieldErrors || {})
      setFeedback(`${error.message} You can also email me at ${siteData.email}.`)
    }
  }

  const whatsappNumber = siteData.phone.replace(/\D/g, '')

  return (
    <section id="contact" className="section-pad">
      <div className="container-shell">
        <div className="overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-12 text-white sm:px-12 sm:py-16">
          <div className="grid gap-12 md:grid-cols-[.9fr_1.1fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[.2em] text-blue-300">Let's work together</p>
              <h2 className="mt-4 max-w-lg font-display text-4xl font-extrabold leading-tight tracking-[-.045em] sm:text-5xl">Have a project in mind?</h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">Tell me what you're planning. Whether you need an API, a business application or help improving an existing backend, let's start a conversation.</p>
              <a href={`mailto:${siteData.email}`} className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-white hover:text-blue-300"><Mail size={17} /> {siteData.email}</a>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-3 text-xs font-bold text-white transition hover:bg-white/10"><MessageCircle size={16} /> WhatsApp</a>
                <a href={siteData.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-3 text-xs font-bold text-white transition hover:bg-white/10">LinkedIn <ArrowUpRight size={15} /></a>
              </div>
            </div>
            <form onSubmit={submit} className="rounded-2xl bg-white p-5 text-slate-900 sm:p-7">
              <h3 className="font-display text-xl font-extrabold">Send an inquiry</h3>
              <p className="mt-1 text-xs text-slate-500">Share a few details and I'll know how to follow up.</p>
              <div className="mt-6 grid gap-4">
                <label className="form-label">Your name<input required minLength={2} maxLength={100} name="name" value={form.name} onChange={update} placeholder="Jane Smith" className="form-input" /><FieldError message={fieldErrors.name} /></label>
                <label className="form-label">Email address<input required type="email" maxLength={254} name="email" value={form.email} onChange={update} placeholder="jane@company.com" className="form-input" /><FieldError message={fieldErrors.email} /></label>
                <label className="form-label">Subject<input required minLength={3} maxLength={200} name="subject" value={form.subject} onChange={update} placeholder="Backend project enquiry" className="form-input" /><FieldError message={fieldErrors.subject} /></label>
                <label className="form-label">Project details<textarea required minLength={10} rows="4" name="message" value={form.message} onChange={update} placeholder="Tell me about your project, goals and timeline..." className="form-input resize-y" /><FieldError message={fieldErrors.message} /></label>
                <button className="button-primary w-full disabled:cursor-not-allowed disabled:opacity-60" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending...' : 'Send inquiry'} <ArrowUpRight size={16} /></button>
                {feedback && <p role="status" className={`text-xs leading-5 ${status === 'success' ? 'text-emerald-700' : 'text-red-600'}`}>{feedback}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}