
from rest_framework import serializers
from .models import (
    Project,
    Service,
    SkillCategory,
    Experience,
    Education,
)


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = "__all__"


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = "__all__"


class SkillCategorySerializer(serializers.ModelSerializer):
    skills = serializers.StringRelatedField(many=True, read_only=True)

    class Meta:
        model = SkillCategory
        fields = ["id", "title", "skills", "display_order"]


class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = "__all__"


class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = "__all__"
