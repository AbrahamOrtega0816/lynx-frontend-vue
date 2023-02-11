import { type AxiosInstance } from 'axios'

const UserService = (api: AxiosInstance) => ({
  getusersById: async (id: number) => {
    const response = await api.get(`users/${id}`).then((res) => {
      return res
    })
    return response
  },
  putUpdateUserProfile: async (id: number, params: any) => {
    const response = await api.put(`users/${id}`, params).then((res) => {
      return res
    })
    return response
  },
})

export default UserService
