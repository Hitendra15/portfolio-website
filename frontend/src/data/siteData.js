export const siteData = {
  name: 'Hitendra Marathe',
  role: 'Python Backend Developer',
  location: 'Pune, Maharashtra, India',
  email: 'hitendramarathe45@gmail.com',
  phone: '917972771809',
  github: 'https://github.com/Hitendra15',
  linkedin: 'https://www.linkedin.com/in/hitendra-marathe-98599722b/',
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Experience', href: '/experience' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { number: '01', title: 'Backend Development', description: 'Build maintainable server-side applications, business logic and database-driven systems for real business needs.', tags: ['Python', 'Django', 'PostgreSQL'], icon: 'server' },
    { number: '02', title: 'API Development', description: 'Design and develop well-structured APIs with authentication, permissions, validation and clear documentation.', tags: ['Django REST Framework', 'JWT', 'OpenAPI'], icon: 'braces' },
    {
      number: '03',
      title: 'Business Web Applications',
      description: 'Develop scalable business applications with structured backend logic, database management and role-based access control.',
      tags: ['Python', 'Django', 'PostgreSQL'],
      icon: 'layout'
    },
    { number: '04', title: 'Background & Real-time Systems', description: 'Handle asynchronous work and real-time communication for applications that need more than standard requests.', tags: ['Celery', 'Channels', 'WebSockets'], icon: 'workflow' },
  ],
  projects: [
    { name: 'Trello Clone API', category: 'Project management · API', description: 'A task and board management backend with authentication, ownership rules, task workflows, filtering and pagination.', stack: ['Django', 'DRF', 'PostgreSQL', 'JWT'], href: 'https://github.com/Hitendra15/trello-clone-api', label: 'View repository', mark: 'TC', detail: 'A backend project inspired by kanban-style project management. It demonstrates user authentication, board/list/task relationships, ownership-based permissions, filtering, ordering and pagination.' },
    { name: 'Django Authentication API', category: 'Authentication · Backend', description: 'An authentication-focused Django API demonstrating custom user management, token-based authentication and password reset flows.', stack: ['Python', 'Django REST Framework', 'SimpleJWT'], href: 'https://github.com/Hitendra15', label: 'Explore GitHub', mark: 'AU', detail: 'An authentication learning project covering a custom email-based user model, JWT access and refresh tokens, and password reset flow.' },
    { name: 'ITDigiTech Learning Platform', category: 'Learning platform · Full product', description: 'A learning platform project involving structured lessons, learning progress and backend workflows.', stack: ['Django', 'PostgreSQL', 'Celery'], href: 'https://github.com/Hitendra15/itdigitech-learning-platform', label: 'View repository', mark: 'LP', detail: 'A learning platform backend with structured learning content and supporting workflows. The public repository is the source of truth for the current implementation.' },
  ],
  experience: [
    { company: 'Chat360', role: 'Backend Developer · Django / Python', period: 'May 2024 – Present', location: 'India', description: 'Working on a Django-based Vendor Management System with PostgreSQL and Celery, supporting operational workflows across vendor payments, fuel, assets and finance.', highlights: ['Developing and maintaining Django business application modules', 'Working with PostgreSQL data models and application workflows', 'Using Celery for background processing', 'Collaborating through GitLab-based development workflows'], stack: ['Python', 'Django', 'PostgreSQL', 'Celery', 'GitLab'] },
    { company: 'Narola Infotech Solution LLP', role: 'Software Engineer · PHP', period: 'February 2023 – May 2024', location: 'Surat, India', description: 'Worked on web application development using PHP, CodeIgniter 3 and Laravel, including a service marketplace-style product.', highlights: ['Built and maintained server-side application features', 'Worked with relational databases and application logic', 'Contributed to existing PHP projects using CodeIgniter and Laravel'], stack: ['PHP', 'CodeIgniter 3', 'Laravel', 'MySQL', 'JavaScript'] },
  ],
  skills: [
    {
      title: 'Backend Development',
      items: ['Python', 'Django', 'Django REST Framework', 'PHP', 'Laravel', 'CodeIgniter']
    },
    {
      title: 'Database & Processing',
      items: ['PostgreSQL', 'MySQL', 'Celery']
    },
    {
      title: 'Real-time & Tools',
      items: ['Django Channels', 'WebSockets', 'Git', 'GitHub', 'GitLab', 'Docker', 'Linux', 'Postman']
    },
    {
      title: 'Frontend Fundamentals',
      items: ['JavaScript', 'jQuery', 'HTML', 'CSS', 'Bootstrap']
    },
  ],
  education: { degree: 'Master of Computer Applications (MCA)', institute: 'KK Wagh College of Engineering and Education Research', period: '2021 – 2023' },
}
