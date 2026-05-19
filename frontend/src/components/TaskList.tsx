import React from 'react'
import { useTasks, useDeleteTask, useUpdateTask } from '../hooks/useTasks'

export default function TaskList({ search }: { search?: string }) {
    const { data, isLoading, error } = useTasks(search)
    const del = useDeleteTask()
    const upd = useUpdateTask()

    if (isLoading) return <div className="card">Loading tasks...</div>
    if (error) return <div className="card">Error loading tasks</div>

    return (
        <div className="space-y-3">
            {(data || []).map((task: any) => (
                <div key={task.id} className="card flex items-start justify-between">
                    <div className="flex-1 pr-4">
                        <div className="flex items-center gap-3">
                            <h4 className="font-semibold text-slate-800">{task.title}</h4>
                            {task.completed && <span className="badge-success">Done</span>}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{task.description}</p>
                        <div className="text-xs text-gray-400 mt-2">{new Date(task.created_at).toLocaleString()}</div>
                    </div>
                    <div className="flex flex-col gap-2 items-end">
                        <label className="flex items-center gap-2 text-sm">
                            <input type="checkbox" checked={task.completed} onChange={() => upd.mutate({ id: task.id, completed: !task.completed })} />
                            <span className="text-sm text-slate-700">Done</span>
                        </label>
                        <button onClick={() => del.mutate(task.id)} className="px-2 py-1 text-sm rounded bg-red-100 text-red-600 hover:bg-red-200">Delete</button>
                    </div>
                </div>
            ))}
            {data && data.length === 0 && <div className="card">No tasks yet. Create one to get started.</div>}
        </div>
    )
}
