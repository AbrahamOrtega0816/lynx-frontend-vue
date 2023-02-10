import { type AxiosInstance } from 'axios'
import { type IcoursesFilters } from '../common/Icourses'

const CourseService = (api: AxiosInstance) => ({
  getListCourses: async (id: number, filters?: IcoursesFilters) => {
    const response = await api.post(`courses/${id}`, filters).then((res) => {
      return res
    })
    return response
  },
  getCourseDetail: async (id: number) => {
    const response = await api.get(`courses/details/${id}`).then((res) => {
      return res
    })
    return response
  },
  // Courses List filters
  getCoursesStatus: async () => {
    const response = await api.get(`courses/status`).then((res) => {
      return res
    })
    return response
  },
  getCoursesCategories: async () => {
    const response = await api.get(`courses/categories`).then((res) => {
      return res
    })
    return response
  },
  getCoursesSpecialities: async () => {
    const response = await api.get(`courses/specialities`).then((res) => {
      return res
    })
    return response
  },
})

export default CourseService
