import { type AxiosInstance, type AxiosResponse } from 'axios'
import { IResponse } from '../models/IDataResponse'

const AuthServices = (api: AxiosInstance) => ({
  postLogin: async (params: any) => {
    const response: IResponse = await api
      .post(`oauth/token`, params)
      .then((res: AxiosResponse) => {
        return res
      })
    return response
  },
  postchangePassword: async (params: any) => {
    const response: IResponse = await api
      .post(`oauth/change-password`, params)
      .then((res: AxiosResponse) => {
        return res
      })
    return response
  },
  postRegister: async (params: any) => {
    const response: IResponse = await api
      .post(`oauth/signup`, params)
      .then((res: AxiosResponse) => {
        return res
      })
    return response
  },
})

export default AuthServices
