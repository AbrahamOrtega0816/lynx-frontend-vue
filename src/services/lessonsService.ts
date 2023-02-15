import { type AxiosInstance } from 'axios'
import { IResponse } from '../models/IDataResponse'

const LessonsService = (api: AxiosInstance) => ({
  getLessonsByGroupId: async (id: number) => {
    const response: IResponse = await api.get(`lessons/${id}`, {}).then((res) => {
      return res
    })
    return response
  },
  getResurcesBySection: async (id: number) => {
    const response: IResponse = await api.get(`resources/${id}`, {}).then((res) => {
      return res
    })
    return response
  },
  getLessonsGroups: async (id: number) => {
    const response: IResponse = await api.get(`groups_lessons/${id}`, {}).then((res) => {
      return res
    })
    return response
  },
})

export default LessonsService
