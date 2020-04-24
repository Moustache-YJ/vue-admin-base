
import Request from '../../utils/request/api'
const request  = new Request()
const login =  {
    namespaced:true,
    state:{
        // java的token的使用,之后开源需要自己改名字xss攻击预防
        // node后台的使用session不用本地参与
        token:""
    },
    mutations:{
        SET_TOKEN(state,value){
            state.token = value
        }
    },
    actions:{
        // 登陆逻辑处理
        login({commit},loginForm){
            request.login(loginForm).then(res =>{
            if(true){
                //    登陆成功
                commit('SET_TOKEN','I am login')
                // 如果有权限需要处理权限
                return Promise.resolve(1)
            }else{
                //  登陆失败
                return Promise.resolve(2)
            }
            }).catch(err =>{
            //    网络异常
                return Promise.reject(error)
            })
        }
    }
}
export default login