const axios = require('axios')
function loginIn(userName, userPassword) {
    return axios.get('http://42.192.134.212:9001/index',{
        // userName,
        // userPassword
    })
}
function register(userName, userPassword) {
    return axios.post('http://42.192.134.212:9001/users/register', {
        userName,
        userPassword
    })
}
module.exports = {
    loginIn,
    register
}
