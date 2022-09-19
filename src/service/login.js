import api from '@/http'
// import axios from 'axios'

console.log(loginService)
export class loginService {
  login = params => {
    console.log('22222222')
    console.log(api)

    return api.post('sign-in', params)
  }
}

// export { loginService }
// export default new loginService()
