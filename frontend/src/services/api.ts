import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'https://commercial-product.onrender.com'

export const api = axios.create({
    baseURL: API_URL,
    timeout: 5000,
})
