import axiosClient from './axiosClient'

export const QuestionApi = {
  addQuestion: (post) => {
    return axiosClient.post('/question', post)
  },

  getAllQuestions: () => {
    return axiosClient.get('/question')
  },

  addResponse: (values, id) => {
    return axiosClient.post(`/question/${id}/response`, values)
  },

  saveQuestion: () => {
    return axiosClient.get('/saveQuestion')
  },
}
