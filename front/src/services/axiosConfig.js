import { getError } from '@/utilities/getError'
import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
const token = localStorage.getItem('token')

export const axiosPublic = axios.create({
  baseURL: API_BASE_URL
})

export const axiosPrivate = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json', Authorization: token },
  withCredentials: true
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
