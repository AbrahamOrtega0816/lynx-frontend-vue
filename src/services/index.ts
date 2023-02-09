import AuthServices from './authService'
import instance from './axiosManager'
import CourseService from './coursesService'

const axios = instance

export const authService = AuthServices(axios)
export const courseService = CourseService(axios)
