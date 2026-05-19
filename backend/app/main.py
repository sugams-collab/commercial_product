from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .api import tasks as tasks_router
from .logger import setup_logging

setup_logging()

app = FastAPI(title="Task Manager API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:5174",
        "http://127.0.0.1:5174",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(tasks_router.router, prefix="/tasks", tags=["tasks"])


@app.get("/health")
def health():
    return {"status": "ok"}
