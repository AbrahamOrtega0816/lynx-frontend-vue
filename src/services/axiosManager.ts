// First we need to import axios.js
import axios, {
  type RawAxiosRequestHeaders,
  type AxiosInstance,
  type AxiosResponse,
} from 'axios'
import { useUserSession } from '../stores/userSession'

const BASE_URL = import.meta.env.VITE_API_BACKEND_URL

// Next we make an 'instance' of it
const instance: AxiosInstance = axios.create({
  // .. where we make our configurations
  baseURL: BASE_URL,
})

const CONTENT_TYPE = 'application/json'
const ACCEPT = 'application/json'

// Where you would set stuff like your 'Authorization' header, etc ...
instance.defaults.headers.post['Content-Type'] = CONTENT_TYPE
instance.defaults.headers.common['Accept'] = ACCEPT

instance.interceptors.request.use((config) => {
  const userSession = useUserSession()

  if (userSession.isLoggedIn) {
    config.headers = {
      ...((config.headers as RawAxiosRequestHeaders) ?? {}),
      Authorization: `Bearer ${userSession.token}`,
    }
  }

  return config
})

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data, status }: { data: AxiosResponse } = response
    return { ...data, status }
  },
  async (error) => {
    if (error.response.status === 401) {
      console.log('logout')
    }
    return Promise.reject(error.response.data || error)
  }
)

export default instance
