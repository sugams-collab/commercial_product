"""Run the FastAPI app with Uvicorn."""

from importlib import import_module
import uvicorn
import os

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))

    uvicorn.run("backend.app.main:app", host="0.0.0.0", port=port)
