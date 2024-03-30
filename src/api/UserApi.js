import axiosClient from './axiosClient'

export const UserAPI = {
  login: (credentials) => {
    return axiosClient.post('/login', credentials)
  },

  currentUser: () => {
    return axiosClient.get('/user')
  },

  logout: () => {
    return axiosClient.post('/logout')
  },

  register: (user) => {
    return axiosClient.post('/register', user)
  },

  getMyQuestions: () => {
    return axiosClient.get('/user/questions')
  },

  getMyResponses: () => {
    return axiosClient.get('/user/responses')
  },
}
