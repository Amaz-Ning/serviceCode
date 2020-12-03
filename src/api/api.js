const axios = require('axios')
function loginIn(userName, userPassword) {
    return axios.post('http://172.17.0.8:9001/users/login',{
        userName,
        userPassword
    })
}
function register(userName, userPassword) {
    return axios.post('http://172.17.0.8:9001/users/register', {
        userName,
        userPassword
    })
}
module.exports = {
    loginIn,
    register
}
