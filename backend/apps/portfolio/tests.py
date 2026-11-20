from django.core.management import call_command
from django.test import TestCase

from .models import Project


class PortfolioApiTests(TestCase):
    @classmethod
    def setUpTestData(cls):
        Project.objects.create(name="A", slug="a", category="c", description="d", featured=True)
        Project.objects.create(name="B", slug="b", category="c", description="d", featured=False)
        Project.objects.create(name="Hidden", slug="hidden", category="c", description="d", is_active=False)

    def test_project_list_only_returns_active(self):
        response = self.client.get("/api/projects/")
        self.assertEqual(response.status_code, 200)
        self.assertEqual({p["slug"] for p in response.json()}, {"a", "b"})

    def test_project_list_featured_filter(self):
        response = self.client.get("/api/projects/?featured=true")
        self.assertEqual([p["slug"] for p in response.json()], ["a"])

    def test_project_detail_by_slug(self):
        self.assertEqual(self.client.get("/api/projects/a/").status_code, 200)
        self.assertEqual(self.client.get("/api/projects/hidden/").status_code, 404)

    def test_seed_command_is_idempotent_and_feeds_every_endpoint(self):
        call_command("seed_portfolio", verbosity=0)
        call_command("seed_portfolio", verbosity=0)  # run twice: no duplicates

        for endpoint, minimum in [
            ("projects", 3), ("services", 4), ("skills", 4), ("experience", 2), ("education", 1),
        ]:
            data = self.client.get(f"/api/{endpoint}/").json()
            self.assertGreaterEqual(len(data), minimum, endpoint)

        self.assertEqual(len(self.client.get("/api/services/").json()), 4)
        skills = self.client.get("/api/skills/").json()
        self.assertEqual(skills[0]["title"], "Backend Development")
        self.assertIn("Django", skills[0]["skills"])
