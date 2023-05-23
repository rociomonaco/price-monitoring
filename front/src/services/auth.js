import { axiosPublic, axiosPrivate as axios } from '@services/axiosConfig'

export const login = ({ email, password }) => {
  return axiosPublic.post('/login', { email, password })
}

export const logout = () => {
  return axios.post('/logout')
}
