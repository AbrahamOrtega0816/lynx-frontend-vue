// First we need to import axios.js
import axios, {
  type RawAxiosRequestHeaders,
  type AxiosInstance,
  type AxiosResponse,
  type AxiosRequestConfig,
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

instance.interceptors.request.use((config: AxiosRequestConfig) => {
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
    const { data, status }: { data: AxiosResponse; status: string } = response
    return { ...data, status }
  },
  async (error: AxiosResponse) => {
    const userSession = useUserSession()
    if (error.response.status === 401) {
      // delete stored token if it fails
      userSession.logoutUser()
    }
    return Promise.reject(error.response.data || error)
  }
)

export default instance
