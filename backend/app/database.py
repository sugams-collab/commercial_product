from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from .config import DATABASE_URL

engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
from pathlib import Path

# Ensure sqlite file directory exists so sqlite can open the file
if engine.url.drivername == "sqlite":
    db_file = engine.url.database
    if db_file:
        Path(db_file).parent.mkdir(parents=True, exist_ok=True)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()


def init_db():
    from .models import task as _task

    Base.metadata.create_all(bind=engine)
