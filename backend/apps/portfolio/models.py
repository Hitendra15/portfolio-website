from django.db import models

class Project(models.Model):
    name = models.CharField(max_length=150)
    slug = models.SlugField(unique=True)
    category = models.CharField(max_length=100)
    description = models.TextField()
    detail = models.TextField(blank=True)

    technologies = models.JSONField(default=list, blank=True)

    github_url = models.URLField(blank=True)
    live_url = models.URLField(blank=True)

    featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    display_order = models.PositiveIntegerField(default=0)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["display_order", "-created_at"]

    def __str__(self):
        return self.name


class Service(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField()
    technologies = models.JSONField(default=list, blank=True)

    icon = models.CharField(max_length=50, blank=True)
    display_order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["display_order", "id"]

    def __str__(self):
        return self.title


class SkillCategory(models.Model):
    title = models.CharField(max_length=100)
    display_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["display_order", "id"]

    def __str__(self):
        return self.title


class Skill(models.Model):
    category = models.ForeignKey(
        SkillCategory,
        on_delete=models.CASCADE,
        related_name="skills"
    )
    name = models.CharField(max_length=100)
    display_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["display_order", "id"]
        unique_together = ("category", "name")

    def __str__(self):
        return self.name


class Experience(models.Model):
    company = models.CharField(max_length=150)
    role = models.CharField(max_length=150)
    location = models.CharField(max_length=100, blank=True)

    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)

    description = models.TextField()
    highlights = models.JSONField(default=list, blank=True)
    technologies = models.JSONField(default=list, blank=True)

    is_current = models.BooleanField(default=False)
    display_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["-start_date", "display_order"]

    def __str__(self):
        return f"{self.company} - {self.role}"


class Education(models.Model):
    degree = models.CharField(max_length=150)
    institute = models.CharField(max_length=200)

    start_year = models.PositiveIntegerField()
    end_year = models.PositiveIntegerField()

    description = models.TextField(blank=True)

    class Meta:
        ordering = ["-end_year"]

    def __str__(self):
        return self.degree
