import axios from 'axios'
import { setInterceptors } from './interceptors'

const callAxios = () => {
  const created = axios.create({
    baseURL: 'https://hive-test2.azurewebsites.net/v1.1/',
  })
  return setInterceptors(created)
}

const api = callAxios()

export default api
