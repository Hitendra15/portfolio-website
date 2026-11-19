export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <p className="mb-3 text-xs font-extrabold uppercase tracking-[.2em] text-blue-700">{eyebrow}</p>
      <h2 className="font-display text-3xl font-extrabold tracking-[-.04em] text-slate-950 sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>}
    </div>
  )
}