import axiosClient from './axiosClient'

export const QuestionApi = {
  addQuestion: (post) => {
    return axiosClient.post('/question', post)
  },

  getAllQuestions: () => {
    return axiosClient.get('/question')
  },

  saveQuestion: () => {
    return axiosClient.get('/saveQuestion')
  },
}
