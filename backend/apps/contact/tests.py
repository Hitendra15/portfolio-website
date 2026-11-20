from django.core.cache import cache
from django.test import TestCase

from .models import ContactMessage

VALID = {
    "name": "Jane Smith",
    "email": "jane@company.com",
    "subject": "Backend project",
    "message": "I would like to discuss an API project.",
}


class ContactApiTests(TestCase):
    def setUp(self):
        cache.clear()  # reset the rate-limit counter between tests

    def post(self, payload):
        return self.client.post("/api/contact/", payload, content_type="application/json")

    def test_valid_message_is_saved(self):
        response = self.post(VALID)
        self.assertEqual(response.status_code, 201)
        self.assertEqual(ContactMessage.objects.count(), 1)
        self.assertEqual(ContactMessage.objects.get().status, ContactMessage.Status.NEW)

    def test_missing_subject_is_rejected(self):
        payload = {k: v for k, v in VALID.items() if k != "subject"}
        response = self.post(payload)
        self.assertEqual(response.status_code, 400)
        self.assertIn("subject", response.json())

    def test_short_message_and_bad_email_are_rejected(self):
        response = self.post({**VALID, "message": "short", "email": "nope"})
        self.assertEqual(response.status_code, 400)
        self.assertEqual(set(response.json()), {"message", "email"})
        self.assertEqual(ContactMessage.objects.count(), 0)

    def test_get_is_not_allowed(self):
        self.assertEqual(self.client.get("/api/contact/").status_code, 405)
