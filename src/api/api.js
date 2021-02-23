const axios = require('axios')
function loginIn(userName, userPassword) {
    return axios.get('/api/login',{
        params: {
            userName,
            userPassword
        }
    })
}
function register(userName, userPassword) {
    return axios.post('/api/users/register', {
        userName,
        userPassword
    })
}
module.exports = {
    loginIn,
    register
}
