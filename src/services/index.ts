import AuthServices from './authService'
import instance from './axiosManager'
import CourseService from './coursesService'
import LessonsService from './lessonsService'

const axios = instance

export const authService = AuthServices(axios)
export const courseService = CourseService(axios)
export const lessonsService = LessonsService(axios)
