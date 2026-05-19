import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '../services/api'

export function useTasks(search?: string) {
    return useQuery({
        queryKey: ['tasks', search || ''],
        queryFn: async () => {
            const resp = await api.get('/tasks', { params: { search } })
            return resp.data
        }
    })
}

export function useCreateTask() {
    const qc = useQueryClient()
    return useMutation({
        mutationFn: (payload: any) => api.post('/tasks', payload),
        onSuccess: () => qc.invalidateQueries({ queryKey: ['tasks'] }),
    })
}

export function useUpdateTask() {
    const qc = useQueryClient()
    return useMutation({
        mutationFn: (data: any) => api.put(`/tasks/${data.id}`, data),
        onSuccess: () => qc.invalidateQueries({ queryKey: ['tasks'] }),
    })
}

export function useDeleteTask() {
    const qc = useQueryClient()
    return useMutation({
        mutationFn: (id: number) => api.delete(`/tasks/${id}`),
        onSuccess: () => qc.invalidateQueries({ queryKey: ['tasks'] }),
    })
}

