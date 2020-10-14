const Axios = require('axios')
Axios.interceptors.request.use(function (config) {
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
