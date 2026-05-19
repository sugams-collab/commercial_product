from typing import Optional
from pydantic import BaseModel
from datetime import datetime


class TaskBase(BaseModel):
    title: str
    description: Optional[str] = None


class TaskCreate(TaskBase):
    pass


class TaskUpdate(BaseModel):
    title: Optional[str]
    description: Optional[str]
    completed: Optional[bool]


class TaskOut(TaskBase):
    id: int
    completed: bool
    created_at: datetime

    class Config:
        orm_mode = True
