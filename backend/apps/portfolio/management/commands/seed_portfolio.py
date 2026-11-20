"""
Load the portfolio content (projects, services, skills, experience, education)
into the database so the React frontend has real data to show.

Usage:
    python manage.py seed_portfolio

Safe to run more than once: existing rows are updated, not duplicated.
You can also edit everything later from the Django admin (/admin/).
"""
from datetime import date

from django.core.management.base import BaseCommand
from django.db import transaction

from apps.portfolio.models import (
    Education,
    Experience,
    Project,
    Service,
    Skill,
    SkillCategory,
)

PROJECTS = [
    {
        "slug": "trello-clone-api",
        "name": "Trello Clone API",
        "category": "Project management · API",
        "description": "A task and board management backend with authentication, ownership rules, task workflows, filtering and pagination.",
        "detail": "A backend project inspired by kanban-style project management. It demonstrates user authentication, board/list/task relationships, ownership-based permissions, filtering, ordering and pagination.",
        "technologies": ["Django", "DRF", "PostgreSQL", "JWT"],
        "github_url": "https://github.com/Hitendra15/trello-clone-api",
    },
    {
        "slug": "django-authentication-api",
        "name": "Django Authentication API",
        "category": "Authentication · Backend",
        "description": "An authentication-focused Django API demonstrating custom user management, token-based authentication and password reset flows.",
        "detail": "An authentication learning project covering a custom email-based user model, JWT access and refresh tokens, and password reset flow.",
        "technologies": ["Python", "Django REST Framework", "SimpleJWT"],
        "github_url": "https://github.com/Hitendra15",
    },
    {
        "slug": "itdigitech-learning-platform",
        "name": "ITDigiTech Learning Platform",
        "category": "Learning platform · Full product",
        "description": "A learning platform project involving structured lessons, learning progress and backend workflows.",
        "detail": "A learning platform backend with structured learning content and supporting workflows. The public repository is the source of truth for the current implementation.",
        "technologies": ["Django", "PostgreSQL", "Celery"],
        "github_url": "https://github.com/Hitendra15/itdigitech-learning-platform",
    },
]

SERVICES = [
    {
        "title": "Backend Development",
        "description": "Build maintainable server-side applications, business logic and database-driven systems for real business needs.",
        "technologies": ["Python", "Django", "PostgreSQL"],
        "icon": "server",
    },
    {
        "title": "API Development",
        "description": "Design and develop well-structured APIs with authentication, permissions, validation and clear documentation.",
        "technologies": ["Django REST Framework", "JWT", "OpenAPI"],
        "icon": "braces",
    },
    {
        "title": "Business Web Applications",
        "description": "Develop scalable business applications with structured backend logic, database management and role-based access control.",
        "technologies": ["Python", "Django", "PostgreSQL"],
        "icon": "layout",
    },
    {
        "title": "Background & Real-time Systems",
        "description": "Handle asynchronous work and real-time communication for applications that need more than standard requests.",
        "technologies": ["Celery", "Channels", "WebSockets"],
        "icon": "workflow",
    },
]

SKILLS = [
    ("Backend Development", ["Python", "Django", "Django REST Framework", "PHP", "Laravel", "CodeIgniter"]),
    ("Database & Processing", ["PostgreSQL", "MySQL", "Celery"]),
    ("Real-time & Tools", ["Django Channels", "WebSockets", "Git", "GitHub", "GitLab", "Docker", "Linux", "Postman"]),
    ("Frontend Fundamentals", ["JavaScript", "jQuery", "HTML", "CSS", "Bootstrap"]),
]

EXPERIENCE = [
    {
        "company": "Chat360",
        "role": "Backend Developer · Django / Python",
        "location": "India",
        "start_date": date(2024, 5, 1),
        "end_date": None,
        "is_current": True,
        "description": "Working on a Django-based Vendor Management System with PostgreSQL and Celery, supporting operational workflows across vendor payments, fuel, assets and finance.",
        "highlights": [
            "Developing and maintaining Django business application modules",
            "Working with PostgreSQL data models and application workflows",
            "Using Celery for background processing",
            "Collaborating through GitLab-based development workflows",
        ],
        "technologies": ["Python", "Django", "PostgreSQL", "Celery", "GitLab"],
    },
    {
        "company": "Narola Infotech Solution LLP",
        "role": "Software Engineer · PHP",
        "location": "Surat, India",
        "start_date": date(2023, 2, 1),
        "end_date": date(2024, 5, 1),
        "is_current": False,
        "description": "Worked on web application development using PHP, CodeIgniter 3 and Laravel, including a service marketplace-style product.",
        "highlights": [
            "Built and maintained server-side application features",
            "Worked with relational databases and application logic",
            "Contributed to existing PHP projects using CodeIgniter and Laravel",
        ],
        "technologies": ["PHP", "CodeIgniter 3", "Laravel", "MySQL", "JavaScript"],
    },
]

EDUCATION = [
    {
        "degree": "Master of Computer Applications (MCA)",
        "institute": "KK Wagh College of Engineering and Education Research",
        "start_year": 2021,
        "end_year": 2023,
    },
]


class Command(BaseCommand):
    help = "Seed the database with the portfolio content (idempotent)."

    @transaction.atomic
    def handle(self, *args, **options):
        for order, data in enumerate(PROJECTS, start=1):
            data = dict(data)
            Project.objects.update_or_create(
                slug=data.pop("slug"),
                defaults={**data, "featured": True, "is_active": True, "display_order": order},
            )

        for order, data in enumerate(SERVICES, start=1):
            data = dict(data)
            Service.objects.update_or_create(
                title=data.pop("title"),
                defaults={**data, "is_active": True, "display_order": order},
            )

        for cat_order, (title, names) in enumerate(SKILLS, start=1):
            category, _ = SkillCategory.objects.update_or_create(
                title=title, defaults={"display_order": cat_order}
            )
            for skill_order, name in enumerate(names, start=1):
                Skill.objects.update_or_create(
                    category=category, name=name, defaults={"display_order": skill_order}
                )

        for order, data in enumerate(EXPERIENCE, start=1):
            data = dict(data)
            Experience.objects.update_or_create(
                company=data.pop("company"),
                role=data.pop("role"),
                defaults={**data, "display_order": order},
            )

        for data in EDUCATION:
            data = dict(data)
            Education.objects.update_or_create(
                degree=data.pop("degree"), institute=data.pop("institute"), defaults=data
            )

        self.stdout.write(self.style.SUCCESS(
            f"Seeded {Project.objects.count()} projects, {Service.objects.count()} services, "
            f"{SkillCategory.objects.count()} skill groups, {Experience.objects.count()} experiences, "
            f"{Education.objects.count()} education entries."
        ))
