import axios from '@services/axiosConfig'

export const login = ({ email, password }) => {
  return axios.post('/login', { email, password })
}
