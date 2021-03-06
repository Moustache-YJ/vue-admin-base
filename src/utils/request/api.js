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
  // 登出
  logout(){
    return _http.request({
      url:`${BASE_URL}/account/logout`,
      method:'get',
    })
  }
}

export default Request
