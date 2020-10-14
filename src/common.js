var BASE_URL = ''
if(process.env.NODE_ENV=== 'development'){
  // mock地址、测试环境、线上、本地联调的时候可修改
    BASE_URL = 'http://127.0.0.1:7001'
}
if(process.env.NODE_ENV === 'production'){
    // 当服务器域名解析完成之后基本不用修改了
    BASE_URL =''
}
export default BASE_URL