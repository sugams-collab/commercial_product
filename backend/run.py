"""Run the FastAPI app with Uvicorn."""

from importlib import import_module
import uvicorn

if __name__ == "__main__":
    uvicorn.run("app.main:app", host="127.0.0.1", port=8000, reload=True)
