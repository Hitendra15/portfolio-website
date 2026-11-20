
from rest_framework import generics
from rest_framework.permissions import AllowAny

from .models import (
    Project,
    Service,
    SkillCategory,
    Experience,
    Education,
)

from .serializers import (
    ProjectSerializer,
    ServiceSerializer,
    SkillCategorySerializer,
    ExperienceSerializer,
    EducationSerializer,
)


class ProjectListAPIView(generics.ListAPIView):
    serializer_class = ProjectSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        queryset = Project.objects.filter(is_active=True)

        # /api/projects/?featured=true  ->  only featured projects (home page)
        if self.request.query_params.get("featured", "").lower() in ("1", "true", "yes"):
            queryset = queryset.filter(featured=True)

        return queryset


class ProjectDetailAPIView(generics.RetrieveAPIView):
    serializer_class = ProjectSerializer
    permission_classes = [AllowAny]
    lookup_field = "slug"

    def get_queryset(self):
        return Project.objects.filter(is_active=True)


class ServiceListAPIView(generics.ListAPIView):
    serializer_class = ServiceSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Service.objects.filter(is_active=True)


class SkillCategoryListAPIView(generics.ListAPIView):
    queryset = SkillCategory.objects.prefetch_related("skills").all()
    serializer_class = SkillCategorySerializer
    permission_classes = [AllowAny]


class ExperienceListAPIView(generics.ListAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer
    permission_classes = [AllowAny]


class EducationListAPIView(generics.ListAPIView):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer
    permission_classes = [AllowAny]
