import { getError } from '@/utilities/getError'
import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

const createAxiosInstance = ({ url = API_BASE_URL, headers = {} }) => {
  console.log(url)
  const instance = axios.create({
    baseURL: url,
    headers: {
      'Content-Type': 'application/json',
      ...headers
    }
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

const header = {
  withCredentials: true,
  Authorization: `Bearer ${localStorage.getItem('token')}`
}

const axiosPrivate = createAxiosInstance({ header })

export { axiosPublic, axiosPrivate as axios }
