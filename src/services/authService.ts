import { type AxiosInstance } from 'axios'

const AuthServices = (api: AxiosInstance) => ({
  postLogin: async (params: any) => {
    const response = await api.post(`auth/login`, params).then((res) => {
      return res
    })
    return response
  },
  postchangePassword: async (params: any) => {
    const response = await api.post(`auth/change-password`, params).then((res) => {
      return res
    })
    return response
  },
  postRegister: async (params: any) => {
    const response = await api.post(`auth/signup`, params).then((res) => {
      return res
    })
    return response
  },
})

export default AuthServices
