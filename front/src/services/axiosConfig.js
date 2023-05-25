import { getError } from '@/utilities/getError'
import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

const createAxiosInstance = ({ url = API_BASE_URL }) => {
  const instance = axios.create({
    baseURL: url,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  instance.interceptors.request.use((request) => {
    const token = localStorage.getItem('token')
    if (token) {
      request.headers.Authorization = `Bearer ${token}`
      request.headers.withCredentials = true
    }
    return request
  })

  instance.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      return Promise.reject(getError(error.code))
    }
  )
  return instance
}

const axiosPublic = createAxiosInstance({})

const axiosPrivate = createAxiosInstance({})

export { axiosPublic, axiosPrivate as axios }
