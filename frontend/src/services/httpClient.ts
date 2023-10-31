import axios from 'axios'

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL ?? 'http://localhost:8000',
})

export default httpClient
