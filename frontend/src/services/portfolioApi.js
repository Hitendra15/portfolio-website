import { apiGet, apiPost } from './api'

// DRF returns a plain list, or { results: [...] } if pagination is enabled later.
const toList = (data) => (Array.isArray(data) ? data : data?.results ?? [])

function formatMonth(isoDate) {
  const [year, month] = isoDate.split('-').map(Number)
  return new Date(Date.UTC(year, month - 1, 1)).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

function mapProject(project) {
  const href = project.github_url || project.live_url || '#'

  return {
    name: project.name,
    category: project.category,
    description: project.description,
    detail: project.detail || project.description,
    stack: project.technologies || [],
    href,
    label: project.github_url
      ? 'View repository'
      : project.live_url
        ? 'View live project'
        : 'Project details',
    mark: project.name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .slice(0, 2)
      .toUpperCase(),
  }
}

const mapService = (service, index) => ({
  number: String(index + 1).padStart(2, '0'),
  title: service.title,
  description: service.description,
  tags: service.technologies || [],
  icon: service.icon,
})

const mapSkillGroup = (group) => ({ title: group.title, items: group.skills || [] })

const mapExperience = (job) => ({
  company: job.company,
  role: job.role,
  location: job.location,
  period: `${formatMonth(job.start_date)} – ${
    job.is_current || !job.end_date ? 'Present' : formatMonth(job.end_date)
  }`,
  description: job.description,
  highlights: job.highlights || [],
  stack: job.technologies || [],
})

const mapEducation = (item) => ({
  degree: item.degree,
  institute: item.institute,
  period: `${item.start_year} – ${item.end_year}`,
})

// ---- GET endpoints (each takes an AbortSignal so React can cancel them) ----

export const fetchProjects = (signal) =>
  apiGet('/projects/', signal).then((data) => toList(data).map(mapProject))

export const fetchFeaturedProjects = (signal) =>
  apiGet('/projects/?featured=true', signal).then((data) => toList(data).map(mapProject))

export const fetchServices = (signal) =>
  apiGet('/services/', signal).then((data) => toList(data).map(mapService))

export const fetchSkills = (signal) =>
  apiGet('/skills/', signal).then((data) => toList(data).map(mapSkillGroup))

export const fetchExperience = (signal) =>
  apiGet('/experience/', signal).then((data) => toList(data).map(mapExperience))

// The API returns a list; the UI shows the most recent entry.
export const fetchEducation = (signal) =>
  apiGet('/education/', signal).then((data) => {
    const first = toList(data)[0]
    return first ? mapEducation(first) : null
  })

// ---- POST ----

export const sendContactMessage = ({ name, email, subject, message }) =>
  apiPost('/contact/', {
    name: name.trim(),
    email: email.trim(),
    subject: subject.trim(),
    message: message.trim(),
  })
