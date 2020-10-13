var CryptoJS = require("crypto-js");
 
const secrtKey = 'belew'
// Encrypt
const encryptPwd = function(pwd){
   const encryption = CryptoJS.AES.encrypt(pwd,secrtKey).toString()
   return encryption
}

export default{
    encryptPwd
}