from django.urls import path

from .views import (
    ProjectListAPIView,
    ProjectDetailAPIView,
    ServiceListAPIView,
    SkillCategoryListAPIView,
    ExperienceListAPIView,
    EducationListAPIView,
)

urlpatterns = [
    path("projects/", ProjectListAPIView.as_view(), name="project-list"),
    path("projects/<slug:slug>/", ProjectDetailAPIView.as_view(), name="project-detail"),
    path("services/", ServiceListAPIView.as_view(), name="service-list"),
    path("skills/", SkillCategoryListAPIView.as_view(), name="skill-list"),
    path("experience/", ExperienceListAPIView.as_view(), name="experience-list"),
    path("education/", EducationListAPIView.as_view(), name="education-list"),
]