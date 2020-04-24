import { Axios } from './config'
class Http {
  request (params) {
    return new Promise((resolve, reject) => {
      Axios({
        method: params.method || 'post',
        url: params.url || '',
        data: params.data,
        params: params.params
      }).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
export default Http
