from sqlalchemy.orm import Session
from ..models.task import Task
from ..schemas.task import TaskCreate, TaskUpdate
from typing import List, Optional


def get_task(db: Session, task_id: int) -> Optional[Task]:
    return db.query(Task).filter(Task.id == task_id).first()


def list_tasks(db: Session, search: Optional[str] = None) -> List[Task]:
    q = db.query(Task).order_by(Task.created_at.desc())
    if search:
        term = f"%{search}%"
        q = q.filter((Task.title.ilike(term)) | (Task.description.ilike(term)))
    return q.all()


def create_task(db: Session, payload: TaskCreate) -> Task:
    task = Task(title=payload.title, description=payload.description)
    db.add(task)
    db.commit()
    db.refresh(task)
    return task


def update_task(db: Session, task: Task, payload: TaskUpdate) -> Task:
    if payload.title is not None:
        task.title = payload.title
    if payload.description is not None:
        task.description = payload.description
    if payload.completed is not None:
        task.completed = payload.completed
    db.add(task)
    db.commit()
    db.refresh(task)
    return task


def delete_task(db: Session, task: Task) -> None:
    db.delete(task)
    db.commit()
