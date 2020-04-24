const Axios = require('axios')
Axios.interceptors.request.use(function (config) {
  if (config.data.auth) {
    if (getCookies('auth')) {
      config['headers']['Authorization'] = getCookies('auth')
      delete config.data.auth
    } else {
      Vue.$router.push({ name: 'login' })
    }
  }
  return config
}, function (error) {
  return Promise.reject(error)
})
Axios.interceptors.response.use(response => {
  return response
}, error => {
  console.log(error)
  return Promise.reject(error)
}
)
export { Axios }
