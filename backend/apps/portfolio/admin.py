
from django.contrib import admin
from .models import (
    Project,
    Service,
    SkillCategory,
    Skill,
    Experience,
    Education,
)


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "category",
        "featured",
        "is_active",
        "display_order",
    )
    list_filter = ("featured", "is_active")
    search_fields = ("name", "description")
    prepopulated_fields = {"slug": ("name",)}
    ordering = ("display_order",)


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ("title", "is_active", "display_order")
    list_filter = ("is_active",)
    search_fields = ("title",)


class SkillInline(admin.TabularInline):
    model = Skill
    extra = 1


@admin.register(SkillCategory)
class SkillCategoryAdmin(admin.ModelAdmin):
    list_display = ("title", "display_order")
    inlines = [SkillInline]


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = (
        "company",
        "role",
        "start_date",
        "end_date",
        "is_current",
    )
    list_filter = ("is_current",)
    search_fields = ("company", "role")


@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = ("degree", "institute", "end_year")
    search_fields = ("degree", "institute")
