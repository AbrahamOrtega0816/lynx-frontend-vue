import { type AxiosInstance } from 'axios'
import { type IcoursesFilters } from '../models/Icourses'
import { IResponse } from '../models/IDataResponse'

const CourseService = (api: AxiosInstance) => ({
  getListCourses: async (id: number, filters?: IcoursesFilters) => {
    const response: IResponse = await api.post(`courses/${id}`, filters).then((res) => {
      return res
    })
    return response
  },
  getCourseDetail: async (id: number) => {
    const response: IResponse = await api.get(`courses/details/${id}`).then((res) => {
      return res
    })
    return response
  },
  getCoursesStatus: async () => {
    const response: IResponse = await api.get(`courses/status`).then((res) => {
      return res
    })
    return response
  },
  getCoursesCategories: async () => {
    const response: IResponse = await api.get(`courses/categories`).then((res) => {
      return res
    })
    return response
  },
  getCoursesSpecialities: async () => {
    const response: IResponse = await api.get(`courses/specialities`).then((res) => {
      return res
    })
    return response
  },
  putSetIsCourseFavorite: async (id: number, params: any) => {
    const response: IResponse = await api.put(`courses/${id}`, params).then((res) => {
      return res
    })
    return response
  },
  getSectionsOfLesson: async (id: number) => {
    const response: IResponse = await api.get(`sections/${id}`).then((res) => {
      return res
    })
    return response
  },
  getActivitiesOfLesson: async (id: number) => {
    const response: IResponse = await api.get(`sections/activities/${id}`).then((res) => {
      return res
    })
    return response
  },
})

export default CourseService
