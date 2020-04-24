import Http from './http'
import  BASE_URL  from '../../common.js'
console.log(BASE_URL)
const _http = new Http()
class Request {
  // 登录
  login(params){
    return _http.request({
      url:`${BASE_URL}/account/adminSignIn`,
      method:'post',
      data:{...params.data}
    })
  }
}

export default Request
