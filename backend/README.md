Backend (FastAPI)
==================

Prereqs: Python 3.12+, pip, virtualenv

Setup:

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python run.py   # dev server (uvicorn)
```

The API runs on `http://127.0.0.1:8000` by default.

Files of interest:
- `app/main.py` — FastAPI app and router
- `app/api/tasks.py` — REST endpoints
- `app/models/task.py` — SQLAlchemy model
- `app/schemas/task.py` — Pydantic schemas
- `run.py` — development launcher (uvicorn)
