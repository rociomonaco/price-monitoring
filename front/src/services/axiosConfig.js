import { getError } from '@/utilities/getError'
import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const axiosPublic = axios.create({
  baseURL: API_BASE_URL
})

export const axiosPrivate = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
})

axiosPrivate.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  console.log(token)
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

axiosPrivate.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(getError(error.code))
  }
)

export default axiosPrivate
