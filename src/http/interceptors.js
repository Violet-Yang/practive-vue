// import axios from 'axios'
import router from '../router/'

/**
 * api 호출 전/후로 요청과 응답을 가로채 특정 작업을 할 수 있다
 */

export function setInterceptors(createdAxios) {
  createdAxios.interceptors.request.use(
    function (config) {
      // 요청이 전달되기 전에 작업 수행
      // contain jwtToken and refreshToken at header whenver requesting APIs
      const jwtToken = localStorage.getItem('jwtToken')
      // const refreshToken = localStorage.getItem('refreshToken')
      config.headers.Authrization = jwtToken
      console.log(config)
      return config
    },
    function (error) {
      console.error(error)
      // 요청 오류가 있는 작업 수행
      return Promise.reject(error)
    },
  )

  // 응답 인터셉터 추가하기
  createdAxios.interceptors.response.use(
    function (response) {
      console.log(response)
      // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
      // 응답 데이터가 있는 작업 수행
      if (response.status === 200) {
        // 응답 성공
        return response
      }
    },
    function (error) {
      console.error(error)
      const status = error.response.status
      if (status === 400 || status === 401 || status === 500) {
        // 클라이언트 요청 오류, 서버 응답 오류
        window.alert(error.response.data.errorType)
      }
      if (error.response.status === 404) {
        // api 주소 오류
        router.push({ name: 'ErrorPage' })
      }
      // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
      // 응답 오류가 있는 작업 수행
      return Promise.reject(error)
    },
  )
  return createdAxios
}
