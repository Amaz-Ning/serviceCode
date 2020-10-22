const axios = require('axios')
function loginIn(userName, userPassword) {
    return axios.get('/api/users/login',{
        params: {
            userName,
            userPassword
        }
    })
}
module.exports = {
    loginIn
}
