import { type AxiosInstance } from 'axios'
import { IResponse } from '../models/IDataResponse'

const UserService = (api: AxiosInstance) => ({
  getusersById: async (id: number) => {
    const response: IResponse = await api.get(`users/${id}`).then((res) => {
      return res
    })
    return response
  },
  putUpdateUserProfile: async (id: number, params: any) => {
    const response: IResponse = await api.put(`users/${id}`, params).then((res) => {
      return res
    })
    return response
  },
})

export default UserService
