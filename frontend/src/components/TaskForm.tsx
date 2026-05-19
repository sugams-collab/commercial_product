import React, { useState } from 'react'
import { useCreateTask } from '../hooks/useTasks'

export default function TaskForm() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const create = useCreateTask()

    async function submit(e: React.FormEvent) {
        e.preventDefault()
        if (!title.trim()) return
        create.mutate({ title, description })
        setTitle('')
        setDescription('')
    }

    return (
        <form onSubmit={submit} className="card">
            <h3 className="font-semibold mb-2 text-slate-800">Create Task</h3>
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" className="w-full mb-2 px-3 py-2 border border-gray-100 rounded bg-gray-50 focus:ring-2 focus:ring-slate-200" />
            <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" className="w-full mb-2 px-3 py-2 border border-gray-100 rounded bg-gray-50 focus:ring-2 focus:ring-slate-200" />
            <div className="flex justify-end">
                <button className="btn-primary">Add</button>
            </div>
        </form>
    )
}
