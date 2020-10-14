// 表单验证函数
const validatePwd = (rule,value,callback) =>{
    if(value === ''){
        callback(new Error('密码不能为空'))
    }else{
        callback()
    }
}
const validatePhone = (rule,value,callback) =>{
    if(value === ''){
        callback(new Error('手机号码不能为空'))
    }else{
        if(!/^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(value)){
            callback('请输入正确的手机号') 
        }else{
            callback()
        }
    }
}
const validateEmail = (rule,value,callback) =>{
    if(value === ''){
        callback(new Error('邮箱不能为空'))
    }else{
        if(!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value)){
            callback('请输入正确的邮箱号') 
        }else{
            callback()
        }
    }
}
export {
   validatePwd,
   validatePhone,
   validateEmail
}