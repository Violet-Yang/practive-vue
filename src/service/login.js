import api from '@/http'
// import axios from 'axios'

class loginService {
  login = params => {
    return api.post('sign-in', params)
  }
}

// export { loginService }
export default new loginService()
