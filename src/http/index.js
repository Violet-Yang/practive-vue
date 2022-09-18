import axios from 'axios'
import { setInterceptors } from './interceptors'

const createdAxios = axios.create({
  baseURL: 'https://hive-test2.azurewebsites.net/v1.1/',
})

const api = setInterceptors(createdAxios)

export default api
