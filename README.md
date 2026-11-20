# Hitendra Portfolio

React (Vite + Tailwind) frontend + Django REST Framework backend (PostgreSQL).

## Run the backend (http://127.0.0.1:8000)

```bash
cd backend
pip install -r requirements.txt
cp .env.example .env          # then fill in SECRET_KEY and DB_* values
python manage.py migrate
python manage.py seed_portfolio     # loads projects/services/skills/experience/education
python manage.py createsuperuser    # optional, for /admin/
python manage.py runserver
```

## Run the frontend (http://localhost:5173)

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

## API

| Method | URL | Used by |
| --- | --- | --- |
| GET | `/api/projects/` (`?featured=true`) | Projects page, home "Selected work" |
| GET | `/api/projects/<slug>/` | – |
| GET | `/api/services/` | Home + Services page |
| GET | `/api/skills/` | About page |
| GET | `/api/experience/` | Experience page |
| GET | `/api/education/` | About + Experience pages |
| POST | `/api/contact/` | Contact form (`name`, `email`, `subject`, `message`) |

Content is editable in the Django admin (`/admin/`). If the API is unreachable the
frontend falls back to the static data in `frontend/src/data/siteData.js` and logs
why in the browser console (dev mode only).

## Tests

```bash
cd backend && python manage.py test
```
