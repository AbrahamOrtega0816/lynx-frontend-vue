import { type AxiosInstance } from 'axios'

const LessonsService = (api: AxiosInstance) => ({
  getLessonsByGroupId: async (id: number) => {
    const response = await api.get(`lessons/${id}`, {}).then((res) => {
      return res
    })
    return response
  },
  getResurcesBySection: async (id: number) => {
    const response = await api.get(`resources/${id}`, {}).then((res) => {
      return res
    })
    return response
  },
  getLessonsGroups: async (id: number) => {
    const response = await api.get(`groups_lessons/${id}`, {}).then((res) => {
      return res
    })
    return response
  },
})

export default LessonsService
