import api from '@/http'
// import axios from 'axios'

class loginService {
  login = params => {
    console.log('22222222')
    console.log(api)

    return api.post('sign-in', params)
  }
}

// export { loginService }
export default new loginService()
