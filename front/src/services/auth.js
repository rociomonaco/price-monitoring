import axiosPublic from '@services/axiosConfig'

export const login = ({ email, password }) => {
  return axiosPublic.post('/login', { email, password })
}
