
import Request from '../../utils/request/api'
import { longStackSupport } from 'q'
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
        },
        REMOVE_TOKEN(state){
            state.token = ''
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
        },
        // 登出逻辑
        logout({commit}){
            request.logout().then(res =>{
            debugger
            if(true){
                // 登出成功
                commit('REMOVE_TOKEN')
                return Promise.resolve(1)
            }else{
                //  登陆失败
                return Promise.resolve(2)
            }
            }).catch(err =>{
            //    网络异常
                return Promise.reject(err)
            })
        }
    }
}
export default login