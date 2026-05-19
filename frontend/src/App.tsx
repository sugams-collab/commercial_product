import React, { useState } from 'react'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

export default function App() {
    const [query, setQuery] = useState('')
    return (
        <div className="min-h-screen bg-gray-50 text-slate-900 p-6">
            <div className="max-w-4xl mx-auto">
                <header className="mb-6">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-semibold text-slate-800">Task Manager</h1>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Simple, calm task tracking with a soft UI.</p>
                </header>

                <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-1">
                        <TaskForm />
                    </div>
                    <div className="md:col-span-2">
                        <div className="mb-4 flex gap-2">
                            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search tasks" className="flex-1 px-3 py-2 rounded border border-gray-100 bg-white focus:ring-2 focus:ring-slate-200" />
                        </div>
                        <TaskList search={query} />
                    </div>
                </main>
            </div>
        </div>
    )
}
