import axios from '@/http'

class loginService {
  login = params => {
    console.log(params)
    return axios.post('sign-in', params)
  }
}

export default loginService
