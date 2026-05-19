from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from ..database import SessionLocal, init_db
from ..schemas.task import TaskCreate, TaskOut, TaskUpdate
from ..services import task_service

router = APIRouter()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.on_event("startup")
def on_startup():
    init_db()


@router.get("/", response_model=list[TaskOut])
def read_tasks(search: str | None = Query(None), db: Session = Depends(get_db)):
    return task_service.list_tasks(db, search=search)


@router.get("/{task_id}", response_model=TaskOut)
def read_task(task_id: int, db: Session = Depends(get_db)):
    task = task_service.get_task(db, task_id)
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")
    return task


@router.post("/", response_model=TaskOut, status_code=201)
def create_task(payload: TaskCreate, db: Session = Depends(get_db)):
    return task_service.create_task(db, payload)


@router.put("/{task_id}", response_model=TaskOut)
def update_task(task_id: int, payload: TaskUpdate, db: Session = Depends(get_db)):
    task = task_service.get_task(db, task_id)
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")
    return task_service.update_task(db, task, payload)


@router.delete("/{task_id}", status_code=204)
def delete_task(task_id: int, db: Session = Depends(get_db)):
    task = task_service.get_task(db, task_id)
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")
    task_service.delete_task(db, task)
    return None
