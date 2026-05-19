Architecture Overview
=====================

This project follows a small, modular, production-like layout:

- `backend/` — FastAPI app with SQLAlchemy models and service layer. Clear separation: `api` (routes), `services` (business logic), `models` (ORM), `schemas` (Pydantic), `database` (engine/session).
- `frontend/` — Vite + React + TypeScript, Tailwind. Uses `@tanstack/react-query` for server state and `axios` for HTTP.
- `electron-app/` — Thin Electron launcher that spawns the backend process and loads the frontend.
- `tauri-app/` — Configuration and notes for Tauri (thin wrapper expectations).

Design goals: thin desktop wrappers, backend and frontend independent, clean service boundaries for testability, simple local persistence (SQLite).
